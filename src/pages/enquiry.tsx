import { useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const EnquiryPage = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aqui você pode enviar para um backend ou serviço de email
    setSent(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1 max-w-lg mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#09285c]">Make an Enquiry</h1>
        {sent ? (
          <div className="bg-green-100 text-green-800 p-6 rounded shadow text-center font-semibold">
            Thank you for your enquiry! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
            <input
              className="border p-2 rounded w-full"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="border p-2 rounded w-full"
              placeholder="Your Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="border p-2 rounded w-full"
              placeholder="Phone (optional)"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
            <textarea
              className="border p-2 rounded w-full"
              placeholder="How can we help you?"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-[#c66a26] hover:bg-[#a3561e] text-white px-4 py-2 rounded font-semibold w-full"
            >
              Send Enquiry
            </button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}