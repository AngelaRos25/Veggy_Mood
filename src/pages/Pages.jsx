import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Searched from "./Searched";
import RecipeDetails from "./RecipeDetails";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipedetails/:name" element={<RecipeDetails />} />
    </Routes>
  )
}

export default Pages; 