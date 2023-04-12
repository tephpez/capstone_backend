'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('parks', [
      {
        name: 'Goshen Pond',
        mapUrl: '',
        hours: '',
        address: 'Goshen Pond Campground, Atsion Road',
        city:'Shamong',
        state: 'NJ',
        zip: '08088',
        website: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('parks', null, {});
  }
};
