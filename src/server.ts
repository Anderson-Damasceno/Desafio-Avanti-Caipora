import express from 'express';
import 'dotenv/config'
import './routes'
import { jogadorRouter } from './routes/jogadorRouter';
import { timeRouter } from './routes/timeRouter';
import { campeonatoRouter } from './routes/campeonatoRouter';


const server = express();

server.use(express.json())

server.use(jogadorRouter)
server.use(timeRouter)
server.use(campeonatoRouter)

const PORT = process.env.PORT;

server.listen(PORT || 3000, () => console.log(`Server running on port ${PORT}`))