import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product_page.css";

function ProductPage({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  // fetch product details
  useEffect(() => {
    fetch(`https://api.redseam.redberryinternship.ge/api/products/${id}`)// 👈 change to your API URL
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.cover_image);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;
  //add to cart handler
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please choose a size first!");
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity,
      image: product.cover_image,
    };

    onAddToCart(cartItem);
  };
  return (
    <div>
      <p className="text">Listing / Product</p>
      <div className="product-container">
        {/* Left: Images */}
        <div className="product-images">
          <div className="thumbnails">
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.name}
                  onClick={() => setMainImage(img)}
                  className={`thumbnail ${mainImage === img ? "active" : ""
                    }`}
                />
              ))}
          </div>
          <div className="main-image">
            <img src={mainImage} alt={product.name} />
          </div>
        </div>

        {/* Right: Details */}
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>

          {/* Color Picker */}
          <div className="colors">
            <h4 className="text2">Color: {selectedColor || "—"}</h4>
            <div className="color-options">
              {/* {product.colors &&
            product.colors.map((c, idx) => (
              <span
                key={idx}
                className={`color-circle ${selectedColor === c ? "active" : ""}`}
                style={{ backgroundColor: c }}
                onClick={() => setSelectedColor(c)}
              ></span>
            ))} */}
            </div>
          </div>

          {/* Sizes */}
          <div className="sizes">
            <h4 className="text2">Size: {selectedSize || "—"}</h4>
            <div className="size-options">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="quantity">
            <h4 className="text2">Quantity</h4>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          <button
            className="add-to-cart"
            onClick={() =>
              onAddToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: mainImage,
                color: selectedColor,
                size: selectedSize,
                quantity,
              })
            }
          >
            Add to cart
          </button>

          <div className="details">
            <h4>Details</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;