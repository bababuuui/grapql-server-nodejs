import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "../users/schema/users.graphql";
import { brandTypeDefs } from "../bands/schema/bands.graphql";
import { baseTypeDef } from "./base.graphql";
import { genreTypeDef } from "../genres/schema/genres.graphql";
import { artistsTypeDefs } from "../artists/schema/artists.graphql";
import { albumsTypeDefs } from "../albums/schema/albums.graphql";
import { tracksTypeDefs } from "../tracks/schema/tracks.graphql";

const types = [artistsTypeDefs, baseTypeDef, userTypeDefs, brandTypeDefs, genreTypeDef, albumsTypeDefs, tracksTypeDefs];

export default mergeTypeDefs(types);
