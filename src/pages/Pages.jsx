import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Searched from "./Searched";
import RecipeDetails from "./RecipeDetails";

function Pages() {
  return (
    <Routes>
      <Route path="/Veggy_Mood/" element={<Home />} />
      <Route path="Veggy_Mood/searched/:search" element={<Searched />} />
      <Route path="Veggy_Mood/RecipeDetails/:name" element={<RecipeDetails />} />
    </Routes>
  )
}

export default Pages; 