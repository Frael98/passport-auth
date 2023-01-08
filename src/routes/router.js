const express = require('express')
const router = express.Router();
const rutas = require('./rutas')

router.get('/', rutas.Index)

router.get('/login', rutas.Login)

module.exports = router;