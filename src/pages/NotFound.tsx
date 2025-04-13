
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Header />
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/products" className="text-bubblebit-purple hover:underline">
          Return to Products Page
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
