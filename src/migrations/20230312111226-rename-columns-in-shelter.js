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
    await queryInterface.renameColumn('shelters', 'ssNm', 'cityNm');
    await queryInterface.renameColumn('shelters', 'sggNm', 'guNm');
    await queryInterface.renameColumn('shelters', 'gbAcmd', 'shelterType');
    await queryInterface.renameColumn('shelters', 'equpNm', 'shelterNm');
    await queryInterface.renameColumn('shelters', 'locSfprA', 'address');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('shelters', 'cityNm', 'ssNm');
    await queryInterface.renameColumn('shelters', 'guNm', 'sggNm');
    await queryInterface.renameColumn('shelters', 'shelterType', 'gbAcmd');
    await queryInterface.renameColumn('shelters', 'shelterNm', 'equpNm');
    await queryInterface.renameColumn('shelters', 'address', 'locSfprA');
  }
};
