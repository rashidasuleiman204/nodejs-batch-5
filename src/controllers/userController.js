
import { generateToken } from "../../utils/generateToken.js"
import { userValidation } from "../../validator/userValidator.js"
import { userModel } from "../models/userSchema.js"
export const getHome = (req, res) => {
     res.send(`<h1>Welcome to my Backend API!</h1>`)
}

export const getAbout = (req, res) => {
     res.send(`<h1>My name is Ajala Damilola. I am a backend developer learning Node.js</h1>`)
}

export const getGoals = (req, res) => {
     res.send(`<h1>My goal is to master Express and APIs.</h1>`)
}

export const postUser = async (req, res) => {
     const {username, email, password } = req.body;
     try{
          if(email !== "" && password !== ""){
               const { error } = userValidation.validate({ 
                    username,
                    email,
                    password
               });
               if(error){
                    return res.status(400).json({
                         message: error.details[0].message
                    });
               } 
          }    

               const  existingUser = await userModel.findOne({email})

               if(existingUser) {
                    return res.status(400).jason({
                    message: `User with email ${email}
                    already exists, please login instead or creat a new account`
                    })
               const newUser = await userModel.create({
                    username,
                    email,
                    password
               });

               const token = await
               generateToken(newUser._id)

               res.cookie('token', token,
                   { httpOnly: true,
                    secure: process.env.
                    NODE_ENV === "production",
                    strict: "lax",
                    maxAge: 1000 * 60 * 60 * 24 * 7}
               )
               res.status(201).json({
                    message: "User created successfully",
                    data : newUser
               });
     
             
          }
        res.status(400).json({
                    message: "provide email and password",
                    
               });   
     }catch(err){
          console.error(err);
     //  if (email !== "" && password !== "") {
     //      res.send("Details Submitted Successfully!");
     //  } else {
     //      res.send("Email and Password are required!");
    }    //  }
}
 


export const Login = async (req, res) => {
     const {email, passsword} = req.body
}

