const express = require('express')
const morgan = require('morgan');
const router = require('./src/routes/router')
// Ejecutamos express
const app = express();

//Config
app.set('port', 3003)
require('./src/db/db')

//Midleware
app.use(morgan('dev'))

//rutas
app.use('/', router)

// Inicar server
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
})

