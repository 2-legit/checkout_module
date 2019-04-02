const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const db = require('../data/index');


const app = express();

const port = process.env.PORT || 3000;

app.use('/rooms/:room_id', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(bodyparser.json());

app.get('/rooms/:room_id/reservations', (req, res) => {
  db.sequelize.query(`select * from calendars inner join rooms where calendars.room_id = rooms.id and rooms.id = ${req.params.room_id}`)
    .then((bookings) => {
      res.send(bookings);
    });
});

app.listen(port, () => (console.log(`Listening on ${port}`)));
