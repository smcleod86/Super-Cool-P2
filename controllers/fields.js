require('dotenv').config()
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

module.exports = router