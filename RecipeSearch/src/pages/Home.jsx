import { NavLink } from "react-router-dom";
import Title from "../Title";
import SearchBar from "../SearchBar";
import styles from "./Home.module.css";

export function Home() {
  return (
  <>
  <div className={styles.container}>

   <Title className={styles.header}>Home</Title>
    <p className={styles.description}>Search for your favorite recipes!</p>

   <SearchBar />
   <p>Welcome to the Recipe Search App!</p>
    <NavLink to = "/AboutUs"> About Us </NavLink>
    </div>
  </>
  )
};

export default Home;