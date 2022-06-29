import { gql } from "apollo-server";

export const userTypeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    password: String!
    email: String!
  }
  input UserLoginInput {
    email: String!
    password: String!
  }
  extend type Query {
    user(id: String!): User
  }

  extend type Mutation {
    login(credentials: UserLoginInput): String!
  }
`;
