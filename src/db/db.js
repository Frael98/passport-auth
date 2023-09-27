const mongoose = require('mongoose')
// Conexion a la bd react-auth
mongoose.connect('mongodb://127.0.0.1:27017/passport-local', {
})
    .then(db => console.log('Conectado a passport-local'))
    .catch(err => {
        console.log('Ocurrio un error en la conexion: ... ')
        console.log(err)
    })