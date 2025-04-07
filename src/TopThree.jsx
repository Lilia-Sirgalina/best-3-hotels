
function TopThree({tophotels, setTopHotels}) {
    
    const removeHotel = (id) => {
        let remove = tophotels.filter(hotel => hotel.id !== id);
        setTopHotels(remove);    
      }

    return(
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
            })}
        </div>
    </div>  
    )
}

export default TopThree;