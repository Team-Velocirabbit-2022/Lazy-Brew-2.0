import React, { useState } from 'react';
import { connect } from 'react-redux';

import axios from 'axios'
import Hotel from './Hotel';

var geodist = require('geodist')

const mapStateToProps = (state) => ({});

const MainContainer = () => {

  const [hotelList, setHotelList] = useState([])
  const [hotelDone, setHotelDone] = useState(false)
  const [brewDone, setBrewDone] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  })
  const [isLoading, setIsLoading] = useState(true)

  const [hotelResultNumber, setHotelResultNumber] = useState(5)

  const getHotelData = (destinationId) => {
    let checkIn = '2022-10-02'
    let checkOut = '2022-10-10'
    const optionsProperties = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/properties/list',
      params: {
        destinationId: destinationId,
        pageNumber: '1',
        pageSize: hotelResultNumber,
        checkIn: checkIn,
        checkOut: checkOut,
        adults1: '1',
        sortOrder: 'starRatings',
        locale: 'en_US',
        currency: 'USD'
      },
      headers: {
        'X-RapidAPI-Key': 'ac1503ca17msh87ba44b85e4dc48p118ae8jsn253f64ec70de',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
    setIsLoading(false)


    axios.request(optionsProperties)
      .then((response) => {
        let propertiesResult = response.data.data.body.searchResults.results
        return propertiesResult
      })
      .then((apiHotelList) => {
        console.log(apiHotelList, 'apiHotelList')
        let finalHotelData = []
        for (let i = 0; i < apiHotelList.length; i++) {
          const optionsBreweries = {
            method: 'GET',
            url: `https://api.openbrewerydb.org/breweries?by_dist=${apiHotelList[i].coordinate.lat},${apiHotelList[i].coordinate.lon}&per_page=10`,
          }
          let oneProperty = apiHotelList[i]
          axios.request(optionsBreweries)
            .then((beerResponse) => {
              const breweryArray = []
              for (let j = 0; j < beerResponse.data.length; j++) {
                let distanceFromHotel = geodist({ lat: oneProperty.coordinate.lat, lon: oneProperty.coordinate.lon }, { lat: beerResponse.data[j].latitude, lon: beerResponse.data[j].longitude })
                if (distanceFromHotel > 2) {
                  break
                }
                // beerResponse.data['showHotel'] = true
                breweryArray.push(beerResponse.data[j])
                // console.log(beerResponse, 'beerResponse')
              }
              oneProperty.breweryList = breweryArray
              oneProperty.breweryListLength = breweryArray.length
              finalHotelData.push(oneProperty)
              setHotelList(current => [...current, oneProperty])
            })
        }
        return finalHotelData.length
      })
      .then((finalData) => {
        setIsLoading(true)
      })
      .catch((e) => {
        console.error(e, 'hotels not compelte')
      })
  }

  return (
    <div id="main_wrapper">

      <h1>Lazy Brew</h1>
      <div>
        <select onChange={(e) => getHotelData(e.target.value)}>
          <option value={'1506246'}>New York</option>
          <option value={'1439028'}>Los Angeles</option>


          {/* need to test these */}
          <option value={'1493604'}>San Francisco</option>

          <option>Coming to a city near you</option>
          {/*<option value={'198689'}>San Diego</option>
          <option value={'116889'}>Boston</option>
          <option value={}>Asheville</option>//TODO: finish hardcoding destination IDs
          <option value={}>Lexington</option>
          <option value={}>Portland</option>
          <option value={}>Grand Rapid</option>
          <option value={}>Boulder</option>
          <option value={}>Fort Collins</option>
          <option value={}>Houston</option>*/}
        </select>
        <button onClick={(e) => setHotelDone(true)}>See hotels</button>

      </div>
      <div id="hotel_brewery_wrapper">
        {isLoading || <>Loading...</>}

        {hotelDone && <Hotel
          setHotelList={setHotelList}
          hotelList={hotelList}
          hotelDone={hotelDone}
          brewDone={brewDone}
          setBrewDone={setBrewDone}
          setHotelDone={setHotelDone}
          isLoading={isLoading}
        />}

      </div>

    </div>
  );

}

export default connect(mapStateToProps, null)(MainContainer);