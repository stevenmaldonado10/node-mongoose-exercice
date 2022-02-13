import { Request, Response } from "express";
import {bookModel as Book}  from "../models/bookModel";

export const addNewBook = async (req: Request, res:Response)=> {

try {
    const newBook = new Book();
   
    const book = await newBook.save(req.body)

    res.status(200).json({ book })
}

catch(e){
    console.log(e)
}

}
   








