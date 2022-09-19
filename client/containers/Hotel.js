import React, { useState, useEffect } from 'react';
import Brewery from './Brewery';
import axios from 'axios'
const Hotel = ({ hotelList, setBrewDone, brewDone }) => {

  /*
  *** working on state management/loading api process to be more clean ***
  1) we need a button for hide or show on HOTEL
  2) we need a button for hide or show on BREWERY
  3) map showing
  4) slider
  */
  const [exclusionList, setExclusionList] = useState([])
  const [specificHotel, setSpecHotel] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  })

  useEffect(() => {
    axios.get('http://localhost:3000/api')
      .then((dbResponse) => {
        let exclusionListPush = []
        for (let i = 0; i < dbResponse.data.length; i++) {
          exclusionListPush.push(dbResponse.data[i].nameOfHotel)
        }
        setExclusionList(exclusionListPush)
      })
      .catch((e) => {
        console.error('error is here')
      })
  }, [])

  function hideHotel(name, i) {
    // setState to change / test to see if it will hide or show
    setSpecHotel(prevHotels => ({ ...prevHotels, [i]: !specificHotel[i] }));
    // try {
    //   
    //   axios.post('http://localhost:3000/api', {
    //     nameOfHotel: name,
    //     action: 'exclude'
    //   })
    // } catch (err) {
    //   console.log(err, 'err')
    // }
  }

  return (
    <div className='hotelContainer'>
      Hotel Placeholder
    </div >,
    <div>
      {(<div> <span>Query Results: </span> </div>,
        hotelList.sort((a, b) => {
          return (a.breweryListLength > b.breweryListLength ? -1 : 1)
        })
          .filter((hotel) => !exclusionList.includes(hotel.name))
          .map((ele, i) => {
            if(specificHotel[i]){
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
                <button onClick={(e) => { hideHotel(name, i) }}>Hide hotel</button>
                <button id={i} onClick={(e) => { setBrewDone(prevBrew => ({ ...prevBrew, [i]: !brewDone[i] })) }}>
                  {!brewDone[i] && ('Click me to show breweries')}
                  {brewDone[i] && ('Click me to hide breweries')}
                </button>
                {brewDone[i] && (<div>

                  {ele.breweryList.map((brewery, j) => {
                    return (
                      <Brewery key={`Brewery ${j}`} brewery={brewery} />
                    )
                  })}
                </div>)}   
              </div>
            )}
            
          }))}
          
    </div>
  )
};

export default Hotel;