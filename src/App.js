import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import Category from './components/Category';
import SelectMeal from './components/SelectMeal';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then(response => {
          setMeals(response.data.meals);
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    }
  }, [selectedCategory]);

  const handleCloseDetails = () => {
    setSelectedMeal(null);
  };
  const instructionsRef = useRef(null);

  return (
    <div className="App">
      <h1>E-RECIPE</h1>
      <Category setSelectedCategory={setSelectedCategory} categories={categories} />
      <div ref={instructionsRef}>
        <SelectMeal handleCloseDetails={handleCloseDetails} selectedMeal={selectedMeal} />
      </div>
    </div>
  );
}

export default App;
