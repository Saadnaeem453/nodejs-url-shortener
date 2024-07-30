import {express} from "express"
import dotenv from "dotenv"
const app = express();
dotenv.config();

const Port = process.env.PORT || 4000

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`)
})