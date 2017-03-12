import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';


import {createProduct, deleteProduct, editProduct} from '../mutation/product';


const mutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createProduct,
    deleteProduct,
    editProduct
  }
});

export default mutation;