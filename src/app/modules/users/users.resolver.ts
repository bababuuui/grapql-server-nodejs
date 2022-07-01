import { IUserInput } from "./interfaces/IUserInput";

export const usersResolver = {
  Query: {
    user: async (parent, args, { dataSources }) => {
      return dataSources.usersAPI.getUser(args.id);
    },
    jwt: async (parent, args, { dataSources }) => {
      const userInput: IUserInput = args.credentials;
      return dataSources.usersAPI.login(userInput);
    },
  },
};
