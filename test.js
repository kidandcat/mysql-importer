var importer = require('./mysqldb.js');


importer.config = {
    host: 'example.com',
    user: 'root',
    password: '1234',
    database: 'shop',
    table: 'users'
};

importer.import('./exported.sql');