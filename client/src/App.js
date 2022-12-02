import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ItemContainer from "./components/ItemContainer";
import Login from "./components/Login";
import ItemDetails from "./components/ItemDetails";
import Signup from "./components/Signup";
//import ItemList from "./components/ItemList";
//import Login from "./components/Login";
//import FeaturedItems from "./components/FeaturedItems";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  //  const [visitedId, setVisitedId] = useState(undefined)
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          fetchItems();
        });
      }
    });
  }, []);

  function fetchItems() {
    fetch("/items")
      .then((res) => res.json())
      .then((items) => setItems(items));
  }

  const updateUser = (user) => setCurrentUser(user);
  return (
    <div className="start">
      <Router>
        <NavBar updateUser={updateUser}/>
        <Routes>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route
            exact
            path="login"
            element={<Login updateUser={updateUser} />}
          />
          <Route exact path="/" element={<Home items={items} />} />
          {/* <Route exact path="/all_items" element={<ItemContainer items={items}/>}/> */}
          <Route exact path="/item_details/:id" element={<ItemDetails />} />
          <Route
            exact
            path="/items/:category_key/:value"
            element={<ItemContainer />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
