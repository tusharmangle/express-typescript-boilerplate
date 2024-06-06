import dotenv from "dotenv"

dotenv.config();

const _config = {
    port: process.env.PORT || 3000,
    front_end_url: process.env.FRONT_END_URL
}

export const config = Object.freeze(_config)