import React from 'react'
import ItemCard from './ItemCard'
import "bulma/css/bulma.min.css";

function ItemList({items}) {
const itemCards = items.map(item => <ItemCard key={item.id} item={item}/>)
    return (
    <div class="columns is-multiline">{itemCards}</div>
  )
}

export default ItemList