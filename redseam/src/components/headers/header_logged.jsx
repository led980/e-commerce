import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import Arow from "../../assets/arrow.svg"
import "./header.css"
import CartPopUp from "../order/cartpop.jsx"
function HeaderLog() {
    const cartItems = [];
    return (

        <header className="header">
            <Link to="/"
                onClick={() => {
                    setCurrentPage(1);
                    setPriceFilter({ from: "", to: "" });
                    setSortOrder("");
                }}>
                <p className="text"><img src={Logo} alt="logo" className="icon"></img> RedSeam Clothing</p>
            </Link>
            <div className="profile">
                <CartPopUp cartItems={cartItems} />
                <img src="https://i.pravatar.cc/250" className="avatar" alt="" />
                <img src={Arow} alt="" />
            </div>
        </header>
    )
}
export default HeaderLog
