import { useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

interface Comment {
  name: string;
  text: string;
}

export const CommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setComments([{ name, text }, ...comments]);
    setName("");
    setText("");
  }

  return (
    <div className="min-h-screen pt-32 flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1 max-w-xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#2d422b]">Review</h1>
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded shadow">
          <input
            className="border p-2 rounded w-full mb-3"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea
            className="border p-2 rounded w-full mb-3"
            placeholder="Your commment"
            value={text}
            onChange={e => setText(e.target.value)}
            rows={3}
          />
          <button
            type="submit"
            className="bg-[#c66a26] hover:bg-[#a3561e] text-white px-4 py-2 rounded font-semibold"
          >
            Enviar
          </button>
        </form>
        <div>
          {comments.length === 0 && (
            <p className="text-gray-500">No one posted yet.</p>
          )}
          {comments.map((c, i) => (
            <div key={i} className="bg-white p-4 rounded shadow mb-4">
              <p className="font-bold text-[#2d422b]">{c.name}</p>
              <p className="text-gray-700">{c.text}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}