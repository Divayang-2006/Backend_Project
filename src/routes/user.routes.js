import { Router } from "express";
import { loginUser, registerUser, logoutUser, refreshAccessToken, getCurrentUser, changeCurrentPassword } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js"
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router()

router.route("/register").post(
   // uploading files to localStorage through Multer Middleware
   upload.fields([
      {
         name: "avatar",
         maxCount: 1
      },
      {
         name: "coverImage",
         maxCount: 1
      }
   ]),
   registerUser
) //when clicked the http://localhost:8000/api/v1/user/register

router.route("/login").post(
   loginUser
)

// Secured Routes
router.route("/logout").post(
   verifyJWT,
   logoutUser
)

router.route("/refresh-token").post(
   refreshAccessToken
)

router.route("/getCurrentUser").post(
   verifyJWT, // Use of MiddleWare is to fetch and Verify User and then it passes to the next route (Very Convient way) 
   getCurrentUser
)


export default router