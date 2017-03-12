import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';


import Product from '../model/product';

var db = require('../../common/database');
var ObjectID = require('mongodb').ObjectID;


module.exports = {

    products: {
      type: new GraphQLList(Product),
      resolve: function(rootValue, args, info) 
      {
          return new Promise((resolve, reject) => {
            db.get().collection('products').find().toArray((err, data) => {
              resolve(data);
            });
          });
      }
    },


    product: {
      type: Product, 
      args: { 
        _id: { type: new GraphQLNonNull(GraphQLString)},
      },
      resolve: function(rootValue, args)
      {
          return new Promise((resolve, reject) => 
          {
              db.get().collection('products').findOne({_id : new ObjectID(args._id)}, (err, data) => {
                resolve(data);
              });
          });
      }
    }

    
};