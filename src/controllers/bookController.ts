import { request, Request, Response } from "express";
import {bookModel as Book, IBook}  from "../models/bookModel";

export const addNewBook = async (req: Request, res:Response)=> {
    console.log(req.body)
    try {
        //const newBook : IBook = new Book();
   
        const book : IBook = await Book.create(req.body)

         res.status(200).json({ book })
         
        }   

    catch(e){
            console.log(e)
            }

}
   
export const getBooks = async (req: Request, res: Response) =>{

        try {

            const books: IBook[] = await Book.find({})
            res.status(200).json({ books })
            }

        catch (e){

        console.log(e)
        }


}

export const getBookById = async (req: Request, res: Response) =>{

    try{
      const bookId =  req.params.id
      const book: IBook | null = await Book.findById({bookId})
      res.status(200).json({book})
    }

    catch(e){
        console.log(e)
    }
}


export const updateBook = async (req: Request, res: Response) =>{ 

    try {
        const bookId = req.params.id;
        const newBookInfo = req.body;
        const book: IBook | null = await Book.findOneAndUpdate({ _id: bookId }, newBookInfo, { new: true });
        res.status(200).json({ book })
        } 
        
    catch (e) {
        console.log(e);
      }

}

export const deleteBook = async (req: Request, res: Response) =>{ 

    try {
        const bookId = req.params.id;
        const book  = await Book.deleteOne({ _id: bookId })
        res.status(200).json({ message: 'book successfully deleted' })
        } 
        
    catch (e) {
        console.log(e);
      }

}

