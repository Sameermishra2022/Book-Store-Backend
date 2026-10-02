import express from "express"
import {PORT , mongodbURL} from './config.js'
import mongoose from "mongoose";
import bookRoute from './BookRoute/bookRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//     cors({
//         orirgin: 'http://localhost:3000',
//         methods: ['GET' , 'POST' , 'PUT' , 'DELETE'],
//         allowedHeaders: ['content-type'],
//     })
// );

app.get('/' , (request , response)=>{
return response.status(234).send('Welcome to mern stack project')
});

app.use('/books' , bookRoute)

mongoose.connect(mongodbURL)
.then(() => {
    console.log("App is connected");
    app.listen(PORT , ()=>{
        console.log(`App is started on port number: ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});