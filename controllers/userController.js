import routes from "../routes";

export const getjoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postjoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // to do: register user
    // to do: log user in
    res.redirect(routes.home);
  }
};

export const getlogin = (req, res) => {
  res.render("login", { pageTitle: "LOGIN" });
};

export const postlogin = (req, res) => {
  //todo: verify login info!
  res.redirect(routes.home);
};
export const logout = (req, res) => {
  //todo: process logout
  res.redirect(routes.home);
};

export const editprofile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit-Profile" });
};

export const changepassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};

export const userdetail = (req, res) => {
  res.render("userdetail", { pageTitle: "detail" });
};
