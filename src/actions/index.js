import axios from 'axios';

const API_KEY = '5d1462ea9c1fc173bdcf732898557236';
const ROUTE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = async (city) => {
    const url = `${ROUTE_URL}&q=${city},us`;
    let request;
    let type;
    try{
        request = await axios.get(url);
        type = FETCH_WEATHER;
    }catch(error){
        type = 'ERROR_FETCHING_WEATHER';
        console.log('error', error);
    }
    console.log('request', request);

    return {
        type: type,
        payload: request
    };
}