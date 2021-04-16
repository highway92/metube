import express from "express";
import {
  getupload,
  videodetail,
  postupload,
  geteditvideo,
  posteditvideo,
  deletevideo,
} from "../controllers/videoController";
import routes from "../routes";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();
//upload
videoRouter.get(routes.upload, onlyPrivate, getupload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postupload);
//video detail
videoRouter.get(routes.videoDetail(), videodetail);
//edit video
videoRouter.get(routes.editVideo(), onlyPrivate, geteditvideo);
videoRouter.post(routes.editVideo(), onlyPrivate, posteditvideo);

//delete video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deletevideo);
export default videoRouter;
