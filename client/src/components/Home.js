import React from "react";
import FeaturedItems from "./FeaturedItems";

function Home({items}) {
  console.log(items)
return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5">
            <h1 class="is-size-2 has-text-weight-bold has-text-primary">Welcome to Gem Museum</h1>
            <p>
              This is the Gem Museum, a place to show off your sports memorabilia and apparel. You can browse, buy, and sell any items, rare or common.
            </p>
            <h3 class="is-size-3 is-italic has-text-centered">View our featured items below</h3>
            <div>
              <FeaturedItems items={items}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;