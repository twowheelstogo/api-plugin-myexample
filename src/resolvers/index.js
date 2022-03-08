import getConnectionTypeResolvers from "@reactioncommerce/api-utils/graphql/getConnectionTypeResolvers.js";
import Mutation from "./Mutation/index.js";
import Query from "./Query/index.js";

export default {
  ProductConfiguration,
  Mutation,
  Query,
  ...getConnectionTypeResolvers("Product")
};