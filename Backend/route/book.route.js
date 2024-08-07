import express from "express";
import { getbook } from "../controller/book.controller.js";

const Router=express.Router();
Router.get("/",getbook);

export default Router 