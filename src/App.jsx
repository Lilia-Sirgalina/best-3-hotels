import { useState } from 'react'
import { data } from './data'
import './App.css'
import Swal from 'sweetalert2';

function App() {

  const[hotels, setHotels] = useState(0);
  const {id, hotel, image, description, sourse} = data[hotels];

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

  
  const [tophotels, setTopHotels] = useState([]);
  
  const add = (hotels) => {
    if (tophotels.length >= 3) {  
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡El TOP-3 de hoteles ya ha sido elegido!",        
      });          
      return;
    }
  
    if (tophotels.some(hotel => hotel.id === data[hotels].id)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Este hotel ya está en el TOP-3!",        
      });      
      return;
    }
  
    setTopHotels([...tophotels, data[hotels]]);

  }


  const removeHotel = (id) => {
    let remove =tophotels.filter(hotel => hotel.id !== id);
    setTopHotels(remove);    
  }

  return (
    <>

    <div className='header'>
      <h1>HOTELES CON ENCANTO EN CATALUÑA</h1>
    </div>    


    <div className='header'>
        <h2>Lista de Hoteles</h2>
    </div>

    <div className='container'>

      <div className='line'>
        <h3 className='id-header'>{id} - {hotel}</h3>
      </div>

      <div className='image'>
        <img className='img-hotel' src={image} alt="hotel picture" width="500px" />
      </div>

      <div className='description'>
        <p>{description}</p>
        <p>Reservar: <a href={sourse} target='_blank'>pagina web del hotel</a></p>
      </div>

      <div className='buttons'>
        <button className='btn' onClick={previous}>Anterior</button>
        <button className='btn' onClick={() => add(hotels)}>Añadir al TOP-3</button>
        <button className='btn' onClick={next}>Siguiente</button>
      </div>      
      
    </div>  



    <div className='top-3'>
      <div className='header'>
        <h2 className='green'>Tus top-3 hoteles</h2>
      </div>


      <div className='top-container'>
      {tophotels.map(item => {
        const {id, hotel, image, description, sourse} = item;

        return(   
        <div className='top-hotel' key={id}>          

          <div className='top-line'>
            <h3 className='id-top'>{item.hotel}</h3>
          </div>

          <div className='top-image'>
            <img src={item.image} alt="hotel picture" width="300px" />
          </div>

          <div className='top-description'>
            <p className='top-p'>{item.description}</p>
            <p>Reservar: <a href={item.sourse} target='_blank'>pagina web del hotel</a></p>
          </div>

          <div className='top-buttons'>            
            <button className='btn' onClick={() => removeHotel(id)}>Eliminar</button>            
          </div>      

        </div>
        )
      })
      }
      </div>
      
    </div>  
     
    </>
  )
}

export default App