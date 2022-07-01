import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "../users/schema/users.graphql";
import { brandTypeDefs } from "../bands/schema/bands.graphql";
import { baseTypeDef } from "./base.graphql";
import { genreTypeDef } from "../genres/schema/genres.graphql";

const types = [baseTypeDef, userTypeDefs, brandTypeDefs, genreTypeDef];

export default mergeTypeDefs(types);
