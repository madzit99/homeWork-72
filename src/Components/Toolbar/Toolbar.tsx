import React from "react";
import { NavLink } from "react-router-dom";

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid w-75">
        <NavLink to="/" className="navbar-brand">
          <img
            src="https://download.logo.wine/logo/Dodo_Pizza/Dodo_Pizza-Logo.wine.png"
            style={{ width: "100px" }}
            alt=""
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;
