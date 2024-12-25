const express = require("express");
const fs = require("fs");

//we create an object for the app to use express package within it
const app = express();

//now we define api in a node js
app.get("/", function (request, response) {
  response.send("This is a response function");
}); //each function has request AND response

//How to access api?
app.listen(8000, function () {
  console.log("server is running Port 8000");
}); //you set the port once, start the server on port 8000 once and don't touch it even when using several api
//what we essentially did is tell the computer to run these functions in Port 8000
//to access it open a browser and put localhost:[port number] in the address bar

app.get("/about", function (request, response) {
  response.send("This is First Path. Anything, we can write anything here");
});

app.get("/users/:userId", function (request, response) {
  response.send(request.params);
});

//add middle wware function for body parsing

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//third exercise
app.get("/GetStudents", function (request, response) {
  fs.readFile(__dirname + "/Student.json", "utf-8", function (err, data) {
    response.json({
      status: true,
      data: JSON.parse(data),
    });
    response.json({
      status: true,
      Status_Code: 200,
      "requested at": request.localtime,
      requrl: request.url,
      "request Method": request.method,
      studentdata: JSON.parse(data),
    });
  });
});
app.get('/studentinfo',function(req,res)
{
res.sendFile('StudentInfo.html', { root: __dirname });
})
app.post('/submit-data', function (req, res) {
  var name = req.body.firstName + ' ' + req.body.lastName+
  ' ';
  var Age= req.body.myAge+ ' Gender: ' + req.body.gender+' '
  Qual= ' Qualification'+ req.body.Qual
  console.log(req.body.Qual)
  res.send({
  status: true,
  message: 'form Details', data: {
  name: name, age:Age, Qualification:Qual,
  }
  });
  });