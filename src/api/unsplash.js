import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID d273064080f10ad81119c6e30ae6dac4964bfc53e88d8123e63a602cb00b5527'
    }
});
