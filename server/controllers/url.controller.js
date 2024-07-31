import { nanoid } from "nanoid";
import URL from "../models/url.model.js";

async function handleShortUrl(req, res) {
    try {
        const body = req.body;
        if (!body.url) return res.status(400).json({ error: "Url is required" });

        const shortId = nanoid(8);
        console.log("Short", shortId);

        await URL.create({
            shortId: shortId,
            redirectUrl: body.url,
            visitHistory: []
        });

        return res.status(200).json({ id: shortId });
    } catch (error) {
        console.error("Error creating short URL:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getUrl(req, res) {
    try {
        const urlId = req.params.id;
        if (!urlId) return res.status(400).json({ error: "ID is required" });

        const url = await URL.findOneAndUpdate(
            { shortId: urlId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true } 
        );

        if (!url) return res.status(404).json({ error: "URL not found" });
res.redirect(url.redirectUrl)
        // res.status(200).json({ redirectUrl: url.redirectUrl });
    } catch (error) {
        console.error("Error fetching URL:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handleGetAnalytics(req, res) {
    try {
        console.log('Received id:', req.params.id); // Log the received parameter
        const shortId = req.params.id;
        const result = await URL.findOne({ shortId });

        if (!result) {
            return res.status(404).json({ message: "URL not found" });
        }

        console.log(result);

        return res.status(200).json({
            totalClicks: result.visitHistory?.length || 0,
            analytics: result.visitHistory || [],
        });
    } catch (error) {
        console.error("Error fetching analytics:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


export { handleShortUrl, getUrl ,handleGetAnalytics};
