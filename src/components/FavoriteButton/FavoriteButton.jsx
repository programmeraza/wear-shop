import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./FavoriteButton.scss";

const FavoriteButton = ({ favoritesCount }) => {
  const [isHeartActive, setIsHeartActive] = useState(false);

  return (
    <Link to="/favorite" className="fav__btn" onClick={() => setIsHeartActive(!isHeartActive)}>
      {isHeartActive ? <FaHeart /> : <FaRegHeart />}{" "}
      {favoritesCount > 0 && `${favoritesCount}`}
    </Link>
  );
};

export default FavoriteButton;
