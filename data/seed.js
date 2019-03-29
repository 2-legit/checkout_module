const faker = require('faker');
const db = require('../data/index');

const createFakeRoom = () => ({
  cost: faker.random.number({ min: 100, max: 300 }),
  reviews: faker.random.number({ min: 100, max: 200000 }),
  avg_review: faker.random.number({ min: 1, max: 5 }),
  guests: faker.random.number({ min: 1, max: 10 }),

});

const generateRooms = () => {
  const fakeRooms = [];
  const desiredRooms = 100;
  for (let i = 0; i < desiredRooms; i += 1) {
    fakeRooms.push(createFakeRoom());
  }
  return fakeRooms;
};

const createFakeBooking = () => ({
  room_id: faker.random.number({ min: 1, max: 100 }),
  booked_date: faker.date.between('2019-1-1', '2020-1-1'),
});


const generateBookings = () => {
  const fakeBookings = [];
  const desiredBookings = 8000;
  for (let i = 0; i < desiredBookings; i += 1) {
    fakeBookings.push(createFakeBooking());
  }
  return fakeBookings;
};

db.sequelize.drop()
  .then(() => {
    db.sequelize.sync()
      .then(() => {
        db.Room.bulkCreate(generateRooms())
          .then(() => {
            db.Calendar.bulkCreate(generateBookings(), { ignoreDuplicates: true });
          });
      });
  });

module.exports.generateBookings = generateBookings;
module.exports.generateRooms = generateRooms;
