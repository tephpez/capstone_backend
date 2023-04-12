'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        username: 'tephpez',
        password: '5417',
        currentLocation: 'PA',
        profPic: 'n/a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'natchy',
        password: '1133',
        currentLocation: 'NJ',
        profPic: 'n/a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};



