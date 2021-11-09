var express = require('express')
const booking = require('../model/booking')
const { create } = require('../model/booking')
var router = express.Router()

router.post('/bookingRequestToServer', async (req, res) => {
    const { date, fromTime, toTime, numberOfParticipants } = req.body
    const newBooking = await booking.create(req.body)
        .then(res.send("booking created"))
        .catch((err) => {
         res.send(" an error was  found while creating the booking", err)
        })

})


module.exports = router




