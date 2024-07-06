import SearchBar from '../components/SearchBar';
import Recipes from '../components/Recipes';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <div id='section-2' className='body-cont'>
        <Recipes></Recipes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home;