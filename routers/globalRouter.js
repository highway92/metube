import express from "express";
import passport from "passport";
import {
  getjoin,
  postjoin,
  getlogin,
  postlogin,
  githubLogin,
  kakaoLogin,
  postGithubLogin,
  postkakaoLogin,
  logout,
  getme,
} from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../middlewares";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, onlyPublic, getjoin);
globalRouter.post(routes.join, onlyPublic, postjoin, postlogin);

globalRouter.get(routes.login, onlyPublic, getlogin);
globalRouter.post(routes.login, onlyPublic, postlogin);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  postGithubLogin
);
globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: routes.login }),
  postkakaoLogin
);

globalRouter.get(routes.me, getme);
export default globalRouter;
