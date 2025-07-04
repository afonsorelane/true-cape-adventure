import type { Tour } from "../types/types";
import { Button } from "@/components/ui/button";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
      <img src={tour.image} alt={tour.title} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-[#2d422b]">{tour.title}</h3>
        <p className="text-sm text-gray-600 flex-grow">{tour.description}</p>
        <a href={tour.link} className="mt-4">
          <Button className="bg-[#c66a26] hover:bg-[#a3561e] w-full">Read More</Button>
        </a>
      </div>
    </div>
  );
}