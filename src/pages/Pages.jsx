import { Route, Routes } from "react-router-dom";

// componenti
import Home from "./Home";
import Searched from "./Searched";
import ShowRecipeDetails from "./ShowRecipeDetails";

function Pages() {
  return (
    <Routes>
      <Route path="/Veggy_Mood/" element={<Home />} />
      <Route path="/Veggy_Mood/search/:search" element={<Searched />} />
      <Route path="/Veggy_Mood/search/recipe/:id" element={<ShowRecipeDetails />} />
    </Routes>
  )
}

export default Pages; 