import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "../users/typeDefs/users.graphql";
import { brandTypeDefs } from "../bands/typeDefs/bands.graphql";
import { baseTypeDef } from "./baseTypeDef.graphql";
import { genreTypeDef } from "../genres/typeDefs/genres.graphql";

const types = [baseTypeDef, userTypeDefs, brandTypeDefs, genreTypeDef];

export default mergeTypeDefs(types);
