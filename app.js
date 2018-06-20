const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//load our static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.send('This is loaded on the server motherfucker')
})

app.get('/posts', function (req, res) {
    res.send('This is the posts page')
})

app.listen(4000, function() {
    console.log('server is listening on port 4000')
})