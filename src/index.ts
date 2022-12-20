import express from 'express';
import "reflect-metadata";
import "./shared/infra/typeorm";
import "./shared/container";
import { router } from './routes';
import { config } from "../config";

const app = express();
const port = config.serverPort;
console.log(`Server running on port ${port}`);
app.use(express.json());
app.listen(port);
app.use(router);