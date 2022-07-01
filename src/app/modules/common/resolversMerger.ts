import { mergeResolvers } from "@graphql-tools/merge";
import { usersResolver } from "../users/users.resolver";
import { bandsResolver } from "../bands/bands.resolver";
import { genresResolver } from "../genres/genres.resolver";
import { artistsResolver } from "../artists_wip/artists.resolver";

const resolvers = [artistsResolver, usersResolver, bandsResolver, genresResolver];

export const RESOLVERS = mergeResolvers(resolvers);
