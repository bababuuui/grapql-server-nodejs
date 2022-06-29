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
    //   createBand(band: BandInput): Band
    //     deleteBand(id: String!): Band
    //     updateBand(id: String, band: BandInput): Band
    createBand: async (parent, args, { dataSources }) => {
      const { band } = args;
      return dataSources.bandsAPI.createBand(band);
    },
    updateBand: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.getBand(args.id);
    },
    deleteBand: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.getBand(args.id);
    },
  },
};
