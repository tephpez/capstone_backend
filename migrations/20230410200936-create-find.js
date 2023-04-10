'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('finds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commonName: {
        type: Sequelize.STRING
      },
      botanicalName: {
        type: Sequelize.STRING
      },
      uses: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      poisonWarning: {
        type: Sequelize.STRING
      },
      dateFound: {
        type: Sequelize.DATE
      },
      notes: {
        type: Sequelize.STRING
      },
      picOne: {
        type: Sequelize.STRING
      },
      picTwo: {
        type: Sequelize.STRING
      },
      picThree: {
        type: Sequelize.STRING
      },
      picFour: {
        type: Sequelize.STRING
      },
      picFive: {
        type: Sequelize.STRING
      },
      mapsLink: {
        type: Sequelize.STRING
      },
      abundanceRating: {
        type: Sequelize.INTEGER
      },
      locationDesc: {
        type: Sequelize.STRING
      },
      landmarks: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      locationId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('finds');
  }
};