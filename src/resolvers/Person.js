const PersonService = require("../services/PersonService")

function id({ uuid }) {
  return uuid
}

function father({ uuid }) {
  return PersonService.father(uuid)
}

function children({ uuid }) {
  return PersonService.children(uuid)
}

module.exports = {
  id,
  father,
  children,
}
