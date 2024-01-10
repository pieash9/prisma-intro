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
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePostController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await PostService.updatePost(id, data);
    res.send({
      success: true,
      message: "Post updated successfully.",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePostController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await PostService.deletePost(id);
    res.send({
      success: true,
      message: "Post deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPostController,
  getAllPostController,
  updatePostController,
  deletePostController,
};
