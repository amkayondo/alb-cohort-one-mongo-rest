import getUser from "../../controllers/user/getUser"
import { generateToken } from "../../helpers/JWTtoken"

const getUserView = async (req, res) => {
    const { username, password } =req.body
    const foundUser = await getUser(username, password)
    const token = generateToken(foundUser)
    return foundUser.error ? res.status(400).json({
        error: foundUser.error
    }) : foundUser.error ? res.status(400).json({
        error: foundUser.error
    }) : res.status(200).json({ token })
}

export default getUserView;
