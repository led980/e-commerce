import HeaderUnlog from "./components/Header_not_logged";
function LogIn(){
    return (
        <div>
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
                            <input className="input" type="password" id="password" placeholder="Password *" />
                            <button className="toggle" /*type="button" onclick="togglePassword()"*/>👁</button>
                        </div>
                            <button className="field">Log in</button>
                        <div className="bottom">
                            Not a member?<a href="#">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
export default LogIn