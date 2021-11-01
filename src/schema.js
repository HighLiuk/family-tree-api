const { gql } = require("apollo-server")

const schema = gql`
  type Query {
    people: [Person!]!
    person(id: ID!): Person
  }

  type Mutation {
    addPerson(name: String!): Person!
  }

  type Person {
    id: ID!
    name: String!
  }
`

module.exports = schema
