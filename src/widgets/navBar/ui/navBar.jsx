import { Link } from "react-router-dom";
import * as React from "react";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link className="navBar-item" to={"/"}>
        Main
      </Link>
      <Link className="navBar-item" to={"/Courses"}>
        Courses
      </Link>
      <Link className="navBar-item" to={"/About"}>
        About
      </Link>
    </div>
  );
};

export default NavBar;
