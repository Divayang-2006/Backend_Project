import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
      minlength: 3,
      maxlength: 20
   },
   email: {
      type: String,
      required: true,
      unique: true,
      trim: true
   },
   fullname: {
      type: string,
      required: true,
      trim: true,
      index: true
   },
   avatar: {
      type: string // cludilary URL
   },
   coverimage: {
      type: string
   },
   watchHistory: [
      {
         type: Schema.Types.ObjectId,
         ref: "Video"
      }
   ],
   password: {
      type: string,
      required: [true, "Password is requird !!!"]
   },
   refreshtoken: {
      type: string,
      required: true
   }   
}, {timestamps: true})

userSchema.pre("save", async function(next){ // pre hook for assigning certain tasks just before the saving(in this case) of data
   if(!this.isModified("password")) return next()
   this.password = bcrypt.hash(this.password, 10)
   next()
});

userSchema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
   return jwt.sign(
      {
         _id: this._id,
         email: this.email,
         username: this.username,
         fullname: this.fullname
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
   )
}
userSchema.methods.generateRefreshToken = function(){
   return jwt.sign(
      {
         _id: this._id
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
   )
}

export const User = mongoose.model('User', userSchema)