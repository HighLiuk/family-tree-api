"use strict"

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate({ Person }) {
      this.belongsTo(Person, {
        foreignKey: "father_id",
        as: "father",
      })
    }
  }

  Person.init(
    {
      uuid: {
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.STRING,
      },
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
