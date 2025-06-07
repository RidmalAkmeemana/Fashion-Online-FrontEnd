
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  Target, 
  Heart, 
  Award,
  Lightbulb,
  Shield,
  Globe
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering superior quality products that exceed international standards"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Building long-term partnerships through exceptional service and reliability"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously improving processes and embracing new technologies"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Conducting business with honesty, transparency, and ethical practices"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Responsible manufacturing that protects our environment for future generations"
    },
    {
      icon: Users,
      title: "People First",
      description: "Valuing our workforce and fostering a culture of growth and development"
    }
  ];

  const timeline = [
    { year: "1999", event: "Company establishment with vision for quality apparel manufacturing" },
    { year: "2003", event: "Opened Bandaragama factory with modern production facilities" },
    { year: "2008", event: "Achieved ISO certification for quality management systems" },
    { year: "2012", event: "Expanded operations with Embilipitiya production unit" },
    { year: "2015", event: "Implemented sustainable manufacturing practices" },
    { year: "2018", event: "Reached milestone of serving 50+ international clients" },
    { year: "2021", event: "Enhanced technology infrastructure for Industry 4.0" },
    { year: "2024", event: "Celebrating 25 years of excellence and innovation" }
  ];

  const leadership = [
    {
      name: "Managing Director",
      role: "Strategic Leadership",
      description: "Visionary leadership driving the company's growth and strategic direction"
    },
    {
      name: "Production Director", 
      role: "Operations Excellence",
      description: "Overseeing manufacturing operations and quality assurance"
    },
    {
      name: "Export Director",
      role: "Global Markets",
      description: "Managing international client relationships and market expansion"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="border-primary-700 text-primary-700 mb-4">
              Established 1999
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary-900 mb-6">
              About Fashionline Group
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A journey of 25+ years in excellence, innovation, and sustainable manufacturing, 
              building trust with clients worldwide through quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <p className="text-secondary-700 mb-6">
                Founded in 1999 with a vision to become Sri Lanka's leading apparel manufacturer, 
                Fashionline Group of Companies began its journey with a commitment to quality, 
                innovation, and customer satisfaction.
              </p>
              <p className="text-secondary-700 mb-6">
                Over the past 25 years, we have grown from a small operation to a sophisticated 
                manufacturing enterprise with two state-of-the-art facilities, serving clients 
                across the globe while maintaining our core values of excellence and integrity.
              </p>
              <p className="text-secondary-700">
                Today, we stand as a testament to Sri Lankan manufacturing excellence, 
                combining traditional craftsmanship with modern technology to deliver 
                exceptional products that meet the highest international standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <Calendar className="w-8 h-8 text-accent-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-secondary-900 mb-2">25+</div>
                  <div className="text-sm text-secondary-600">Years of Excellence</div>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-accent-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-secondary-900 mb-2">500+</div>
                  <div className="text-sm text-secondary-600">Skilled Employees</div>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-accent-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-secondary-900 mb-2">50+</div>
                  <div className="text-sm text-secondary-600">Global Clients</div>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-accent-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-secondary-900 mb-2">ISO</div>
                  <div className="text-sm text-secondary-600">Certified Quality</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Target className="w-6 h-6 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-secondary-700 leading-relaxed">
                  To be the most trusted and preferred apparel manufacturing partner globally, 
                  delivering exceptional quality products while maintaining the highest standards 
                  of social and environmental responsibility. We envision a future where 
                  Fashionline Group sets the benchmark for sustainable and ethical manufacturing 
                  in the apparel industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Heart className="w-6 h-6 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-secondary-700 leading-relaxed">
                  To provide innovative, high-quality apparel solutions that exceed customer 
                  expectations through continuous improvement, technological advancement, and 
                  sustainable manufacturing practices. We are committed to fostering long-term 
                  partnerships, empowering our workforce, and contributing positively to our 
                  communities and environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every product we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{value.title}</h3>
                  <p className="text-secondary-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Badge variant="outline" className="border-primary-700 text-primary-700">
                            {item.year}
                          </Badge>
                        </div>
                        <p className="text-secondary-700">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in every aspect of our business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-secondary-900">{leader.name}</CardTitle>
                  <Badge variant="outline" className="border-accent-600 text-accent-600">
                    {leader.role}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-secondary-600">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
