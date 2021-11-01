const { Person } = require("../models")

class PersonService {
  static async all() {
    return await Person.findAll()
  }

  static async create({ name }) {
    return await Person.create({ name })
  }
}

module.exports = PersonService