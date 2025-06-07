
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Baby,
  Users,
  UserCheck,
  Globe,
  TrendingUp,
  Award,
  Package,
  Star
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: Baby,
      title: "New Born (0-24 months)",
      description: "Soft, comfortable clothing for infants and toddlers",
      features: [
        "100% organic cotton options",
        "Hypoallergenic materials",
        "Easy-change designs",
        "Safety-first construction"
      ],
      colors: "from-pink-100 to-pink-200"
    },
    {
      icon: Users,
      title: "Children (2-14 years)",
      description: "Durable, stylish clothing for growing children",
      features: [
        "Colorful and fun designs",
        "Durable construction",
        "Comfort-fit styles",
        "Easy-care fabrics"
      ],
      colors: "from-blue-100 to-blue-200"
    },
    {
      icon: UserCheck,
      title: "Boys Wear",
      description: "Trendy and comfortable clothing for boys",
      features: [
        "Athletic and casual wear",
        "School uniform options",
        "Seasonal collections",
        "Growth-friendly fits"
      ],
      colors: "from-green-100 to-green-200"
    },
    {
      icon: Star,
      title: "Girls Wear", 
      description: "Fashionable and comfortable clothing for girls",
      features: [
        "Stylish everyday wear",
        "Party and special occasion",
        "Mix and match pieces",
        "Age-appropriate designs"
      ],
      colors: "from-purple-100 to-purple-200"
    }
  ];

  const technicalSpecs = [
    { label: "Fabric Weight Range", value: "120-280 GSM" },
    { label: "Size Range", value: "0 months - 14 years" },
    { label: "Color Options", value: "Full spectrum + Custom" },
    { label: "Print Techniques", value: "Screen, Digital, Heat Transfer" },
    { label: "Quality Standards", value: "ISO 9001, OEKO-TEX" },
    { label: "Lead Time", value: "45-60 days" }
  ];

  const exportClients = [
    "Major European Fashion Brands",
    "North American Retailers",
    "Australian Children's Wear Brands",
    "Scandinavian Premium Labels",
    "Middle Eastern Fashion Houses",
    "Asian Market Leaders"
  ];

  const localClients = [
    "Premium Local Fashion Brands",
    "Department Store Chains",
    "Boutique Children's Stores",
    "School Uniform Suppliers",
    "Baby Care Retailers"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="border-primary-700 text-primary-700 mb-4">
              Product Excellence
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary-900 mb-6">
              Products & Clients
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Specialized in children's and youth apparel, serving global markets with 
              quality, innovation, and style across all age categories.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive range of children's apparel designed with care, comfort, and quality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardHeader className={`bg-gradient-to-br ${category.colors} pb-6`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-secondary-700" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-secondary-900">{category.title}</CardTitle>
                      <p className="text-secondary-600 mt-1">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-accent-600 rounded-full mr-3"></div>
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Distribution */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Product Distribution
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Strategic market allocation optimized for global reach and local presence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Globe className="w-6 h-6 mr-3" />
                  Export Markets
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary-700 mb-2">95%</div>
                  <p className="text-secondary-600">of total production</p>
                </div>
                <p className="text-secondary-700 mb-4">
                  Our export-focused strategy serves major international markets with 
                  premium quality children's apparel meeting global standards.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary-900">Key Export Regions:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-secondary-700">Europe (40%)</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-secondary-700">North America (30%)</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-secondary-700">Australia & Oceania (15%)</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-secondary-700">Other Markets (10%)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Package className="w-6 h-6 mr-3" />
                  Local Market
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-accent-700 mb-2">5%</div>
                  <p className="text-secondary-600">of total production</p>
                </div>
                <p className="text-secondary-700 mb-4">
                  Our local market presence focuses on premium brands and specialized 
                  retailers serving Sri Lankan families with quality children's wear.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary-900">Local Focus Areas:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm text-secondary-700">Premium retail chains</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm text-secondary-700">Boutique stores</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm text-secondary-700">School uniforms</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm text-secondary-700">Online platforms</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Detailed specifications and capabilities for our manufacturing processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-primary-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-secondary-900 mb-2">{spec.label}</h3>
                  <p className="text-lg font-bold text-accent-700 mb-1">{spec.value}</p>
                  <p className="text-sm text-secondary-600">Specification</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center text-secondary-900 mb-6">
              Manufacturing Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">50,000</div>
                <p className="text-sm text-secondary-600">Pieces per month capacity</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-700 mb-2">15+</div>
                <p className="text-sm text-secondary-600">Fabric types processed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <p className="text-sm text-secondary-600">Color combinations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-sm text-secondary-600">Quality monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Our Valued Clients
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Trusted partnerships with leading brands and retailers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Export Clients */}
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <CardTitle className="flex items-center">
                  <Globe className="w-6 h-6 mr-3" />
                  International Export Clients
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-secondary-700 mb-4">
                  We proudly serve leading international brands and retailers across multiple continents, 
                  delivering high-quality children's apparel that meets global standards.
                </p>
                <div className="space-y-3">
                  {exportClients.map((client, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-secondary-700">{client}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 mb-2">Export Achievements</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-700">50+</div>
                      <div className="text-xs text-secondary-600">Active Clients</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-700">25+</div>
                      <div className="text-xs text-secondary-600">Countries</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Local Clients */}
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-br from-green-600 to-green-700 text-white">
                <CardTitle className="flex items-center">
                  <Package className="w-6 h-6 mr-3" />
                  Local Market Clients
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-secondary-700 mb-4">
                  Our local partnerships strengthen the Sri Lankan fashion industry while providing 
                  premium quality children's wear to domestic markets.
                </p>
                <div className="space-y-3">
                  {localClients.map((client, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-secondary-700">{client}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 mb-2">Local Impact</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-green-700">15+</div>
                      <div className="text-xs text-secondary-600">Local Partners</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-700">100%</div>
                      <div className="text-xs text-secondary-600">Quality Focus</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
