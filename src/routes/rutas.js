/**
 * Rutas Vistas
 */
const rutas = {

    Index: (req, res, next) => {

        res.send('Hola mundo!')
    },

    SignUp: (req, res, next) => {
        res.render('register')
    },

    Login: (req, res, next) => {

        res.render('login')
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