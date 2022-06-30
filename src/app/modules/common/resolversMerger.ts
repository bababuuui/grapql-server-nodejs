import { mergeResolvers } from "@graphql-tools/merge";
import { usersResolver } from "../users/users.resolver";
import { bandsResolver } from "../bands/bands.resolver";
import { genresResolver } from "../genres/genres.resolver";

const resolvers = [usersResolver, bandsResolver, genresResolver];

export const RESOLVERS = mergeResolvers(resolvers);
