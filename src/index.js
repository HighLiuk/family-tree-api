const { ApolloServer } = require("apollo-server")
const { Neo4jGraphQL } = require("@neo4j/graphql")
const neo4j = require("neo4j-driver")
const typeDefs = require("./schema")
require("dotenv").config()

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
)

const { schema } = new Neo4jGraphQL({ typeDefs, driver })

const server = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV !== "production",
})

server.listen().then(({ url }) => {
  console.log(`Server is running on port ${url}`)
})
