import React, { useState, useEffect } from 'react';
import Brewery from './Brewery';
import { Button } from '@mui/material';
import axios from 'axios'
const Hotel = ({ hotelList, setBrewDone, brewDone }) => {

  /*
  *** working on state management/loading api process to be more clean ***
  1) we need a button for hide or show on HOTEL
  2) we need a button for hide or show on BREWERY
  3) map showing
  4) slider
  */
  const [exclusionList, setExclusionList] = useState([]);

  //hook to hide/show hotels after button is clicked
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

  //handler for user to hide hotels not interested in
  function hideHotel(name, i) {
    // setState to change / test to see if it will hide or show
    setSpecHotel(prevHotels => ({ ...prevHotels, [i]: !specificHotel[i] }));
    try {

      axios.post('http://localhost:3000/api', {
        nameOfHotel: name,
        action: 'exclude'
      })
    } catch (err) {
      console.log(err, 'err')
    }
  }

  return (
    <div>
      {/* sort the hotels by number of breweries with vacinity */}
      {hotelList.sort((a, b) => {
        return (a.breweryListLength > b.breweryListLength ? -1 : 1)
      })
        .filter((hotel) => !exclusionList.includes(hotel.name))
        .map((ele, i) => {
          if (specificHotel[i]) {
            return (
              <div className="ContainerMainContainer">
          <div id="main_wrapper">
          <div id="allHotelsWrapper">
              <div className='hotelWrapper' key={i}>
              <Button className="hide-button" onClick={(e) => { hideHotel(ele.name, i) }}>X</Button>
              <div className='hotel header'><h2>{ele.name}</h2></div>
                  <div className='hotel content'><img src={ele.optimizedThumbUrls['srpDesktop']}></img></div>
                <div className='hotelGridContainer'>
                <div className='hotel content'><b>Hotel Rating:  </b>{ele.starRating}/5</div>
                  {/* <div className='hotel content'></div> */}
                  <div className='hotel content'><b>Address:  </b>{ele.address.streetAddress ? (<div className='hotel content'>{ele.address.streetAddress}, {ele.address.locality}, {ele.address.region}, {ele.address.postalCode}</div>) : (<div className='hotel content'>No address provided</div>)}</div>
                  {/* if there's an address, display it */}
                  <div className='hotel content'><b>Nearby Breweries:   </b>{ele.breweryListLength}</div>
                </div>
                <Button id={i} onClick={(e) => { setBrewDone(prevBrew => ({ ...prevBrew, [i]: !brewDone[i] })) }}>
                  {!brewDone[i] && ('                 show breweries nearby')}
                  {brewDone[i] && ('                 hide breweries')}
                </Button>
                {brewDone[i] && (<div>

                  {ele.breweryList.map((brewery, j) => {
                    return (
                      <Brewery key={`Brewery ${j}`} brewery={brewery} />
                    )
                  })}
                </div>)}
                </div>
               </div>

              </div>
              </div>
              
            )
          }

        })}

        

    </div>
  )
};

export default Hotel;