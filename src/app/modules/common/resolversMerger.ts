import { mergeResolvers } from "@graphql-tools/merge";
import { usersResolver } from "../users/users.resolver";
import { bandsResolver } from "../bands/bands.resolver";

const resolvers = [usersResolver, bandsResolver];

export const RESOLVERS = mergeResolvers(resolvers);
