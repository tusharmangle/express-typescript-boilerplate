import express from 'express'
import cors from "cors"
import {config} from "./config/config"
// express app
const app = express()

// cors is used to allow cross origin requests
app.use(cors({
    origin: config.front_end_url,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

// routes
app.get("/", (req, res) => {
    res.json({message: "Hello Express-TypeScript"})
})

export default app;