async function addPerson(_, { name }) {}

async function addFather(_, { childId, fatherId }) {}

module.exports = {
  addPerson,
  addFather,
}
