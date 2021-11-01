const { Person } = require("../models")

class PersonService {
  static async all() {
    return await Person.findAll()
  }

  static async find(id) {
    return await Person.findOne({ where: { id } })
  }

  static async create({ name }) {
    return await Person.create({ name })
  }
}

module.exports = PersonService
