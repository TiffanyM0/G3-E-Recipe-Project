import React from "react";
import SearchBar from "./SearchBar";
import Category from "./Category";
import FilterMeal from "./FilterMeal";
import SelectMeal from "./SelectMeal";


function Home({
    searchedMeal,
    setSearchedMeal,
    setSelectedCategory,
    categories,
    meals,
    handleMealClick,
    selectedMeal,
    handleCloseDetails,
    setMeal,
    instructionsRef,
  }) 

  {
    return (
      <div>
        <SearchBar
          searchedMeal={searchedMeal}
          setSearchedMeal={setSearchedMeal}
        />