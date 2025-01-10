import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Cards.scss";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const SkeletonCard = () => (
  <div className="product__card skeleton">
    <div className="product__image skeleton__image"></div>
    <h2 className="product__name skeleton__text"></h2>
    <p className="product__text skeleton__text"></p>
    <p className="product__price skeleton__text"></p>
    <p className="product__stock skeleton__text"></p>
  </div>
);

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]); // Список избранных товаров

  // Загрузка данных из localStorage при монтировании компонента
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Сохранение избранных товаров в localStorage при изменении списка
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    axios
      .get("http://localhost:7777/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.id === product.id)) {
        // Если продукт уже в избранном, удаляем его
        return prevFavorites.filter((fav) => fav.id !== product.id);
      } else {
        // Если продукта нет в избранном, добавляем его
        return [...prevFavorites, product];
      }
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...savedCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="product">
      <div className="container">
        <div className="product__wrapper">
          <div className="product__search">
            <h1>Все товары</h1>
            <input
              type="search"
              placeholder="Поиск..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="product__cards">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : filteredProducts.map((product) => (
                  <div className="product__card" key={product.id}>
                    <button
                      className="favorite-btn"
                      onClick={() => toggleFavorite(product)}
                    >
                      {favorites.find((fav) => fav.id === product.id) ? (
                        <MdFavorite />
                      ) : (
                        <MdFavoriteBorder />
                      )}
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product__image"
                    />
                    <h2 className="product__name">{product.name}</h2>
                    <p className="product__text">{product.text}</p>
                    <p className="product__price">{product.price}</p>
                    <p
                      className={`product__stock ${
                        product.inStock ? "in-stock" : "out-of-stock"
                      }`}
                    >
                      {product.inStock ? "В наличии" : "Нет в наличии"}
                    </p>
                    <button onClick={() => addToCart(product)} className="product__card-btn">Добавить</button>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
