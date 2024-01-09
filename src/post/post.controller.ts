import { Response, Request } from "express";
import { PostService } from "./post.service";

const createPostController = async (req: Request, res: Response) => {
  const result = await PostService.createPost(req.body);
  res.send({
    success: true,
    message: "Post created successfully.",
    data: result,
  });
};

const getAllPostController = async (req: Request, res: Response) => {
  console.log(req.query);
  const options = req.query;
  try {
    const result = await PostService.getAllPost(options);
    res.send({
      success: true,
      message: "Post fetched successfully.",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = { createPostController, getAllPostController };
