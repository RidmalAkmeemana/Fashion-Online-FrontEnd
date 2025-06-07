
import { Mail, Phone, MapPin, Factory } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="font-playfair font-bold text-2xl text-white">
                Fashionline
              </span>
              <span className="text-sm text-secondary-300">
                Group of Companies
              </span>
            </div>
            <p className="text-secondary-300 mb-4 max-w-md">
              Leading Sri Lankan apparel manufacturer since 1999, delivering quality garments 
              to global markets with state-of-the-art facilities and sustainable practices.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent-400" />
                <span className="text-sm">info@fashionlinegroup.lk</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-accent-400" />
                <span className="text-sm">+94 38 2248986 / +94 38 2248987</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-secondary-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/factories" className="text-secondary-300 hover:text-white transition-colors">Our Factories</a></li>
              <li><a href="/products" className="text-secondary-300 hover:text-white transition-colors">Products & Clients</a></li>
              <li><a href="/contact" className="text-secondary-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Factory Locations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Factories</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-1">
                  <Factory className="w-4 h-4 mr-2 text-accent-400" />
                  <span className="font-medium">Bandaragama</span>
                </div>
                <p className="text-sm text-secondary-300">Main Production Facility</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <Factory className="w-4 h-4 mr-2 text-accent-400" />
                  <span className="font-medium">Embilipitiya</span>
                </div>
                <p className="text-sm text-secondary-300">Secondary Production Unit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} Fashionline Group of Companies. All rights reserved.
            </p>
            <p className="text-secondary-400 text-sm mt-2 md:mt-0">
              Established 1999 • Quality • Innovation • Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
