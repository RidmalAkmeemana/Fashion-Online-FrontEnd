
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Factory, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
                Established 1999 • 25+ Years of Excellence
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-secondary-900 mb-6">
              Leading Sri Lankan
              <span className="text-primary-700 block">Apparel Manufacturer</span>
            </h1>

            <p className="text-lg text-secondary-600 mb-8 max-w-2xl">
              Quality garment manufacturing with state-of-the-art facilities in Bandaragama and Embilipitiya.
              Serving global markets with innovation, sustainability, and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/factories">
                <Button size="lg" className="bg-primary-700 hover:bg-primary-800">
                  Explore Our Factories
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-primary-700 text-primary-700">
                  View Products
                </Button>
              </Link>

            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-secondary-900">25+</div>
                <div className="text-sm text-secondary-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Factory className="w-8 h-8 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-secondary-900">2</div>
                <div className="text-sm text-secondary-600">Modern Factories</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe className="w-8 h-8 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-secondary-900">Global</div>
                <div className="text-sm text-secondary-600">Market Reach</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-700 rounded-2xl p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                  <Factory className="w-8 h-8 mb-4 text-accent-300" />
                  <h3 className="font-semibold mb-2">Bandaragama Factory</h3>
                  <p className="text-sm opacity-90">Main production facility with cutting-edge technology</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                  <Factory className="w-8 h-8 mb-4 text-accent-300" />
                  <h3 className="font-semibold mb-2">Embilipitiya Unit</h3>
                  <p className="text-sm opacity-90">Secondary production with specialized capabilities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white col-span-2">
                  <Award className="w-8 h-8 mb-4 text-accent-300" />
                  <h3 className="font-semibold mb-2">Quality Certifications</h3>
                  <p className="text-sm opacity-90">ISO certified with international quality standards and sustainable practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
