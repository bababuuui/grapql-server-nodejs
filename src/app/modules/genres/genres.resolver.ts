export const genresResolver = {
  Query: {
    genres: async (parent, args, { dataSources }) => {
      return dataSources.genresAPI.getAllGenres();
    },
    genre: async (parent, args, { dataSources }) => {
      return dataSources.genresAPI.getGenre(args.id);
    },
  },
  Mutation: {
    createGenre: async (parent, args, { dataSources }) => {
      const { genre } = args;
      return dataSources.genresAPI.createGenre(genre);
    },
    updateGenre: async (parent, args, { dataSources }) => {
      return dataSources.genresAPI.updateGenre(args.id, args.genre);
    },
    deleteGenre: async (parent, args, { dataSources }) => {
      return dataSources.genresAPI.deleteGenre(args.id);
    },
  },
};
