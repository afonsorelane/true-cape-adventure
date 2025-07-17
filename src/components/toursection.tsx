import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ou "react-router-dom" se estiveres a usar React Router

interface TourSectionProps {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  reversed?: boolean;
  link: string; // <- Novo
}

export const TourSection = ({
  image,
  subtitle,
  title,
  description,
  reversed,
  link,
}: TourSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full h-screen flex items-center justify-center snap-start"
  >
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={`flex items-center relative ${
          reversed ? "flex-row-reverse" : "flex-row"
        } gap-[4vw] md:gap-[6vw]`}
      >
        <div className="w-[40vw] max-w-[32rem] min-w-[16rem] h-[60vh] max-h-[38rem] min-h-[20rem] flex-shrink-0 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-white p-8 shadow-xl max-w-[24rem] w-[32vw] min-w-[14rem] relative z-10">
          <h3 className="text-xl text-gray-500 italic">{subtitle}</h3>
          <h2 className="text-3xl font-bold text-[#2d422b] mb-4">{title}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
          <Link to={link}>
            <button className="border border-black text-black px-5 py-2 hover:bg-black hover:text-white transition">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  </motion.section>
);