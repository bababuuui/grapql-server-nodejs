export const bandsResolver = {
  Query: {
    bands: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.getAllBands();
    },
    band: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.getBand(args.id);
    },
  },
};
