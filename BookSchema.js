let mongoose = require('mongoose')

//defining the schema to be used for online library
const BookSchema=new mongoose.Schema({
    booktitle:{type:String,required:true},//required column in the schema
    PubYear:Number,
    Author:String,
    Topic:String,
    Format:String})
//this should create a new folder in MongoDB, mongoDB will also add unique identifiers to books
module.exports=mongoose.model('bookmodel',BookSchema,'BookCollection2')
