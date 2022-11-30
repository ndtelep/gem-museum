import React, {useState, useEffect} from "react";
// import ItemList from "./ItemList";
import {useParams} from "react-router-dom";

function ItemContainer() {
  const {category_key, value} = useParams();

  const parsedValue = value.replace(/ /g, "%20")
  const parsedCategoryKey = category_key.replace(/ /g, "%20")
  const fetchString = `http://localhost:3000/items?category_key=${parsedCategoryKey}&value=${parsedValue}`

  console.log(fetchString)

  useEffect(() => {
    fetch(fetchString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  

  console.log(category_key, value)
  return (
    <div>
      {/* <ItemList items={items} /> */}
    </div>
  );
}

export default ItemContainer;
