import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import "reflect-metadata";
import { AppDataSource } from './database/app_database';
import Routes from './routes/routes';

AppDataSource.initialize();

const app = express()

const routes = new Routes();

app
    .use(express.json())
    .use(cors())     
    .use(morgan('dev'))
routes.run()

app
    .use(routes.router)
    .use('/images', express.static(path.resolve(__dirname,  '..', 'storages', 'images')));

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});