import { Route, Routes } from "react-router-dom";

// componenti
import Home from "./Home";
import Searched from "./Searched";
import ShowRecipeDetails from "./ShowRecipeDetails";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search/:search" element={<Searched />} />
      <Route path="search/recipe/:id" element={<ShowRecipeDetails />} />
    </Routes>
  )
}

export default Pages; 