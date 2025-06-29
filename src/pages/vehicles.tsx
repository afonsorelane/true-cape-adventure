import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { motion } from "framer-motion";


export const VehiclePage = () => {
  return (
    <div className="w-full text-gray-800">
      <Header />


      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/2151822342.jpg")' }} 
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Our Vehicles
          </h1>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};