import { gql } from "apollo-server";

export const brandTypeDefs = gql`
  type Member {
    artist: String
    instrument: String
    years: [String]
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  input MemberInput {
    artist: String
    instrument: String
    years: [String]
  }
  input BandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genres: String
  }
  extend type Query {
    bands: [Band]
    band(id: String!): Band
  }

  extend type Mutation {
    createBand(band: BandInput): Band
    deleteBand(id: String!): DeleteResult
    updateBand(id: String!, band: BandInput!): Band
  }
`;
