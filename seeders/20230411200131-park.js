'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('parks', [
      {
        name: 'Goshen Pond',
        mapUrl: '',
        hours: '',
        state: 'NJ',
        address: 'Goshen Pond Campground, Atsion Road Shamong, NJ 08088',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('parks', null, {});
  }
};
