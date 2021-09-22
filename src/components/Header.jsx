import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Button } from "@material-ui/core";
import './Header.css'
function Header() {
  return (
    <div className="head">
    <header>
      <h1>
        Free Fire Blogs
      </h1>
      <nav class="navigation">
        <ul >           
          <li >
            <a href="/">BLOGS</a>
          </li>
          <li >
            <a aria-current="page" href="/landing">ITEMS</a>
          </li>

          {/*<li >
            <a href="#">VIDEOS</a>
          </li> */}
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;
