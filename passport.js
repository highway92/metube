import passport from "passport";
import GithubStrategy from "passport-github";
import KakaoStrategy from "passport-kakao";
import dotenv from "dotenv";
import {
  githubLoginCallback,
  kakaoLoginCallback,
} from "./controllers/userController";
import User from "./models/User";

dotenv.config();

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000/auth/github/callback`,
    },
    githubLoginCallback
  )
);

passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.K_ID,
      callbackURL: "http://www.localhost:4000/oauth/kakao/callback",
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
