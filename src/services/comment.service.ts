import api from "../api/axios";
import type { Comment } from "../types/comment";

export const getAllComments = async (): Promise<Comment[]> => {
  const res = await api.get("/comments");
  return res.data.data;
};

export const createComment = async (comment: Omit<Comment, "_id" | "createdAt">) => {
  const res = await api.post("/comments", comment);
  return res.data.data;
};

export const deleteCommentById = async (id: string) => {
  await api.delete(`/comments/${id}`);
};

export const deleteAllComments = async () => {
  await api.delete("/comments");
};