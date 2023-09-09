import express from 'express';
import { timeRouter } from './routes/timeRouter';
import { campeonatoRouter } from './routes/campeonatoRouter';
import { jogadorRouter } from './routes/jogadorRouter';

// Estabelecendo middlewares e inicializando sevidor
const server = express();

server.use(express.json());

server.use(timeRouter);
server.use(campeonatoRouter);
server.use(jogadorRouter)


server.listen("3000", () => console.log(`Server running on port 3000`));