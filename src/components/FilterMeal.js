// //FilterMeal.js
import React, { forwardRef } from 'react';

const FilterMeal = forwardRef(({ meals, handleMealClick,setMeal }, ref)  => {
  if (meals === null || meals.length === 0) {
    // Display message when meals is null or empty
    return (
      <div>
        <p>Recipe not available!</p>
      </div>
    );
  }
    return ( 
   <div>
      <h2>Recipes</h2>
      <div className="meals-container">
        {meals.map(meal => (
          <div key={meal.idMeal} className="meal-item" onClick={() => handleMealClick(meal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>)
})
export default FilterMeal;