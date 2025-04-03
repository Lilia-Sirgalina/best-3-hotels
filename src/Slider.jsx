import { data } from "./data";

function Slider({hotelItem, hotels, previous, next, add}) {

    const {id, hotel, image, description, sourse} = hotelItem;

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