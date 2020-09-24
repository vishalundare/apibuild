const { createPool } = require ('mysql');

const pool = createPool({
    // port:process.env.DBPORT,
    // host:process.env.DBHOST,
    // user:process.env.DBUSER,
    // password:process.env.DBPASS,
    // database:process.env.DB,
    // connectionlimit:10
    port:3306,
    host:'localhost',
    user:'root',
    password:'',
    database:'stock',
    connectionlimit:10
});

module.exports = pool;