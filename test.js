// import axios from 'axios'
const axios = require("axios");

<<<<<<< HEAD
// function getHotel() {
//     const optionsHotels = {
//         method: 'GET',
//         url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
//         params: { query: 'seattle', locale: 'en_US', currency: 'USD' },
//         headers: {
//             'X-RapidAPI-Key': '213bf8eeb6mshabac5e8f6740a32p17141djsnbf46e85640b0',
//             'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
//         }
//     };

//     axios.request(optionsHotels)
//         .then((response) => {
//             const optionsBrewery = {
//                 method: 'GET',
//                 url: `https://api.openbrewerydb.org/breweries?by_dist=${response.data.suggestions[1]['entities'][0]['latitude']}, ${response.data.suggestions[1]['entities'][0]['longitude']}&per_page=3`,
//             };
//             // console.log(response.data.suggestions[1]['entities'][0]['latitude'], response.data.suggestions[1]['entities'][0]['longitude'])
//             console.log(response.data.suggestions[1]['entities'], 'hotel response')
//             axios.request(optionsBrewery).then(function (response) {
//                 console.log(response.data, 'brewery response')
//                 // console.log(response.data.suggestions[0]['entities']);
//                 // console.log(response.data, 'this is working?')
//                 // console.log(response.data.length)
//             }).catch(function (error) {
//                 console.error(error);
//             });
//         }
//         )
// }

// getHotel()

try {
=======
function getHotel() {

>>>>>>> dev
    const optionsHotels = {
    const options = {

        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
        params: { query: 'seattle', locale: 'en_US', currency: 'USD' },
        // params: { query: req.body.city, locale: 'en_US', currency: 'USD' },
        headers: {
            'X-RapidAPI-Key': '213bf8eeb6mshabac5e8f6740a32p17141djsnbf46e85640b0',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };

    axios.request(optionsHotels)
        .then((response) => {
            console.log(response.data.suggestions[1]['entities'], 'hotel response')
        }
        )
    // return next()
} catch (err) {
    // return next(
    //     createErr({
    //         method: 'getAllHotels',
    //         type: 'db query error',
    //         err,
    //     })
    // );
    console.log(err)
}



function distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    if (d > 1) return Math.round(d) + "km";
    else if (d <= 1) return Math.round(d * 1000) + "m";
    return d;
}

// console.log(distance(47.44534, -122.29181, 47.61016, -122.34651))