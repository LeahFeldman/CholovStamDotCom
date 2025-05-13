import React from 'react';
import Result from './Result';
import styles from './SearchBar.module.css';
import { useState, useEffect } from 'react';

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
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <form onSubmit={handleSubmit}>
                    <input 
                        className={styles.input}
                        type="text" 
                        required
                        name="searchInput" 
                        value={query} 
                        placeholder="search a recipe..."/>

                    //This hidden button allows the user to submit query by pressing "Enter"
                    <button type="submit" style="display: none;"></button>
                </form>

                <ul>
                    {data

                        //data is left with meals that match the query
                        .filter(item => item.strMeal.toLowerCase().includes(query.toLowerCase()))

                        .map(item => (
                        <Result key={item.idMeal} item={item}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SearchBar;


