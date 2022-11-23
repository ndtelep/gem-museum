import React from 'react'

function ItemCard({item}) {

const {team} = item
const {image_url} = item
const {category} = item

  return (
    <div>{team} {category}<img src={image_url}/></div>
  )
}

export default ItemCard