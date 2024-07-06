import { Link } from "react-router-dom";

// componenti
import Badge from "./Badge";


// eslint-disable-next-line react/prop-types
function Card({ id, image, title, vegan,vegetarian, glutenFree,dairyFree,veryHealthy }) {
  return (
    <div key={id} className='recipe-container'>
      <Link to={`RecipeDetails/${id}`}>
        <img className='recipe-img' src={image} alt="" />
        <Badge
                vegan={vegan}
                vegetarian={vegetarian}
                glutenFree={glutenFree}
                dairyFree={dairyFree}
                veryHealthy={veryHealthy} />
        <h2>{title}</h2>
      </Link>
    </div>
  )
}


export default Card