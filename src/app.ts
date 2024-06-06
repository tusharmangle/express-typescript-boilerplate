import express from 'express'
import cors from "cors"
import {config} from "./config/config"
// express app
const app = express()

// cors is used to allow cross origin requests
app.use(cors({
    origin: config.FRONT_END_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// routes
app.get("/", (req, res) => {
    res.json({message: "Hello World"})
})

export default app;