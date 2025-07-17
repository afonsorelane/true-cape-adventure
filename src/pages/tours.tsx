import { TourSection } from "@/components/toursection";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


const tourData = [
  {
    image: "/2151646534.jpg",
    subtitle: "Cape Vineyards",
    title: "WINE TASTING TOURS",
    description: "Discover the historic vineyards of the Cape region. Enjoy award-winning wines against stunning scenic backdrops.",
    link: "/winetours",
  },
  {
    image: "/2151822322.jpg",
    subtitle: "Wildlife Safari",
    title: "SAFARI ADVENTURES",
    description: "Get up close with Africa’s untamed wilderness. Exciting safaris led by experienced local guides.",
    link: "/safaritours",
  },
  {
    image: "/2315.jpg",
    subtitle: "Mineral museum",
    title: "MINERAL MUSEUM EXCURSIONS",
    description: "Visit one of the world's greatest natural wonders. Complete packages to the majestic Mineral museum.",
    link: "/mineraltours",
  },
  {
    image: "/32511.jpg",
    subtitle: "Mother City",
    title: "CAPE TOWN CITY TOURS",
    description: "Explore the best of Cape Town — from Table Mountain to Camps Bay’s beaches and the city's vibrant urban life.",
    link: "/capetowntours",
  },
  {
    image: "/2149029481.jpg",
    subtitle: "Local Heritage",
    title: "CULTURAL & HERITAGE TOURS",
    description: "Immerse yourself in the rich local history and culture — including visits to museums, townships, and historical landmarks.",
    link: "/culturaltours",
  },
  {
    image: "/9761.jpg",
    subtitle: "Tailor-made",
    title: "PERSONALIZED ITINERARIES",
    description: "Every traveler is unique. We create tailor-made itineraries to make your travel dreams come true.",
    link: "/personaltours",
  },
];

export const ToursPage = () => (
  <>
    <Header />
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {tourData.map((t, i) => (
        <TourSection
          key={i}
          image={t.image}
          subtitle={t.subtitle}
          title={t.title}
          description={t.description}
          link={t.link} // <- aqui
          reversed={i % 2 === 1}
        />
      ))}
    </main>
    <Footer />
  </>
);