const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/kslreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
	{
	title: "Speaker Hughes appoints himself to Utah Inland Port Authority board",
	url: "?sid=46334305&nid=148&title=speaker-hughes-appoints-himself-to-utah-inland-port-authority-board",
	date: "2018-06-04T10:36:00Z"
	},
	{
	title: "Utahn charged with attempting to spy for China",
	url: "?sid=46334289&nid=148&title=utahn-charged-with-attempting-to-spy-for-china",
	date: "2018-06-04T10:26:00Z"
	},
	{
	title: "Trump calls off Eagles visit over anthem dispute",
	url: "?sid=46334299&nid=757&title=trump-calls-off-eagles-visit-over-anthem-dispute",
	date: "2018-06-04T10:21:00Z"
	}]
  

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
