import { getAllOfficeUsers } from "../data_manipulation/office_users_manipulation.js"

export const handleGetOfficeUsers = async (req, res) => {
    let data = await getAllOfficeUsers()
    res.send(data)
}