// image
import veg from '../../image/icon/vegan.png';
import vegetarianIco from '../../image/icon/vegetarian.png';
import gluten from '../../image/icon/gluten-free.png';
import dairy from '../../image/icon/dairy-free.png';
import healthy from '../../image/icon/heartbeat.png'

// css
import "../Badge/Badge.css";

// eslint-disable-next-line react/prop-types
function Badge({ vegan, vegetarian, glutenFree, dairyFree, veryHealthy }) {
  return (
    <>
      <ul className='list'>
        {vegan ? (
          <div className='badge-box'>
            <img src={veg} alt="" />
            <li>vegan</li>
          </div>
        ) : null}
        {vegetarian ? (
          <div className='badge-box'>
            <img src={vegetarianIco} alt="" />
            <li>vegetarian</li>
          </div>
        ) : null}
        {glutenFree ? (
          <div className='badge-box'>
            <img src={gluten} alt="" />
            <li>glutenFree</li>
          </div>
        ) : null}
        {dairyFree ? (
          <div className='badge-box'>
            <img src={dairy} alt="" />
            <li>dairyFree</li>
          </div>
        ) : null}
        {veryHealthy ? (
          <div className='badge-box'>
            <img src={healthy} alt="" />
            <li>veryHealthy</li>
          </div>
        ) : null}
      </ul>
    </>
  )
}

export default Badge