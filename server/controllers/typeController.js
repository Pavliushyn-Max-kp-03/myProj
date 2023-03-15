const {TypeDevice} = require('../models/models')
class TypeController{
    async create(req, res) {
        const {name} = req.body
        const type = await TypeDevice.create({name})
        return res.json(type)

    }
    async getAll(req, res) {
        const types = await TypeDevice.findAll()
        return res.json(types)

    }
    async delete(req, res) {
        const {id} = req.params
        const result = await Brand.destroy({where: {id}})
        return res.status(200).json({
            message: 'deleted', 
          });
    }
}

module.exports = new TypeController()