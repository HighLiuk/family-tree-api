const { gql } = require("apollo-server")

const schema = gql`
  type Person {
    name: String!
    father: Person @relationship(type: "CHILD_OF", direction: IN)
    children: [Person!]! @relationship(type: "CHILD_OF", direction: OUT)
  }
`

module.exports = schema
