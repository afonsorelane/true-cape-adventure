import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { getAllComments } from "../services/comment.service";
import type { Comment } from "../types/comment";
import { CommentForm } from "../components/CommentForm";
import { CommentList } from "../components/CommentList";

export const CommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getAllComments().then(setComments);
  }, []);

  const handleNewComment = (comment: Comment) => {
    setComments(prev => [comment, ...prev]);
  };

  return (
    <div className="min-h-screen pt-32 flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1 max-w-xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#2d422b]">Review</h1>
        <CommentList comments={comments} />
        <CommentForm onAdd={handleNewComment} />
      </main>
      <Footer />
    </div>
  );
};
