import { NavLink } from "react-router-dom";
import { useState } from 'react';
import Title from "../Title";
import SearchBar from "../SearchBar";
import Result from '../Result';
import styles from "../App.module.css";

export function Home() {

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
  <>
    <div className={styles.container}>
    <Title title="Home"/>
    <p>Welcome to the Recipe Search App!</p>
    <SearchBar query={ query } setQuery={ setQuery } setSearchResults={ setSearchResults }/>
    <Result searchResults={ searchResults }/>

      <NavLink to = "/AboutUs"> About Us </NavLink>
    </div>
    </>
  )
};

export default Home;