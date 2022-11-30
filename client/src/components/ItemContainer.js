import React from "react";
import ItemList from "./ItemList";

function ItemContainer({items}) {
console.log(items)
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemContainer;
