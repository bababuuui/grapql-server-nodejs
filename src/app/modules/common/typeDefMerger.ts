import { mergeTypeDefs } from "@graphql-tools/merge";

import { userTypeDefs } from "../users/typeDefs/users.graphql";
import { brandTypeDefs } from "../bands/typeDefs/bands.graphql";

const types = [userTypeDefs, brandTypeDefs];

export default mergeTypeDefs(types);
