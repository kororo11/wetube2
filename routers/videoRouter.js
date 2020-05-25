import express from 'express';
import routes from '../routes';
import { getUpload, postUpload, videoDetail, getEditVideo, postEditVide, deleteVideo } from '../controller/videoController';
import { uploadVideo } from '../middlewares';

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVide);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
