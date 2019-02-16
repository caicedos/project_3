import React from  'react';


const Card = (props) =>{

    
    const {name, pictureUrl, price, Button} = props;

    return(
       
        <div className="card card-sm mb-5">
            <img src={pictureUrl} className="card-img-top img-thumbnail" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <Button />
                </div>
        </div>
                        
    )
}
export default Card;