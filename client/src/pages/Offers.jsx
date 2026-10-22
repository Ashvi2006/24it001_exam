
import FoodCard from "../components/FoodCard";

function Offers() {
  return (
    <main className="page">
      <h2>Special Offers</h2>
      <p>Enjoy your favourite food at special prices.</p>

      <div className="food-grid">
        <FoodCard
          name="Burger Combo"
          description="Classic burger with crispy fries."
          price={199}
          badge="20% OFF"
          available={true}
        />

        <FoodCard
          name="Pizza Combo"
          description="Delicious pizza with a refreshing drink."
          price={249}
          badge="Best Deal"
          available={true}
        />

        <FoodCard
          name="Family Meal"
          description="A special meal for the whole family."
          price={499}
          badge="Limited"
          available={false}
        />
      </div>
    </main>
  );
}

export default Offers;
