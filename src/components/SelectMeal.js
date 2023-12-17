import React, { forwardRef } from "react";

const SelectMeal = forwardRef(({ selectedMeal, handleCloseDetails }, ref) => {
  return (
    selectedMeal && (
      <div className="meal-details" ref={ref}>
          <h2 >{selectedMeal.strMeal}</h2>
        <div className="recipe">
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
          <p>Category: {selectedMeal.strCategory}</p>
          <h3>Ingredients</h3>
          <div className="instructions">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
              const ingredient = selectedMeal[`strIngredient${i}`];
              const measure = selectedMeal[`strMeasure${i}`];
              return ingredient && measure ? (
                <li className="list" key={i}>{`${measure} ${ingredient}`}</li>
              ) : null;
            })}
          </div>
          <h3>Instructions</h3>
          <p className="instruction-p">{selectedMeal.strInstructions}</p>
        </div>
      </div>
    )
  );
});

export default SelectMeal;