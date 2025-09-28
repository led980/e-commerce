import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cartpop.css";
import cart from "../../assets/shoppingcart.svg";
import ShoppingCartBig from "../../assets/shoppingcartbig.png";

const CartPopUp = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // prevent scrollbar
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }
  };

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
                <img src={ShoppingCartBig} className=""></img>
                <h4>Ooops!</h4>
                <p>You've got nothing in your cart just yet…</p>
                <Link to="/"
                  onClick={() => {
                    setCurrentPage(1);
                    setPriceFilter({ from: "", to: "" });
                    setSortOrder("");
                  }}>
                  <button className="start-btn">Start shopping</button></Link>
              </div>
            ) : (
              <div>
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;