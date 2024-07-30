
import { nanoid } from "nanoid"
import URL from "../models/url.model.js"
async function handleShortUrl(req,res){
    try {
const body = req.body;
if(!body.url) return res.status(400).json({error:"Url is required"});
const shortId = nanoid(8)
console.log("Short",shortId)
await URL.create({
    shortId: shortId,
    redirectUrl:body.url,
    visitHistory:[]
})
return res.status(200).json({id : shortId})
} catch (error) {
        throw new Error("error",error.message)
}
}
export default handleShortUrl