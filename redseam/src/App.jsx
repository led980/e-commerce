import { useState, useEffect } from "react";import Home from "./home.jsx"
import LogIn from "./login_and_reg/Login.jsx";
import Register from "./login_and_reg/Register.jsx"
import HeaderUnLog from "./components/headers/Header_not_logged.jsx";
import HeaderLog from "./components/headers/header_logged.jsx";
import { BrowserRouter, Router, Route, Routes} from "react-router-dom"
import ProductPage from "./productpage/product_page.jsx";
function App() {
    // ✅ Add to cart
    const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );
      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  // ✅ Remove item
  const handleRemove = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ Update qty
  const handleUpdateQuantity = (product, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id &&
        item.size === product.size &&
        item.color === product.color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState(null);
  // check token on page load
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogin = (token, user) => {
    localStorage.setItem("token", token);
    setUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
  localStorage.removeItem("token");
  setIsLoggedIn(false);
};
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <HeaderLog
          user={user}
          cartItems={cartItems}
          onRemove={handleRemove}
          onUpdateQuantity={handleUpdateQuantity}
          onLogout={handleLogout}
        />
      ) : (
        <HeaderUnLog />
      )}
    <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LogIn onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products/:id"
            element={<ProductPage onAddToCart={handleAddToCart} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
