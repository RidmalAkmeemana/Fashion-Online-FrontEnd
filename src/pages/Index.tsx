
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Factory, 
  Users, 
  Target, 
  Globe, 
  Leaf,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const achievements = [
    { icon: Award, title: "ISO Certified", description: "International quality standards" },
    { icon: Leaf, title: "Sustainable Practices", description: "Eco-friendly manufacturing" },
    { icon: Globe, title: "Global Reach", description: "Exporting worldwide" },
    { icon: Users, title: "Skilled Workforce", description: "Experienced professionals" },
  ];

  const productCategories = [
    "New Born (0-24 months)",
    "Children (2-14 years)", 
    "Boys Wear",
    "Girls Wear"
  ];

  return (
    <Layout>
      <Hero />

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              About Fashionline Group
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Established in 1999, Fashionline Group of Companies has grown to become one of Sri Lanka's 
              leading apparel manufacturers, committed to quality, innovation, and sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Our Vision</h3>
              <p className="text-secondary-700 mb-6">
                To be the most trusted and preferred apparel manufacturing partner globally, 
                delivering exceptional quality products while maintaining the highest standards 
                of social and environmental responsibility.
              </p>
              
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Our Mission</h3>
              <p className="text-secondary-700 mb-8">
                To provide innovative, high-quality apparel solutions that exceed customer expectations 
                through continuous improvement, technological advancement, and sustainable manufacturing practices.
              </p>

              <Link to="/about">
                <Button className="bg-primary-700 hover:bg-primary-800">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-secondary-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-secondary-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factory Highlights */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Our Manufacturing Excellence
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Two state-of-the-art facilities equipped with modern technology and sustainable practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bandaragama Factory */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-white">
                <div className="flex items-center mb-4">
                  <Factory className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">Bandaragama Factory</h3>
                </div>
                <Badge variant="secondary" className="mb-4">Main Production Facility</Badge>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Advanced cutting and sewing technology</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Quality control laboratory</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Sustainable manufacturing practices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>ISO certified operations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Embilipitiya Factory */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 p-6 text-white">
                <div className="flex items-center mb-4">
                  <Factory className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold">Embilipitiya Factory</h3>
                </div>
                <Badge variant="secondary" className="mb-4">Specialized Production Unit</Badge>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Specialized garment processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Efficient workflow systems</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Environmental compliance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Skilled local workforce</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/factories">
              <Button size="lg" variant="outline" className="border-primary-700 text-primary-700">
                Explore Our Factories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Specialized in children's and youth apparel with focus on quality, comfort, and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productCategories.map((category, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2">{category}</h3>
                  <p className="text-sm text-secondary-600">Premium quality garments</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Product Distribution
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold text-lg text-secondary-800 mb-2">Export Markets</h4>
                <p className="text-3xl font-bold text-primary-700 mb-2">95%</p>
                <p className="text-secondary-600">Global distribution to international brands</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-secondary-800 mb-2">Local Market</h4>
                <p className="text-3xl font-bold text-accent-600 mb-2">5%</p>
                <p className="text-secondary-600">Premium local brands and retailers</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-primary-700 hover:bg-primary-800">
                View Products & Clients
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
            Partner With Excellence
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join hands with Sri Lanka's leading apparel manufacturer. 
            Let's create exceptional garments together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary-700 hover:bg-primary-50">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary-700">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
