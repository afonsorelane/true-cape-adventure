import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const MineralMuseumPage = () => {
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
              South Africa’s Mineral Treasures
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover a world beneath your feet at South Africa’s finest mineral museums.
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
              South Africa’s mineral heritage is as rich and captivating as its landscapes. At the <strong>Mineral Museum</strong>,
              you’ll journey through time, exploring dazzling collections of rare gemstones, ancient fossils, and geological marvels.
            </p>
            <p>
              From sparkling diamonds to vibrant quartz crystals, each exhibit showcases the natural beauty and scientific wonder of the region.
            </p>
            <p>
              Make sure to visit top locations like <strong>Iziko Museum</strong> in Cape Town, the <strong>Kimberley Mine Museum</strong>,
              and the <strong>Johannesburg Geology Museum</strong>, each offering unique displays and interactive experiences.
            </p>
            <p className="font-semibold text-[#2d422b]">
              Book your visit with us and uncover the treasures that lie beneath — an unforgettable experience for curious minds and lovers of natural history alike.
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
              { src: "/m2.jpg", alt: "Kimberley Museum" },
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