/**
 * Rutas Vistas
 */
const rutas = {

    Index: (req, res, next) => {

        res.redirect('login')
    },

    SignUp: (req, res, next) => {
        res.render('register')
    },

    Login: (req, res, next) => {

        res.render('login')
    },

    Logout: (req, res, next) => {
        req.logout();
        res.redirect('/')
        //res.send('Sesion finalizada')
    },

    isAuthenticated: (req, res, next) => {
        if(req.isAuthenticated()){
            return next()
        }
        res.send('no auntenticado')
    },

    Profile: (req, res) => {
        res.render('profile')
    }
}
module.exports = rutas