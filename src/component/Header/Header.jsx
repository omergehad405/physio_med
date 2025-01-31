import React, { useState } from "react";
import "./Header.css";
import { TiThMenu } from "react-icons/ti";
import { CgCloseO } from "react-icons/cg";
import { Link } from "react-router";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <header>
      <a className="logo" href="/">
        Physio <span>Med</span>
      </a>

      <ul className={`${menuClicked ? "active" : ""}`}>
        <li>
          <Link to="/" href="">
            home
          </Link>
        </li>
        <li>
          <Link to="" href="">
            about
          </Link>
        </li>
        <li>
          <Link to="/services" href="">
            services
          </Link>
        </li>
        <li>
          <Link to="" href="">
            contact
          </Link>
        </li>
      </ul>

      <button
        onClick={
          (() => setOpenMenu(!openMenu), () => setMenuClicked(!menuClicked))
        }
      >
        {openMenu === true ? <CgCloseO /> : <TiThMenu />}
      </button>
    </header>
  );
}

export default Header;
