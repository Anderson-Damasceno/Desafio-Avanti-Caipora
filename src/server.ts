import express from 'express';
import 'dotenv/config'
import { router } from './routes/jogadorRouter';
import { timeRouter } from './routes/timeRouter';


const server = express();

server.use(express.json());

server.use(router);
server.use(timeRouter);


const PORT = process.env.PORT;

server.listen(PORT || 3000, () => console.log(`Server running on port ${PORT}`));