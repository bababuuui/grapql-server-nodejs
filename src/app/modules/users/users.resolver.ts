import { IUserLoginInput } from "./interfaces/IUserLoginInput";
import { IUserRegisterInput } from "./interfaces/IUserRegisterInput";

export const usersResolver = {
  Query: {
    user: async (parent, args, { dataSources }) => {
      return dataSources.usersAPI.getUser(args.id);
    },
    jwt: async (parent, args, { dataSources }) => {
      const userInput: IUserLoginInput = args.credentials;
      return dataSources.usersAPI.login(userInput);
    },
  },
  Mutation: {
    register: async (parent, args, { dataSources }) => {
      const userInput: IUserRegisterInput = args.user;
      return dataSources.usersAPI.register(userInput);
    },
  },
};
