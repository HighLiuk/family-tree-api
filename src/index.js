const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Person = require("./resolvers/Person")

const resolvers = { Query, Mutation, Person }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
})

server.listen().then(({ url }) => {
  console.log(`Server is running on port ${url}`)
})
