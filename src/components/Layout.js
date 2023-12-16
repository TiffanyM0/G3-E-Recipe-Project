// import {Outlet} from "react-router-dom";
// import Category from "./Category";
// import FilterMeal from "./FilterMeal";
// import SelectMeal from "./SelectMeal";

// export default function RootLayout({
//     setSelectedCategory,
//     categories,
//     handleMealClick,
//     meals, 
//     handleCloseDetails,
//     selectedMeal,
//     instructionsRef
// }) {
//   return (
//     <div className="root-layout">
//       <div className="App">
//         <h1>E-RECIPE</h1>

//         <Category
//           setSelectedCategory={setSelectedCategory}
//           categories={categories}
//           handleMealClick={handleMealClick}
//         />
//         <FilterMeal meals={meals} handleMealClick={handleMealClick} />
//         <div ref={instructionsRef}>
//           <SelectMeal
//             handleCloseDetails={handleCloseDetails}
//             selectedMeal={selectedMeal}
//           />
//         </div> 
//       </div>
//     <main>
//         <Outlet />
//     </main>
//     </div>
//   );
// }
