import Logo from "../assets/logo.svg"
import icon from "../assets/profileicon.svg"
function HeaderUnlog(){
    return(
        <header className="header">
            
            <p className="text"><img src={Logo} alt="logo" className="icon"></img> RedSeam Clothing</p>
            <a className="text" href="">
                <img src={icon} alt="profilepic" className="icon"/>
                Log in
            </a>
        </header>
    )
}
export default HeaderUnlog