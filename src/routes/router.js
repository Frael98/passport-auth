const express = require('express')
const router = express.Router();
const rutas = require('./rutas')
const passport = require('passport')

router.get('/', rutas.Index)

router.get('/login', passport.authenticate('login-up', {
    successRedirect: '/',
    failureRedirect: '/login',
    passReqToCallback: true // indica que se pueda enviar el param req
}))

module.exports = router;