import React, { useState } from "react";
import "./checkout.css";
import SuccessModal from "../order/success";

const CheckoutPage = ({ cartItems, onUpdateQuantity, onRemove, onClearCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = subtotal > 0 ? 5 : 0;
  const total = subtotal + delivery;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.zip) newErrors.zip = "Zip code is required";
    return newErrors;
  };

  const handlePay = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
      setErrors({});
      setShowSuccess(true);
      if (typeof onClearCart === "function") onClearCart();
  };

  return (
    <div className="checkout-container">
      {/* Left: Order Form */}
      <div className="checkout-form">
        <h2>Checkout</h2>
        <form className="form" onSubmit={handlePay}>
          <fieldset className="fieldset">
            <legend className="legend">Order details</legend>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
              />
              {errors.surname && <span className="error">{errors.surname}</span>}
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="📧 Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-row">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span className="error">{errors.address}</span>}

              <input
                type="text"
                name="zip"
                placeholder="Zip code"
                value={formData.zip}
                onChange={handleChange}
              />
              {errors.zip && <span className="error">{errors.zip}</span>}
            </div>
          </fieldset>
        </form>
      </div>

      {/* Right: Cart Summary */}
      <div className="checkout-summary">
        <div className="summary-items">
          {cartItems.map((item, index) => (
            <div key={index} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p className="summary-name">{item.name}</p>
                <p className="summary-meta">
                  {item.color} | {item.size}
                </p>
                <div className="summary-qty">
                  <button
                    onClick={() =>
                      onUpdateQuantity(item, Math.max(1, item.quantity - 1))
                    }
                    disabled={item.quantity <= 1}
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item, item.quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="summary-price">
                <p>${item.price * item.quantity}</p>
                <button className="remove-btn" onClick={() => onRemove(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="summary-totals">
          <p>
            Items subtotal <span>${subtotal}</span>
          </p>
          <p>
            Delivery <span>${delivery}</span>
          </p>
          <p className="summary-total">
            Total <span>${total}</span>
          </p>
        </div>

        <button className="pay-btn" onClick={handlePay}>
          Pay
        </button>
          </div>

          {showSuccess && (
              <SuccessModal
                  isOpen={showSuccess}
                  onClose={() => setShowSuccess(false)}
              />
          )}
    </div>
  );
};

export default CheckoutPage;