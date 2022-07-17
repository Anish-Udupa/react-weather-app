// API Keys are present in this file. Change them to your own keys.

// APIs used:
//	1. GeoDB Cities API: https://rapidapi.com/wirefreethought/api/geodb-cities/
//	2. OpenWeather API: https://openweathermap.org/

// These keys are deactivated. 

export const geoAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3e2c71b7d4mshc0ddc659f4adf18p173904jsnd400023d5ab9',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const geoAPI_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/";

export const weatherAPI_URL = "https://api.openweathermap.org/data/2.5/";

export const weatherAPI_APIKEY = "85681eec64ebabc1ab287a93e1711005"
