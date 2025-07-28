import { useEffect, useState } from "react";
import {
  getAllComments,
  deleteCommentById,
  deleteAllComments,
} from "../services/comment.service";
import type { Comment } from "../types/comment";

export const AdminCommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getAllComments().then(setComments);
  }, []);

  const handleDelete = async (id: string) => {
    await deleteCommentById(id);
    setComments(prev => prev.filter(c => c._id !== id));
  };

  const handleDeleteAll = async () => {
    await deleteAllComments();
    setComments([]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Comments</h1>
      <button
        onClick={handleDeleteAll}
        className="bg-red-500 text-white px-4 py-2 mb-4 rounded"
      >
        Delete All
      </button>
      {comments.map((comment) => (
        <div key={comment._id} className="bg-gray-100 p-4 mb-2 rounded">
          <strong>{comment.name}</strong>
          <p>{comment.comment}</p>
          <button
            onClick={() => handleDelete(comment._id!)}
            className="text-red-600 mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};