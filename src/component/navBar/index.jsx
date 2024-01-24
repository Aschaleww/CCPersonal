import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Skill",
    to: "/skill",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  // {
  //   label: "Portfolio",
  //   to: "/port",
  // },
  {
    label: "Contact",
    to: "/contact",
  },
];

const NavBar = () => {
  const [toggleIcon, settoggleIcon] = useState(false);

  const handleToggleIcon = () => {
    settoggleIcon(!toggleIcon);
  };
  return (
    <nav className="navBar">
      <div className="navBar_Container">
        <Link to={"/"} className="navBar_container_logo">
          <FaReact />
        </Link>
      </div>
      <ul className={`navbar_container-menu ${toggleIcon ? "active" : " "}`}>
        {data.map((item, key) => (
          <li key={key} className="navbar_container_menu_item">
            <Link className="navbar_container_menu_item_links" to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-icon" onClick={handleToggleIcon}>
        {toggleIcon ? <HiX /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NavBar;
