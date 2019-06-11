const express = require('express');
const mongoose = require('mongoose');
const app = express()

const Port = process.env.PORT || 5000

mongoose.connect("mongodb://localhost:27017/fs04-xedike", {useNewUrlParser: true})
.then(console.log("connected to DB"))
.catch(err => console.log(err))

app.listen(Port, () => {
    console.log("Server is running on port " + Port + " !!!!!")
})