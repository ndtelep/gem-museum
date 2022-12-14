import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ItemContainer from "./components/ItemContainer";
import Login from "./components/Login";
import ItemDetails from "./components/ItemDetails";
import Signup from "./components/Signup";
import NewItemForm from "./components/NewItemForm";
import UserPage from "./components/UserPage";
//import ItemList from "./components/ItemList";
//import Login from "./components/Login";
//import FeaturedItems from "./components/FeaturedItems";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  //  const [visitedId, setVisitedId] = useState(undefined)
  const [items, setItems] = useState([]);
  const [watchedItems, setWatchedItems] = useState([]);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
        });
      }
    });
  }, []);
  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    fetch(`/users/${currentUser.id}/watches`)
      .then((res) => res.json())
      .then((watches) => setWatchedItems(watches));
  }, [currentUser]);

  function fetchItems() {
    console.log("in fetch items");
    fetch("/items")
      .then((res) => res.json())
      .then((items) => {
        //need to check if the item is included in the current user's watched items
        setItems(items);
      });
  }
  console.log(items);
  const updateUser = (user) => setCurrentUser(user);

  console.log(currentUser);
  return (
    <div className="start">
      <Router>
        <NavBar updateUser={updateUser} currentUser={currentUser} />
        <Routes>
          <Route
            exact
            path="/signup"
            element={<Signup updateUser={updateUser} />}
          />
          <Route
            exact
            path="login"
            element={<Login updateUser={updateUser} />}
          />
          <Route exact path="/" element={<Home items={items} />} />
          <Route
            exact
            path="/item_details/:id"
            element={
              <ItemDetails
                currentUser={currentUser}
                setWatchedItems={setWatchedItems}
                watchedItems={watchedItems}
              />
            }
          />
          <Route
            exact
            path="/items/:category_key/:value"
            element={<ItemContainer />}
          />
          {currentUser && (
            <Route
              exact
              path="/newitem"
              element={<NewItemForm currentUser={currentUser} />}
            />
          )}
          {currentUser && (
            <Route
              exact
              path="/userpage"
              element={
                <UserPage
                  currentUser={currentUser}
                  watchedItems={watchedItems}
                />
              }
            />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
