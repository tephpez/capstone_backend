'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      username: {
        type: Sequelize.STRING,
        allowNull: false
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      currentLocation: {
        type: Sequelize.STRING,
        allowNull: false
      },

      profPic: {
        type: Sequelize.STRING,
        allowNull: false
      },

      createdAt: {
        field: 'createdAt',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },

      updatedAt: {
        field: 'updatedAt',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP    