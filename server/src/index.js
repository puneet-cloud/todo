import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"
dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 3001

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB Connection error", err)
});