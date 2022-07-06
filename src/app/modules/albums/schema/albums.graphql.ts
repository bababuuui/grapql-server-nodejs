import { gql } from "apollo-server";

export const albumsTypeDefs = gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  input AlbumInput {
    name: String
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
    image: String
  }
  extend type Query {
    albums(offset: Int, limit: Int): [Album]
    album(id: String!): Band
  }

  extend type Mutation {
    createAlbum(album: AlbumInput): Album
    deleteAlbum(id: String!): DeleteResult
    updateAlbum(id: String!, band: AlbumInput!): Album
  }
`;
