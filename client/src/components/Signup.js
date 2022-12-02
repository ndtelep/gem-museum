import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bulma/css/bulma.min.css";

function Signup({updateUser}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const { username, email, password } = formData;

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };

    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user)
          navigate("/");
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login">
      <div className="columns is-centered is-8 is-variable">
        <div className="column is-5-tablet is-4-desktop">
          <div className="card login_card">
            <div className="card-content is-size-4">Sign up for Gem Museum</div>
            <form className="ml-4 mr-4" onSubmit={onSubmit}>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-2"
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="password"
                    className="input mt-2"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field"></div>
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
