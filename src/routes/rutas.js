const rutas = {

    Index: (req, res, next) => {

        res.send('Hola mundo!')
    },

    Login: (req, res, next) => {

        res.send('<h1>This is Login</h1>')
    },

    Logout: (req, res, next) => {
        req.logout();
        res.send('Sesion finalizada')
    },

    isAuthenticated: (req, res, next) => {
        if(req.isAuthenticated()){
            return next()
        }
        res.send('no esta autenticado')
    }
}
module.exports = rutas