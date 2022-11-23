import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Welcome to Gem Museum</h1>
            <p>
              This is the Gem Museum, a place to show off your sports memorabilia and apparel. You can browse, buy, and sell any items, rare or common.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
