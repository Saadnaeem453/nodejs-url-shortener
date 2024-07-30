import handleShortUrl from "../controllers/url.controller.js";
import express from "express";

const router = express.Router();
router.post("/", handleShortUrl)

export default router