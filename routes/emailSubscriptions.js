const e = require('express');
var express = require('express');
var router = express.Router();

const db = require('../db/index');

/* GET home page. */
router.post('/', async function(req, res, next) {
    
    try {
        console.log(req.body)
        // get necessary info from req.body
        let {firstname, email} = req.body;

        // email exists and is valid 
        if(!email){
            throw('Please provide a valid email.');
        }

        // save it to the database
        const emailSubscription = await db.one(
            'INSERT INTO email_subscriptions (firstname, email) VALUES ($1, $2) RETURNING *',
            [firstname, email]
        );

        if(emailSubscription){
            // return a success message/object
            res.json({status: 'success', message: 'You have been successfully subscribed!'});
        }

    } catch (error){
        // send json response with message regarding error
        res.status(500).json({status: 'error', message: error});
    }
});

module.exports = router;