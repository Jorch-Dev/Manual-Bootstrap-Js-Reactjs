import React from "react";
import { Link } from "react-router-dom";

export const Navbar_view = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="mx-5">
          <img src="/assets/logo192.png" width="50px" height="50px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/display_flex">
                Div Flex
              </Link>
              <Link className="nav-link" to="/flex_orientation">
                Flex Orientation
              </Link>
              <Link className="nav-link" to="/javascript">
                ECMAScript 6
              </Link>
              <Link className="nav-link" to="/reactemail">
                EmailEditor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
