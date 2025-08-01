import type { Comment } from "../types/comment";

export const CommentCard = ({ name, comment, createdAt }: Comment) => {
  const formattedDate = formatCommentDate(createdAt);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <p className="font-bold text-[#2d422b]">{name}</p>
      <p className="text-gray-700">{comment}</p>
      <p className="text-sm text-gray-500 mt-2">{formattedDate}</p>
    </div>
  );
};

function formatCommentDate(dateStr?: string) {
  if (!dateStr) return "";

  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffDays < 30) {
    return new Intl.DateTimeFormat("en", { day: "numeric", month: "short" }).format(date);
  } else if (diffMonths === 1) {
    return "1 month ago";
  } else {
    return `${diffMonths} months ago`;
  }
}
