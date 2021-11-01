const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")
const Query = require("./resolvers/Query")

const resolvers = { Query }

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server is running on port ${url}`)
})
