import { ApolloServer, gql } from "apollo-server";
import { UsersApiService } from "./modules/users/service/UsersApiService";
import { IUserInput } from "./modules/users/interfaces/IUserInput";
import { BandsApiService } from "./modules/bands/service/BandsApiService";

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

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    user: async (parent, args, { dataSources }) => {
      return dataSources.usersAPI.getUser(args.id);
    },
    bands: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.getAllBands();
    },
    band: async (parent, args, { dataSources }) => {
      return dataSources.bandsAPI.getBand(args.id);
    },
    // jwt: (parent, args, context) => context.token,
  },

  Mutation: {
    login: async (parent, args, { dataSources }) => {
      const userInput: IUserInput = args.credentials;
      return dataSources.usersAPI.login(userInput);
    },
  },
};

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }
  type User {
    _id: ID!
    firstName: String
    lastName: String
    password: String!
    email: String!
  }

  type Member {
    artist: String
    instrument: String
    years: [String]
  }

  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    user(id: String!): User
    bands: [Band]
    band(id: String!): Band
  }
  input UserLoginInput {
    email: String!
    password: String!
  }
  type Mutation {
    login(credentials: UserLoginInput): String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersApiService(),
      bandsAPI: new BandsApiService(),
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
