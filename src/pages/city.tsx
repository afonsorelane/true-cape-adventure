import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const CapeTownCityTourPage = () => {
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
              Cape Town City Tours
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Explore the heart of South Africa's Mother City with unforgettable guided tours.
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
              Cape Town is a city of stunning contrasts — from Table Mountain's majestic silhouette to the vibrant streets of Bo-Kaap, from the bustling V&A Waterfront to the serene Company’s Garden.
            </p>
            <p>
              Our city tours offer a perfect blend of history, culture, nature, and local flavor. Discover landmarks such as <strong>Robben Island</strong>, the <strong>Castle of Good Hope</strong>, and take in breathtaking views from <strong>Signal Hill</strong> and <strong>Table Mountain Cableway</strong>.
            </p>
            <p>
              Whether you're a history lover, foodie, or photographer, Cape Town has something for everyone. Guided by local experts, you’ll uncover the stories behind the city’s iconic sights and hidden gems.
            </p>
            <p className="font-semibold text-[#2d422b]">
              Book your city adventure with us and discover Cape Town like never before.
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
              { src: "/daniel-radford-oTTnZcwQ2t4-unsplash.jpg", alt: "Table Mountain View" },
              { src: "/t2.jpg", alt: "Bo-Kaap Streets" },
              { src: "/t3.jpg", alt: "Cape Town Cityscape" },
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