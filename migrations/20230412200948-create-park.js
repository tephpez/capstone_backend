'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      mapUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      hours: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },

      city: {
        type: Sequelize.STRING,
        allowNull: false
      },

      state: {
        type: Sequelize.STRING,
        allowNull: false
      },

      zip: {
        type: Sequelize.STRING,
        allowNull: false
      },

      website: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('parks');
  }
};


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP    