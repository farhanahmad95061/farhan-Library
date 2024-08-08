import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import BookRouter from './route/book.route.js';
import cors from 'cors'
import UserRouter from './route/user.route.js' ;

const app=express();
dotenv.config();
app.use(cors());
//to parse the json data
app.use(express.json());

const port = process.env.PORT || 4000
const URI = process.env.mongoDBURI 
console.log(URI);

//mongoDB connection
try {
    await mongoose.connect(URI)
    console.log("mongodb is connected successfully")
} catch (error) {
    console.log("error :",error)
    
}
//defining routes
app.use("/book",BookRouter)
app.use("/user",UserRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})