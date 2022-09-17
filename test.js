const axios = require("axios");

function getHotel() {
    const optionsHotels = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
        params: { query: 'seattle', locale: 'en_US', currency: 'USD' },
        headers: {
            'X-RapidAPI-Key': '213bf8eeb6mshabac5e8f6740a32p17141djsnbf46e85640b0',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };

    axios.request(optionsHotels)
        .then((response) => {
            const optionsBrewery = {
                method: 'GET',
                url: `https://api.openbrewerydb.org/breweries?by_dist=${response.data.suggestions[1]['entities'][0]['latitude']}, ${response.data.suggestions[1]['entities'][0]['longitude']}&per_page=3`,
            };
            // console.log(response.data.suggestions[1]['entities'][0]['latitude'], response.data.suggestions[1]['entities'][0]['longitude'])
            console.log(response.data.suggestions[1]['entities'], 'hotel response')
            axios.request(optionsBrewery).then(function (response) {
                console.log(response.data, 'brewery response')
                // console.log(response.data.suggestions[0]['entities']);
                // console.log(response.data, 'this is working?')
                // console.log(response.data.length)
            }).catch(function (error) {
                console.error(error);
            });
        }
        )
}

getHotel()