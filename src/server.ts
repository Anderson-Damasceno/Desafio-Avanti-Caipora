import express from 'express';
import 'dotenv/config'
import './routes'
import { router } from './routes/jogadorRouter';


const server = express();

server.use(express.json())

server.use(router)


const PORT = process.env.PORT;

server.listen(PORT || 3000, () => console.log(`Server running on port ${PORT}`))