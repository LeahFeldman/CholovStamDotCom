import { NavLink } from "react-router-dom";
import Title from "../Title";
import SearchBar from "../SearchBar";
export function Home() {
  return (
  <>
   <Title title="Home"/>
   <p>Welcome to the Recipe Search App!</p>
   <SearchBar />
    <NavLink to = "/AboutUs"> About Us </NavLink>
  </>
  )
};

export default Home;