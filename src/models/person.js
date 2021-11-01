"use strict"

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {}
  }

  Person.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Person",
      tableName: "people",
    }
  )

  return Person
}
