/* NavBar to be displayed on every page */

import { Outlet, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default NavBar;