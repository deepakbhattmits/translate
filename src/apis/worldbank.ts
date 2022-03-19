import axios from 'axios';

export default axios.create({
    baseURL: `https://api.worldbank.org/v2/countries/NOR/indicators/NY.GDP.MKTP.KD.ZG?format=json`,
});