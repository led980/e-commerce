import HeaderUnlog from "./components/Header_not_logged.jsx"
import HeaderLog from "./components/header_logged.jsx"
import LogIn from "./login.jsx"
import Register from "./register.jsx" 
import ProductCard from "./home.jsx";
import FilterDropdown from "./components/filter_dropdown.jsx";
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
