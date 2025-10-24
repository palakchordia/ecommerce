"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AccessoriesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setAnimateCards(true), 100);
    }, 800);

    return () => clearTimeout(timer);
  }, []);



  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-red-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-8 bg-red-700 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-red-700 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-3"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


    const categories = [

    {
      id: 4,
      title: "Solar & Power Distribution Solutions",
      subtitle: "Smart, efficient enclosures for solar and electrical power systems.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",

    },
    {
      id: 6,
      title: "Infrastructure & Outdoor Power Distribution Enclosures",
      subtitle: "Reliable enclosures for outdoor & infrastructure-level power supply.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 border-t-1 border-white-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">Accessories & Components</h1>
          <p className="text-xl text-center opacity-90 max-w-3xl mx-auto">
            Complete range of accessories, components, and supporting equipment for all your electrical and industrial needs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16 ${animateCards ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/product-categories/${category.id}`}
              className={`block ${animateCards ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 hover:rotate-1">
                {/* Category Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    View Details
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition-colors duration-300 relative">
                    {category.title}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">{category.subtitle}</p>

                  {/* Applications */}
                  {/* <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2 group-hover:text-red-600 transition-colors duration-300">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.applications.map((app, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs group-hover:bg-red-50 group-hover:text-red-700 transition-all duration-300 transform hover:scale-105"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* Product Range */}
                  {/* <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2 group-hover:text-red-600 transition-colors duration-300">Product Range:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.productRange.map((product, index) => (
                        <span
                          key={index}
                          className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs group-hover:bg-red-200 transition-all duration-300 transform hover:scale-105"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </div>

    
    
  );
};

export default AccessoriesPage;
