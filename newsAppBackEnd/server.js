const express = require('express')
const app = express()
const router = express.Router()
const request = require('request')
const apiKey = 'e308561e5e874740b52f50c04a019224'
const baseUrl = 'https://newsapi.org/v2/top-headlines'
const sources = 'bbc-news'

app.get('/', function (req, res, next) {
    request(baseUrl + "?sources=" + sources + "&apiKey=" + apiKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var json = JSON.parse(body);
            console.log(json);
            res.send(json);    // send some response here
        } else {
            console.log("There was an error: ") + response.statusCode;
            console.log(body);
            res.send("error")     // send some response here
        }
    });

});







app.listen(8081, () => console.log('Example app listening on port 8081!'))

