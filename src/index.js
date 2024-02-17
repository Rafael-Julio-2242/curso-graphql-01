
import { ApolloServer, gql } from 'apollo-server';


const server = new ApolloServer({
  typeDefs:gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float!
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => "asdwdasda-sd--9880",
      name: () => "Rafa",
      age: () => 30,
      average: () => 50.55,
      married: () => false,
      arrayString: () => ['A']
    }
  }
});

server.listen(3000).then(( { url } ) => {
  console.log(`Server listening on url ${url} `);
})
