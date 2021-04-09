import express from "express";
import {
  getupload,
  videodetail,
  postupload,
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getupload);
videoRouter.post(routes.upload, postupload);

videoRouter.get(routes.videoDetail(), videodetail);

export default videoRouter;
