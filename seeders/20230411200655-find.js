'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'finds', 
      [
        {
          commonName: 'Lions Mane',
          botanicalName: 'Hericium Erinaceus',
          uses: 'cooking, tea, cognitive benefits',
          category: 'mushrooms',
          poisonWarning: 'n/a',
          dateFound: '2023-04-10',
          notes: 'massive!',
          picOne: 'test',
          picTwo: 'test',
          picThree: 'test',
          picFour: 'test',
          picFive: 'test',
          mapsLink: 'test',
          abundanceRating: 10,
          locationDesc: 'test',
          landmarks: 'test',
          userId: 2,
          parkId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('finds', null, {});

  }
};
