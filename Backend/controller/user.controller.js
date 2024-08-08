import User from "../modal/user.modal.js";
import bcryptjs  from "bcryptjs"

export const  Singup=async(req,res)=>{
 
    try {
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email});
        if(user)(
            res.status(400).json({message:" User already exists"})
        )
        const hashPassword=await bcryptjs.hash(password,10);
        const createdUser=new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        });
       await createdUser.save();
       res.status(201).json({
        message:"signup is successfull",
        user:{
            _id:createdUser._id,
           fullname:createdUser.fullname,
           password:createdUser.password,

        },
       });
    } catch (error) {
        console.log("error"+ error.message);
        res.status(500).send(error)
        
    }
};

export const Login=async(req,res)=>{ 
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        console.log(email)
        const isMatch= await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){
        return     res.status(400).json({massage:"invalid username or password"})
        }else{
            res.status(200).json({
                message:"login is successfull",
                user:{
                    _id:user._id,
                   fullname:user.fullname,
                   
                   email:user.password,
        
                },
               });
        }
    } catch (error) {
        console.log("error"+ error.message);
        res.status(500).json({message:"internal sever error, u"}) 
        
    }

}
