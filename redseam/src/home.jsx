import { useEffect, useState } from "react";
import ProductCard from "./components/product_card.jsx";
import FilterDropdown from "./components/filter_dropdown.jsx";
import HeaderLog from "./components/header_logged.jsx";
import SortDropdown from "./components/sort_dropdown/sort.jsx";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://api.redseam.redberryinternship.ge/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);
  if (loading) return <div>Loading...</div>;
  if (!products.length) return <div>No products found.</div>;

  return (
    <div>
      <HeaderLog />
      <div className="products-header">
        <h1 className="products-title">Products</h1>

        <div className="products-actions">
          <span className="results-text">Showing 1–10 of 100 results</span>
          <FilterDropdown />
          <SortDropdown />
        </div>
      </div>
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.name}
          price={product.price}
          image={product.cover_image}
        />
      ))}
    </div>
    </div>
  );
};

export default Home; 
