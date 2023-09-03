import express from 'express';
import 'dotenv/config'
import { timeRouter } from './routes/timeRouter';
import { campeonatoRouter } from './routes/campeonatoRouter';


const server = express();

server.use(express.json());

server.use(timeRouter);
server.use(campeonatoRouter);


//const PORT = process.env.PORT;

server.listen("3000", () => console.log(`Server running on port 3000`));