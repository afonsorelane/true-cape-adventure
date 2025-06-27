import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { tours } from "@/data/tours";
import { TourCard } from "@/components/tourCard";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <div className="w-full text-gray-800">
      <Header />


      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/beautiful.jpg")' }} 
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Welcome to TrueCape
          </h1>
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">Adventures</h2>
          <p className="text-white text-lg md:text-xl">
            Discover unforgettable adventures and scenic tours.
          </p>
        </motion.div>
      </section>

<section className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
    

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <h2 className="text-3xl font-bold text-[#09285c] mb-6">Why Choose TrueCapeAdventure?</h2>
      <p className="text-lg mb-4 leading-relaxed text-gray-700">
        At <span className="font-semibold">TrueCapeAdventure</span>, we believe that traveling is not just about visiting places — it's about
        living authentic experiences, creating unforgettable memories, and discovering the true spirit of
        each destination.
      </p>
      <p className="text-lg mb-4 leading-relaxed text-gray-700">
        We offer personalized tour guide services across Southern Africa, with a special focus on Cape
        Town, Victoria Falls, and other breathtaking natural and cultural wonders of the region.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        Whether its a thrilling safari adventure, a world-class wine tasting, or a rich cultural tour — we
        ensure that every detail of your journey is handled with professionalism, comfort, and passion.
      </p>
    </motion.div>


    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <img
        src="https://pgbr.net.br/wp-content/uploads/2023/04/PGBR-POSTAR-AGORA-1.jpeg"
        alt="Cape Adventure"
        className="w-full h-auto rounded-2xl shadow-lg"
      />
    </motion.div>
  </div>
</section>
      <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#09285c]">Our Tours</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};