import React from "react";
import "bulma/css/bulma.min.css";

function ItemDetails({ item }) {
  const { team } = item;
  const { image_url } = item;
  const { category } = item;
  const { brand } = item;
  const { era } = item;
  const { for_sale } = item;
  const { game_used } = item;
  const { made_in } = item;
  const { details } = item;
  const { league } = item;
  const { asking_price } = item;

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
