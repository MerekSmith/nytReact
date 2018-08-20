
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3001;
// const socketPORT = process.env.PORT || 3002;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/articles");

// Start the API server
server.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});





// io.on('connection', (client) => {
// 	client.on('subscribeToTimer', (interval) => {
// 		console.log('timer interval', interval, client.id);
// 		setInterval(() => {
// 			client.emit('timer', new Date());
// 		}, 1000);
// 	});

// 	client.on('article saved', (article) => {
// 		io.emit('alert', article);
// 	});

// });

// const nsp = io.of('/my-namespace');
// nsp.on('connection', function (socket) {
// 	console.log('someone connected', socket.id);
// 	nsp.emit('hi', 'Hello 1a2b3c!: ' + socket.id);
// 	socket.emit('unique message', socket.id);
// 	socket.on('disconnect', function () {
// 		console.log(socket.id + ' disconnected');
// 	});
// });

const room2 = io.of('/1a2b3c');
room2.on('connection', function (socket) {
	console.log('someone connected', socket.id);
	room2.emit('hi', 'Hello 1a2b3c!: ' + socket.id);
	socket.emit('unique message', socket.id);
	socket.on('disconnect', function () {
		console.log(socket.id + ' disconnected');
	});
});

// let timer = 30;
// const intervalId = setInterval(() => {
// 	if (timer === 0) {
// 		timer = "Time's Up!!"
// 		clearInterval(intervalId);
// 	}
// 	io.emit('countdown', timer)
// 	timer--;
// }, 1000);