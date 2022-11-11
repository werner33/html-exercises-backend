var express = require('express');
var router = express.Router();

const db = require('../db/index');

/* GET users listing. */
router.get('/', async function(req, res, next) {

  try {
    const users = await db.any('SELECT * FROM users');
    res.json({users: users});
  } catch (error){
    res.send({
      status: 'error',
      message: error.message
    })
  }

});

router.post('/', async (req, res) => {
  try {

    // get data from request
    let {username, email, password} = req.body;


    // validate data
    if(username.length < 4){
      throw({message: 'Username must be 4 characters or more'})
    }

    // insert data in users table
    let user = await db.one('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);


    // send successful response 
    res.json({user: user});

  } catch (error) {
    res.send({
      status: 'error',
      message: error.message
    })
  }
})

module.exports = router;
