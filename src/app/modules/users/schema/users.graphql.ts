import { gql } from "apollo-server";

export const userTypeDefs = gql`
  type User {
    id: ID!
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
    jwt(credentials: UserLoginInput): String!
  }
`;
