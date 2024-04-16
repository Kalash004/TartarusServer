import { sendRequest } from "./connection_generator.js"
apikey = "apitestkey1"

export const getSysteMessages = async (name, surename) => {
    const request = `APIKEY=${apikey};EVENT=GET;TABLE=system_messages;`
    // send request
    let resp = await sendRequest(request)
    return resp
}

// APIKEY=apitestkey1;EVENT=GET;TABLE=system_messages;

export const insertSystemMessage = async (text, day_id, admin_id) => {
    const request = `APIKEY=${apikey};EVENT=POST;TABLE=system_messages;DATA=[{messages_id:none,text:${text},f_days_id:${day_id},f_admin_id:${admin_id}}]`
    let resp = await sendRequest(request)
    return
}


