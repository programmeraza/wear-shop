import React, { useState, useEffect } from 'react';
import "./Cart.scss";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    }, []);

    const removeFromCart = (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
<div className="cart">
      <div className="container">
        <h1>Корзина</h1>
        {cart.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          <div className="cart__items">
            {cart.map((item) => (
              <div key={item.id} className="cart__item">
                <img src={item.image} alt={item.name} className="cart__image" />
                <div className="cart__details">
                  <h2>{item.name}</h2>
                  <p>{item.price} ₽</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <h2>Итого: {totalPrice} ₽</h2>
      </div>
    </div>
  );
};

export default Cart;
