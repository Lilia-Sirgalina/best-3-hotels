import { useState } from 'react'
import './App.css'
import Slider from './Slider';
import TopThree from './TopThree';


function App() {

  
  const [tophotels, setTopHotels] = useState([]);    

  return (
    <>

    <div className='header'>
      <h1>HOTELES CON ENCANTO EN CATALUÑA</h1>
    </div> 

    <div className='header'>
        <h2>Lista de Hoteles</h2>
    </div>

    <Slider tophotels={tophotels} setTopHotels={setTopHotels}/>
    <TopThree tophotels={tophotels} setTopHotels={setTopHotels} />
     
    </>
  )
}

export default App;