const knex = require('./knex');

module.exports = {
    getPoolsandMembers: async (poolId) => {
        let pool = await knex('pool')
        .select('*')
        .where('id', poolId)
        .first()
        console.log(pool);

        const members = await knex('member')
        .select('*')
        .where('pool_id', poolId);
        pool.members = members;

        return pool;
    }

}



