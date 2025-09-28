import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./logreg.css";
import blankAvatar from "../assets/blank-user.svg";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState({blankAvatar});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profile_photo, setProfilePhoto] = useState(blankAvatar);
  const navigate = useNavigate();
  

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePhoto(url);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ first line to stop native reload

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirmation: passwordConfirm,
          profile_photo
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Registration failed");
      }
      const data = await res.json();
      console.log("✅ Registration success:", data);
      alert("Registration successful! Please log in.");
      navigate("/login"); // ✅ stay in SPA, no page reload
    } catch (err) {
      console.error("❌ Registration error:", err);
      alert(err.message);
    }
  };

  return (
    <div className="loginpage">
      <div className="loginpic"></div>
      <div className="container">
        <div className="loginform">
          <h2 className="title">Registration</h2>

          <div className="profile-pic">
            <img src={profile_photo} alt="Profile" />
            <div className="upload-links">
              <label>
                Upload new
                <input type="file" accept="image/*" onChange={handleAvatarUpload} hidden />
              </label>
              {" | "}
              <button type="button" >Random</button>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>   {/* ✅ no action/method attributes */}
            <div className="field">
              <input
                type="text"
                className="input"
                placeholder="Username *"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <input
                type="email"
                className="input"
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

            <div className="field">
              <input
                className="input"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password *"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
              <button
                className="toggle"
                type="button"
                onClick={toggleConfirmPassword}
              >
                👁
              </button>
            </div>

            <button type="submit" className="field">Register</button>  {/* ✅ must be type="submit" */}
          </form>

          <div className="bottom">
            Already member? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;