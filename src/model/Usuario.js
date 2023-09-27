const mongoose = require('mongoose')
const { Schema } = mongoose;
const bcryt = require('bcrypt-nodejs')

const Usuario = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
})

/**
 * Retorna la contraseña encriptada
 * @param {string} password 
 * @returns 
 */
Usuario.methods.encriptarPassword = (password) => {
    //retornamos la contraseña encriptada - genSaltSync indica la cantidad de
    return bcryt.hashSync(password, bcryt.genSaltSync(10))
}

/**
 * Compara la contraseña retorna true si son iguales
 * @param {string} password 
 * @returns 
 */
//Declaramos nueva funcion pero de forma normal para poder usar la propiedad password
Usuario.methods.isUserPassword = function (password){
    return bcryt.compareSync(password, this.password)
}

module.exports = mongoose.model('Usuario', Usuario)