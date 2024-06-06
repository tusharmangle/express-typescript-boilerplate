import app from "./src/app";
import {config} from "./src/config/config";

const startServer = () => {
    const {PORT} = config;
    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    })
}
startServer();