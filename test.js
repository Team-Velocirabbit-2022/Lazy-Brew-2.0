const axios = require("axios");

function getHotel() {

    const optionsHotels = {
    const options = {

        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
        params: { query: 'new york', locale: 'en_US', currency: 'USD' },
        headers: {
            'X-RapidAPI-Key': '213bf8eeb6mshabac5e8f6740a32p17141djsnbf46e85640b0',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };

