const express = require('express')
const router = express.Router()
const db = require('../models')
console.log(db.user)
// import middleware
const flash = require('flash')
const passport = require('../config/ppConfig')

// register get route
router.get('/register', function (req, res) {
    res.render('auth/register')
})
// register post route
router.post('/register', function (req, res) {
    db.user.findOrCreate({
        where: {
            email: req.body.email
        }, defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(function([user, created]) {
        // if user was created
        if (created) {
            console.log('User created! 🐑🐑🐑🐑🐑')
            passport.authenticate('local', { 
                successRedirect: '/',
                successFlash: 'Thanks for signing up!'
            })(req,res)
        } else {
            console.log('User email aleady exists ⛔️⛔️⛔️⛔️⛔️')
            req.flash('error', 'Error: email already exists for user. Try again.')
            res.redirect('/auth/register')
        }
    }).catch(function(err) {
        console.log(` Error found. \nMessage: ${err.message} \nPlease review - ${err}`)
        req.flash('error', err.message)
        res.redirect('/auth/register')
    })
})

// login get route
router.get('/login', function (req, res) {
    res.render('auth/login')
})

// login post route 
router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (error, user, info) {
        // if no user authenticated
        if (!user) {
            req.flash('error', 'Invalid username or password')
            req.session.save(function() {
                return res.redirect('/auth/login')
            })
        }
        if (error) {
            return next(error)
        }

        req.login(user, function(error) {
            if (error) next(error)
            req.flash('success', 'You have been validated and logged in.')
            req.session.save(function() {
                return res.redirect('/')
            })
        })
    })(req, res, next)
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/', 
    failureRedirect: '/auth/login',
    successFlash: 'Welcome to our app',
    failureFlash: 'Invalid username or password'
}))

router.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
})

// export router
module.exports = router