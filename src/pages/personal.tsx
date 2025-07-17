import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const PersonalizedItinerariesPage = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen pt-32 bg-gradient-to-br from-[#eaf1fa] via-[#f8fafc] to-white text-gray-800 px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
           <h1 className="text-4xl md:text-5xl font-bold text-[#2d422b] mb-4 drop-shadow">
              Personalized Itineraries
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Your journey, your way — tailor-made travel experiences crafted just for you.
            </motion.p>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed space-y-6 bg-white/80 rounded-xl shadow p-8"
          >
            <p>
              Whether you're planning a romantic getaway, a family adventure, or a solo journey of discovery, our personalized itineraries are designed to fit your unique travel style, preferences, and pace.
            </p>
            <p>
              From luxurious safaris and wine tastings to cultural tours and outdoor escapades, we handpick each experience, accommodation, and route to match exactly what you’re looking for — with no unnecessary detours.
            </p>
            <p>
              Let our local experts guide you through South Africa’s best-kept secrets and iconic highlights, with flexibility and comfort at every step. You dream it, we design it.
            </p>
           <p className="font-semibold text-[#2d422b]">
              Contact us today and let’s start planning the trip of a lifetime — just for you.
            </p>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { src: "/2151646534.jpg", alt: "Couple enjoying private wine tour" },
              { src: "/2151822322.jpg", alt: "Custom safari experience" },
              { src: "/9761.jpg", alt: "Traveler planning a route" },
            ].map((img, idx) => (
              <motion.img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
              />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Button variant="default" className="ml-4 bg-[#c66a26] hover:bg-[#a3561e]">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};