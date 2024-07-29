// componenti
import Badge from "../Badge/Badge";

// icon
import { BiSolidTimer } from "react-icons/bi";
import { MdRoomService } from "react-icons/md";

// css
import "../DetailsCard/DetailsCard.css"

// eslint-disable-next-line react/prop-types
function DetailsCard({ image, vegan, vegetarian, glutenFree, dairyFree, veryHealthy, readyInMinutes, servings }) {
  return (
    <div className='details-card'>
      <img className="image-details-card" src={image} alt={image} />
      <Badge
        vegan={vegan}
        vegetarian={vegetarian}
        glutenFree={glutenFree}
        dairyFree={dairyFree}
        veryHealthy={veryHealthy} />
      <div className="details">
        <div className="details-minutes">
          <BiSolidTimer />
          <h3>Cooking Time: {readyInMinutes} minutes{""}</h3>
        </div>
        <div className="details-servings">
          <MdRoomService />
          <h3>Servings: {servings} diners {""}</h3>
        </div>
      </div>
    </div>
  )
}

export default DetailsCard