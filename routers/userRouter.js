import express from "express";
import {
  changepassword,
  editprofile,
  logout,
  userdetail,
} from "../controllers/userController";
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.editProfile, editprofile);
userRouter.get(routes.changePassword, changepassword);
userRouter.get(routes.userDetail(), userdetail);
export default userRouter;
