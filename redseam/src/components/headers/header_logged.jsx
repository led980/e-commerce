import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Arow from "../../assets/arrow.svg";
import "./header.css";
import CartPopUp from "../order/cartpop.jsx";

function HeaderLog({ user, cartItems, onLogout, onRemove, onUpdateQuantity }) {
  const avatar = user?.profile_photo;

  return (
    <header className="header">
      <Link to="/">
        <p>
          <img src={Logo} alt="logo" className="icon" /> RedSeam Clothing
        </p>
      </Link>

      <div className="profile">
        {/* ✅ pass real cartItems + handlers */}
        <CartPopUp
          cartItems={cartItems}
          onRemove={onRemove}
          onUpdateQuantity={onUpdateQuantity}
        />
        <img src={avatar} className="avatar" alt="" />
        <img className="arrow" src={Arow} alt="" onClick={onLogout} />
        <p className="arrow">logout</p>
      </div>
    </header>
  );
}

export default HeaderLog;