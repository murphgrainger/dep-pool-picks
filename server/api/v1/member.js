const express = require('express');
const knex = require('../../db/knex');
const router = express.Router();
const Q = require('../../db/queries-knex');

router.post('/', async (req,res) => {
    try {
        console.log(req.body);
        const memberId = await knex('member').returning('*').insert({
            member_name:req.body.name,
            pool_id: req.body.poolId
        })
        console.log(memberId);
        res.status(200).json(memberId);

    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const members = await Q.getPoolsAndMembers(req.params.id);
        return res.status(200).json(members)
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
})


module.exports = router;