import React from "react";
import ItemPage from "./ItemPage";

function ItemPageContainer({items}) {
  return (
    <div>
      <ItemPage items={items} />
    </div>
  );
}

export default ItemPageContainer;
