import "./New.css";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const New = () => {
  const [sname, setsname] = useState("");
  const [stitle, setstitle] = useState("");
  const [sid, setsid] = useState("");
  const [sdesc, setsdesc] = useState("");
  const [sphoto, setsphoto] = useState("");

  const newitem = () => {
    Axios.post("http://localhost:3002/new", {
      name: sname,
      title: stitle,
      id: sid,
      desc: sdesc,
      photo: sphoto,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="new">
      <h1>ADD A NEW ITEM TO MARKETPLACE</h1>
      <div className="additem">
        <form action="" class="itemform">
          <div className="seller">
            <label htmlFor="">SELLER NAME</label>
            <input
              type="text"
              onChange={(e) => {
                setsname(e.target.value);
              }}
            />
          </div>
          <div className="sid">
            <label htmlFor="">SELLER ID</label>
            <input
              type="text"
              onChange={(e) => {
                setsid(e.target.value);
              }}
            />
          </div>
          <div className="title">
            <label htmlFor="">TITLE</label>
            <input
              type="text"
              onChange={(e) => {
                setstitle(e.target.value);
              }}
            />
          </div>
          <div className="desc">
            <label htmlFor="">DESCRIPTION</label>
            <input
              type="text"
              onChange={(e) => {
                setsdesc(e.target.value);
              }}
            />
          </div>
          <div className="photo">
            <label htmlFor="">PHOTO URL</label>
            <input
              type="text"
              onChange={(e) => {
                setsphoto(e.target.value);
              }}
            />
          </div>
        </form>
        <Link to="/Home">
          <button class="additembutton" onClick={newitem}>
            SUBMIT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default New;
