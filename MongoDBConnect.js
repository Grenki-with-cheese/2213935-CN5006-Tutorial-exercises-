mongoose = require("mongoose");
//where 'mongoose' is used, the package mongoose will be used

const MONG_URL = "mongodb://localhost:27017/BooksData"; //BooksData is the name of the database in a mongodb server that will store the data of the books
mongoose.connect(MONG_URL, { useUnifiedTopology: true, useNewUrlParser: true }); //this will initiate connection with mongoDB
//useFindAndModify:false is used to avoid depreciation warnings for mongodb commands
//the constant can be called anything but it's best to provide readability and comprehension

const db = mongoose.connection;
//db here is a variable used to access mongodb database and will be exported at the end

db.on("error", function (err) {
  console.log("Error occured" + err);
});
//this command will display an error and code of error when connection goes wrong

db.once("connected", function () {
  console.log("Current Version of Mongoose Installed " + mongoose.version);
  console.log("connection is successful to " + MONG_URL);
});
//db.once listens to an event(in this case connection to a server) only once
//this is so that the message is only seen on initial run, mongoose.version displays the version
//MONGO URL is saved as a string that is equal to the address of the database

module.exports = db;
//exporting database to be used
