import SearchBar from '../components/SearchBar';
import Recipes from '../components/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className='body-cont'>
        <Recipes></Recipes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home;