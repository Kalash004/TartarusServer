import express from 'express';
import { logUserInAndAddSessionHandler } from "../services/auth/auth.js"
import { isAuth } from '../services/auth/authUtils.js';
import { handleGetOfficeUsers } from "../services/handlers/office_handler.js"

export const router = express.Router()

/**
 * This api call is used when we are logging a user in
 */
router.post('/login', logUserInAndAddSessionHandler);
router.get('/getoffice_users', isAuth, handleGetOfficeUsers)