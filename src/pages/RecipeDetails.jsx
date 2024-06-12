import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BsArrowLeftSquareFill } from "react-icons/bs";

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

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="box-details">
          <div className="title-img">
            <div className="title-recipe">
              <h1>{details.title}</h1>
            </div>
            <div className="img-box">
              <img className="image" src={details.image} alt={details.recipe} />
            </div>
          </div>
          <div className="body-recipe">
            <div className="summary-recipe">
              <p dangerouslySetInnerHTML={{ __html: details.summary}}></p>
            </div>
            <div className="info-recipe">
              <div className="ingredient">
                <h2>Ingredients:</h2>
                <ol>
                  {details.extendedIngredients?.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ol>
              </div>
              <div className="instruction">
                <h2>Instructions:</h2>
                <div dangerouslySetInnerHTML={{ __html: details.instructions }} className="text-instructions"></div>
              </div>
            </div>
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
    </>
  )
}

export default RecipeDetails;