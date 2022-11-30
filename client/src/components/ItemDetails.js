import React from "react";
import { useParams } from "react-router-dom";
import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";

function ItemDetails() {
  const [selectedItem, setSelectedItem] = useState({ user: {} });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/items/${id}`, {
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
    <div>
      <h1>
        {team} {category}
      </h1>
      {game_used && <p class="has-text-centered">This is a game-used item.</p>}
      {for_sale && (
        <p class="has-text-centered">
          This item is for sale, asking price ${asking_price} USD
        </p>
      )}
      <img class="px-5" src={image_url} alt="item" />
      <h2>
        {league}, {era}, {brand}
      </h2>
      <p>Made in {made_in}</p>
      <h3>From owner:</h3>
      <p>"{details}"</p>
    </div>
  );
}

export default ItemDetails;
