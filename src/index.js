
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import photos1 from "./pizzas/funghi.jpg";
import photos2 from "./pizzas/prosciutto.jpg";
import photos3 from "./pizzas/spinaci.jpg";
import photos4 from "./pizzas/salamino.jpg";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const styles = {};
  return (
    <header className="header">
      <h1 style={styles}>Fast React Pizza.co</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Grape!"
        photoName={photos1}
        ingredients={pizzaData[0].ingredients}
        price="13"
      />
      <Pizza
        name="Pizza Spinaccci"
        photoName={photos2}
        ingredients={pizzaData[1].ingredients}
        price="15"
      />
      <Pizza
        name="Pizza Pepperoni"
        photoName={photos3}
        ingredients={pizzaData[2].ingredients}
        price="20"
      />
      <Pizza
        name="Pizza Funghi"
        photoName={photos4}
        ingredients={pizzaData[3].ingredients}
        price="40"
      />
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are Open until {closeHour} : 00 check later or order online now
          </p>
          <button className="btn">Order Now!</button>
        </div>
      ) : (
        <p>
          We are happy to have you between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
