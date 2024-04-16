import { obtainUserInDB } from "../data_manipulation/admin_users_manipulations.js"
import { generateSession } from "../sessionServices/sessionService.js"

export const logUserInAndAddSessionHandler = async (req, res) => {
    const surename = req.body.username
    const password = req.body.password
    try {
        const resp = {
            message: ""
        }
        const db_user = await obtainUserInDB(surename)
        if (db_user === null) {
            resp.message = `User with such surname: ${surename} doesnt exist`;
            return res.send(resp);
        }
        const pass = getPassword(db_user);
        if (pass != password) {
            resp.message = "Wrong credentials"
            return res.send(resp);
        }
        resp.message = "Logged in"
        const session = generateSession(surename);
        res.cookie("sessionId", session.token, { expire: session.expires });
        return res.redirect("/home");
    } catch (err) {
        console.log(err)
        res.status(333)
    }
}

function getPassword(parsed) {
    const data = parsed.getData()
    const lst = data[0]
    const pass = lst["password"]
    return pass
}