import { gql } from "apollo-server";

export const genreTypeDef = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }
  input GenreInput {
    name: String
    description: String
    country: String
    year: Int
  }

  extend type Query {
    genres: [Genre]
    genre(id: String!): Genre
  }

  extend type Mutation {
    createGenre(genre: GenreInput): Genre
    deleteGenre(id: String!): DeleteResult
    updateGenre(id: String!, genre: GenreInput!): Genre
  }
`;
