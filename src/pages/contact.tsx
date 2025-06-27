import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export function ContactPage() {
  return (
    <>
      <Header />
 <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("https://pgbr.net.br/wp-content/uploads/2023/04/PGBR-POSTAR-AGORA-1.jpeg")' }} 
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
        <h2 className="text-3xl font-bold text-center mb-10 text-[#09285c]">Contact</h2>
        <p className=" text-lg text-gray-600">
          Ready to start your adventure?
        </p>
        <p className="text-lg text-gray-600">
          Contact us for personalized quotes, inquiries, or bookings
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid"
        >
                    <form className="space-y-6 bg-white p-8 rounded-lg shadow">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <Input id="name" name="name" placeholder="Your full name" required />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
              <Input id="phone" name="phone" type="tel" placeholder="+27 12 345 6789" />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required />
            </div>

            <Button type="submit" className="w-full bg-[#09285c] hover:bg-[#061f49]">
              Send Message
            </Button>
          </form>
        </motion.div>
      </section>



      <Footer />
    </>
  );
}

{/*
      <main className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            Have questions? Get in touch with us — we'd love to hear from you!
          </p>

          <form className="space-y-6 bg-white p-8 rounded-lg shadow">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <Input id="name" name="name" placeholder="Your full name" required />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
              <Input id="phone" name="phone" type="tel" placeholder="+27 12 345 6789" />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required />
            </div>

            <Button type="submit" className="w-full bg-[#09285c] hover:bg-[#061f49]">
              Send Message
            </Button>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Office</h2>
              <p>Cape Town, South Africa</p>
              <p>📞 +27 (0) 21 555 1234</p>
              <p>✉️  info@truecapeadventure.com</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                title="Office Location"
                className="w-full h-64 rounded-lg shadow"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>

   */}