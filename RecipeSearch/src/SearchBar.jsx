import { useEffect } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ query, setQuery, setSearchResults }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.searchInput.value;

    // Update query state
    setQuery(inputValue);

    // Fetch results only on submit
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
      const data = await res.json();
      setSearchResults(data.meals || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setSearchResults([]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Search a recipe..."
            defaultValue={query}
            name="searchInput"
            className={styles.input}
          />
          <button type="submit" style={{ display: 'none' }}></button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;





  





  

  
  