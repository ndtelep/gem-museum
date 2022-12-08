import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

function UserPage({ currentUser, watchedItems }) {
  const [userItems, setUserItems] = useState([]);
  // const [userWatchedItems, setUserWatchedItems] = useState([]);

  useEffect(() => {
    fetch(`/user_items/${currentUser.id}`)
      .then((res) => res.json())
      .then((userItems) => setUserItems(userItems));
  }, [currentUser]);

  // useEffect(() => {
  //   fetch(`/users/${currentUser.id}/watches`)
  //     .then((res) => res.json())
  //     .then((watches) => setUserWatchedItems(watches));
  // }, [currentUser]);

  return (
    <div>
      {" "}
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7"></div>
          <div class="col-lg-5">
            <h1 class="is-size-2 has-text-weight-bold has-text-primary">
              <span>{currentUser.username}</span>'s collection
            </h1>
            <h3 class="is-size-3 is-italic has-text-centered">
              Your collected items
            </h3>
            <div>
              <ItemList items={userItems} />
            </div>
            <h3 class="is-size-3 is-italic has-text-centered">
              Your watched items
            </h3>
            <div>
              <ItemList items={watchedItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
