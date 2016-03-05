# MySQL importer



## Description

A simple module to import a sql script into a MySQL database if it is empty.  


## Installation

     npm install mysql-importer

## Using

     var mi = require('mysql-importer');
     
     mi.config = {
        host: 'example.com',
        user: 'exampleUser',
        password: 'examplePassword',
        database: 'exampleDatabaseName',
        table: 'exampleTableName'
    };
    
    mi.sql(route, success, error);

    function success(data){
        console.log(data);
    }

    function error(err){
        console.log(err);
    }

 The `table` option specifies the table to check against, if it exists, nothing will be done.     
 
 The `route` is a valid system path to a .sql file.


## License

The MIT License (MIT)   
Copyright (c) 2016   
Jairo Caro-Accino Viciana   
kidandcat@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

