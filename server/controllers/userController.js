const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')
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
        const token = jwt.sign({id: user.id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
        return res.json({token})

    }
    async login(req, res) {

    }
    async check(req, res) {
        
    }
}

module.exports = new UserController()