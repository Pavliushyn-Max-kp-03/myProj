const Router = require('express')
const router = new Router()
const serviceController = require('../controllers/serviceController')
const checkRole = require("../errors/checkRole")

router.post('/', checkRole("ADMIN"), serviceController.create)
router.get('/', serviceController.getAll)
router.get('/:id', serviceController.getOne)

module.exports = router