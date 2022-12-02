import React from "react";
import ItemList from "./ItemList";

function FeaturedItems({ items }) {
const featuredItems = items.slice(8, 12);
return (
    <div>
      <ItemList items={featuredItems} />
    </div>
  );
}

export default FeaturedItems;