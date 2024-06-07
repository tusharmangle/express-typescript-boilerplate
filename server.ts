import app from "./src/app";

// configuration
import {config} from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = async() => {
    await connectDB()
    app.listen(config.port, () => {
        console.log(`Server started at http://localhost:${config.port}`);
    })
}

startServer();