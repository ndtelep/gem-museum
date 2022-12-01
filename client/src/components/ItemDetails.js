import React from "react";
// import { useParams } from "react-router-dom";
import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";

function ItemDetails() {
  const [selectedItem, setSelectedItem] = useState({ user: {} });
  // const { id } = useParams();

  useEffect(() => {
    fetch(`/items/12`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
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
        <div class="columns">
          <div class="column">
            {for_sale && (
              <p class="is-size-4 is-italic has-text-centered">
                This item is for sale, asking price ${asking_price} USD
              </p>
            )}
          </div>
          <div class="column">
            <p class="is-size-4 has-text-weight-semibold has-text-centered">Made in {made_in}</p>
          </div>
        </div>
        <p class="has-text-grey is-italic">From the owner:</p>
        <p class="is-size-3">"{details}"</p>
      </div>
    </div>
  );
}

export default ItemDetails;
