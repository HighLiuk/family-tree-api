const { gql } = require("apollo-server")

const schema = gql`
  type Person {
    name: String!
    # father: Person
    # children: [Person!]!
  }
`

module.exports = schema
