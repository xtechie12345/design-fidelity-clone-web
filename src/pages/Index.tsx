
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    // Automatically redirect to products page as the default page
    navigate('/products');
  }, [navigate]);
  
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Header />
      <div className="min-h-[50vh] flex items-center justify-center">
        <p>Redirecting to products page...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
