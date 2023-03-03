import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import videosRoutes from './routes/videos.routes';

const server = express();

server.use(morgan('dev'));
server.use(cors());

server.use(express.json());
server.use(express.urlencoded( { extended: false } ));

server.use(videosRoutes);
export default server;
