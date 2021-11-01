const { gql } = require("apollo-server")

const schema = gql`
  type Query {
    info: String!
  }
`

module.exports = schema
