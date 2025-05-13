import { Outlet, Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Details">AboutUs</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default SideBar;