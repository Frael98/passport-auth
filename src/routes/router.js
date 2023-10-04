const express = require('express')
const router = express.Router();
const rutas = require('./rutas')
const passport = require('passport')

router.get('/', rutas.Index)

router.get('/login', rutas.Login)

router.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureMessage: "Usuario no encontrado",
    passReqToCallback: true
}))

router.get('/signup', rutas.SignUp)

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/register',
    successMessage: "Registrado correctamente",
    failureMessage: 'intente de nuevo',
    passReqToCallback: true // indica que se pueda enviar el param req
}))

router.use(rutas.isAuthenticated) // -> todas las rutas especificadas despues de este comando requiren autenticacion

router.get('/profile', rutas.Profile)

router.post('/profile', (req, res, next) => {
    console.log(req.body.email)
})


/* router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/')
    //res.send('Sesion finalizada')
}) */

router.post('/logout', (req, res, next) => {
    req.logout((error) => { // Since 0.6.0 this function is asynchronous, callback should be passed
        if (error) return next(error)

        res.redirect('/')

    });
    //res.send('Sesion finalizada')
})

module.exports = router;