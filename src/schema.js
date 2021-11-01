const { gql } = require("apollo-server")

const schema = gql`
  type Query {
    people: [Person!]!
  }

  type Person {
    id: ID!
    name: String!
  }
`

module.exports = schema
