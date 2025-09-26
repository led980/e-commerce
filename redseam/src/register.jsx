import HeaderUnlog from "./components/Header_not_logged";
function Register(){
    return (
        <div>
            <HeaderUnlog />
  <div class="loginpage">
    <div class="loginpic"></div>

    <div class="container">
      <div class="loginform">
        <h2 class="title">Registration</h2>

        <div class="profile-pic">
          <img src="https://i.pravatar.cc/250" alt="Profile Picture" />
          <div class="upload-links">
            <a href="#">Upload new</a> | <a href="#">Remove</a>
          </div>
        </div>

        <form>
          <div class="field">
            <input type="text" class="input" placeholder="Username *" required />
          </div>
          <div class="field">
            <input type="email" class="input" placeholder="Email *" required />
          </div>
          <div class="field">
            <input type="password" class="input" placeholder="Password *" required />
            <button type="button" class="toggle">👁</button>
          </div>
          <div class="field">
            <input type="password" class="input" placeholder="Confirm password *" required />
            <button type="button" class="toggle">👁</button>
          </div>

          <button type="submit" class="field">Register</button>
        </form>

        <div class="bottom">
          Already member? <a href="#">Log in</a>
        </div>
      </div>
    </div>
  </div>
  </div>
        )
    }
export default Register