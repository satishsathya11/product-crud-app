import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';


import {product, products} from '../query/product';

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    product,
    products
  }
});

export default Query;