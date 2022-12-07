var express = require('express');
var router = express.Router();

const db = require('../db/index');

/* GET home page. */
router.get('/', async function (req, res, next) {

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

// get one product
router.get('/:id', async (req, res) => {
    try {
        const product = await db.one('SELECT * FROM products WHERE id=$1', [req.params.id]);
        res.json({ product: product });
    } catch (error) {
        res.send({
            status: 'error',
            message: error.message
        })
    }
});

// create new product
router.post('/new', async (req, res) => {
    try {
        let { title, price, awsImageURL } = req.body;

        const product = await db.one(
            'INSERT INTO products (title, price, aws_image_location) VALUES ($1, $2, $3) RETURNING *',
            [title, price, awsImageURL]
        );
            
        if(product){
            res.json({status: 'success', product: product });
        }

    } catch (error) {
        res.send({
            status: 'error',
            message: error.message
        })
    }
});

// update product
router.put('/:id', async (req, res) => {
    try {
        let { name, price, description, image_url } = req.body;
        
        const product = await db.one(
            'UPDATE products SET name=$1, price=$2, description=$3, image_url=$4 WHERE id=$5 RETURNING *',
            [name, price, description, image_url, req.params.id]
        );

        if(product){
            res.json({ product: product });
        }

    } catch (error) {
        res.send({
            status: 'error',
            message: error.message
        })
    }
});

// delete product







module.exports = router;
