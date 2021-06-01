const {gql} = require("apollo-server-express");

module.exports.typeDefs = gql`
  type Query {
    cats: [Cat!]!
    owners: [Owner!]!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Owner {
    id: ID!
    name: String!
  }
  type Mutation {
    createCat(name: String!): Cat!
    createOwner(name: String!): Owner!
  }
`;
