
function FoodCard({ name, description, price, badge, available }) {
  return (
    <article className="food-card">
      <div className="food-image">🍔</div>

      <div className="food-content">
        <span className={`badge ${available ? "available" : "unavailable"}`}>
          {badge}
        </span>

        <h3>{name}</h3>
        <p>{description}</p>
        <h4>₹{price}</h4>

        {available ? (
          <button
            className="order-button"
            onClick={() => alert(`${name} added to cart!`)}
          >
            Add to Cart
          </button>
        ) : (
          <button className="order-button" disabled>
            Currently Unavailable
          </button>
        )}
      </div>
    </article>
  );
}

export default FoodCard;
