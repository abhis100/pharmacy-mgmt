const Pool = require("pg").Pool
const pool = new Pool({
    user:"abhis",
    //password:"pesupesu",
    database: "pharmacy_management",
    host:"localhost",
    port:5432
});

module.exports = pool;

