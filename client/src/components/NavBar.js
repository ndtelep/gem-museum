import React from 'react';
import { Link } from 'react-router-dom';
import "bulma/css/bulma.min.css";
// import { useNavigate } from 'react-router-dom';

export default function NavBar(){
    return (
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://localhost:4000">
      <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/59542/baseball-cap-clipart-xl.png" alt="sports logo" width="50" height="80" />
    </a>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="http://localhost:4000/all_items">
        All items
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="http://localhost:4000/all_items">
          Sports
        </a>
        <div class="navbar-dropdown">
          <Link to="/items?category=sport&value=ice%20hockey"><a class="navbar-item">
            Ice Hockey
          </a>
          </Link>
          <Link to ="/items?category=sport&value=baseball"><a class="navbar-item">
            Baseball
          </a>
          </Link>
          <Link to="/items?category=sport&value=basketball"><a class="navbar-item">
            Basketball
          </a>
          </Link>
          <Link to="/items?category=sport&value=soccer"><a class="navbar-item">
            Soccer
          </a>
          </Link>
          {/* <link class="navbar-item">
            More
          </link> */}
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="http://localhost:4000/all_items">
          Leagues
        </a>
        <div class="navbar-dropdown">
          <Link to ="/items?category=league&value=National%20Hockey%20League"><a class="navbar-item">
            NHL
          </a>
          </Link>
          <Link to="/items?category=league&value=Major%20League%20Baseball"><a class="navbar-item">
            MLB
          </a>
          </Link>
          <Link to="/items?category=league&value=Women's%20National%20Basketball%20Association"><a class="navbar-item">
            WNBA
          </a>
          </Link>
          <Link to="/items?category=league&value=National%20Women's%20Soccer%20League"><a class="navbar-item">
            NWSL
          </a>
          </Link>
          {/* <link class="navbar-item" >
            More
          </link> */}
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="http://localhost:4000/all_items">
          Categories
        </a>
        <div class="navbar-dropdown">
          <Link to ="/items?category=category&value=jersey"><a class="navbar-item">
            Jerseys
          </a>
          </Link>
          <Link to ="/items?category=category&value=jacket"><a class="navbar-item">
            Jackets
          </a>
          </Link>
          <Link to ="/items?category=category&value=hat"><a class="navbar-item">
            Hats
          </a>
          </Link>
          {/* <link class="navbar-item">
            More
          </link> */}
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          {/* <a class="button is-primary">
            <strong>Sign up</strong>
          </a> */}
          {/* <a class="button is-light" href="http://localhost:4000/login">
            Log in
          </a> */}
          <Link to ="/login">
            <a class="button is-primary">Login</a>
          </Link>
        </div>
      </div>
    </div>
    </div>
</nav>
    )
}