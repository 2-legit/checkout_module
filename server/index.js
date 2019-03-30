const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const db = require('../data/index');


const app = express();

const port = process.env.PORT || 3000;

app.use('/rooms/:room_id', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(bodyparser.json());

app.get('/rooms/:room_id/reservations', (req, res) => {
  // db.Calendar.hasMany(db.Room, { foreignKey: 'id' });
  // db.Room.belongsTo(db.Calendar, { foreignKey: 'id' });
  // db.Calendar.findAll({
  //   where: { room_id: req.params.room_id },
  //   include: [{
  //     model: db.Room,
  //     required: false,
  //     where: { id: req.params.room_id },
  //   }],
  // });
  db.sequelize.query(`select * from calendars inner join rooms where calendars.room_id = rooms.id and rooms.id = ${req.params.room_id}`)
    .then((bookings) => {
      res.send(bookings);
    });
});

app.listen(port, () => (console.log(`Listening on ${port}`)));
