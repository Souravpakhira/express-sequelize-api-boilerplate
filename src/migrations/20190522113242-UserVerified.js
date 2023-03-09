module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.addColumn('Users', 'verifyToken', {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
    ]),

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.removeColumn('Users', 'verifyToken')]),
};
