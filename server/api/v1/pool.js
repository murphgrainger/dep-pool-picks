const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');
const Q = require('../../db/queries-knex');

router.get('/', async (req, res) => {
    try {
        console.log('hitting endpoint')
        const pools = await knex('pool').select('*')
        return res.status(200).json(pools)

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const poolAndMembers = await Q.getPoolsandMembers(req.params.id);
        return res.status(200).json(poolAndMembers)

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

router.post('/', async (req, res) => {
    try {
        if(!req.body.name) throw new Error({message: 'Invalid Pool Creation'});
        console.log(req.body);
        const createdPool = await knex('pool')
        .returning('id')
        .insert({
            name:req.body.name,
            tournament_id: req.body.tournamentId
        })

        return res.status(200).json({poolId: createdPool[0]['id']});
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

module.exports = router;