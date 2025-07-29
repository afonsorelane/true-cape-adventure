import { useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { sendContactMessage } from "@/services/contact.service";

export const BookYourVisitPage = () => {
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await sendContactMessage(form);
      setSent(true);
    } catch (err) {
      console.error("Failed to send booking request:", err);
      alert("Failed to send booking request. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1 max-w-lg mx-auto pt-32 py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#2d422b]">Book Your Visit</h1>
        {sent ? (
          <div className="bg-green-100 text-green-800 p-6 rounded shadow text-center font-semibold">
            Thank you for booking your visit! We will contact you shortly.
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
              Book Now
            </button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
};
