import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Title from '../Title';
import layoutStyles from '../App.module.css';
import detailsStyles from './Details.module.css';

const Details = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      const mealData = data.meals[0];

      const combined = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealData[`strIngredient${i}`];
        const measure = mealData[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
          combined.push(`${measure} ${ingredient}`);
        }
      }

      setMeal(mealData);
      setIngredients(combined);
    };

    fetchMealDetails();
  }, [id]);

  if (!meal) return <p>...Loading...</p>; //Route to NotFound page

  return (
    <>
      <div className={layoutStyles.container}>
        <Title title={meal.strMeal} />
        <img src={ meal.strMealThumb } alt= {meal.strMeal }/>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{meal.strInstructions}</p>
      </div>
    </>
  );
};

export default Details;

 
