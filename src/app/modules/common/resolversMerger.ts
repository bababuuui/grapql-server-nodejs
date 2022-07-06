import { mergeResolvers } from "@graphql-tools/merge";
import { usersResolver } from "../users/users.resolver";
import { bandsResolver } from "../bands/bands.resolver";
import { genresResolver } from "../genres/genres.resolver";
import { artistsResolver } from "../artists/artists.resolver";
import { albumsResolver } from "../albums/albums.resolver";
import { tracksResolver } from "../tracks/tracks.resolver";
import { favouritesResolver } from "../favourites/favourites.resolver";

const resolvers = [
  artistsResolver,
  usersResolver,
  bandsResolver,
  genresResolver,
  albumsResolver,
  tracksResolver,
  favouritesResolver,
];

export const RESOLVERS = mergeResolvers(resolvers);
