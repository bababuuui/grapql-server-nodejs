import { ApolloServer } from "apollo-server";
import { UsersApiService } from "./modules/users/service/UsersApiService";
import { BandsApiService } from "./modules/bands/service/BandsApiService";
import TYPE_DEFINITIONS from "./modules/common/typeDefMerger";
import { RESOLVERS } from "./modules/common/resolversMerger";
import { GenresApiService } from "./modules/genres/service/GenresApiService";
import { ArtistsApiService } from "./modules/artists_wip/service/ArtistsApiService";

console.log(`start`);

// QUERIES
// artist
// artists
// genre
// genres
// track
// tracks
// band
// bands -done
// album
// albums
// jwt ??????
// user - done
// favourites (available only for logged in user)

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// TODO pagination https://www.apollographql.com/docs/react/pagination/offset-based/
// TODO eslint errors
// TODO ENV endpoints

const server = new ApolloServer({
  typeDefs: TYPE_DEFINITIONS,
  resolvers: RESOLVERS,
  dataSources: () => {
    return {
      usersAPI: new UsersApiService(),
      bandsAPI: new BandsApiService(),
      genresAPI: new GenresApiService(),
      artistsAPI: new ArtistsApiService(),
    };
  },
  context: (expressContext) => {
    return {
      token: expressContext.req.headers.authorization || "default_token",
      //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI5ZTEwNGJkZWU0NzFjMzM1OWI5ZWMiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6Im1ldDkxMjlAZ21haWwuY29tIiwiaWF0IjoxNjU2NDQzMzUxfQ.UpIpK6D3qQGejD3oWWGIQ0Y-oI94ev8T6EO0qWH1XhU",
    };
  },
  csrfPrevention: true,
  cache: "bounded",
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
