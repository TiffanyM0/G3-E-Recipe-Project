
import React, { forwardRef } from "react";

const Category = forwardRef(({ setSelectedCategory, categories }, ref) => {
// export default function Category({ setSelectedCategory, categories }) {
  function handleClick(category) {
    setSelectedCategory(category);
    // No need for categoryRef here
  }

  return (
    <div>
      <h2 className="category-name">CHOOSE YOUR INGREDIENT</h2>
      <div className="category">
        {categories.map(category => (
          <div className="foodies" key={category.strCategory}>
            <button className="buttin" onClick={() => handleClick(category.strCategory)}>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              {category.strCategory}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Category;


