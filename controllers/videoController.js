import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingfor },
  } = req;
  res.render("search", { pageTitle: "Search", searchingfor, videos });
};

export const getupload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const postupload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title: title,
    description,
  });
  console.log(newVideo);
  //todo: upload and save video
  res.redirect(routes.videoDetail(newVideo.id));
};
export const videodetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videodetail", { pageTitle: "VideoDetail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const geteditvideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editvideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const posteditvideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};
