import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cartpop.css";
import cart from "../../assets/shoppingcart.svg";
import ShoppingCartBig from "../../assets/shoppingcartbig.png";

const CartPopUp = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // prevent scrollbar
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }
  };

  // subtotal calculation
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = subtotal > 0 ? 5 : 0;

  return (
    <div>
      {/* Cart Icon */}
      <button className="cart-icon" onClick={toggleCart}>
        <img src={cart} alt="cart" className="cart-icon" />
      </button>

      <div>
        {/* Overlay */}
        {isOpen && <div className="cart-overlay" onClick={toggleCart}></div>}

        {/* Cart Popup */}
        <div className={`cart-popup ${isOpen ? "open" : ""}`}>
          <div className="cart-header">
            <h3>Shopping cart ({cartItems.length})</h3>
            <button className="close-btn" onClick={toggleCart}>
              ✕
            </button>
          </div>

          <div className="cart-content">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <img src={ShoppingCartBig} alt="empty cart" />
                <h4>Ooops!</h4>
                <p>You've got nothing in your cart just yet…</p>
                <Link to="/">
                  <button className="start-btn">Start shopping</button>
                </Link>
              </div>
            ) : (
              <>
                {/* Items */}
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-info">
                      <p className="item-name">{item.name}</p>
                      <p className="item-meta">
                        {item.color} | {item.size}
                      </p>
                      <div className="item-qty">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-price">
                      <span>${item.price * item.quantity}</span>
                      <button
                        className="remove-btn"
                        onClick={() => onRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                {/* Summary */}
                <div className="cart-summary">
                  <p>
                    Items subtotal <span>${subtotal}</span>
                  </p>
                  <p>
                    Delivery <span>${delivery}</span>
                  </p>
                  <p className="total">
                    Total <span>${subtotal + delivery}</span>
                  </p>
                </div>

                {/* Checkout */}
                <button className="checkout-btn">Go to checkout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;