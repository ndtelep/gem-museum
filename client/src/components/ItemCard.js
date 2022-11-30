import React from 'react';
//import GameUsedFooter from './GameUsedFooter';
//import ForSaleFooter from './ForSaleFooter';
import "bulma/css/bulma.min.css";

function ItemCard({item}) {

const {team} = item
const {image_url} = item
const {category} = item
const {brand} = item
const {era} = item
const {for_sale} = item
const {game_used} = item

  return (
<div class="card column is-quarter">
<header class="card-header">
    <p class="card-header-title is-size-3 has-text-weight-bold">
      {team} {category}
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-image">
    <figure class="image">
      <img class="px-5"src={image_url} alt="item"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
    </div>
    <div class="content is-italic has-text-centered">
      {brand}, {era}
    </div>
    {game_used && <footer class="card-footer has-text-centered">
        <p class="has-text-centered">Game Used</p>
    </footer>}
    {for_sale && <footer class="card-footer">
        <p class="has-text-centered">For Sale!</p>
      </footer>}
  </div>
</div>
  )
}

export default ItemCard