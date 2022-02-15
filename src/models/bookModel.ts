import mongoose, {Document} from 'mongoose'

const schema = mongoose.Schema;


export interface IBook extends Document {

    title: string,
    overview: string,
    category: string,
    price: number,
    //created_date: Date
}


const BookSchema = new schema({

	title:{ type: String , required: true },
    overview: { type: String, required: true},
    category:String,
    price: { type: Number, required: true},
    //created_date: 
}
)

export const bookModel = mongoose.model<IBook>('book', BookSchema)