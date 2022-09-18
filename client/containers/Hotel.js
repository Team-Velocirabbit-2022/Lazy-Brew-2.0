import React from 'react';
import Brewery from './Brewery';
const Hotel = ({ hotelList, hotelDone, brewDone, setBrewDone, setHotelDone }) => {
  // 1) onClick to invoke a function(with lat/long as arguments) 
  //2) that said function will use the api, given the coordinates (input from function) 
  //3) set state 
  //4) pass down to breweries component

  return (
    <div className='hotelContainer'>Hotel Placeholder
      <div> <span>Query Results: </span> </div>
      <button onClick={(e) => setHotelDone(true)}>See hotels</button>
      {hotelDone && hotelList.map((ele, i) => {
        return (
          <div key={i}>
            <b><h1>HOTEL</h1></b>
            i: {i}
            Name: {ele.name}
            # of pubs: {ele.breweryListLength}
            Address: {ele.address['streetAddress']}
            City: {ele.address['locality']}
            Postal Code: {ele.address['postCode']}
            State: {ele.address['region']}
            Latitude: {ele.coordinate['lat']}
            Longitude: {ele.coordinate['lon']}

            Rating: {ele.guestReviews['rating']}
            Unformatted Rating: {ele.guestReviews['unformattedRating']}
            Total: {ele.guestReviews['total']}
            Scale: {ele.guestReviews['scale']}
            Badge: {ele.guestReviews['badge']}
            Scarcity: {ele.messaging['scarcity']}
            Price: {ele.ratePlan['price']['current']}
            <div>
              <img src={ele.optimizedThumbUrls['srpDesktop']}></img>
            </div>
            <button onClick={(e) => setBrewDone(true)}>Click me to see breweries</button>
            {/* <button onClick={(e) => console.log('you clicked me!')}>Click me to see breweries</button> */}
            <div>

              {ele.breweryList.map((brewerly, j) => {
                return (
                  <Brewery key={`Brewery ${j}`} brewerly={brewerly} />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Hotel;