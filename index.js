const express = require('express')
const morgan = require('morgan');
const router = require('./src/routes/router')
const passport = require('passport')
const session = require('express-session')

// Ejecutamos express
const app = express();

//Config
app.set('port', 3003)
require('./src/db/db') // requerimos la db
require('./src/passport/passport-auth') // requerimos la config de passport en el server

//Midleware
app.use(morgan('dev'))
//app.use(express.urlencoded({extended: false}))
app.use(session({ // configuramos la session
    secret: 'mysession',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize()) // iniciamos passport en el sever
app.use(passport.session())// habilitamos el uso de sesiones de passport --> need express-session -> npm i express-session

//rutas
app.use('/', router)

// Inicar server
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
})

