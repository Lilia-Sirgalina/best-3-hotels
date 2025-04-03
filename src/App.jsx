import { useState } from 'react'
import { data } from './data'
import './App.css'

import Swal from 'sweetalert2';
import Slider from './Slider';
import TopThree from './TopThree';


function App() {

  const[hotels, setHotels] = useState(0);      

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

    <Slider hotelItem={data[hotels]} hotels={hotels} previous={previous} next={next} add={add} />
    <TopThree tophotels={tophotels} removeHotel={removeHotel} />
     
    </>
  )
}

export default App