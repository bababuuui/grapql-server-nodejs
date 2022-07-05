import { gql } from "apollo-server";

export const artistsTypeDefs = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  input ArtistInput {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [ID]
    instruments: [String]
  }
  extend type Query {
    artists(offset: Int, limit: Int): [Artist]
    artist(id: String!): Artist
  }

  extend type Mutation {
    createArtist(artist: ArtistInput): Artist
    deleteArtist(id: String!): DeleteResult
    updateArtist(id: String!, artist: ArtistInput!): Artist
  }
`;
