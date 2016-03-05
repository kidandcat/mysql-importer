var mysql = require('mysql');
var fs = require('fs');
var obj = {};

obj.config = {};

obj.sql = function (route, cb, cberr) {
    var sql = fs.readFileSync(route).toString();
    var connection = mysql.createConnection(obj.config);

    connection.query('SELECT * FROM ' + obj.config.table, function (err, rows, fields) {
        if (err && err.errno == 1146) {
            obj.config.multipleStatements = true;
            var connection2 = mysql.createConnection(obj.config);
            connection2.query(sql, function (err, results) {
                if (err) {
                    if (cberr) {
                        cberr(err);
                    } else {
                        throw err;
                    }
                } else {
                    cb(results);
                }
            });
        } else if (err) {
            if (cberr) {
                cberr(err);
            } else {
                throw err;
            }
        }
    });
}

module.exports = obj;


