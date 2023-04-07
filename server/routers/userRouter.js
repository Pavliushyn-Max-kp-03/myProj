const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const checkAuth = require('../errors/checkAuth')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', checkAuth, userController.check )


module.exports = router   