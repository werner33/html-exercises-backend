var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    try {

        const awsCredentials = {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
            bucketName: process.env.AWS_BUCKET_NAME
        }

        res.json(awsCredentials);

    } catch (error){
        res.send({
            status: 'error',
            message: error.message
        })
    }
});

module.exports = router;
