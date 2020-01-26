const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const port = process.env.PORT || 5000


// process.env.NODE_ENV !== 'production' && require('dotenv').config();
//require api route
const productApi = require('./api/product');
// database
mongoose.connect('mongodb://localhost:27017/product', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});
// error messages from db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoDb connection error'));

// initialize express
const app = express();

app.use(cors());

// express body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express middleware
// app.use(function(req, res, next) {
// 	next();
// });

app.get('/', (req, res) => {
	res.send('node assessment');
});
// routes setup
app.use('/product', productApi);

app.listen(port, (err) => {
	if (err) throw err;
	console.log('=> server now running on port 5000');
});

module.exports = app;
