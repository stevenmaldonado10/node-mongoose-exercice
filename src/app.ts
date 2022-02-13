import  { Express, Application, Request, Response} from 'express';
import bookRouter from './routes/bookRoutes'

const express = require('express')
const  app: Application = express()

app.use(express.json());

app.use(bookRouter);

export default app;