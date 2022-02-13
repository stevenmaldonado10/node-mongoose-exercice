import mongoose, { Error } from "mongoose";


export default function conexion (URI: string){

mongoose.connect(URI)

mongoose.connection.on('error', ()=> console.log('error en conexxión'));
mongoose.connection.once('connected', ()=> console.log('conexión ok'));
}