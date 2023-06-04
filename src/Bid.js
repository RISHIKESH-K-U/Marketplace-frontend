import "./bid.css";
import Homepage from "./Home";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

const Bid = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [bid, setbid] = useState("");
  const [id, setid] = useState("");

  const BID = () => {
    Axios.post("http://localhost:3002/bid", {
      id: id,
      email: email,
      name: name,
      bid: bid,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="bid">
      <h1>ENTER DETAILS OF YOUR BID</h1>
      <form action="">
        <div className="name">
          <label htmlFor="">ENTER NAME</label>
          <input
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <label htmlFor="">ENTER EMAIL</label>
          <input
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className="name">
          <label htmlFor="">ENTER ITEM ID</label>
          <input
            type="text"
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
        </div>
        <div className="name">
          <label htmlFor="">ENTER BID</label>
          <input
            type="number"
            onChange={(e) => {
              setbid(e.target.value);
            }}
          />
        </div>
      </form>
      <Link to="/Home">
        <button class="bidbutton" onClick={BID}>
          SUBMIT
        </button>
      </Link>
    </div>
  );
};

export default Bid;
