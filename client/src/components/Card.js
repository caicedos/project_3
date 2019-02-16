import React from  'react';


const Card = (props) =>{

    
    const {name, pictureUrl, price, Button} = props;

    return(
        // https://m.media-amazon.com/images/I/414kp9JekcL._SR500,500_.jpg
        
            <div className="card card-sm">
                <img src={pictureUrl} className="card-img-top img-thumbnail" alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price}</p>
                        <Button />
                        
                    
                     </div>
             </div>
       
            // <div className="card">
            //     <img src={pictureUrl} className="card-img-top img-thumbnail" alt={name}/>
            //     <div className="card-body d-flex flex-column">
            //     <h5 className="card-title">{name}</h5>
            //     <p className="card-text">${price}</p>
            //     <Button />
            //     </div>
            // </div>

    )
}

export default Card;