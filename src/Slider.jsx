import { data } from "./data";
import Swal from 'sweetalert2';
import { useState } from "react";


function Slider({tophotels, setTopHotels}) {  

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

    return(
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
    )
}

export default Slider;