import { useState } from 'react'
import { data } from './data'
import './App.css'

function App() {

  const[hotels, setHotels] = useState(data);
  console.log(hotels)
  

  return (
    <>
    <div className='container'>
      <h1>HOTELES CON ENCANTO EN CATALUÑA</h1>
    </div>

    {hotels.map(item => {
      const {id, stars, hotel, image, description, showMore, sourse} = item;

      return(
      <div  key={id}>
        <div className='container'>
          
          <h2>{hotel}</h2>
          <h2>{stars}</h2>
          <img src={image} alt="hotel room" width="500px" />
          <p>{description}</p>          
        </div>

        <div className='button'>   
          <a href={sourse}>RESERVAR</a>       
          <button>ELIMINAR</button>
        </div>

      </div>
      )
    })}


    
     
    </>
  )
}

export default App
