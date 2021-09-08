import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <div>
    <header>
      <h1>
        Free Fire Gun Guide
      </h1>
      <nav class="navigation">
        <ul >
          <li >
            <a aria-current="page" href="#">WEAPONS</a>
          </li>
           <li >
            <a href="#">TRICKS</a>
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
