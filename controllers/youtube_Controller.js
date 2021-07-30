const axios = require('axios')
class YoutubeController {
    static fetchSearchedMovie(req, res, next){
        const {part, q, key, maxResults} = req.query
        axios({
            method: "GET",
            url : `https://youtube.googleapis.com/youtube/v3/search?part=${part}&q=${q}&key=${key}&maxResults=${maxResults}`   
        })
        .then(({data}) =>{
            const payload = data.items.map(data =>{
                return {videoId:data.id.videoId, title:data.snippet.title, channelTitle:data.snippet.channelTitle, url: data.snippet.thumbnails.default.url, description: data.snippet.description, publishTime: data.snippet.publishTime};  
            })
            res.status(200).json(payload);
        })
        .catch(err =>{
            next({
                name: "InternalServerError",
                message: err.message
            })
        })
    }
    static fetchPopularVideos(req, res, next){
        console.log("HALO")
        axios({
            method: "GET",
            url : `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyCuhb2VhU_LHs5z5dSrWoNJiBHPg0jWMM8&maxResults=18`   
        })
        .then(({data}) =>{
            // const payload = data.items.map(data =>{
            //     return {videoId:data.id.videoId, title:data.snippet.title, channelTitle:data.snippet.channelTitle, url: data.snippet.thumbnails.default.url, description: data.snippet.description, publishTime: data.snippet.publishTime};  
            // })
            const payload = data.items.map(data =>{
                return {videoId:data.id, title:data.snippet.title, channelTitle:data.snippet.channelTitle, url: data.snippet.thumbnails.default.url, description: data.snippet.description, publishTime: data.snippet.publishTime}
            })
            res.status(200).json(payload);
        })
        .catch(err =>{
            next({
                name: "InternalServerError",
                message: err.message
            })
        })
    }
}

module.exports = YoutubeController