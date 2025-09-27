import React, { useState } from "react";
import HeaderUnlog from "../components/headers/Header_not_logged";
import "./logreg.css"
function LogIn() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

return (
    
    <div className="body.login">
        <HeaderUnlog />
        <div className="loginpage" >
            <div className="loginpic" />
            <div className="container">
                <div className="loginform">
                    <h2 className="title">Log in</h2>
                    <div className="field">
                        <input className="input" type="email" placeholder="Email *" />
                    </div>
                    <div className="field">
                        <input
                            className="input"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password *"
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
                        Not a member?<a href="#">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
export default LogIn;