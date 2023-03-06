require('dotenv').config()
const express = require("express")
const sequelize = require('./db')
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./routers/index')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

const startDB = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startDB()

