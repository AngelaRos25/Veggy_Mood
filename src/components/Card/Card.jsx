import { Link } from "react-router-dom";

// componenti
import Badge from "../Badge/Badge";

// css
import "../Card/Card.css";

/* eslint-disable react/prop-types */
function Card({ id, image, title, vegan, vegetarian, glutenFree, dairyFree, veryHealthy }) {
  return (
    <div className="card-box" key={id}>
      <img className="image-recipe" src={image} alt={title} />
      <Badge
        vegan={vegan}
        vegetarian={vegetarian}
        glutenFree={glutenFree}
        dairyFree={dairyFree}
        veryHealthy={veryHealthy}
      />
      <h2>{title}</h2>
      <div className="button-box">
        <Link to={`/Veggy_Mood/search/recipe/${id}`}>
          <button>View Recipe</button>
        </Link>
      </div>
    </div>
  )
}

export default Card