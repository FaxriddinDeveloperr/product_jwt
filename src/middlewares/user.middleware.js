import { User } from "../models/index.js"
import jwt from "jsonwebtoken"
import { config } from "../config/config.js"


export const authMiddleware = async(req,resizeBy,next)=>{

    try {
        const token = req.headers.authorization.split(" ")[1]
    const decode = jwt.verify(token,config.jwt_secret)
    

    const user = await User.findById(decode.sub)

    if(!user){
        return next(Error("Autalizatooon faild",400));
    }



    req.user = user
        next()
    } catch (error) {
        next(error)
        
    }
    
    
    

}

// export const authMiddleware = async (req, res, next) => {
//     const token = req.headers.authorization.split(" ")[1];
//     console.log(token);

//     const[useremail, userpassword] = Buffer.from(token, "base64")
//         .toString()
//         .split(":")
    
//     const user = await User.findOne({email: useremail})

//     if(!user){
//         return res.status(404).send("user detail wrong")
//     }

//     if(
//         useremail &&
//         userpassword &&
//         user.email === useremail &&
//         user.password === userpassword
//     ){
//         next();    console.log(user);

//         return;
//     }
//     res.status(404).send("user detail wrong")
//     return;


// }