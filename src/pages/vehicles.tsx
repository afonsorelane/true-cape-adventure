import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useRef } from "react";

const vehicles = [
  {
    name: "Sprinter - 16 Seats",
    images: ["/121.jpg", "/212.jpg"],
    description: "Ideal for large groups. Comfortable, spacious, and safe for long-distance travel."
  },
  {
    name: "Toyota Quantum - 13 Seats",
    images: ["/777.jpeg", "/888.jpeg"],
    description: "Perfect for family or corporate tours. Air-conditioned with plenty of space."
  },
  {
    name: "Toyota Rumion - 7 Seats",
    images: ["/555.png", "/666.jpg"],
    description: "Compact and practical. Great for urban travel with comfort."
  },
  {
    name: "V Class VIP - 6 Seats",
    images: ["/222.jpg", "/333.jpg"],
    description: "Luxury and exclusivity for executives and special occasions."
  },
  {
    name: "C Class VIP - 4 Seats",
    images: ["/111.jpg", "/31177.jpg"],
    description: "Style and elegance with premium finish. Perfect for those who demand more."
  },
];

const bgColors = [
  "bg-neutral-100 text-[#2d422b]",
  "bg-neutral-200 text-[#2d422b]",
  "bg-neutral-50 text-[#2d422b]",
  "bg-[#f8fafc] text-[#2d422b]",
  "bg-[#eaf1fa] text-[#2d422b]",
];

const VehicleCarousel = ({ vehicle, bgClass }: { vehicle: typeof vehicles[0], bgClass: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    intervalRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [emblaApi]);

  return (
    <motion.section
      className={`relative h-screen w-full flex flex-col items-center justify-center ${bgClass} transition-colors duration-700`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center px-4 mb-6">
        <h2 className="text-4xl font-bold mb-2">{vehicle.name}</h2>
        <p className="text-lg max-w-xl mx-auto">{vehicle.description}</p>
      </div>

      <div className="w-full max-w-4xl overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {vehicle.images.map((src, idx) => (
            <div
              className="min-w-full h-[400px] flex items-center justify-center transition-all duration-700"
              key={idx}
            >
              <img
                src={src}
                alt={vehicle.name}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export const VehiclePage = () => {
  return (
    <div className="w-full text-gray-800">
      <Header />

      {/* Hero Section */}
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

      {/* Vehicle Sections */}
      {vehicles.map((vehicle, index) => (
        <VehicleCarousel vehicle={vehicle} bgClass={bgColors[index % bgColors.length]} key={index} />
      ))}

      <Footer />
    </div>
  );
};