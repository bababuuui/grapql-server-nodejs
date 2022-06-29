import { gql } from "apollo-server";

export const brandTypeDefs = gql`
  type Member {
    artist: String
    instrument: String
    years: [String]
  }

  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: String
  }
  extend type Query {
    bands: [Band]
    band(id: String!): Band
  }
`;
