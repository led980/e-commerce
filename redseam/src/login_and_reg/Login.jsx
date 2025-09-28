import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./logreg.css"
function LogIn() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

return (
    <main className="content">
    <div className="body.register">
        <div className="loginpage" >
            <div className="loginpic" />
            <div className="container">
                <div className="loginform">
                    <h2 className="title">Log in</h2>
                    <form>
                    <div className="field">
                        <input className="input" type="email" placeholder="Email *" required/>
                    </div>
                    <div className="field">
                        <input
                            className="input"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password *"
                            required
                        />
                        <button
                            className="toggle"
                            type="button"
                            onClick={togglePassword}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            👁
                        </button>
                    </div>
                    <button className="field">Log in</button>
                    <div className="bottom">
                        Not a member?<Link to="/register">Register</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </main>
);
}
export default LogIn;