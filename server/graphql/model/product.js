import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';


const Product = new GraphQLObjectType({
  name: 'Product',
  description: 'Information about the Product',
  fields: () => ({
    _id: {type: GraphQLString},
    title: {type: GraphQLString},
    price: {type: GraphQLFloat},
    quantity: {type: GraphQLInt},
    imgUri: {type: GraphQLString}
  })
});


export default Product;