import type { Comment } from "../types/comment";
import { CommentCard } from "./CommentCard";

interface Props {
  comments: Comment[];
}

export const CommentList = ({ comments }: Props) => {
  if (!comments.length) {
    return <p className="text-gray-500">No one posted yet.</p>;
  }

  return (
    <>
      {comments.map((comment) => (
        <CommentCard key={comment._id} {...comment} />
      ))}
    </>
  );
};