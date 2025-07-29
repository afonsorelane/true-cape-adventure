import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { useNavigate } from "react-router-dom";

export const WineTourPage = () => {
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
            Wine Tasting Tour
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover the elegance of Cape Town’s finest wine regions.
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
            Cape Town's wine scene offers a diverse range of experiences, from historic estates to modern vineyards,
            with a focus on both classic and innovative wines.
          </p>
          <p>
            To find inspiration, consider exploring the Constantia, Stellenbosch, and Franschhoek wine regions,
            known for their scenic beauty and exceptional wines.
          </p>
          <p>
            You can also explore specific wineries like <strong>Groot Constantia</strong>, <strong>Beau Constantia</strong>,
            and <strong>Delaire Graff Estate</strong>, each offering unique tasting experiences.
          </p>
          <p className="font-semibold text-[#2d422b]">
            Book with us and create unforgettable memories.
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
            { src: "/p1.jpg", alt: "Groot Constantia" },
            { src: "/p2.jpg", alt: "Stellenbosch Vineyard" },
            { src: "/p3.jpg", alt: "Franschhoek View" },
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
          <Button variant="default" className="ml-4 bg-[#c66a26] hover:bg-[#a3561e]"   onClick={() => navigate("/bookyourvisit")}>
            Book Now
          </Button>
        </motion.div>
      </div>
    </main>
    <Footer />
    </div>
  );
};