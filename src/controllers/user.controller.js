// Controllers are Methods

import { asyncHandler } from "../utils/asuncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import User from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const registerUser = asyncHandler(async (req, res) => {
   //1 -> Get User Details from frontend
   //2 -> validation
   //3 -> check if the user alrady exist by username && email
   //4 -> check for image and avatar
   //5 -> upload to cloudinary, avatar is Uploded(check if multer done it's work)
   //6 -> create User Object - Create entry in DB
   //7 -> remove Password and refresh token from response 
   //8 -> check for User Creation (check if succesfully created ?)
   //9 -> return Response

   const { fullName, email, username, password } = req.body ;
   console.log("Email: ", email);

   if(fullName.trim() === ""){
      throw new ApiError(400, "fullname is Required !!!");
   }if(email.trim() === ""){
      throw new ApiError(400, "email is Required !!!");
   }if(username.trim() === ""){
      throw new ApiError(400, "trim is Required !!!");
   }if(password.trim() === ""){
      throw new ApiError(400, "Password is Required !!!");
   }

   const ExistedUser = User.findOne({
      $or: [{username}, {email}]
   })
   if(ExistedUser) throw new ApiError(409, "User with email or username already exist")
   
   const avatarLocalPath = req.files?.avatar[0]?.path
   const coverImageLocalPath = req.files?.coverImage[0]?.path
   if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar File is Required")
   }
   if (!coverImageLocalPath) {
      throw new ApiError(400, "Cover Image File is Required")
   }
   
   const avatar = await uploadOnCloudinary(avatarLocalPath);
   const coverImage = await uploadOnCloudinary(coverImageLocalPath);

   if (!avatar) {
      throw new ApiError(400, "Unable to Upload Avatar")
   }

   const user = await User.create({
      fullName,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username: username.toLowerCase()
   })

   const createdUser = await User.findById(user._id).select(
      "-password -refreshtoken"
   )

   if(!createdUser) throw new ApiError(500, "Someting Went wrong while Registering the User !!!")

   return res.status(201).json(
      new ApiResponse(200, createdUser, "User Registered Succefully !!!")
   )
})


export { registerUser }