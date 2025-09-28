import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams(); // product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
  fetch(`/api/products/${id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data);
      setMainImage(data.cover_image);
      setLoading(false);
    })
    .catch(err => {
      console.error("Error fetching product:", err);
      setLoading(false);
    });
}, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      {/* Images */}
      <div className="images-section">
        <div className="thumbnails">
          {[product.cover_image, ...product.images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="thumbnail"
              className={`thumb ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={mainImage} alt={product.name} />
        </div>
      </div>

      {/* Info */}
      <div className="info">
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>

        <div className="actions">
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;