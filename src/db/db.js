const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/react-auth', {
})
    .then(db => console.log('Conectado a React-auth'))
    .catch(err => console.log(err))