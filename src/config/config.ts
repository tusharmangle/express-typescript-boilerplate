import dotenv from "dotenv"

dotenv.config();

const _config = {
    port: process.env.PORT || 3000,
    front_end_url: process.env.FRONT_END_URL,
    database_URI: process.env.DATABASE_URI,
    env:process.env.NODE_ENV
}

export const config = Object.freeze(_config)