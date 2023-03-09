const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'postgres://dfisfsab:R5ULP8YT5z9l-WxBWAqlYnV1c_w4Sw7R@tiny.db.elephantsql.com/dfisfsab'
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
