import React from "react";

function FilterMeal({ meals, handleMealClick }) {
  return (
    <div>
      <h2>Filtered Meals</h2>
      <div className="meals-container">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-item" onClick={() => handleMealClick(meal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterMeal;
