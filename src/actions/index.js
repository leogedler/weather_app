import axios from 'axios';

const API_KEY = '5d1462ea9c1fc173bdcf732898557236';
const ROUTE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROUTE_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}