import React from "react";
import "./NavBar.css";
import logoWhite from "../../assets/logoWhite.svg";
import globeOutline from "../../assets/globeOutline.svg";
import Button from "../Button/Button";
function NavBar() {
  const catList = [
    {
      name: "New Car",
      url: "/",
    },
    {
      name: "Luxury",
      url: "/about",
    },
    {
      name: "Sports",
      url: "/contact",
    },
    {
      name: "SUV",
      url: "/contact",
    },
    {
      name: "Truck",
      url: "/contact",
    },
  ];
  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <img src={logoWhite} alt="logo" className="logo" />
        <ul className="cat-list">
          {catList.map((item) => (
            <li className="cat-item" key={item.name}>
              <a className="cat-link" href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-container">
        <Button title="EN" startIcon={globeOutline} />
        <span className="log-in">Log In</span>
        <div>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
