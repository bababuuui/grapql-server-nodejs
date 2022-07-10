import { ApolloServer } from "apollo-server";
import { UsersApiService } from "./modules/users/service/UsersApiService";
import { BandsApiService } from "./modules/bands/service/BandsApiService";
import TYPE_DEFINITIONS from "./modules/common/typeDefMerger";
import { RESOLVERS } from "./modules/common/resolversMerger";
import { GenresApiService } from "./modules/genres/service/GenresApiService";
import { ArtistsApiService } from "./modules/artists/service/ArtistsApiService";
import { TracksApiService } from "./modules/tracks/service/TracksApiService";
import { AlbumsApiService } from "./modules/albums/service/AlbumsApiService";
import { FavouritesApiService } from "./modules/favourites/service/FavouritesApiService";
import "dotenv/config";

console.log(`start`);

const server = new ApolloServer({
  typeDefs: TYPE_DEFINITIONS,
  resolvers: RESOLVERS,
  dataSources: () => {
    return {
      usersAPI: new UsersApiService(),
      bandsAPI: new BandsApiService(),
      genresAPI: new GenresApiService(),
      artistsAPI: new ArtistsApiService(),
      tracksAPI: new TracksApiService(),
      albumsAPI: new AlbumsApiService(),
      favouritesAPI: new FavouritesApiService(),
    };
  },
  context: (expressContext) => {
    return {
      token: expressContext.req.headers.authorization || "default_token",
    };
  },
  csrfPrevention: true,
  cache: "bounded",
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
