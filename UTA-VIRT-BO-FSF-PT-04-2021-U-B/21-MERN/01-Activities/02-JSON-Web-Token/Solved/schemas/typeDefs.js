const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    job: String
    country: String
  }

  type Query {
    users: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
