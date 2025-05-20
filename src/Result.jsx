import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Result.module.css';


function Result({ searchResults, hasSearched}){

    const navigate=useNavigate();

    if (hasSearched && (!searchResults || searchResults.length === 0)){
        return <p>No Results Found</p>;
    }

    return(
        <ul>
            {searchResults.map(item => (
            <li key={item.idMeal}>
                <Link to={`/Details/${item.idMeal}`} className={styles.resultItem}>{item.strMeal}</Link>
            </li>
            ))}
        </ul>
    );
};

export default Result;
