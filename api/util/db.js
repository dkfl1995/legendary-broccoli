var mysql = require('mysql');
var pool;
module.exports = {
    getPool: function () {
        pool = mysql.createPool({
            host: 'sql146.main-hosting.eu',
            user: 'u762782793_dkfl',
            password: '0937128681v',
            database: 'u762782793_reen'
        });
        return pool;
    }
};