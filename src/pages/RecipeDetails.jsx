import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import vegan from '../image/icon/vegan.png';
import vegetarian from '../image/icon/vegetarian.png';
import gluten from '../image/icon/gluten-free.png';
import dairy from '../image/icon/dairy-free.png';
import healthy from '../image/icon/heartbeat.png'



import Header from "../components/Header";
import Footer from "../components/Footer";

import '../styles/RecipeDetails.css'

function RecipeDetails() {
  let params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {

    const getDetails = async () => {
      const api = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
      const recipeData = api.data;
      console.log(recipeData)
      setDetails(recipeData);
    }
    getDetails();
  }, [params.name]);

  // const badge = vegan || glutenFree || dairyFree;
  return (
    <div className="app2">
      <Header />
      <div className="box-details">
        <div className="header-recipe-box">
          <div className="box-title-badge">
            <h1>{details.title}</h1>
            <div className="badge">
              <ul>
                {details.vegan && (
                  <div>
                    <img src={vegan} alt="" />
                    <li>Vegan</li>
                  </div>
                )}
                {details.vegetarian && (
                  <div>
                    <img src={vegetarian} alt="" />
                    <li>Vegetarian</li>
                  </div>
                )}
                {details.glutenFree && (
                  <div>
                    <img src={gluten} alt="" />
                    <li>Gluten Free</li>
                  </div>
                )}
                {details.dairyFree && (
                  <div>
                    <img src={dairy} alt="" />
                    <li>Dairy Free</li>
                  </div>
                )}
                {details.veryHealthy && (
                  <div>
                    <img src={healthy} alt="" />
                    <li>Very Healthy</li>
                  </div>
                )}
              </ul>
            </div>
          </div>

          <img className="img-recipe" src={details.image} alt="" />
        </div>
        <div className="body-recipe">
          <div className="box-summ-ing">
            <div className="summary-recipe">
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </div>
            <div className="ingredient">
              <h2>Ingredients:</h2>
              <ol>
                {details.extendedIngredients?.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="instructions">
            <h2>Instructions:</h2>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }} className="text-instructions"></p>
          </div>
        </div>
        <div className="box-return">
          <ul>
            <li>
              <Link to={"/Veggy_Mood/"}>
                <BsArrowLeftSquareFill />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RecipeDetails;