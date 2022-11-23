import React from 'react'
import ItemCard from './ItemCard'

function ItemList({items}) {

const itemCards = items.map(item => <ItemCard key={item.id} item={item}/>)

    return (
    <div>{itemCards}</div>
  )
}

export default ItemList