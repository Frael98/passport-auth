const passport = require('passport')
// strategy -> indica las maneras de autenticacion
const LocalStrategy = require('passport-local').Strategy
// declaramos una nueva forma de autenticacion, puede ser llamado como quiera (local-signup)
// LocalStrategy recibe 2 parametros objecto=Configuracion y Callback
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // -> Indica que se pueda enviar param req al callback
},
    (req, email, password, done) => {
        
    })
)