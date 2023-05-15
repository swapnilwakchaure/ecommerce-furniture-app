const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { AuthModel } = require('../models/auth.model');

const authRouter = express();


// ---------------------------- USER DATA GET REQUEST ---------------------------- //
authRouter.get('/', async (request, response) => {
    const query = request.query;

    try {
        const users = await AuthModel.find(query);
        response.send(users);
    } catch (error) {
        response.send({
            "Message": "Cannot able to get the users data",
            "Error": error.message
        });
    }
});



// ---------------------------- USER REGISTRATION POST REQUEST ---------------------------- //
authRouter.post('/register', async (request, response) => {
    const { first_name, last_name, email, password, age } = request.body;

    try {

    } catch (error) {
        response.send({
            "Message": "Cannot able to register the user",
            "Error": error.message
        });
    }
});





module.exports = { authRouter };