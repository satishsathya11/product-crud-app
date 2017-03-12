import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';


import Product from '../model/product';
import ResponseModel from '../model/responsemodel';

var db = require('../../common/database');
var ObjectID = require('mongodb').ObjectID;


module.exports = {


    createProduct: {
      type: Product,
      args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        quantity: {type: new GraphQLNonNull(GraphQLInt)},
        price: {type: new GraphQLNonNull(GraphQLFloat)},
        imgUri: {type: GraphQLString}
      },
      resolve: function(rootValue, args) 
      {
        let product = Object.assign({}, args);

        return new Promise((resolve, reject) => 
        {
            db.get().collection('products').insert(product, (err, data) => 
            {
                resolve(product);
            });
        });
      }
    },


    deleteProduct: {
      type: ResponseModel,
      args: {
        _id: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve: function(rootValue, args) 
      {
        return new Promise((resolve, reject) => 
        {
            let responseObj = {_id : args._id, status : true};

            db.get().collection('products').remove({_id : new ObjectID(args._id)}, (err, data) => 
            {
                if(data.result.n == 0)
                  responseObj.status = false;

                resolve(responseObj);

            });
        });

      }
    },


    editProduct: {
      type: Product,
      args: {
        _id: {type: new GraphQLNonNull(GraphQLString)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        quantity: {type: new GraphQLNonNull(GraphQLInt)},
        price: {type: new GraphQLNonNull(GraphQLFloat)},
        imgUri: {type: GraphQLString}
      },
      resolve: function(rootValue, args) 
      {
        return new Promise((resolve, reject) => 
        {
            let product = Object.assign({}, args);
            //delete args._id;

            db.get().collection('products').update({_id : new ObjectID(args._id)}, 
                {title : args.title, quantity : args.quantity, price : args.price, imgUri : args.imgUri}, (err, data) => 
            {
                console.log(data.result);
                if(data.result.n == 1)
                  resolve(product);
                else
                {
                  reject("Resource not found");
                }
            });
        });

      }
    }

  }