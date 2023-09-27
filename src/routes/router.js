const express = require('express')
const router = express.Router();
const rutas = require('./rutas')
const passport = require('passport')

router.get('/', rutas.Index)

router.get('/login', rutas.Login)

router.get('/signup', rutas.SignUp)

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    successMessage: "Registrado correctamente",
    failureMessage: 'intente de nuevo',
    passReqToCallback: true // indica que se pueda enviar el param req
}))

router.use(rutas.isAuthenticated) // -> todas las rutas especificadas despues de este comando requiren autenticacion

router.get('/profile', (req, res, next) => {
    console.log('Ingresando a profile')
    res.send('Profile')
})

router.post('/profile', (req, res, next) => {
    console.log(req.body.email)
})


router.get('/logout', rutas.Logout)


module.exports = router;