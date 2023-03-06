const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketService = sequelize.define('basketService', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Service = sequelize.define('service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}, 
    
})

const TypeDevice = sequelize.define('typeDevice', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ServiceInfo = sequelize.define('serviceInfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
//таблиця, яка зв'язує тип та бренд, оскільки зв'язок many to many

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketService)
BasketService.belongsTo(Basket)

TypeDevice.hasMany(Service)
Service.belongsTo(TypeDevice)

Brand.hasMany(Service)
Service.belongsTo(Brand)

Service.hasMany(BasketService)
BasketService.belongsTo(Service)

Service.hasMany(ServiceInfo);
ServiceInfo.belongsTo(Service)

TypeDevice.belongsToMany(Brand, {through: TypeBrand })
Brand.belongsToMany(TypeDevice, {through: TypeBrand })

module.exports = {
    User,
    Basket,
    BasketService,
    Service,
    TypeDevice,
    Brand,
    TypeBrand,
    ServiceInfo
}