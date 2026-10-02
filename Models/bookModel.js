import mongoose from "mongoose";

const bookschma  = mongoose.Schema(
    {
        title: {
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishyear:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
)
export const Book = mongoose.model('book' , bookschma)



// This Book Management System is a full-stack MERN (MongoDB, Express, React, Node.js) application that enables users to 
// add, view, edit, and delete books. The frontend is built with React, using React Router for navigation and Axios for 
// API communication. It efficiently manages state using React Hooks like useState and useEffect, ensuring dynamic updates and 
// a smooth user experience. The backend is powered by Express.js and MongoDB, providing a RESTful API to handle CRUD operations 
// securely. The system includes error handling, loading states, and clean UI components for better usability. This project 
// demonstrates strong full-stack development skills, making it a great example of how frontend and backend interact seamlessly. 