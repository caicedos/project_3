import React from  'react';


const Price = (props) =>{

    
  const {price} = props;
  
  return(

        
            <div className="price text-center" value={price}>
               {price}
            </div>
  )
    
}

export default Price;
