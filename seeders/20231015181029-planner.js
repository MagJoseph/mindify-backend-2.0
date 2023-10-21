'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert("planner", [
       {
         userId: 1,
         plannerDate: "2023-10-14",
         content: "Try meditating for 30 minutes.",
       },
       {
         userId: 1,
         plannerDate: "2023-10-25",
         content: "Write down my affirmations",
       },
       {
         userId: 1,
         plannerDate: "2023-11-20",
         content: "First pilates lesson.",
       },
       {
         userId: 1,
         plannerDate: "2023-12-15",
         content: "Start my cleanse.",
       },
       {
         userId: 1,
         plannerDate: "2023-12-25",
         content: "Cleanse is finished",
       },
     ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("planner", null, {});
  }
};
