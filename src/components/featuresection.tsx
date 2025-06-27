import { motion } from "framer-motion";

const features = [
  "Experienced Local Guides",
  "Modern, Safe Fleet",
  "Flexible Itineraries",
  "Personalized Service",
  "Competitive Prices",
  "24/7 Customer Support",
];

export const FeaturesSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: true }}
    className="w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#eaf1fa] to-[#f8fafc] py-20"
  >
    <div className="max-w-3xl w-full mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-4xl font-extrabold text-[#09285c] mb-8"
      >
        Why Choose Us?
      </motion.h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {features.map((feature, idx) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
            className="flex items-center gap-4 bg-white rounded-lg shadow-md px-6 py-5 text-lg font-medium text-[#09285c] hover:scale-105 hover:shadow-xl transition-all"
          >
            <span className="inline-block w-3 h-3 bg-[#1e90ff] rounded-full shadow mr-2"></span>
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.section>
);