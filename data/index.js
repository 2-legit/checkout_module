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

const Room = sequelize.define('Room', {
  // attributes
  cost: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  reviews: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  avg_review: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  guests: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Calendar = sequelize.define('Calendar', {
  bookedDates: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  room_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Room,
      key: 'id',
    },
  },
});

sequelize.sync();

module.exports.Calendar = Calendar;
module.exports.Room = Room;
module.exports.sequelize = sequelize;
