import { useState,useEffect } from 'react';
import { Route,Routes, useParams} from 'react-router-dom';
import Home from './component/home';
import Banner from './component/banner';
import PokemonDetail from './component/pokemonDetail';
import Landing from './component/landing';
import Test from './component/test';
import Footer from './component/footer';
import './css/App.css';

function App() {

  const [data, setData] = useState();
  const [gen, setGen] = useState(1);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [])

  function Child(){
    const {Gen, No , Name} = useParams();
    return (<PokemonDetail data={data} Gen={Gen} No={No} Name={Name}/>)
  }


  return (
    <div className="App">

      {/* Nav */}
      <Routes>
        <Route path='/home' element={<Banner/>}/>
        <Route path='/pokemon/:Gen/:No/:Name' element={<Banner/>}/>
      </Routes>

      {/* Content */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home data={data} setData={setData} gen={gen} setGen={setGen}/>} />
        <Route path='/pokemon/:Gen/:No/:Name' element={<Child/>} />
        <Route path='/test' element={<Test/>} />
      
      </Routes>  
      <Footer/>
    </div>
  );
}
// Hello
export default App;
