import { gql } from "apollo-server";

export const favouritesTypeDefs = gql`
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  #  input FavouritesTrackInput {
  #    userId: ID
  #    trackId: ID
  #  }
  #
  #  input FavouritesArtistInput {
  #    userId: ID
  #    artistId: ID
  #  }
  #
  #  input FavouritesBandInput {
  #    userId: ID
  #    bandId: ID
  #  }
  #
  #  input FavouritesGenreInput {
  #    userId: ID
  #    genreId: ID
  #  }
  extend type Query {
    favourites: Favourites
  }

  extend type Mutation {
    addTrackToFavourites(trackId: ID!): Favourites
    addBandToFavourites(bandId: ID!): Favourites
    addArtistToFavourites(artistId: ID!): Favourites
    addGenreToFavourites(genreId: ID!): Favourites
  }
`;
