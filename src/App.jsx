import { useState } from 'react'
import { data } from './data'
import './App.css'

function App() {

  const[hotels, setHotels] = useState(0);
  const {id, hotel, image, description, showMore, sourse} = data[hotels];
  
  const [tophotels, setTopHotels] = useState(0);
  
  const previous = () => {
    setHotels(hotels => {
      hotels--;
      if(hotels<0) {
      hotels = data.length-1;
    }
    return hotels;
  })  
  }

  const next = () => {
    setHotels(hotels => {
      hotels++;
      if(hotels>data.length-1) {
      hotels = 0;
    }
    return hotels;
  })  
  }
  

  return (
    <>

    <div className='header'>
      <h1>HOTELES CON ENCANTO EN CATALUÑA</h1>
    </div>

    <div className='top-3'>
      <div className='header'>
        <h2>Tus top-3 hoteles</h2>
      </div>

      <div className='top-container'>

        <div className='top-hotel'>
          {/* <h3 className='top-header'>Tus top-3 hoteles</h3> */}

          <div className='top-line'>
            <h3 className='id-top'>{hotel}</h3>
          </div>

          <div className='top-image'>
            <img src={image} alt="hotel picture" width="300px" />
          </div>

          <div className='top-description'>
            <p className='top-p'>{description}</p>
            <p>Reservar: <a href={sourse} target='_blank'>pagina web del hotel</a></p>
          </div>

          <div className='top-buttons'>            
            <button className='btn'>Eliminar</button>            
          </div>      

        </div>        
      </div>
    </div>

    <div className='header'>
        <h2>Lista de Hoteles</h2>
    </div>

    <div className='container'>

      <div className='line'>
        <h3 className='id-header'>{id} - {hotel}</h3>
      </div>

      <div className='image'>
        <img src={image} alt="hotel picture" width="500px" />
      </div>

      <div className='description'>
        <p>{description}</p>
        <p>Reservar: <a href={sourse} target='_blank'>pagina web del hotel</a></p>
      </div>

      <div className='buttons'>
        <button className='btn' onClick={previous}>Anterior</button>
        <button className='btn'>Añadir al TOP-3</button>
        <button className='btn' onClick={next}>Siguiente</button>
      </div>      
      
    </div>    
     
    </>
  )
}

export default App


{/* 
  const [gifts, setGifts] = useState(data);
  
  const removeItem = (id) => {    
    let newGifts = gifts.filter(gift => gift.id !== id);    
    setGifts(newGifts)
  }

  
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
          <p>Reservar: <a href={sourse}>pagina web del hotel</a></p>          
        </div>

        <div className='button'>
          <button>AÑADIR A TOP 3</button>          
        </div>

      </div>
      )
    })} */}