"use strict"

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.addColumn("people", "uuid", {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.STRING,
    })
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.removeColumn("people", "uuid")
  },
}
