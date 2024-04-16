import express from 'express';
import { isAuth } from '../services/auth/authUtils.js';
import { getSessionFromToken } from "../services/sessionServices/sessionService.js"
import 'dotenv/config';



export const router = express.Router()

router.get("/login", (req, res) => {
    res.render("login");
})
router.get("/", (req, res) => {
    res.render("index");
})
router.get("/home", isAuth, (req, res) => {
    res.render("home", { username: getSessionFromToken(req.cookies['sessionId']).username })
})
