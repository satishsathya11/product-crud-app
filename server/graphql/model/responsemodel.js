import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} from 'graphql';


const ResponseModel = new GraphQLObjectType({
  name: 'ResponseModel',
  description: 'Response',
  fields: () => ({
    _id: {type: GraphQLString},
    status: {type: GraphQLBoolean}
  })
});

export default ResponseModel;