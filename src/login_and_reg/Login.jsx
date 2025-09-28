import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./logreg.css";

function LogIn({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://api.redseam.redberryinternship.ge/scalar#tag/authentication/post/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, }),
        }
      );
      
      if (!res.ok) {
        throw new Error("Login failed");
      }

      // ✅ define data here (inside try block)
      const data = await res.json();

      // ✅ only use data inside this block
      onLogin(data.token); // tell App we’re logged in
      navigate("/"); // go to home
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <main className="content">
      <div className="loginpage">
        <div className="loginpic" />
        <div className="container">
          <div className="loginform">
            <h2 className="title">Log in</h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <input
                  className="input"
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="toggle"
                  type="button"
                  onClick={togglePassword}
                >
                  👁
                </button>
              </div>
              <button type="submit" className="field">Log in</button>
              <div className="bottom">
                Not a member? <Link to="/register">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LogIn;
