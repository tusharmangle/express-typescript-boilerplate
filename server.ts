import app from "./src/app";
import {config} from "./src/config/config";

const startServer = () => {
  
    app.listen(config.port, () => {
        console.log(`Server started at http://localhost:${config.port}`);
    })
}
startServer();