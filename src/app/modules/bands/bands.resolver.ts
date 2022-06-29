import { IBand } from "./interfaces/IBand";

export const bandsResolver = {
  Query: {
    bands: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.getAllBands();
    },
    band: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.getBand(args.id);
    },
  },
  Mutation: {
    createBand: async (parent, args, { dataSources }) => {
      const { band } = args;
      return dataSources.bandsAPI.createBand(band);
    },
    updateBand: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.updateBand(args.id, args.band);
    },
    deleteBand: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.deleteBand(args.id);
    },
  },
};
