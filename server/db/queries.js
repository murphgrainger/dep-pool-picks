const poolData = [
    {
      id: 1,
      name: 'Masters Pool',
      tournament: 'Masters'
    }
  ]
  
  const getPool = (args) => {
    for(const pool of poolData) {
      if(pool.id === args.id) return pool;
    }
  }

  const getPools = (args) => {
    return poolData;
  }

  const root = {
    pool: getPool,
    pools: getPools,
  }

  module.exports = root;