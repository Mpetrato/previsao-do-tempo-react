import axios from "axios"

const APIKEY = '7e506b7ccee77ac949d5241be91da952'
const BASE = 'https://api.openweathermap.org/data/2.5/weather?q='
export const api = {
    searchCity: async (city: string) => {
        let response = await axios.get(`${BASE}${city}&appid=${APIKEY}`);
        return response.data
    }, 
}