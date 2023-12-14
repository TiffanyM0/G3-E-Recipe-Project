import React from 'react';

export default function Category({ categories }) {
  

  return (
    <div>
      <h2>Meal Categories</h2>
      <div className="category">
        {categories.map(category => (
          <div key={category.strCategory}>
            <button>
                button
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

