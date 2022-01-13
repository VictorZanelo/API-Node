// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'ec2-3-216-113-109.compute-1.amazonaws.com',
      port : 5432,
      user : 'pxemfkzluyyojr',
      password : 'bb75c57c6cec74acf5f2bbbf0d133f6b267d3b4c0988ffc5e6b7804227e50335',
      database : 'd3o893ssceu8k1',
      ssl: {
        rejectUnauthorized: false,
    }
    }
  }

};
