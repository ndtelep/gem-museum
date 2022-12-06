import React from "react";
import { UserItems } from "./UserItems";
import { UserWatchedItems } from "./UserWatchedItems";

function UserPage() {
  return (
    <div>
      {" "}
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7"></div>
          <div class="col-lg-5">
            <h1 class="is-size-2 has-text-weight-bold has-text-primary">
              User's collection
            </h1>
            <h3 class="is-size-3 is-italic has-text-centered">
              Your collected items
            </h3>
            <div>
              <p>a users items will be displayed here</p>
            </div>
            <h3 class="is-size-3 is-italic has-text-centered">
              <UserItems/>
            </h3>
            <div>
              <UserWatchedItems/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
