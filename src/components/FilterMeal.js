import React from "react";

function FilterMeal ({meals}){
    return (
        <div>
      <h2>Filtered Meals</h2>
      <div className="meals-container">
        {meals.map(meal => (
          <div key={meal.idMeal} className="meal-item">
            <p>{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
    )
}

export default FilterMeal; 