import { Facebook, Instagram } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2d422b] text-white  py-8 px-4 md:px-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold">TrueCape</h2>
                    <p className="text-sm">
                        Discover unforgettable adventures and scenic tours.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Airport Transfers</li>
            <li>Full-Day Tours</li>
            <li>Half-Day Tours</li>
            <li>Dinner Transfers</li>
            <li>Custom Services Available</li>
          </ul>
                </div>

                <div className="space-y-3">
                   <h3 className="text-sm font-bold uppercase mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
         <li>truecapeadventure@gmail.com</li>
            <li>+27 679881115</li>
          </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="font-semibold uppercase">Social Midia</h3>
                    <ul className="flex gap-4">
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                className="hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook size={20} color="currentColor" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/"
                                className="hover:text-pink-400 transition focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram size={20} color="currentColor" />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

            <hr className="my-8 border-[#c66a26] dark:border-blue-700" />

            <div className="text-center text-sm">
                &copy; {currentYear} PROCHOICE. All rights reserved.
            </div>
        </footer>
    );
};



{/*
  export const Footer = () => {
  return (
    <footer className="bg-[#2d422b] text-white py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-3xl">#</div>
          <p className="mt-2">
            TrueCape
            <br />
            Discover unforgettable adventures and scenic tours.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Airport Transfers</li>
            <li>Full-Day Tours</li>
            <li>Half-Day Tours</li>
            <li>Dinner Transfers</li>
            <li>Custom Services Available</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About us</li>
            <li>Contact</li>
            <li>Make an Enquire</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Cookies policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

*/}
