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

        console.log('Submitted query:', query);
    };

   
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    required= {true} 
                    name="searchInput" 
                    value={query} 
                    placeholder="search a recipe..."/>
                <input type="text" 
                required
                placeholder="search a recipe..."
                value= {query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <ul>
                {data

                    //data is left with meals that match the query
                    .filter(item => item.strMeal.toLowerCase().includes(query.toLowerCase()))

                    .map(item => (
                    <Result key={item.idMeal} item={item}/>
                ))}
            </ul>
            {/* Navigate to <Details/> page, which will contain details about the recipe.  */}
        </>
    );
}

export default SearchBar;


