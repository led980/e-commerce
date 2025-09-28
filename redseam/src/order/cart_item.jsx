import React from "react";
import "./cartpop.css";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>{item.color}</p>
        <p>{item.size}</p>

        <div className="cart-item-actions">
          <button
            onClick={() => onUpdateQuantity(item, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            –
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item, item.quantity + 1)}
          >
            +
          </button>
          <button
            className="remove-btn"
            onClick={() => onRemove(item)}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="cart-item-price">${item.price}</div>
    </div>
  );
};

export default CartItem;