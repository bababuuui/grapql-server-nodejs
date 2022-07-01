export const artistsResolver = {
  Query: {
    artists: async (parent, args, { dataSources }) => {
      return dataSources.artistsAPI.getAllArtists();
    },
    artist: async (parent, args, { dataSources }) => {
      return dataSources.artistsAPI.getArtist(args.id);
    },
  },
  Mutation: {
    createArtist: async (parent, args, { dataSources }) => {
      const { artist } = args;
      return dataSources.artistsAPI.createArtist(artist);
    },
    updateArtist: async (parent, args, { dataSources }) => {
      return dataSources.artistsAPI.updateArtist(args.id, args.artist);
    },
    deleteArtist: async (parent, args, { dataSources }) => {
      return dataSources.artistsAPI.deleteArtist(args.id);
    },
  },

  Artist: {
    bands: async (parent, args, { dataSources }) => {
      const { bandsIds }: { bandsIds: string[] } = parent;
      const result = [];
      if (parent && bandsIds.length > 0) {
        for (const id of bandsIds) {
          result.push(dataSources.bandsAPI.getBand(id));
        }
        return result;
      }
      return result;
    },
  },
};
