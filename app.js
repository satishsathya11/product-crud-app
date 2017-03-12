require('babel-core/register');
require('babel-polyfill');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var expressGraphql = require('express-graphql');
var cors = require('cors');

var db = require('./server/common/database');
var app = express();
var Schema = require('./server/schema').default;
var corsOptions = {
  origin: 'http://localhost:4000'
}


//db.connect('mongodb://localhost/reactmongo', function(err)
db.connect('mongodb://reactmongo.cloudapp.net/reactmongo', function(err)
{
    if (err) 
    {
      console.log('Unable to connect to Mongo.')
      process.exit(1);
    } 
    else 
    {
        console.log("Connected to MongoDB Server");
        app.listen(5000, function() 
        {
            console.log('Listening on port 5000...');

            app.use(cors(corsOptions));
            app.use('/graphql', expressGraphql(
            {
                schema: Schema,
                graphiql: true
            }));

        });
    }
});