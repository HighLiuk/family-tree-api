const PersonService = require("../services/PersonService")

async function addPerson(_, { name }) {
  return await PersonService.create({ name })
}

async function addFather(_, { childId, fatherId }) {
  return await PersonService.addFather(childId, fatherId)
}

module.exports = {
  addPerson,
  addFather,
}
