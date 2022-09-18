import React from 'react';

const Brewery = ({ brewerly }) => {
  return (
    <div className='breweryContainer'>
      <b><div>BREWERLY</div></b>
      <div> <span>Brewery Type:{brewerly.brewery_type} </span>  </div>
      <div> <span>City:{brewerly.city} </span>  </div>
      <div> <span>County:{brewerly.county} </span>  </div>
      <div> <span>Latitude:{brewerly.latitude} </span>  </div>
      <div> <span>Longitude:{brewerly.longitude} </span>  </div>
      <div> <span>Name:{brewerly.name} </span>  </div>
      {/* <div> <span>Phone:{brewerly.phone} </span>  </div>
      <div> <span>Postal Code:{brewerly.postal_code} </span>  </div>
      <div> <span>State:{brewerly.state} </span>  </div>
      <div> <span>Street:{brewerly.street} </span>  </div> */}
      {brewerly.website_url && (<div> <span><a href={brewerly.website_url}>Website, click here!</a> </span>  </div>)}
    </div>
  )
};

export default Brewery;