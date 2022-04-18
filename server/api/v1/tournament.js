const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');


router.get('/', async (req,res) => {
    try {
        const tournaments = await knex('tournament').select('*')
        console.log(tournaments)
        return res.status(200).json(tournaments)
    } catch(error) {
        console.log(error);
        return res.status(500).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const [tournament] = await knex('tournament').select('*').where('id', req.params.id)
        return res.status(200).json(tournament)

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const newTournament = await knex('tournament').returning('id').insert({
            name: req.body.name,
            year: req.body.year,
            sport: req.body.sport,
        })

        return res.status(200).json([newTournament]);

    } catch(error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

module.exports = router;
