import { NavLink } from "react-router-dom";
import { useState } from 'react';
import Title from "../Title";
import SearchBar from "../SearchBar";
import Result from '../Result';
import styles from "../App.module.css";
import NavBar from "../NavBar";

export function Home() {

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
  <>
    <div className={styles.container}>
      <NavBar />
      <Title title="Home"/>
      <p>Welcome to the Recipe Search App!</p>
      <SearchBar query={ query } setQuery={ setQuery } setSearchResults={ setSearchResults }/>
      <Result searchResults={ searchResults }/>
    </div>
    </>
  )
};

export default Home;