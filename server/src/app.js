import express from "express"  //this syntax is known as module js works as unsynchronusly while comon Js works as synchronously
import cors from "cors"
import dotenv from "dotenv"
import userRouter  from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import progressRouter from "./routes/lectureProgress.routes.js" // Assuming you have a progress router

dotenv.config({
    path: "./.env"
})

const app = express()
console.log("hello i am in backend",process.env.CORS_ORIGIN)
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)


app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))

app.use(cookieParser())

app.use("/api/v1/users", userRouter)
app.use("/api/v1/progress", progressRouter) // Assuming you have a progress router
export { app }