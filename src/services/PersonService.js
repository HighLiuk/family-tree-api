const { Person } = require("../models")

class PersonService {
  static async all() {
    return await Person.findAll()
  }
}

module.exports = PersonService
