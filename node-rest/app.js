var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tvshows', function (err, res) {
    if (err) throw err;
    console.log('Connected to Database');
});
require('./models/tvshow');
require('./controllers/tvshows');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/tvshow');
var TVShowCtrl = require('./controllers/tvshows');

var router = express.Router();
router.get('/', function (req, res) {
    res.send("Hello World!");
});

app.use(router);

// API routes
var tvshows = express.Router();

tvshows.route('/tvshows')
    .get(TVShowCtrl.findAllTVShows)
    .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
    .get(TVShowCtrl.findById)
    .put(TVShowCtrl.updateTVShow)
    .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);


app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});
