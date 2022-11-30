import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ updateUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault()
    const user = {
        email,
        password
    }
    // Logs in user
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                console.log(user)
                updateUser(user)
                navigate("/")
            })
        }else {
            res.json().then(json => setErrors(json.errors))
        }
    })
   
}

  return (
    <div className="login">
      <div className="columns is-centered is-8 is-variable">
        <div className="column is-5-tablet is-4-desktop">
          <div className="card login_card">
            <div className="card-content"></div>
            <form onSubmit={handleSubmit} className="ml-4 mr-4">
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input mt-6"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="password"
                    className="input mt-5"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="is-fullwidth is-link button mt-5"
                type="submit"
                value="Submit"
              >
                Log In
              </button>
            </form>
            {errors ? errors.map((e) => <div>{e[0] + ": " + e[1]}</div>) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
