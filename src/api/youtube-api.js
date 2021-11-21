import  axios from "axios";

const KEY = "AIzaSyD6tGnxdSyz43OceJnV9iZN3yDN7dVA3Qk";


const instance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        key: KEY,
    }
});

export const YouTubeAPI = {
    getVideo(searchText, maxResults,  order) {
        return instance.get('/search', {
            params: {
                q: searchText,
                type: "video",
                maxResults: maxResults,
                order: order
            }
        })
    }
};

