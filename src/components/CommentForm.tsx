import { useState } from "react";
import { createComment } from "../services/comment.service";
import type { Comment } from "../types/comment";

interface Props {
  onAdd: (comment: Comment) => void;
}

export const CommentForm = ({ onAdd }: Props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newComment = await createComment({ name, comment });
    onAdd(newComment);
    setName("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8">
      <input
        className="border p-2 rounded w-full mb-3"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <textarea
        className="border p-2 rounded w-full mb-3"
        placeholder="Your comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
        rows={3}
      />
      <button
        type="submit"
        className="bg-[#c66a26] hover:bg-[#a3561e] text-white px-4 py-2 rounded font-semibold"
      >
        Send Comment
      </button>
    </form>
  );
};