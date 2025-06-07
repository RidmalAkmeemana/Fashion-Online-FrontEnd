
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            {/* <h1 className="text-6xl font-bold text-primary-700 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Page Not Found</h2>
            <p className="text-secondary-600 mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p> */}
            <h1 className="text-6xl font-bold text-primary-700 mb-4">Welcome</h1>
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Fashionline Group of Companies</h2>
            <p className="text-secondary-600 mb-8">
              Click On Return to Home Button To Load the Website.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link to="/">
              <Button className="bg-primary-700 hover:bg-primary-800 w-full">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full border-primary-700 text-primary-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
