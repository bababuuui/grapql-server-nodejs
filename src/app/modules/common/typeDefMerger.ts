import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "../users/typeDefs/users.graphql";
import { brandTypeDefs } from "../bands/typeDefs/bands.graphql";
import { baseTypeDef } from "./baseTypeDef.graphql";

const types = [baseTypeDef, userTypeDefs, brandTypeDefs];

export default mergeTypeDefs(types);
