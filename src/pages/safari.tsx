import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { useNavigate } from "react-router-dom";


export const SafariAdventurePage = () => {
      const navigate = useNavigate();
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
              Safari Adventures in South Africa
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Experience the wild beauty of Africa up close in unforgettable safari journeys.
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
              South Africa offers some of the most breathtaking safari experiences in the world, where you can encounter the legendary Big Five — lion, leopard, elephant, rhino, and buffalo — in their natural habitat.
            </p>
            <p>
              Whether you're exploring the vast plains of <strong>Kruger National Park</strong>, the lush landscapes of <strong>Pilanesberg Game Reserve</strong>, or the private luxury lodges in <strong>Madikwe</strong> and <strong>Sabi Sands</strong>, every moment on safari is an adventure.
            </p>
            <p>
              Enjoy guided game drives, walking safaris, and stargazing under the African sky — all while staying in comfortable lodges or luxury tents surrounded by the sounds of the wild.
            </p>
            <p className="font-semibold text-[#2d422b]">
              Book your safari with us and experience nature in its purest form.
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
              { src: "/s1.jpg", alt: "Elephants in Kruger" },
              { src: "/s2.jpg", alt: "Luxury Safari Lodge" },
              { src: "/s3.jpg", alt: "Game Drive at Sunset" },
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
            <Button variant="default" className="ml-4 bg-[#c66a26] hover:bg-[#a3561e]"  onClick={() => navigate("/bookyourvisit")}>
              Book Your Safari
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};