const express = require('express');
const mongoose = require('mongoose');

//invoking express using app variable
const app = express();

//declare port
const PORT = 8000;

//db connection
const DB_URL = 'mongodb+srv://himashaneth:himasha@cluster0.0xgx0qd.mongodb.net/';

//writing database configuration
mongoose.connect(DB_URL)
.then(()=> {
    console.log("DB Connected");
})
.catch ((err) => console.log('DB Connection error', err));

//listen to server
app.listen(PORT, () => {
    console.log(`Backend is running on ${PORT}`);
    console.log("Backend executes successfully");
})