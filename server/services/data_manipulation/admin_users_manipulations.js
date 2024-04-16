import { sendRequest } from "./connection_generator.js"
import Parsed from "../models/parsed.js"


let apikey = "apitestkey1"


const logUserIn = async (name, surename, password) => {
    // check user in database
    // obtain user
    let user = obtainUserInDB(name, surename)
    return user
    // check if the passwrods are same
}


export const obtainUserInDB = async (surename) => {
    const request = `APIKEY=${apikey};EVENT=GET;TABLE=admin_users;PARAMETERS=(SURENAME=${surename})`
    // send request
    let resp = await sendRequest(request)
    if (resp.getData() == null) {
        // user doesnt exist
        return null
    }
    // wait for answer
    return resp
}
