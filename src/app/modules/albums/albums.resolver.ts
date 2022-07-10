export const albumsResolver = {
  Query: {
    albums: async (parent, args, { dataSources }) => {
      const { offset, limit } = args;
      return dataSources.albumsAPI.getAllAlbums(offset, limit);
    },
    album: async (parent, args, { dataSources }) => {
      return dataSources.albumsAPI.getAlbum(args.id);
    },
  },
  Mutation: {
    createAlbum: async (parent, args, { dataSources }) => {
      const { album } = args;
      return dataSources.albumsAPI.createAlbum(album);
    },
    updateAlbum: async (parent, args, { dataSources }) => {
      return dataSources.albumsAPI.updateAlbum(args.id, args.album);
    },
    deleteAlbum: async (parent, args, { dataSources }) => {
      return dataSources.albumsAPI.deleteAlbum(args.id);
    },
  },

  Album: {
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
  },
};
