import axios from "axios";
import openSocket from 'socket.io-client';

export default {
	// Uses NYTimes API to search for articles.
	searchArticles: function (query) {

		let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		let apikey = "?api-key=cd735801b5514e83b927e1bfdcced7af";
		let q = "&q=" + query.topic;
		let begin_date = "&begin_date=" + query.startYear + "0101";
		let end_date = "&end_date=" + query.endYear + "1231";

		url += apikey + q + begin_date + end_date;

		return axios.get(url);
	},
	// Gets all articles
	getArticles: function () {
		return axios.get("/api/articles");
	},
	// Gets the Article with the given id
	getArticle: function (id) {
		return axios.get("/api/articles/" + id);
	},
	// Updates the Article with the given id
	updateArticle: function (id, ArticleData) {
		return axios.put("/api/articles/" + id, ArticleData);
	},
	// Deletes the Article with the given id
	deleteArticle: function (id) {
		return axios.delete("/api/articles/" + id);
	},
	// Saves a Article to the database
	saveArticle: function (ArticleData) {
		return axios.post("/api/articles", ArticleData);
	}
};


const socket = openSocket();
function subscribeToTimer(cb) {
	socket.on('timer', timestamp => cb(null, timestamp));
	socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer };
