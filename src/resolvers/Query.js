const PersonService = require("../services/PersonService")

async function people() {
  return await PersonService.all()
}

async function person(_, { id }) {
  return await PersonService.find(id)
}

module.exports = {
  people,
  person,
}
