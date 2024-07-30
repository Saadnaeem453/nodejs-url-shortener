
import { Schema, mongoose } from "mongoose"

const urlSchema = new Schema({
shortId:{
    type:String,
    required:true,
    unique:true
},
redirectUrl:{
    type:String,
    required:true,
},
visitHistiry:[{timeStamp:{type:Number}}]
},{timeStamps:true})


export default URL = mongoose.model("URL" , urlSchema)