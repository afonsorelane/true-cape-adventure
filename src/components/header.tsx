import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tours", href: "/tours" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-[#09285c] tracking-wide">
           <img src="/TrueCape.jpeg" alt="Logo" style={{ height: 80 }} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-[#09285c] transition font-medium"
            >
              {item.label}
            </a>
          ))}
          <Button variant="default" className="ml-4 bg-[#09285c] hover:bg-[#061f49]">
            Make an Enquiry
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 font-medium"
            >
              {item.label}
            </a>
          ))}
          <Button variant="default" className="w-full mt-3 bg-[#09285c] hover:bg-[#061f49]">
            Make an Enquiry
          </Button>
        </div>
      )}
    </header>
  );
}