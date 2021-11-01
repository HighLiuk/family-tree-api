const PersonService = require("../services/PersonService")

async function people() {
  return await PersonService.all()
}

module.exports = {
  people,
}
