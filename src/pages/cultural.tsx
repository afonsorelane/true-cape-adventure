import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const CulturalHeritageTourPage = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen pt-32 bg-gradient-to-br from-[#eaf1fa] via-[#f8fafc] to-white text-gray-800 px-4 py-16">
        {" "}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d422b] mb-4 drop-shadow">
              Cultural & Heritage Tours
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover the heart of South Africa through its people, traditions,
              and rich history.
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
              South Africa is a vibrant mosaic of cultures, languages, and
              traditions. Our Cultural & Heritage Tours offer a meaningful
              journey through the country’s rich past and present — from ancient
              San rock art to post-apartheid resilience.
            </p>
            <p>
              Walk the streets of <strong>Soweto</strong> and visit the home of
              Nelson Mandela, explore the colorful community of{" "}
              <strong>Bo-Kaap</strong> in Cape Town, and immerse yourself in the
              history of <strong>Robben Island</strong> and the{" "}
              <strong>District Six Museum</strong>.
            </p>
            <p>
              These tours are guided by locals who share authentic stories and
              lived experiences, giving you a deeper understanding of South
              Africa’s cultural identity and heritage.
            </p>
            <p className="font-semibold text-[#2d422b]">
              Book your Cultural Tour today and connect with the soul of South
              Africa.
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
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { src: "/2149029481.jpg", alt: "Bo-Kaap Culture" },
              { src: "/c1.jpg", alt: "Nelson Mandela House in Soweto" },
              { src: "/c2.jpg", alt: "Traditional Zulu Ceremony" },
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
              Book Your Tour
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
