const { gql } = require("apollo-server")

const schema = gql`
  type Query {
    people: [Person!]!
    person(id: ID!): Person
  }

  type Mutation {
    addPerson(name: String!): Person!
    addFather(childId: ID!, fatherId: ID!): FatherChild
  }

  type FatherChild {
    father: Person!
    child: Person!
  }

  type Person {
    id: ID!
    name: String!
    father: Person
  }
`

module.exports = schema
