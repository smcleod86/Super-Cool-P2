require('dotenv').config()
const db = require('../models')
let router = require('express').Router()

// Requireing our mapbox geocoder
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
// Utilizing our geocoding client (this is where I use my API key)
// geocodingClient will allow me to send requests for geocoding data from the mapbox API
const geocodingClient = mbxGeocoding({accessToken: process.env.MAPBOX_TOKEN})

// Stubbed homeroute for search
router.get('/', (req, res) => {
    res.send('fieldendpoint')
})

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.get('/profile', (req, res)  => {
    // db.fields.findAll()
    // .then((fields) => {
    //     res.send('views/profile', { fields: field}) 
    // }).catch((error) => {
    //     console.log("big fail")
    // })
})

module.exports = router