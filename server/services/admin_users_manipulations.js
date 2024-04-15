import { sendRequest } from "./connection_generator.js"
import Parsed from "./models/parsed.js"


let apikey = "apitestkey1"


const logUserIn = async (name, surename, password) => {
    // check user in database
    // obtain user
    checkAndObtainUserInDB(name, surename)
    // check if the passwrods are same
}


export const checkAndObtainUserInDB = async (name, surename) => {
    const request = `APIKEY=${apikey};EVENT=GET;TABLE=admin_users;PARAMETERS=(NAME=${name},SURENAME=${surename})`
    // send request
    let resp = await sendRequest(request)
    if (resp.getData() == null) {
        // user doesnt exist
        return null
    }
    // wait for answer
    return resp
}


console.log(await checkAndObtainUserInDB(4, 4))