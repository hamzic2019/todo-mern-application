const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

    mongoose.set('strictQuery', false);

    mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@taxi.6rkptz5.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => {
            console.log(`Database successfully connected!`);
        })