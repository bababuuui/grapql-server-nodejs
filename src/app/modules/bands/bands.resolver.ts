import { IBand } from "./interfaces/IBand";
import { IMember } from "./interfaces/IMember";

export const bandsResolver = {
  Query: {
    bands: async (parent, args, { dataSources }) => {
      const { offset, limit } = args;
      return dataSources.bandsAPI.getAllBands(offset, limit);
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

  Band: {
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
    members: async (parent, args, { dataSources }) => {
      const { members }: { members: IMember[] } = parent;
      const result = [];
      if (parent && members.length > 0) {
        for (const member of members) {
          const artist = await dataSources.artistsAPI.getArtist(member.artist);
          console.log(artist);
          result.push({ ...artist, instrument: member.instrument, years: member.years });
        }
      }
      console.log(result);
      return result;
    },
  },
};
