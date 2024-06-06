import dotenv from "dotenv"

dotenv.config();

const _config = {
    PORT: process.env.PORT || 3000,
    FRONT_END_URL: process.env.FRONT_END_URL
}

export const config = Object.freeze(_config)