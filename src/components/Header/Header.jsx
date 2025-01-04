import React, { useState } from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegUser, FaUserAlt } from "react-icons/fa";

const Header = () => {
    
  const [isCartActive, setIsCartActive] = useState(false);
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isUserActive, setIsUserActive] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo-flex">
            <img src="/logo.png" alt="logo" />
            <div className="header__logo-content">
              <h1>Red Clothes</h1>
              <p>Магазин одежды для практики</p>
            </div>
          </div>
          <ul className="header__nav">
            <Link
              className="header__link"
              onClick={() => setIsCartActive(!isCartActive)}
            >
              {isCartActive ? <RiShoppingCartFill /> : <RiShoppingCart2Line />}
            </Link>
            <Link
              className="header__link"
              onClick={() => setIsHeartActive(!isHeartActive)}
            >
              {isHeartActive ? <FaHeart /> : <FaRegHeart />}
            </Link>
            <Link
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
