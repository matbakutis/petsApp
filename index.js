require('./db/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const petController = require('./controllers/petController')


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/', express.static('public'));
app.use('/pets/', petController);


app.listen(3000, ()=>{
	console.log("port 3000 reporting for duty");
});