import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getjoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postjoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    const user = await User({
      name,
      email,
    });
    await User.register(user, password);
    next();
  }
};

export const getlogin = (req, res) => {
  res.render("login", { pageTitle: "LOGIN" });
};

export const postlogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        githubId: id,
        avatarUrl,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};

export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    id,
    username: name,
    _json: {
      properties: { profile_image },
      kakao_account: { email },
    },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      user.avatarUrl = profile_image;
      user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        kakaoId: id,
        avatarUrl: profile_image,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};

export const postkakaoLogin = (req, res) => {
  res.redirect(routes.home);
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const editprofile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit-Profile" });
};

export const changepassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};

export const getme = (req, res) => {
  res.render("userdetail", { pageTitle: "Detail", user: req.user });
};

export const userdetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userdetail", { pageTitle: "Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
