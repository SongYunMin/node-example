module.exports = (function(){
    return{
        local:{     // localhost
            host:   'localhost',
            port:   '3306',
            user:   'root',
            password:   '',
            database:   'test'
        },
        real:{      // real server db info
            host:   '',
            port:   '',
            user:   '',
            password:   '',
            database:   ''
        },
        dev:{      // real server db info
            host:   '',
            port:   '',
            user:   '',
            password:   '',
            database:   ''
        }
    }
}) ();
