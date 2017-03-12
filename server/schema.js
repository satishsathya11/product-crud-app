import {GraphQLSchema} from 'graphql';
import mutation from '../server/graphql/mutation/index';
import queries from '../server/graphql/query/index';

const Schema = new GraphQLSchema({
  query: queries,
  mutation: mutation,
});

export default Schema; 