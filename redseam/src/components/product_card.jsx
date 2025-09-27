const ProductCard = ({ id, title, price, image }) => {
  return (
    <div className="product-card" key={id}>
      <img className="product-image" src={image} alt={title}/>
      <h2 className="product-title" >{title}</h2>
      <p className="product-price">${price}</p>
    </div>
  );
};
export default ProductCard;