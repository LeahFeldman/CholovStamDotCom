import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Result.module.css';


function Result({ item }){

    const navigate=useNavigate();

    const handleButton = () => {
        navigate(`/Details/${item.idMeal}`);
    };

    return(
        <div className={styles.resultsContainer}>
            <button className={styles.resultItem} onClick={handleButton}>{ item.strMeal }</button>
        </div>
    );
};

export default Result;