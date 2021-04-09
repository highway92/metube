import express from "express";
import {
  getjoin,
  postjoin,
  getlogin,
  postlogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, getjoin);
globalRouter.post(routes.join, postjoin);

globalRouter.get(routes.login, getlogin);
globalRouter.post(routes.login, postlogin);

export default globalRouter;
