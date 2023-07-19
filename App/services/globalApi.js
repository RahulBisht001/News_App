import { create } from 'apisauce'

// define the api
const api = create({
    baseURL: 'https://newsapi.org/v2',
})

const api_key = '?country=us&apiKey=3d1949c8eb014edaaa5224381b59e264'


//? # Another way
// const getTopHeadlines = api.get('/top-headlines' + api_key)

const getTopHeadlines = async () => {
    try {
        const response = await api.get("/top-headlines" + api_key);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('----------------------------------------')
        console.log("Error from getTopHeadlines in globalApi")
        console.log(error);
        console.log('----------------------------------------')
        // Handle any errors that occurred during the request
    }
}

const getByCategory = async (category) => {
    try {
        const response = await api.get('/everything?q=' + category + '&apiKey=3d1949c8eb014edaaa5224381b59e264');
        const data = response.data;
        return data;
    } catch (error) {
        console.log('----------------------------------------')
        console.log("Error from getByCategory in globalApi")
        console.log(error);
        console.log('----------------------------------------')
        // Handle any errors that occurred during the request
    }
}


export default {
    getTopHeadlines,
    getByCategory
}