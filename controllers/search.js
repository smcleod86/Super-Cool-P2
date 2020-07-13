require('dotenv').config()
let router = require('express').Router()

// Requireing our mapbox geocoder
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
// Utilizing our geocoding client (this is where I use my API key)
// geocodingClient will allow me to send requests for geocoding data from the mapbox API
const geocodingClient = mbxGeocoding({accessToken: process.env.MAPBOX_TOKEN})

// Stubbed homeroute for search
router.get('/', (req, res) => {
    geocodingClient.forwardGeocode({
        query: `${req.query.city}, ${req.query.state}`
        //query: `${req.query.lng}, ${req.query.lat}`
    })
    .send()
    .then(response => {
        let match = response.body.features[0]
        console.log(match)
        res.render('show', {match, mapkey: process.env.MAPBOX_TOKEN})
    })
})

module.exports = router