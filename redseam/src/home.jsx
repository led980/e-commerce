import { useEffect, useState } from "react";
import "./index.css"
import { Link } from "react-router-dom";
import ProductCard from "./components/product_card.jsx";
import FilterDropdown from "./components/filter/filter_dropdown.jsx";
import SortDropdown from "./components/sort_dropdown/sort.jsx";
import Pagination from "./components/pagination/pagination.jsx"
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState({ from: "", to: "" });
  const [sortOrder, setSortOrder] = useState(""); //  asc | desc
  // Handle price filtering
  const handleFilterApply = ({ from, to }) => {
    setPriceFilter({ from, to });
    setCurrentPage(1);
  };
  // handle sort callback
const handleSortChange = (order) => {
  setSortOrder(order);
  setCurrentPage(1); // reset pagination
};

// Fetch all products from all pages (1 to 10)
  useEffect(() => {
    setLoading(true);
    const fetches = [];
    for (let page = 1; page <= 10; page++) {
      fetches.push(
        fetch(`/api/products?page=${page}`)
          .then(res => res.json())
          .then(data => data.data)
      );
    }
    Promise.all(fetches)
      .then(results => {
        // Flatten the array of arrays
        const allProducts = results.flat();
        setProducts(allProducts);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [currentPage]);
  if (loading) return <div>Loading...</div>;
  if (!products.length) return <div>No products found.</div>;


  // Apply price filtering
  let filteredProducts = products.filter(product => {
    const price = Number(product.price);
    const from = priceFilter.from ? Number(priceFilter.from) : -Infinity;
    const to = priceFilter.to ? Number(priceFilter.to) : Infinity;
    return price >= from && price <= to;
  });

    // sort logic
if (sortOrder === "low-to-high") {
  filteredProducts = [...filteredProducts].sort(
    (a, b) => Number(a.price) - Number(b.price)
  );
} else if (sortOrder === "high-to-low") {
  filteredProducts = [...filteredProducts].sort(
    (a, b) => Number(b.price) - Number(a.price)
  );
} else if (sortOrder === "new") {
  filteredProducts = [...filteredProducts].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
}

  // Pagination logic
  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Changed to page:", page);
  };
  const productsPerPage = 10;
  const startIdx = (currentPage - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // filter products for current page
  const paginatedProducts = filteredProducts.slice(startIdx, endIdx);
  return (
    <div>
      <div className="products-header">
        <h1 className="products-title">Products</h1>

        <div className="products-actions">
          <span className="results-text">Showing {startIdx}-{filteredProducts.length} of {filteredProducts.length} results</span>
          <FilterDropdown onApply={handleFilterApply} />
          <SortDropdown onSortChange={handleSortChange} />
        </div>
      </div>
      <div className="products-grid">
        {paginatedProducts.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            image={product.cover_image}
          />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;