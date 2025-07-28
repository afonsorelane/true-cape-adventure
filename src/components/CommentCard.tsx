import type { Comment } from "../types/comment";

export const CommentCard = ({ name, comment, createdAt }: Comment) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <p className="font-bold text-[#2d422b]">{name}</p>
    <p className="text-gray-700">{comment}</p>
    <p className="text-sm text-gray-500 mt-2">{createdAt}</p>
  </div>
);