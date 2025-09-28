import { useState } from "react";
import { Link } from "react-router-dom";
import "./logreg.css"
function Register(){
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  return (
    <div className="body.register">
      <div className="loginpage">
        <div className="loginpic"></div>

        <div className="container">
          <div className="loginform">
            <h2 className="title">Registration</h2>

            <div className="profile-pic">
              <img src="https://i.pravatar.cc/250" alt="Profile Picture" />
              <div className="upload-links">
                <a href="#">Upload new</a> | <a href="#">Remove</a>
              </div>
            </div>

            <form>
              <div className="field">
                <input type="text" className="input" placeholder="Username *" required />
              </div>
              <div className="field">
                <input type="email" className="input" placeholder="Email *" required />
              </div>
              <div className="field">
                <input className="input" type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password *"
                  required
                />
                <button
                  className="toggle"
                  type="button"
                  onClick={togglePassword}
                >👁</button>
              </div>
              <div className="field">
                <input
                  className="input"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password *"
                  required
                />
                <button
                  type="button"
                  className="toggle"
                  onClick={toggleConfirmPassword}
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                  👁
                </button>
              </div>

              <button type="submit" className="field">Register</button>
            </form>

            <div className="bottom">
              Already member? <Link to="/login">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }
export default Register