import Logo from "../assets/logo.svg"
import cart from "../assets/shoppingcart.svg"
import Arow from "../assets/arrow.svg"
function HeaderLog(){
    return(
        <header className="header">
            <p className="text"><img src={Logo} alt="logo" className="icon"></img> RedSeam Clothing</p>
            <div className="profile" >
                <img src={cart} alt="cart" className="icon"/>
                <img src="https://i.pravatar.cc/250" className="avatar" alt="" />
                <img src={Arow} alt="" />
            </div>
        </header>
    )
}
export default HeaderLog
