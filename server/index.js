import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import UrlRoute from "./routes/urlRoute.js"
import dbConnect from "./config/db.js";

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config();
dbConnect();
const Port = process.env.PORT || 4000
app.use("/url", UrlRoute)
app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`)
})