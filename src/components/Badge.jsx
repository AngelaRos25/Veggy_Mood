// css
import '../styles/Badge.css';
// images
import veg from '../image/icon/vegan.png';
import vegetarianIco from '../image/icon/vegetarian.png';
import gluten from '../image/icon/gluten-free.png';
import dairy from '../image/icon/dairy-free.png';
import healthy from '../image/icon/heartbeat.png'


// eslint-disable-next-line react/prop-types
function Badge({vegan, vegetarian, glutenFree, dairyFree, veryHealthy}) {

  return (
    <div className='badge'>
      <ul>
            {vegan ? (
              <div>
                <img src={veg} alt="" />
                <li>vegan</li>
              </div>
            ) : null}
            {vegetarian ? (
              <div>
                <img src={vegetarianIco} alt="" />
                <li>vegetarian</li>
              </div>
            ) : null}
            {glutenFree ? (
              <div>
                <img src={gluten} alt="" />
                <li>gluten free</li>
              </div>
            ) : null}
            {dairyFree ? (
              <div>
                <img src={dairy} alt="" />
                <li>dairy free</li>
              </div>
            ) : null}
            {veryHealthy ? (
              <div>
                <img src={healthy} alt="" />
                <li>very healthy</li>
              </div>
            ) : null}
          </ul>
        </div>
  )
}

export default Badge