import React, { useState , useEffect }from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./components/NavBar";
// import ItemList from './components/ItemList';
import ItemContainer from "./components/ItemContainer";
//import Login from "./components/Login";

function App() {
  //  const [currentUser, setCurrentUser] = useState({})
  //  const [visitedId, setVisitedId] = useState(undefined)
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((items) => setItems(items));
  }, []);

  return (
    <div className="start">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={
          <ItemList />
        }/> */}
        </Routes>
      </Router>
      <ItemContainer items={items}/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
