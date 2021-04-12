import express from "express";
import {
  getupload,
  videodetail,
  postupload,
  geteditvideo,
  posteditvideo,
} from "../controllers/videoController";
import routes from "../routes";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
//upload
videoRouter.get(routes.upload, getupload);
videoRouter.post(routes.upload, uploadVideo, postupload);
//video detail
videoRouter.get(routes.videoDetail(), videodetail);
//edit video
videoRouter.get(routes.editVideo(), geteditvideo);
videoRouter.post(routes.editVideo(), posteditvideo);

//delete video
export default videoRouter;
