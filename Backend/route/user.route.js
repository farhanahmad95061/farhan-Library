import express from "express"
import { Singup,Login } from "../controller/user.controller.js"

const router=express.Router();

router.post("/signup",Singup);
router.post("/login",Login);

export default router 