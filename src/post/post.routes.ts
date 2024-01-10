import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.createPostController);
router.get("/", PostController.getAllPostController);
router.patch("/:id", PostController.updatePostController);
router.delete("/:id", PostController.deletePostController);
router.get("/learn-query", PostController.learnAggregationAndGrouping);

export const PostRoutes = router;
