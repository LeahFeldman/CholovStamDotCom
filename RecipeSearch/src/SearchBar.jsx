import React from 'react';
import Result from './Result';
import styles from './SearchBar.module.css';
import { useState, useEffect } from 'react';
import "./index.css";

function SearchBar(){                 
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {                               
        if (query){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => res.json())
            .then(data => setData(data.meals));
        }
    }, [query]);

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements.searchInput.value;
        setQuery(inputValue);
        console.log('Submitted query:', query);
    }

   
    return(
        <div className={ styles.container }>
            <div className={ styles.searchBar }>
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                    required
                    placeholder="search a recipe..."
                    name="searchInput"
                    className={ styles.input }
                    />

                    {/*This hidden button allows the user to submit query by pressing "Enter" */}
                        <button type="submit" style={{ display: 'none' }}></button>
                </form>

               <ul className={ styles.parent }>
                    {Array.isArray(data)
                    ? data.map(item => (
                        <Result key={item.idMeal} item={item} />
                    ))
                    : null}
                </ul>
            </div>
        </div>

    );
}

export default SearchBar;