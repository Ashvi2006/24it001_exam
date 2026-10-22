
import FoodCard from "../components/FoodCard";

function Menu() {
  return (
    <main className="page">
      <h2>Our Menu</h2>
      <p>Explore our delicious food collection.</p>

      <div className="food-grid">
        <FoodCard
          name="Cheese Sandwich"
          description="Grilled sandwich with melted cheese."
          price={119}
          badge="Vegetarian"
          available={true}
        />

        <FoodCard
          name="French Fries"
          description="Crispy golden potato fries."
          price={89}
          badge="Popular"
          available={true}
        />

        <FoodCard
          name="Chocolate Shake"
          description="Rich and creamy chocolate shake."
          price={129}
          badge="Sold Out"
          available={false}
        />
      </div>
    </main>
  );
}

export default Menu;
