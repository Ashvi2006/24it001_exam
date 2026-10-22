

import FoodCard from "../components/FoodCard";

function Home() {
  return (
    <main className="page">
      <div className="hero">
        <p className="eyebrow">GOOD FOOD, GOOD MOOD</p>
        <h2>Welcome to QuickByte</h2>
        <p>Fresh food, fast delivery, happy moments!</p>
      </div>

      <h2>Customer Favourites</h2>

      <div className="food-grid">
        <FoodCard
          name="Classic Burger"
          description="Fresh burger with cheese and vegetables."
          price={149}
          badge="Bestseller"
          available={true}
        />

        <FoodCard
          name="Veg Pizza"
          description="Cheesy pizza with fresh toppings."
          price={199}
          badge="Popular"
          available={true}
        />

        <FoodCard
          name="Cold Coffee"
          description="Chilled and creamy cold coffee."
          price={99}
          badge="Sold Out"
          available={false}
        />
      </div>
    </main>
  );
}

export default Home;
