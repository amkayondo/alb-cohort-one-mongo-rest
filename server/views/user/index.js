import { Router } from 'express'
import checkAuth from '../../helpers/checkAuth';
import addNewUser from './user.addNewUser';
import getUserProfile from './user.getProfile';
import getUserView from './user.getUser';

const userRouter = Router();

userRouter.post("/login", getUserView);
userRouter.post("/signup", addNewUser)
// check if logged in
userRouter.get("/me", checkAuth, getUserProfile)

export default userRouter;