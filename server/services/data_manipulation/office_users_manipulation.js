import { sendRequest } from "./connection_generator.js"

const apikey = "apitestkey1"

export const getOfficeUserInDB = async (name, surename) => {
    const request = `APIKEY=${apikey};EVENT=GET;TABLE=office_users;PARAMETERS=(NAME=${name},SURENAME=${surename})`
    // send request
    let resp = await sendRequest(request)
    return resp
}

export const getAllOfficeUsers = async () => {
    const request = `APIKEY=${apikey};EVENT=GET;TABLE=office_users;`
    let resp = await sendRequest(request)
    return resp.getData()
}

export const insertOfficeUser = async (name, surename, password) => {
    const request = `APIKEY=${apikey};EVENT=POST;TABLE=office_users;DATA=[{user_id:none,name:${name},surename:${surename},password:${password}}]`
    let resp = await sendRequest(request)
    return 
}

export const updateOfficeUser = async (id, name, surename, password) => {
    const request = `APIKEY=${apikey};EVENT=UPDATE;TABLE=office_users;DATA=[{user_id:${id},name:${name},surename:${surename},password:${password}}]`
    let resp = await sendRequest(request)
}

export const removeOfficeUser = async (id) => {
    const request = `APIKEY=${apikey};EVENT=DELETE;TABLE=office_users;PARAMETERS=(ID=${id})`
    let resp = await sendRequest(request)
}

