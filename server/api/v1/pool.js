const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        console.log('hitting route!')
        res.send('Success!')
        await req.body;
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

module.exports = router;