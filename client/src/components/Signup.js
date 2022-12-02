import React from "react";
import "bulma/css/bulma.min.css";

function Signup() {
  return (
    <div className="login">
      <div className="columns is-centered is-8 is-variable">
        <div className="column is-5-tablet is-4-desktop">
          <div className="card login_card">
            <div className="card-content is-size-4">Sign up for Gem Museum</div>
            <form className="ml-4 mr-4">
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="password-confirmation"
                    id="passsword-confirmation"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <button
                className="is-fullwidth is-link button mt-5 mb-5"
                type="submit"
                value="Submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;