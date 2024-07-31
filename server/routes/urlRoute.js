import {handleShortUrl , getUrl, handleGetAnalytics } from "../controllers/url.controller.js";
import express from "express";

const router = express.Router();
router.post("/", handleShortUrl)
router.get("/:id", getUrl);
router.get("/analytics/:id", handleGetAnalytics)

export default router