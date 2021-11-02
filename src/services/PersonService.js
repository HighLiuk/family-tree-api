const { Person } = require("../models")

class PersonService {
  static async all() {
    return await Person.findAll()
  }

  static async find(uuid) {
    return await Person.findOne({ where: { uuid } })
  }

  static async create({ name }) {
    return await Person.create({ name })
  }

  static async father(uuid) {
    const person = await Person.findOne({ where: { uuid }, include: "father" })
    return person.father
  }

  static async addFather(childUuid, fatherUuid) {
    const child = await PersonService.find(childUuid)
    const father = await PersonService.find(fatherUuid)
    if (child === null || father === null) {
      return null
    }

    await child.update({ father_id: father.id })
    return { father, child }
  }
}

module.exports = PersonService
