import HeaderUnlog from "./components/headers/Header_not_logged.jsx"
import HeaderLog from "./components/headers/header_logged.jsx"
import LogIn from "./login and reg/Login.jsx"
import Register from "./login and reg/Register.jsx" 
import ProductCard from "./home.jsx";
import FilterDropdown from "./components/filter/filter_dropdown.jsx";
import Home from "./home.jsx"
function App() {
  const handleFilterApply = (price) => {
    console.log("Applied filter:", price);
  };
  return(
    
    <main>
      <Home />
    </main>
  )
}

export default App
