'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('shelters', 'xCord', {
      type: Sequelize.DOUBLE,
      allowNull: false
    });
    await queryInterface.changeColumn('shelters', 'yCord', {
      type: Sequelize.DOUBLE,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('shelters', 'xCord', {
      type: Sequelize.FLOAT,
      allowNull: false
    });
    await queryInterface.changeColumn('shelters', 'yCord', {
      type: Sequelize.FLOAT,
      allowNull: false
    });
  }
};
