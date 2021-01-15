const mysql = require("mysql");
let config = require('../node-test/db_info').local;

module.exports = function(){
    return {
        init: function() {
            return mysql.createConnection({
                host:   config.host,
                port:   config.port,
                user:   config.user,
                password: config.password,
                database: config.database
            })
        },

        test_open: function (con) {
            con.connect(function (err){
                if(err){
                    console.log('mysql connection error : ' + err);
                }else{
                    console.log('mysql is connected successfully.');
                }
            })
        }
    }
};

const connection = mysql.createConnection({
    host    :'localhost',
    user    :'root',
    password:'',
    database:'node_test'
});