import CentralHeader from '../components/CentralHeader';
import Recipes from '../components/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <CentralHeader />
      <div className='body-cont'>
        <Recipes></Recipes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home;