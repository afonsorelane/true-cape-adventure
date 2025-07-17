import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const VictoriaFallPage = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen pt-32 bg-gradient-to-br from-[#f4f7f9] via-[#fefefe] to-white text-gray-800 px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
             <h1 className="text-4xl md:text-5xl font-bold text-[#2d422b] mb-4 drop-shadow">
              Victoria Falls: Nature’s Majestic Wonder
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover the Power and Beauty of Victoria Falls
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
              Victoria Falls offers one of the most awe-inspiring natural spectacles in the world – a 
              place where the sheer force of nature meets cultural wonder and adventure. From scenic 
              helicopter flights above the cascading falls to immersive river cruises along the Zambezi, each 
              moment promises unforgettable memories.
            </p>
            <p>
              Explore the charm of nearby towns, interact with local communities, or embark on thrilling safaris 
              and adrenaline-packed activities like bungee jumping and white-water rafting. Whether 
              you're chasing adventure or soaking in the serenity, Victoria Falls delivers a truly magical experience.
            </p>
            <p className="font-semibold text-[#2d422b]">
              Book your Victoria Falls excursion with us and witness one of nature's greatest wonders.
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
              { src: "/2315.jpg", alt: "Sparkling Gems" },
              { src: "/mn.jpg", alt: "Kimberley Museum" },
              { src: "/m3.jpg", alt: "Fossils and Crystals" },
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
              Book Your Visit
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};