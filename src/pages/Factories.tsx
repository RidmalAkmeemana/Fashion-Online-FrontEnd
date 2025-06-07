
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, 
  MapPin, 
  Users, 
  Cog,
  Award,
  Leaf,
  Shield,
  CheckCircle,
  Zap,
  Globe
} from "lucide-react";

const Factories = () => {
  const bandaragamaFeatures = [
    { icon: Cog, title: "Advanced Machinery", description: "State-of-the-art cutting and sewing equipment" },
    { icon: Users, title: "Skilled Workforce", description: "300+ experienced production professionals" },
    { icon: Award, title: "Quality Laboratory", description: "In-house testing and quality control facility" },
    { icon: Leaf, title: "Eco-Friendly", description: "Sustainable manufacturing processes" },
    { icon: Shield, title: "Safety Standards", description: "Comprehensive workplace safety protocols" },
    { icon: Zap, title: "Efficient Systems", description: "Lean manufacturing and workflow optimization" }
  ];

  const embilipitiyaFeatures = [
    { icon: Factory, title: "Specialized Production", description: "Focus on specific garment categories" },
    { icon: Users, title: "Local Employment", description: "200+ jobs for local community" },
    { icon: Globe, title: "Export Ready", description: "International quality standards compliance" },
    { icon: Leaf, title: "Green Initiatives", description: "Environmental protection measures" },
    { icon: Cog, title: "Modern Equipment", description: "Updated machinery and technology" },
    { icon: Award, title: "Quality Assurance", description: "Rigorous quality control processes" }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "OEKO-TEX Standard 100",
    "GOTS (Global Organic Textile Standard)",
    "WRAP (Worldwide Responsible Accredited Production)",
    "BSCI (Business Social Compliance Initiative)",
    "Environmental Management ISO 14001"
  ];

  const sustainabilityInitiatives = [
    "Water recycling and treatment systems",
    "Energy-efficient LED lighting throughout facilities",
    "Solar power integration for renewable energy",
    "Waste reduction and recycling programs",
    "Chemical management and safety protocols",
    "Carbon footprint reduction initiatives"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="border-primary-700 text-primary-700 mb-4">
              Manufacturing Excellence
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary-900 mb-6">
              Our Manufacturing Facilities
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Two state-of-the-art production facilities equipped with modern technology, 
              skilled workforce, and sustainable practices to deliver world-class apparel.
            </p>
          </div>
        </div>
      </section>

      {/* Bandaragama Factory */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Factory className="w-8 h-8 text-primary-700 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900">
                Bandaragama Factory
              </h2>
            </div>
            <div className="text-center">
              <Badge className="bg-primary-700 text-white mb-4">Main Production Facility</Badge>
              <div className="flex items-center justify-center text-secondary-600 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Bandaragama, Western Province, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Our Flagship Manufacturing Hub
              </h3>
              <p className="text-secondary-700 mb-6">
                Established as our primary production facility, the Bandaragama factory represents 
                the pinnacle of modern apparel manufacturing in Sri Lanka. Strategically located 
                in the Western Province, this facility serves as our main hub for large-scale 
                production and innovation.
              </p>
              <p className="text-secondary-700 mb-6">
                With over 20 years of operational excellence, this factory has been continuously 
                upgraded with the latest technology and sustainable practices, making it a model 
                for responsible manufacturing in the region.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-700">300+</div>
                  <div className="text-sm text-secondary-600">Employees</div>
                </div>
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent-700">75%</div>
                  <div className="text-sm text-secondary-600">Production Capacity</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bandaragamaFeatures.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="w-8 h-8 text-primary-700 mx-auto mb-3" />
                    <h4 className="font-semibold text-secondary-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-secondary-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-primary-50 to-secondary-50">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-secondary-900">
                Bandaragama Factory Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-3">Production Lines</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Cutting department with CAD systems</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">12 sewing production lines</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Finishing and pressing stations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Packing and shipping facility</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-3">Quality Control</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">In-line quality inspection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Final audit procedures</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Testing laboratory</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Fabric and trims inspection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-3">Special Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Climate-controlled environment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Automated material handling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">ERP system integration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Emergency response systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Embilipitiya Factory */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Factory className="w-8 h-8 text-secondary-700 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900">
                Embilipitiya Factory
              </h2>
            </div>
            <div className="text-center">
              <Badge className="bg-secondary-700 text-white mb-4">Specialized Production Unit</Badge>
              <div className="flex items-center justify-center text-secondary-600 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Embilipitiya, Ratnapura District, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {embilipitiyaFeatures.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="w-8 h-8 text-secondary-700 mx-auto mb-3" />
                    <h4 className="font-semibold text-secondary-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-secondary-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Regional Excellence Center
              </h3>
              <p className="text-secondary-700 mb-6">
                Our Embilipitiya facility represents our commitment to regional development and 
                community empowerment. Located in the Ratnapura District, this factory serves 
                as a specialized production unit focusing on specific product categories and 
                innovative manufacturing techniques.
              </p>
              <p className="text-secondary-700 mb-6">
                This facility not only contributes to our production capacity but also provides 
                valuable employment opportunities to the local community, fostering economic 
                development in the region while maintaining our high standards of quality and 
                environmental responsibility.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-secondary-100 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-700">200+</div>
                  <div className="text-sm text-secondary-600">Employees</div>
                </div>
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent-700">25%</div>
                  <div className="text-sm text-secondary-600">Production Capacity</div>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-secondary-900">
                Embilipitiya Factory Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-3">Specialized Lines</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Knit garment production</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Small batch manufacturing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Prototype development</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Value-added services</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-3">Technology</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Modern sewing equipment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Digital workflow systems</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Quality monitoring tools</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Inventory management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-3">Community Impact</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Local employment creation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Skills development programs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Community outreach</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">Environmental stewardship</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our commitment to excellence is validated by international certifications and standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-accent-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-secondary-900 mb-2">{cert}</h3>
                  <p className="text-sm text-secondary-600">Verified compliance and certification</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900">
                Sustainability Initiatives
              </h2>
            </div>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Environmental responsibility and sustainable practices are integral to our operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-br from-green-600 to-green-700 text-white">
                <CardTitle>Environmental Protection</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {sustainabilityInitiatives.slice(0, 3).map((initiative, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700">{initiative}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <CardTitle>Resource Management</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {sustainabilityInitiatives.slice(3).map((initiative, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700">{initiative}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Factories;
