
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6">
      <Header />
      <main className="py-6 md:py-8">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12">BubblebitX makes its own products</h1>
        
        <ProductCard 
          title="GameCre8"
          description="Gamecre8 is a platform where people can create games from text. Currently it is in lite version, so anyone can use it. Below is the app you can download and use it."
          buttonText="Download"
          buttonLink="#"
        />
        
        <ProductCard 
          title="Forhumans"
          description="Forhumans is an Indian based AI platform specially made for users of all ages where it will help you in answering any question, text to image, docs QnA, text to games. etc"
          buttonText="Use now"
          buttonLink="#"
        />
        
        <div className="text-center mt-6 mb-8 md:mb-12">
          <div className="inline-block bg-gray-100 px-4 md:px-6 py-2 md:py-3 rounded-full text-gray-700 text-sm md:text-base">
            More products coming
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
