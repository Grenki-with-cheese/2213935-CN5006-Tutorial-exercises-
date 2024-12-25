//CREATING THE SERVER
express = require("express"); //require express package
let Books = require("./BookSchema");
let mongoDbConnected=require('./MongoDBConnect')
const cors=require('cors');
//express is used for web applications and APIs in node js
var app = express();
//initialize an instance of an Express app
//BODY PARSER
//body parser reads incoming request bodies in a middleware
//it constructs req.body, a JS obj and parses data sent in HTTP request to make it usable for the app
var bodyparser = require("body-parser");
app.use(bodyparser.json());
//parses text as json
app.use(bodyparser.urlencoded({ extended: false }));
//parses text as URL encodedd data
app.use(cors());
console.log("BOOKS",Books)
//CRUDE operations on database, we use the model created in Schema.js for that

/* this one in particular:
const BookSchema=new mongoose.Schema({
    booktitle:{type:String,required:true},//required column in the schema
    PubYear:Number,
    Author:String,
    Topic:String,
    Format:String})
We'll create a variable that is defined by that model*/


/*********       GET methods      *********/
app.get('/',function(req,res){})
app.get('/about',function(req,res){res.send(
  "MongoDB express React and mongoose app, React runs in another application")})

  Books.countDocuments().exec().then(count=>{
  console.log("Total documents count before addition: ", count)})

app.get('/allbooks', async (req, res) => {
  const d = await Books.find();
  return res.json(d);
}); //nothing is specified so it simply returns everything

/*app.get('/allbooks',function(req,res){
  Books.find(function(err,allbook){
    if(err){
      console.log(err);}else{res.json(allbook)}
    })
  }); */

app.get('/getbook/:id',function(req, res) {
  let id = req.params.id;
  Books.findById(id, function(err, book) {
  res.json(book);
  });
  });//this URL function will return a book by its id parameter in the db
  //it uses finById function to either show the book or null

/*********       POST methods      *********/
//new books will be created as sorta object using the bookschema
app.post('/addbooks', function (req, res) {
  console.log("Ref", req.body);
  let newbook = new Books(req.body);
  console.log("newbook --> ", newbook);
  newbook
    .save()
    .then((todo) => {
      res.status(200).json({ books: "book added successfully" });
    })
    .catch((err) => {
      res.status(400).send("Could not add new book to the library");
    });
});
/*-------------UPDATE METHOD-------------*/ 
app.post('/updatebook/:id', function(req, res) {
    let id = req.params.id;
    let updatedbook = new Books(req.body);
    console.log("update id", id, "newbook->", updatedbook);

    Books.findByIdAndUpdate(id, 
    {
        booktitle: updatedbook.booktitle,
        PubYear: updatedbook.PubYear,
        Author: updatedbook.author,
        Topic: updatedbook.Topic,
        Format: updatedbook.formate
    }),
    function (err,docs){
      if(err){console.log(err)}
      else{res.satus(200).json({'Books':'book updated successfully!'})}
    }
});

/**************DELETE METHOD******************/
app.post('/deleteBook/:id',function(req,res){
  let id=req.params.id;
  console.log("Deleting... ")
  Books.findByIdAndDelete(id, function(err,docs){
    if (err){
      console.log(err)
    }else {res.status(200).send('Book Deleted')}
  })
})

app.listen(5000, function () {console.log("Server is running on port 5000")});
//when thes server is ran it will listen for incoming connection to port 5000
