import axios from 'axios';

const KEY = 'AIzaSyDsYqbCtKJb5sTSjirOS1HPEfWQx87Rxv0';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY,
    },
});
