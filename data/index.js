const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize('checkout', 'root', `${config.PASSWORD}`, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
