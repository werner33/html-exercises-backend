var express = require('express');
var router = express.Router();

const authenticateToken = require('../middleware/authorization');


const db = require('../db/index');

/* GET home page. */
router.get('/', authenticateToken, async function(req, res, next) {

    try {
        const products = await db.any('SELECT * FROM products');    
        res.json({ products: products});
    } catch (error){
        res.send({
            status: 'error',
            message: error.message
        })
    }
  
});

module.exports = router;
