export const favouritesResolver = {
  // addTrackToFavourites
  // addBandToFavourites
  // addArtistToFavourites
  // addGenreToFavourites

  Query: {
    favourites: async (parent, args, { dataSources }) => {
      return dataSources.favouritesAPI.getAllFavourites();
    },
  },
  Mutation: {
    addTrackToFavourites: async (parent, args, { dataSources }) => {
      const { trackId } = args;
      return dataSources.favouritesAPI.addTrackToFavourites(trackId);
    },
    addBandToFavourites: async (parent, args, { dataSources }) => {
      const { bandId } = args;
      return dataSources.favouritesAPI.addBandToFavourites(bandId);
    },
    addArtistToFavourites: async (parent, args, { dataSources }) => {
      const { artistId } = args;
      return dataSources.favouritesAPI.addArtistToFavourites(artistId);
    },
    addGenreToFavourites: async (parent, args, { dataSources }) => {
      const { genreId } = args;
      return dataSources.favouritesAPI.addGenreToFavourites(genreId);
    },
  },
  Favourites: {
    genres: async (parent, args, { dataSources }) => {
      const { genresIds }: { genresIds: string[] } = parent;
      const result = [];
      if (parent && genresIds.length > 0) {
        for (const genreId of genresIds) {
          result.push(dataSources.genresAPI.getGenre(genreId));
        }
      }
      return result;
    },

    bands: async (parent, args, { dataSources }) => {
      const result = [];
      const { bandsIds }: { bandsIds: string[] } = parent;
      if (parent && bandsIds.length > 0) {
        for (const bandId of bandsIds) {
          result.push(dataSources.bandsAPI.getBand(bandId));
        }
      }
      return result;
    },

    artists: async (parent, args, { dataSources }) => {
      const result = [];
      const { artistsIds }: { artistsIds: string[] } = parent;
      if (parent && artistsIds.length > 0) {
        for (const artistId of artistsIds) {
          result.push(dataSources.artistsAPI.getArtist(artistId));
        }
      }
      return result;
    },

    tracks: async (parent, args, { dataSources }) => {
      const { tracksIds }: { tracksIds: string[] } = parent;
      const result = [];
      if (parent && tracksIds.length > 0) {
        for (const trackId of tracksIds) {
          result.push(dataSources.tracksAPI.getTrack(trackId));
        }
      }
      return result;
    },
  },
};
