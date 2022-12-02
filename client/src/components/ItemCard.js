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
          {/* <Link to={`/item_details/${id}`}> */}
          <p class="is-size-4 has-text-weight-bold">
            {team} {category}
          </p>
          {/* </Link> */}
        </header>
        <Link to={`/item_details/${id}`}>
          <div class="card-image">
            <figure class="image is-5by4">
              <img class="px-5" src={image_url} alt="item" />
            </figure>
          </div>
        </Link>
        <div class="media">
          <div class="media-left"></div>
        </div>
        <div class="content is-italic has-text-centered">
          {brand}, {era}
        </div>
        <footer class="card-footer">
          {game_used && <p class="card-footer-item">Game Used</p>}
          {for_sale && <p class="card-footer-item">For Sale!</p>}
        </footer>
      </div>
    </div>
  );
}

export default ItemCard;
