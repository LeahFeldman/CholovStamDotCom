import { useState, useEffect } from 'react';

function SearchBar(){
    const [query, setQuery] = useState("");
    useEffect(({ newQuery }) => {
        setQuery(`${ newQuery }`)
    });

    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted query:', inputValue);
        useEffect(event.target.value);
    };

   
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" required= {true} placeholder="search a recipe..."/>
            </form>

            <Result                 />
        </>
    );
}

export default SearchBar;


