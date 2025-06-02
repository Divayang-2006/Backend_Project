// 

import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser) //when clicked the http://localhost:8000/api/v1/user/register
// router.route("/login").post()

export default router