import express from "express";
import {
  getchangepassword,
  postchangepassword,
  getEditprofile,
  userdetail,
  postEditprofile,
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditprofile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditprofile);

userRouter.get(routes.changePassword, onlyPrivate, getchangepassword);
userRouter.post(routes.changePassword, onlyPrivate, postchangepassword);

userRouter.get(routes.userDetail(), userdetail);
export default userRouter;
