import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bid from "./Bid";
import New from "./New";
import Delete from "./Delete";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bid" element={<Bid />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/New" element={<New />} />
            <Route path="/Delete" element={<Delete />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
