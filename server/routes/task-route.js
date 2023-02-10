const express = require('express');
const router = express.Router();
const Task = require('./../database/models/Task');

router.post('/', (req, res) => {
    try {
        const options = Object.keys(req.body);
        const allowed = ['title'];
        const isValid = options.every(opt => allowed.includes(opt));

        if(!isValid) throw 'You are not allowed to edit those field/s !';

        

        res.status(200).send({...req.body});
    } catch(e) {    
        res.status(400).send({e});
    }
});




module.exports = router