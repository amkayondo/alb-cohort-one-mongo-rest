import { verifyToken } from "./JWTtoken";

const checkAuth = (req, res, next) => {
    const { authtoken } = req.headers;
    const checkToken = verifyToken(authtoken);
    if(checkToken.error){
        return res.status(400).json({
            error: checkToken.error
        })
    }
    req.userToken = checkToken.token;
    next();
}

export default checkAuth;
