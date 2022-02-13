import  { Request, Response } from 'express'
import 'dotenv/config'
import app from './app'
import conexion from './config/config'



app.get('/', function (req: Request, res: Response) {
    res.send('Hello World')
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
  })




conexion(`${process.env.MONGO_URI}`);