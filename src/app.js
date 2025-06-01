import cookieParser from "cookie-parser";
import express from "express";

const app = express()

app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded())
app.use(express.static("public")) // for storing assets in public folder
app.use(cookieParser())

export { app }