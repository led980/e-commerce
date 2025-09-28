import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import icon from "../../assets/profileicon.svg"
import "./header.css"
function HeaderUnlog() {
    return (
        <header className="header">
            <Link to="/">
                <p className="text"><img src={Logo} alt="logo" className="icon"></img> RedSeam Clothing</p>
            </Link>
            <div>
                <img src={icon} alt="profilepic" className="icon" />
                <Link className="log" to="/login">Log in</Link>
            </div>
        </header>
    )
}
export default HeaderUnlog