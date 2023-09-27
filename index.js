const express = require('express')
// Ejecutamos express
const app = express();
const morgan = require('morgan');
const router = require('./src/routes/router')
const passport = require('passport')
const session = require('express-session');

const path = require('path')
const engine = require('ejs-mate') // Importamos el motor de plantillas EJS

//Config
app.set('port', 9090) // Cambiar puerto si -> Error: listen EACCES: permission denied 0.0.0.0:3030
require('./src/db/db') // requerimos la db
require('./src/passport/passport-auth') // requerimos la config de passport en el server

// configuracion del motor de platillas en el server
app.set('views', path.join(__dirname,'src/views')) // -> espeficiamos la ruta de las vistas
app.engine('ejs', engine) // -> seteamos el motor ejs
app.set('view engine','ejs')
//Midleware
app.use(morgan('dev'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())// para que reciba peticiones en json

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

