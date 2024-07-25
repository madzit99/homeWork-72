import React from "react";
import { NavLink } from "react-router-dom";

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid w-75">
        <NavLink to="/" className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Dodo_Logo.svg/800px-Dodo_Logo.svg.png"
            style={{ width: "100px" }}
            alt=""
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;
