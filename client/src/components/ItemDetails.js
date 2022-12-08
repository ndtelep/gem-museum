import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";

function ItemDetails({ currentUser, watchedItems, setWatchedItems }) {
  const [selectedItem, setSelectedItem] = useState({ user: {} });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/items/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedItem(data));
  }, []);

  const {
    team,
    image_url,
    category,
    brand,
    era,
    for_sale,
    game_used,
    made_in,
    details,
    league,
    asking_price,
  } = selectedItem;

  function handleWatch() {
    const watchObject = { user_id: currentUser.id, item_id: id };
    fetch("/watches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(watchObject),
    })
      .then((res) => res.json())
      .then((data) => {
        setWatchedItems([...watchedItems, data]);
      });
  }

  return (
    <div class="card">
      <div className="card-content">
        <p class="title is-1 has-text-centered">
          {team} {category}
        </p>
        <p class="has-text-grey-dark is-size-5 is-italic has-text-weight-semibold has-text-centered">
          {league}, {era}, {brand}
        </p>
        {game_used && (
          <p class="has-text-danger has-text-centered">
            This is a game-used item.
          </p>
        )}
        <div class="columns is-centered">
          <div class="column is-7">
            <img class="px-5" src={image_url} alt="item" />
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <footer class="card-footer">
                <a
                  class="button card-footer-item has-background-success has-text-success-light"
                  onClick={handleWatch}
                >
                  👀 Watch this item
                </a>
            </footer>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            {for_sale && (
              <p class="is-size-4 is-italic has-text-centered">
                This item is for sale, asking price ${asking_price} USD
              </p>
            )}
          </div>
          <div class="column">
            <p class="is-size-4 has-text-weight-semibold has-text-centered">
              Made in {made_in}
            </p>
          </div>
        </div>
        <p class="has-text-grey is-italic">From the owner:</p>
        <p class="is-size-3">"{details}"</p>
      </div>
    </div>
  );
}

export default ItemDetails;
