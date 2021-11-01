const PersonService = require("../services/PersonService")

async function addPerson(_, { name }) {
  return await PersonService.create({ name })
}

module.exports = {
  addPerson,
}
