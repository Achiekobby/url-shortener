import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

class App {
    express;
    mongo_uri;
    port;

    constructor(controllers, mongo_uri) {
        this.express = express();
        dotenv.config();
        this.port = process.env.PORT_NUMBER;
        this.mongo_uri = mongo_uri;

        //* initialize processes
        this.establishDBConnection();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    establishDBConnection() {
        mongoose
            .connect(this.mongo_uri)
            .then(() => {
                console.log("Database Connection Established");
            })
            .catch((err) => {
                console.log(`Error: ${err.message}`);
            });
    }

    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.express.use("/api", controller.router);
        });
    }

    initializeMiddleware() {
        this.express.use(express.json());
        this.express.use(cors({ origin: "*" }));
        this.express.use(cookieParser());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
        this.express.use(helmet());
    }

    async listen() {
        try {
            await new Promise((resolve) => {
                this.express
                    .listen(this.port, () => {
                        resolve();
                    })
                    .on("error", (error) => {
                        throw new Error(error.message);
                    });
            });
            console.log(`Server is running on port ${this.port}`);
        } catch (error) {
            console.log(`Error starting server: ${error.message}`);
            throw error;
        }
    }
}

export default App;
