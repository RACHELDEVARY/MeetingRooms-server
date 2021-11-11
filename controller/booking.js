var express = require('express')
var router = express.Router()
const booking = require('../model/booking')
const { create } = require('../model/booking')
const Room = require('../model/room')

router.post('/bookingcommitRequest', async (req, res) => {
    console.log("I am in the server")
    const { date, fromTime, toTime, numberOfParticipants } = req.body
    const newBooking = await booking.create(req.body)
        .then(res.send("booking created"))
        .catch((err) => {
         res.send(" an error was  found while creating the booking", err)
        })

})

router.post('/bookingRequestToServer', async (req, res) => {
    console.log("vdfv")
    const { date, fromTime, toTime, numberOfParticipants } = req.body
    
    try {
        const findRoom = await Room.$where(this.maxOfPeople>=numberOfParticipants).exec(callback)
        console.log(findRoom)
        
        if (!findRoom) {
            res.status(400).send("Somthing wrong...")    
            return;
        }

        res.json({ token: jwt.sign({ email }, process.env.SECRET, { expiresIn: "2h" }) })

    } catch (error) {
        console.log("Error: ", error)
        res.status(500).send(error)
    }
})


router.post('/login', async (req, res) => {
    console.log("login", req.body)
    try {
        const { email, password } = req.body
        const existingUser = await User.findOne({ email, password }).exec()
        if (!existingUser) {
            res.status(400).send("User or Password Invalid")
            return;
        }

        res.json({ token: jwt.sign({ email }, process.env.SECRET, { expiresIn: "2h" }) })

    } catch (error) {
        console.log("Error: ", error)
        res.status(500).send(error)
    }
})


module.exports = router




