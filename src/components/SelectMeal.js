import React from "react";

function SelectMeal ({ selectedMeal }) {
  return (
    selectedMeal && (
      <div className="meal-details" >
        Selecting ...
      </div>
    )
  );
};

export default SelectMeal;