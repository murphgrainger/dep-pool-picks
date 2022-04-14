const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');

router.get('/', async (req, res) => {
    try {


    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

router.post('/', async (req, res) => {
    try {

        console.log(req.body);
        await knex('pool').insert({
            name:req.body.name,
            tournament: req.body.tournament
        })

        return res.status(200);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

module.exports = router;