export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-8">
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
