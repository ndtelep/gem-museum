import React from 'react';
import "bulma/css/bulma.min.css";
// import { useNavigate } from 'react-router-dom';

export default function NavBar(){
    return (
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://localhost:4000">
      <img src="https://www.freepnglogos.com/uploads/sport-png/sport-download-sports-wear-png-transparent-image-and-clipart-32.png" alt="sports logo" width="150" height="40" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        All items
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Sports
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            Hockey
          </a>
          <a class="navbar-item">
            Baseball
          </a>
          <a class="navbar-item">
            Basketball
          </a>
          <a class="navbar-item">
            Football
          </a>
          <a class="navbar-item">
            Soccer
          </a>
          <a class="navbar-item">
            More
          </a>
        </div>
      </div>
    </div>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Leagues
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            NHL
          </a>
          <a class="navbar-item">
            MLB
          </a>
          <a class="navbar-item">
            Eastern League
          </a>
          <a class="navbar-item">
            WNBA
          </a>
          <a class="navbar-item">
            NWSL
          </a>
          <a class="navbar-item">
            More
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
</nav>
    )
}