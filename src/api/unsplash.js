import axios from 'axios';

const APIKEY = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

export default axios.create({
    baseURL: 'https://api.unsplash.com/photos/',
    headers: {
        "Authorization": 'Client-ID ' + APIKEY,
        'Content-Type': 'application/json'
    },
});
