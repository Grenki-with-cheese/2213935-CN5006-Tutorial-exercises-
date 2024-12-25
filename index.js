mongoose = require("mongoose"); //importing mongoose into the file
//app = express(); //this will be the app later
const MONGO_URL = "mongodb://localhost:27017/week8";
mongoose.connect(MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

//using error function in case of faulty connection
db.on("error", function (err) {
  console.log("Connection error, check the code" + err);
}); //a message that connection failed is displayed
db.once("connected", function () {
  console.log("You successfully connected to " + MONGO_URL);
});

//schema creation
const PersonScheme = new mongoose.Schema({
  name: { type: String, required: true }, //name will be a required field hence specification
  age: Number, //the rest supposedly can be defined just like this
  Gender: String,
  Salary: Number,
});

//creating a model names as modelname, person_doc follows above schema
const person_doc = mongoose.model(
  "modelname",
  PersonScheme,
  "personCollection"
);

//creating a single document, very similar to creating a new object in java
const doc1 = new person_doc({
  name: "Kira",
  age: "33",
  Gender: "Male",
  Salary: 3456,
});
//adding said document to the collection
doc1
  .save() //if it is successfully saved, a console log follows
  .then((doc1) => {
    console.log("New article has been added to your database.", doc1);
  })
  .catch((err) => {
    console.error(err);
  }); //in case of an error

manypersons = [
  { name: "Simon", age: 42, Gender: "Male", Salary: 3456 },
  { name: "Neesha", age: 23, Gender: "Female", Salary: 1000 },
  { name: "Mary", age: 27, Gender: "Female", Salary: 5402 },
  { name: "Mike", age: 40, Gender: "Male", Salary: 4519 },
];

person_doc
  .insertMany(manypersons)
  .then(function () {
    console.log("Data inserted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });

var givenage=20
person_doc.find({Gender:"Female",age:{$gte:givenage}}) //no criteria, just get all
  .exec()
  .then(docs =>{
    console.log("showing greater than equal ", givenage)
    docs.forEach(function(Doc) {
      console.log(Doc.age,Doc.name);
    });
  })
  .catch(err=>{console.error(err)}) 

person_doc
  .countDocuments()
  .exec()
  .then((count) => {
    console.log("TOtal amount of documents:", count);
  });

person_doc.updateMany({ Gender: "Female" }, { Salary: 5555 })
  .exec()
  .then(docs => {
    console.log("update");
    console.log(docs); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
