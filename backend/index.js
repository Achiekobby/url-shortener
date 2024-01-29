import App from "../backend/app.js";
import dotenv from "dotenv";

dotenv.config();
const db_uri = String(process.env.LOCAL_DB_URL);
const app = new App([], db_uri);

try {
    await app.listen();
} catch (error) {
    console.log(`Error starting server: ${error.message}`);
}
