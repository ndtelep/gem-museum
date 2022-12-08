import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemContainer() {
  const [items, setItems] = useState([]);
  const { category_key, value } = useParams();
  let fetchString = "";

  if (category_key === "all_items") {
    fetchString = "/items";
  } else {
    fetchString = `/items/${category_key}/${value}`;
  }

  useEffect(() => {
    fetch(fetchString)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [fetchString]);

  if (!items) {
    return <h1>loading items...</h1>
  }
  return (
    <div class="container">
      <ItemList items={items} />
    </div>
  );
}

export default ItemContainer;
