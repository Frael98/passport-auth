const rutas = {

    Index: (req, res, next) => {

        res.send('Hola mundo!')
    },

    Login: (req, res, next) => {

        res.send('<h1>This is Login</h1>')
    }
}
module.exports = rutas