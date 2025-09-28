import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Arow from "../../assets/arrow.svg";
import "./header.css";
import CartPopUp from "../order/cartpop.jsx";

function HeaderLog({ user, onLogout }) {
  const avatar = user?.profile_photo ;
  const cartItems = [];
  return (
    <header className="header">
      <Link
        to="/"
        onClick={() => {
          setCurrentPage(1);
          setPriceFilter({ from: "", to: "" });
          setSortOrder("");
        }}
      >
        <p className="text">
          <img src={Logo} alt="logo" className="icon" /> RedSeam Clothing
        </p>
      </Link>

      <div className="profile">
        <CartPopUp cartItems={cartItems} />
        <img src={avatar} className="avatar" alt="" />
        {/* ✅ Call onLogout passed from App */}
        <img className="arrow" src={Arow} alt="" onClick={onLogout} />
        <p className="arrow">logout</p>
      </div>
    </header>
  );
}

export default HeaderLog;