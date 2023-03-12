const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')
const generateJWT = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}
class UserController{
    async registration(req, res) {
        const {email, password, role} = req.body
        if (!email || !password) {
            res.status(500).json({ message: 'Неправильний email або пароль' });
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            res.status(500).json({ message: 'Користувач з вказаним email вже існує' });
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token}) 

    }
    async login(req, res) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            res.status(500).json({ message: 'Користувача не знайдено' });
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            res.status(500).json({ message: 'Невірний пароль' });
        }
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})  

    }
    async check(req, res) {
        
    }
}

module.exports = new UserController()