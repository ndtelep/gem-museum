// check backend FIRST, make sure you can make a new object. make sure onChange works with console
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bulma/css/bulma.min.css";

function NewItemForm({}) {
  //   const [formData, setFormData] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  // //   const [errors, setErrors] = useState([]);
  // //   const navigate = useNavigate();

  //   const { team, sport, category, era, brand, made_in, game_used, purchase_price, asking_price, details, league, image_url, for_sale, user_id } = formData;

  //   function onSubmit(e) {
  //     e.preventDefault();
  //     const item = { team, sport, category, era, brand, made_in, game_used, purchase_price, asking_price, details, league, image_url, for_sale, user_id };

  //     fetch(`/items`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(user),
  //     }).then((res) => {
  //       if (res.ok) {
  //         res.json().then((user) => {
  //           updateUser(user)
  //           navigate("/");
  //         });
  //       } else {
  //         res.json().then((json) => setErrors(Object.entries(json.errors)));
  //       }
  //     });
  //   }

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  return (
    <div className="login">
      <div className="columns is-centered is-8 is-variable">
        <div className="column is-5-tablet is-4-desktop">
          <div className="card login_card">
            <div className="card-content is-size-4">Upload a new item</div>
            <form
              className="ml-4 mr-4"
              // onSubmit={onSubmit}
            >
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="team"
                    id="team"
                    placeholder="Team Name"
                    // onChange={handleChange}
                    //
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="sport"
                    id="sport"
                    placeholder="Sport"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="category"
                    id="category"
                    placeholder="Item type (jersey, hat, etc.)"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="brand"
                    id="brand"
                    placeholder="Brand"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="era"
                    id="era"
                    placeholder="Era"
                    // onChange={handleChange}
                  /><p class="is-size-7 is-italic">era can be a single year or range of years</p>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="made_in"
                    id="made_in"
                    placeholder="Country of manufacture"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="purchase_price"
                    id="purchase_price"
                    placeholder="Purchase price (in USD)"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="asking_price"
                    id="asking_price"
                    placeholder="Asking price (in USD)"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="image_url"
                    id="image_url"
                    placeholder="Link to an image of the item"
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="checkbox">
                <div className="control">
                  <input
                    type="checkbox"
                    className=""
                    name="for_sale"
                    id="for_sale"
                    // onChange={handleChange}
                  />Check if this item is for sale
                </div>
              </div>
              <div className="checkbox">
                <div className="control">
                  <input
                    type="checkbox"
                    className=""
                    name="game_used"
                    id="game_used"
                    // onChange={handleChange}
                  />Check if this item is game-used
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="textarea mt-2"
                    name="details"
                    id="details"
                    placeholder="Item details"
                    // onChange={handleChange}
                  /><p class="is-size-7 is-italic">input any extra details or comments about your items</p>
                </div>
              </div>
              <div className="field"></div>
              <button
                className="is-fullwidth is-link button mt-5 mb-5"
                type="submit"
                value="Submit"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewItemForm;
