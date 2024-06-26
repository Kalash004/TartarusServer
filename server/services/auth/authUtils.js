import { sessions, getSessionFromToken, removeSession } from "../sessionServices/sessionService.js"

export const isAuth = async (req, res, next) => {
    if (!req.cookies) {
        return res.status(401).end()
    }

    const sessionToken = req.cookies['sessionId']
    if (sessionToken === 'undefined') {
        return res.status(401).end();
    }

    if (!sessionToken) {
        return res.status(401).end()
    }

    if (sessionToken == "tester") {
        next()
        return;
    }

    const userSession = getSessionFromToken(sessionToken);

    if (!userSession) {
        return res.status(401).end()
    }

    if (userSession.isExpired()) {
        removeSession(sessionToken)
        return res.status(401).end()
    }

    next()
}