import { gql } from "apollo-server";

export const tracksTypeDefs = gql`
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
  extend type Query {
    tracks(offset: Int, limit: Int): [Track]
    track(id: String!): Track
  }

  input TrackInput {
    title: String!
    albumId: ID
    artistsIds: [ID]
    bandsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
  }

  extend type Mutation {
    createTrack(track: TrackInput): Track
    deleteTrack(id: String!): DeleteResult
    updateTrack(id: String!, track: TrackInput!): Track
  }
`;
