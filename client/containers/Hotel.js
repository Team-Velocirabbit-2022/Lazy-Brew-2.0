import React from 'react';

const Hotel = ({props}) => {
  return (
      <div className='hotelContainer'>Hotel Placeholder
        <div> <span>Name: </span> </div>
    {props.length != 0 && props.map((ele) => {
      <div>
      {ele.name}
      </div>
    })}
      </div>
  )
};

export default Hotel;