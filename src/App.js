<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Reviews from "./components/Reviews";
=======
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Category from './components/Category';
import FilterMeal from './components/FilterMeal';
import SelectMeal from './components/SelectMeal';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
>>>>>>> 32c52e53c4cde5a51512ad553748bc9d155fdc8e


function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [meals, setMeals] = useState([]);
  const [searchedMeal, setSearchedMeal] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);


  useEffect(() => {
<<<<<<< HEAD
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
=======
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
>>>>>>> 32c52e53c4cde5a51512ad553748bc9d155fdc8e
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    if (selectedCategory) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then((response) => {
=======

     if (selectedCategory) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then(response => {
>>>>>>> 32c52e53c4cde5a51512ad553748bc9d155fdc8e
          setMeals(response.data.meals);
        })
        .catch((error) => {
          console.error("Error fetching meals:", error);
        });
    }
  }, [selectedCategory]);

<<<<<<< HEAD
  useEffect(() => {
=======

useEffect(() => {
    // Search meals by name
>>>>>>> 32c52e53c4cde5a51512ad553748bc9d155fdc8e
    if (searchedMeal) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`)
        .then((response) => {
          setMeals(response.data.meals);
        })
        .catch((error) => {
          console.error("Error searching meals:", error);
        });
    }
  }, [searchedMeal]);

const instructionsRef = useRef(null);

  const handleMealClick = (meal) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
      .then((response) => {
        const fullMealDetails = response.data.meals[0];
        setSelectedMeal(fullMealDetails);
        if (instructionsRef.current) {
          instructionsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((error) => {
        console.error("Error fetching full meal details:", error);
      });
  };

  const handleCloseDetails = () => {
    setSelectedMeal(null);
  };

  const handleSubmitFeedback = (feedback) => {
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, feedback]);
  };

  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <h1>E-RECIPE</h1>
        <h3>
          <marquee>
            Welcome, passionate cooks! We're thrilled to have you here. Happy cooking!
          </marquee>
        </h3>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchedMeal={searchedMeal}
                setSearchedMeal={setSearchedMeal}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
                meals={meals}
                handleMealClick={handleMealClick}
                selectedMeal={selectedMeal}
                handleCloseDetails={handleCloseDetails}
                setMeal={setMeals}
                instructionsRef={instructionsRef}
              />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/feedback" element={<FeedbackRoutes />} />
        </Routes>
      </div>
    </Router>
=======
    <div className="App">
      <h1>E-RECIPE</h1>
    
      <NavBar/>
      <SearchBar searchedMeal={searchedMeal} setSearchedMeal={setSearchedMeal}  />
      <Category setSelectedCategory={setSelectedCategory} categories={categories} handleMealClick={handleMealClick}/>
      <FilterMeal meals={meals} handleMealClick={handleMealClick}/>
      <div ref={instructionsRef}>
        <SelectMeal handleCloseDetails={handleCloseDetails} selectedMeal={selectedMeal} />
      </div> 
      <AboutUs />
      <ContactUs />
    </div>
>>>>>>> 32c52e53c4cde5a51512ad553748bc9d155fdc8e
  );

  function FeedbackRoutes() {
    return (
      <div>
        <Reviews onSubmitFeedback={handleSubmitFeedback} />
        <div className="feedback-container">
          <ul>
            {feedbacks.map((feedback, index) => (
              <li key={index}>{feedback.text}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
