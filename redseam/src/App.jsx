import Home from "./home.jsx"
import LogIn from "./login_and_reg/logIn.jsx"
import Register from "./login_and_reg/Register.jsx"
import HeaderUnlog from "./components/headers/Header_not_logged.jsx";
import { BrowserRouter, Router, Route, Routes} from "react-router-dom"
import HeaderLog from "./components/headers/header_logged.jsx";

function App() {
  return (
    <BrowserRouter>
    <HeaderLog />
    <main>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
    </BrowserRouter>
    );
}

export default App
