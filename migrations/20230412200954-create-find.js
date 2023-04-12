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
        type: Sequelize.STRING,
        allowNull: false
      },

      botanicalName: {
        type: Sequelize.STRING,
        allowNull: true
      },

      benefits: {
        type: Sequelize.STRING,
        allowNull: true
      },

      category: {
        type: Sequelize.STRING,
        allowNull: false
      },

      poisonWarning: {
        type: Sequelize.STRING,
        allowNull: true
      },

      dateFound: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      notes: {
        type: Sequelize.STRING,
        allowNull: true
      },

      picOne: {
        type: Sequelize.STRING,
        allowNull: false
      },

      picTwo: {
        type: Sequelize.STRING,
        allowNull: true
      },

      picThree: {
        type: Sequelize.STRING,
        allowNull: true
      },

      picFour: {
        type: Sequelize.STRING,
        allowNull: true
      },

      picFive: {
        type: Sequelize.STRING,
        allowNull: true
      },

      mapsLink: {
        type: Sequelize.STRING,
        allowNull: false
      },

      abundanceRating: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      locationDesc: {
        type: Sequelize.STRING,
        allowNull: false
      },

      landmarks: {
        type: Sequelize.STRING,
        allowNull: true
      },

      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'userId',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },

      parkId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'parkId',
        onDelete: 'CASCADE',
        references: {
          model: 'parks',
          key: 'id'
        }
      },

      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('finds');
  }
};


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP  