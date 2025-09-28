import { useState, useEffect } from "react";import Home from "./home.jsx"
import LogIn from "./login_and_reg/Login.jsx";
import Register from "./login_and_reg/Register.jsx"
import HeaderUnLog from "./components/headers/Header_not_logged.jsx";
import HeaderLog from "./components/headers/header_logged.jsx";
import { BrowserRouter, Router, Route, Routes} from "react-router-dom"
import ProductDetails from "./components/product_page.jsx";

function App() {
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
    {isLoggedIn ? <HeaderLog user={user} onLogout={handleLogout} />: <HeaderUnLog />}
    <main>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="/login" element={<LogIn onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </main>
    </BrowserRouter>
    );
}

export default App
