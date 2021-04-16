import express from "express";
import {
  changepassword,
  editprofile,
  userdetail,
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editprofile);
userRouter.get(routes.changePassword, onlyPrivate, changepassword);
userRouter.get(routes.userDetail(), userdetail);
export default userRouter;
