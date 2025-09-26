import Logo from "../assets/logo.svg"
import icon from "../assets/profileicon.svg"
function HeaderUnlog(){
    return(
        <header className="header">
            <p className="text"><img src={Logo} alt="logo" className="icon"></img> RedSeam Clothing</p>
            <div>
                <img src={icon} alt="profilepic" className="icon"/>
                <a className="log" href="">Log in</a>
            </div>
        </header>
    )
}
export default HeaderUnlog