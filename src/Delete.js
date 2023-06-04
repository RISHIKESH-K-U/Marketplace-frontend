import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Delete.css";

const Delete = () => {
  const [dname, setdname] = useState("");
  const [dsid, setdsid] = useState("");
  const [ditemid, setditemid] = useState("");

  const deleteitem = () => {
    Axios.post("http://localhost:3002/delete", {
      id1: ditemid,
      id2: dsid,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="delete">
      <h1>DELETE ITEM FROM MARKETPLACE</h1>
      <div className="deleteitemform">
        <form action="">
          <div className="name">
            <label htmlFor="">ENTER NAME</label>
            <input
              type="text"
              onChange={(e) => {
                setdname(e.target.value);
              }}
            />
          </div>
          <div className="sellerid">
            <label htmlFor="">SELLER ID</label>
            <input
              type="text"
              onChange={(e) => {
                setdsid(e.target.value);
              }}
            />
          </div>
          <div className="itemid">
            <label htmlFor="">ITEM ID</label>
            <input
              type="text"
              onChange={(e) => {
                setditemid(e.target.value);
              }}
            />
          </div>
        </form>
        <Link to="/Home">
          <button class="deleteitembutton" onClick={deleteitem}>
            SUBMIT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Delete;
