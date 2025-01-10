import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Favorite.scss";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites-page">
      <div className="container">
        <h1>Избранные товары</h1>
        {favorites.length === 0 ? (
          <p>Нет избранных товаров</p>
        ) : (
          <div className="favorites__cards">
            {favorites.map((favorite) => (
              <div className="product__card" key={favorite.id}>
                <img
                  src={favorite.image}
                  alt={favorite.name}
                  className="product__image"
                />
                <h2 className="product__name">{favorite.name}</h2>
                <p className="product__text">{favorite.text}</p>
                <p className="product__price">{favorite.price}</p>
                <p
                  className={`product__stock ${
                    favorite.inStock ? "in-stock" : "out-of-stock"
                  }`}
                >
                  {favorite.inStock ? "В наличии" : "Нет в наличии"}
                </p>
              </div>
            ))}
          </div>
        )}
        <Link to="/">
          <button className="back-btn">Назад к товарам</button>
        </Link>
      </div>
    </div>
  );
};

export default Favorite;
