import React from 'react'
import ItemDetails from './ItemDetails'
import "bulma/css/bulma.min.css";

function ItemPage({items}) {
const ItemDetailPages = items.map(item => <ItemDetails key={item.id} item={item}/>)
    return (
    <div class="columns is-multiline">{ItemDetailPages}</div>
  )
}

export default ItemPage