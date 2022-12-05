import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./ItemCard.css";

function ItemCard({ item }) {
  const { id } = item;
  const { team } = item;
  const { image_url } = item;
  const { category } = item;
  const { brand } = item;
  const { era } = item;
  const { for_sale } = item;
  const { game_used } = item;

  return (
    <div class="card hover-translate-y column is-one-quarter mt-5">
      <div class="card-content">
        <header class="card-header is-capitalized has-text-centered">
          <p class="is-size-4 has-text-weight-bold">
            {team} {category}
          </p>
        </header>
        <Link to={`/item_details/${id}`}>
          <div class="card-image">
            <figure class="image is-square">
              <img class="" src={image_url} alt="item" />
            </figure>
          </div>
        </Link>
        <footer class="card-footer">
          {game_used && <p class="card-footer-item has-background-warning">Game Used</p>}
          {for_sale && <p class="card-footer-item has-background-primary">For Sale!</p>}
        </footer>
        <div class="content is-italic has-text-weight-semibold has-text-centered mt-5">
          {brand}, {era}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
