import React, { useEffect, useState } from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { FaRegUser, FaUserAlt } from "react-icons/fa";
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const Header = () => {
  const [isCartActive, setIsCartActive] = useState(false);
  const [isUserActive, setIsUserActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(savedCart.length);
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to={'/'} className="header__logo-flex">
            <img src="/logo.png" alt="logo" />
            <div className="header__logo-content">
              <h1>Red Clothes</h1>
              <p>Магазин одежды для практики</p>
            </div>
          </Link>
          <ul className="header__nav">
            <Link
              to={'/cart'}
              className="header__link"
              onClick={() => setIsCartActive(!isCartActive)}
            >
              {isCartActive ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
              {cartCount > 0 && <span className="header__cart-count">{cartCount}</span>}
            </Link>
            <FavoriteButton />
            <Link
              to={'/login'}
              className="header__link"
              onClick={() => setIsUserActive(!isUserActive)}
            >
              {isUserActive ? <FaUserAlt /> : <FaRegUser />}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
