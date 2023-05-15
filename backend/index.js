const express = require("express");
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const app = express();

app.use(express.json());


app.get("/", (request, response) => {
    response.send('Welcome to furniture website');
});


app.listen(8080, () => {
    console.log('Server is running at port 8080');
});
