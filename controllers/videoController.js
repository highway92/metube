import routes from "../routes";

export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  const {
    query: { term: searchingfor },
  } = req;
  res.render("search", { pageTitle: "Search", searchingfor });
};

export const getupload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const postupload = (req, res) => {
  const {
    body: { file, titie, description },
  } = req;
  //todo: upload and save video
  res.redirect(routes.videoDetail());
};
export const videodetail = (req, res) => {
  res.render("videodetail", { pageTitle: "VideoDetail" });
};
