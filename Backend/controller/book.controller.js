
import Book from "../modal/book.modal.js";

export const getbook=async(req,res)=>{
   try {
     const book=  await Book.find()
     res.status(200).json(book)
    
   } catch (error) {
    console.log("eroor :",error)
    res.status(500).json(error)
   }
}