module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Tasks', [
    { name: 'Task 1', details: 'Details for Task 1' },
    { name: 'Task 2', details: 'Details for Task 2' },
    { name: 'Task 3', details: 'Details for Task 3' }
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Tasks', null, {})
};
