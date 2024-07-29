import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// componenti
import MainCont from "../components/MainCont/MainCont";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";
import FootButton from "../components/FootButton/FootButton";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSearched = async (name) => {
      try {
        const api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&addRecipeInformation=true&query=${name}&number=10`);
        const data = api.data;
        console.log(data);
        setSearchedRecipes(data.results)
      } catch (error) {
        console.log("opss!, there is an error!")
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    getSearched(params.search);
  }, [params.search]);


  return (
    <>
      <MainCont />
      <div className="content-box">
        <h2 className="title">Recipes with&nbsp;
          <span>{params.search}</span>
        </h2>
        {isLoading === true && (
          <div>
            <Loader />
          </div>
        )}
        <div className="box-recipe">
          {isLoading === false && searchedRecipes.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                id={item.id}
                vegan={item.vegan}
                vegetarian={item.vegetarian}
                dairyFree={item.dairyFree}
                glutenFree={item.glutenFree}
                veryHealthy={item.veryHealthy}
              />
            )
          })}
        </div>
      </div>
      <FootButton />
      <Footer />
    </>
  )
}

export default Searched