const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const db = require('../data/index');


const app = express();
app.use(morgan('dev'));

const port = process.env.PORT || 3001;

app.use('/rooms/:room_id', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(bodyparser.json());

app.get('/rooms/:room_id/reservations', (req, res) => {
  db.sequelize.query(`select * from calendars inner join rooms where calendars.room_id = rooms.id and rooms.id = ${req.params.room_id}`)
    .then((bookings) => {
      let bookedDates = [];
      for (let i = 0; i < bookings[0].length; i++) {
        bookedDates = bookedDates.concat(bookings[0][i].booked_date);
      }
      const roomData = {
        id: bookings[0][0].id,
        room_id: bookings[0][0].room_id,
        createdAt: bookings[0][0].createdAt,
        updatedAt: bookings[0][0].updatedAt,
        cost: bookings[0][0].cost,
        reviews: bookings[0][0].reviews,
        avg_review: bookings[0][0].avg_review,
        guests: bookings[0][0].guests,
        bookedDates,
      };
      res.send(roomData);
    });
});

app.listen(port, () => (console.log(`Listening on ${port}`)));
