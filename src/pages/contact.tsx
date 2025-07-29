import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { sendContactMessage } from "@/services/contact.service";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendContactMessage(formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <Header />
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/2151822304.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Get in Touch
          </h1>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#2d422b]">Contact</h2>
        <p className="text-lg text-gray-600">Ready to start your adventure?</p>
        <p className="text-lg text-gray-600">Contact us for personalized quotes, inquiries, or bookings</p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow"
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 12 345 6789"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#c66a26] hover:bg-[#a3561e]"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}