const uuid = require('uuid')
const path = require('path');
const {Service, ServiceInfo} = require('../models/models')
class ServiceController{
    async create(req, res) {
        let {name, price, brandId, typeDeviceId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const service = await Service.create({name, price, brandId, typeDeviceId, img: fileName});
        return res.json(service)

    } 
    async getAll(req, res) {

    }
    async getOne(req, res) {
        
    }
}

module.exports = new ServiceController()