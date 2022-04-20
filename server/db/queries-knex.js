const knex = require('./knex');

module.exports = {
    getMembersPerPool: async (poolId) => {
        const query = await knex('pool')
        .innerJoin('member', 'pool.id', '=', 'member.pool_id')
        .select('pool.id', 'pool.name')
        .where('pool_id', poolId)
        return query;
    }

}



