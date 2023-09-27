const passport = require('passport')
// strategy -> indica las maneras de autenticacion
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('../model/Usuario')

//Ayuda a la navegacion del usuario en multiples paginas
//metodo que guarda la session del usuario
passport.serializeUser((user, done) => {
    done(null, user.id)
})
//devolvemos la session del usuario
passport.deserializeUser(async (id, done) => {
    const user = await Usuario.findById(id)
    done(null, user)
})

// Declaramos una nueva forma de autenticacion, puede ser llamado como quiera (local-signup)
// LocalStrategy recibe 2 parametros objecto=Configuracion y Callback
/**
 * funcion local-signup
 * Registro de Usuario
 */
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // -> Indica que se pueda enviar param req al callback
}, async (req, email, password, done) => {
    console.log('Registro')
    //Validacion para que no haya email repetidos
    const usuario = await Usuario.findOne({ 'email': email })
    if (usuario) {
        return done(null, false, 'Usuario ya existe')
    }

    const user = new Usuario()
    user.email = email
    user.password = user.encriptarPassword(password)
    await user.save()
    console.log('Registrado !')
    console.log(user)
    done(null, user)
})
)

/**
 * funcion local-singin
 * Inicio de sesion
 */
passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {

    const usuario = await Usuario.findOne({ email })

    if (!usuario) {
        return done(null, false, 'Usuario Invalido')
    }
    if (!usuario.isUserPassword(password)) {
        return done(null, false, 'Contraseña invalida')
    }

    done(null, usuario)
})
)