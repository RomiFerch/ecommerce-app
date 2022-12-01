import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import "./config/database.js"
import router from './routes/index.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',router)

app.listen(4000, () => console.log('listening on port 4000'))