// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'ec2-18-235-114-62.compute-1.amazonaws.com',
      port : 5432,
      user : 'udwuuofripzwso',
      password : 'adbbee64a3011740bcf0655e86d43e9ef7912eca9265896ff3a1619b02d7b507',
      database : 'd1hdqcp28i293g',
      ssl: {
        rejectUnauthorized: false,
    }
    }
  }

};
