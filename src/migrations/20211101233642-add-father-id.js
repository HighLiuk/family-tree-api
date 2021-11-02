"use strict"

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.addColumn("people", "father_id", {
      type: DataTypes.INTEGER,
    })
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.removeColumn("people", "father_id")
  },
}
