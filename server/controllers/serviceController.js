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
        if (info) {
            info = JSON.parse(info)
            info.forEach(i =>
                ServiceInfo.create({
                    title: i.title,
                    description: i.description,
                    serviceId: service.id
                })
            )
        }
        return res.json(service)
        

    } 
    async getAll(req, res) {
        let {brandId, typeDeviceId, limit, page} = req.query
        let services;
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        if (!brandId && !typeDeviceId) //якщо не вказані не бренди, ні типи
        {
            services = await Service.findAndCountAll({limit, offset})
        }
        if (brandId && !typeDeviceId) 
        {
            services = await Service.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeDeviceId) 
        {
            services = await Service.findAndCountAll({where:{typeDeviceId}, limit, offset})
        }
        if (brandId && typeDeviceId) 
        {
            services = await Service.findAndCountAll({where:{typeDeviceId, brandId}, limit, offset})
        }
        return res.json(services)

    }
    async getOne(req, res) {
        const {id} = req.params
        const service = await Service.findOne(
            {
                where: {id},
                include: [{model: ServiceInfo, as: 'info'}] 
            },
        )
        return res.json(service)
        
    }
} 

module.exports = new ServiceController()