export const tracksResolver = {
  Query: {
    tracks: async (parent, args, { dataSources }) => {
      const { offset, limit } = args;
      return dataSources.tracksAPI.getAllTracks(offset, limit);
    },
    track: async (parent, args, { dataSources }) => {
      return dataSources.tracksAPI.getTrack(args.id);
    },
  },
  Mutation: {
    createTrack: async (parent, args, { dataSources }) => {
      const { track } = args;
      return dataSources.tracksAPI.createTrack(track);
    },
    updateTrack: async (parent, args, { dataSources }) => {
      return dataSources.tracksAPI.updateTrack(args.id, args.track);
    },
    deleteTrack: async (parent, args, { dataSources }) => {
      return dataSources.tracksAPI.deleteTrack(args.id);
    },
  },
  Track: {
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

    album: async (parent, args, { dataSources }) => {
      let result = null;
      const { albumId }: { albumId: string } = parent;
      if (parent && albumId) {
        result = dataSources.albumsAPI.getAlbum(albumId);
      }
      return result;
    },
  },
};
