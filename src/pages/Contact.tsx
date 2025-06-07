
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Factory,
  Send,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = {
    head_office: {
      title: "Head Office",
      address: "Fashionline Group of Companies\nBandaragama, Western Province\nSri Lanka",
      phone: "+94 38 2248986 / +94 38 2248987",
      fax: "+94 38 2248988",
      email: "info@fashionlinegroup.lk"
    },
    bandaragama: {
      title: "Bandaragama Factory",
      address: "Main Production Facility\nBandaragama, Western Province\nSri Lanka",
      phone: "+94 38 2248986",
      email: "production@fashionlinegroup.lk"
    },
    embilipitiya: {
      title: "Embilipitiya Factory",
      address: "Secondary Production Unit\nEmbilipitiya, Ratnapura District\nSri Lanka",
      phone: "+94 47 2260123",
      email: "embilipitiya@fashionlinegroup.lk"
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('https://uat.orbislk.com/Fashion-Online-BackEnd/submitContactForm.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
        toast({
          title: "Message Sent Successfully",
          description: data.message || "Your message has been submitted. We will contact you shortly.",
          variant: "success",
        });
  
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        toast({
          title: "Submission Failed",
          description: data.message || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "There was a problem submitting the form. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="border-primary-700 text-primary-700 mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary-900 mb-6">
              Contact Fashionline Group
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Connect with our team for partnerships, inquiries, or to learn more about 
              our manufacturing capabilities and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Multiple contact points to serve you better across our operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Head Office */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  {contactInfo.head_office.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Address</h4>
                    <p className="text-secondary-700 whitespace-pre-line">
                      {contactInfo.head_office.address}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Phone</h4>
                    <p className="text-secondary-700">{contactInfo.head_office.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Fax</h4>
                    <p className="text-secondary-700">{contactInfo.head_office.fax}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Email</h4>
                    <p className="text-primary-700">{contactInfo.head_office.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bandaragama Factory */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-secondary-600 to-secondary-700 text-white">
                <CardTitle className="flex items-center">
                  <Factory className="w-6 h-6 mr-3" />
                  {contactInfo.bandaragama.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Address</h4>
                    <p className="text-secondary-700 whitespace-pre-line">
                      {contactInfo.bandaragama.address}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Phone</h4>
                    <p className="text-secondary-700">{contactInfo.bandaragama.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Email</h4>
                    <p className="text-primary-700">{contactInfo.bandaragama.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Embilipitiya Factory */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                <CardTitle className="flex items-center">
                  <Factory className="w-6 h-6 mr-3" />
                  {contactInfo.embilipitiya.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Address</h4>
                    <p className="text-secondary-700 whitespace-pre-line">
                      {contactInfo.embilipitiya.address}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Phone</h4>
                    <p className="text-secondary-700">{contactInfo.embilipitiya.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Email</h4>
                    <p className="text-primary-700">{contactInfo.embilipitiya.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Business Hours */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
                  <CardTitle className="flex items-center text-xl">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary-900 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-900 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-secondary-900 mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-900 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-900 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Enter the subject of your inquiry"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-900 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary-700 hover:bg-primary-800"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-secondary-600 text-center">
                      Your message will be sent to: info@fashionlinegroup.lk
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours & Additional Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-secondary-700">Monday - Friday</span>
                      <span className="font-semibold text-secondary-900">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-700">Saturday</span>
                      <span className="font-semibold text-secondary-900">8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-700">Sunday</span>
                      <span className="font-semibold text-secondary-900">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-secondary-200">
                    <p className="text-sm text-secondary-600">
                      <strong>Time Zone:</strong> Sri Lanka Standard Time (GMT+5:30)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                  <CardTitle className="flex items-center">
                    <Phone className="w-6 h-6 mr-3" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">For Immediate Assistance</h4>
                      <p className="text-secondary-700 mb-2">+94 38 2248986</p>
                      <p className="text-secondary-700">+94 38 2248987</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Email Inquiries</h4>
                      <p className="text-primary-700">info@fashionlinegroup.lk</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-secondary-600">
                        Our team typically responds to email inquiries within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-secondary-900 mb-4">
              Factory Locations
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our strategically located manufacturing facilities in Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary-700 mr-3" />
                  Bandaragama Factory Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 text-center">
                  <Factory className="w-16 h-16 text-primary-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">Main Production Facility</h3>
                  <p className="text-secondary-700 mb-4">
                    Bandaragama, Western Province<br />
                    Sri Lanka
                  </p>
                  <Badge variant="outline" className="border-primary-700 text-primary-700">
                    Primary Manufacturing Hub
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 text-secondary-700 mr-3" />
                  Embilipitiya Factory Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg p-6 text-center">
                  <Factory className="w-16 h-16 text-secondary-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">Specialized Production Unit</h3>
                  <p className="text-secondary-700 mb-4">
                    Embilipitiya, Ratnapura District<br />
                    Sri Lanka
                  </p>
                  <Badge variant="outline" className="border-secondary-700 text-secondary-700">
                    Secondary Manufacturing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
