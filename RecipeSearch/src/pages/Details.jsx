import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Title from '../Title';


const Details = () => {
  const { id } =useParams();
  const [meal, setMeal] = useState(null);
 
  useEffect(() => {
    const fetchMealDetails=async () => {
      const response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data=await response.json();
      setMeal(data.meals[0]);
      const ingredients = [];
      const measurements = [];
    
      Object.entries(data.meals[0]).forEach(([key, value]) => {
        if (value && key.startsWith("strIngredient")) {
        ingredients.push(value);
      }
        else if (value && key.startsWith("strMeasure")){
          measurements.push(value);
        }
  });

    };
    fetchMealDetails();
  }, [id]);
  
  if (!meal) return <p>...Loading...</p>;

  return (
  <>
    <Title title={meal.strMeal} />
    <ul>
      {ingredients.map((ingredient, index) => {
        const measurement=measurements[index];
        return(<li key={index}>{measurement} {ingredient}</li>
        );
      })}
    </ul>
    <p>{ meal.strInstructions }</p>
  </>
);

};

export default Details;
