import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";
import Bid from "./Bid";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/home")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="home">
      <h1 class="marketplaceheader">MARKETPLACE</h1>
      <div className="buttons">
        <Link to="/New">
          {" "}
          <button class="addbutton">+</button>
        </Link>
        <Link to="/Delete">
          {" "}
          <button class="deletebutton">-</button>
        </Link>
      </div>

      <div className="container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.title}</h2>
            <p>Item ID : {item.id}</p>
            <p>{item.description}</p>
            <p>Seller : {item.seller}</p>
            <img src={item.photo} alt="Item Photo" />
            <hr />
            <p>Current Price : {item.bid}</p>
            <Link to="/Bid">
              <button>BID</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
