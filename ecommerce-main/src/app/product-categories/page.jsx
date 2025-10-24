"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ProductDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Trigger card animations after loading
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-3"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                  <div className="flex gap-2 mb-2">
                    <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                    <div className="h-6 bg-gray-300 rounded-full w-24"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-red-300 rounded-full w-16"></div>
                    <div className="h-6 bg-red-300 rounded-full w-20"></div>
                    <div className="h-6 bg-red-300 rounded-full w-18"></div>
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
      id: 1,
       title: "Weatherproof & Outdoor Enclosures",
      subtitle: "Focused on outdoor electrical safety, waterproof protection & reliability",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Metal Enclosures & Boxes",
      subtitle: "Designed for industrial durability, high-load protection & long life.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Industrial Socket Boxes & Panels",
      subtitle: "Specialized enclosures for photovoltaic installations",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop",

    },
    {
      id: 4,
      title: "Solar & Power Distribution Solutions",
      subtitle: "Smart, efficient enclosures for solar and electrical power systems.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",

    },
    {
      id: 5,
      title: "Infrastructure & Outdoor Power Distribution Enclosures",
      subtitle: "Reliable enclosures for outdoor & infrastructure-level power supply.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop",
    },
     {
      id: 6,
      title: "Infrastructure & Outdoor Power Distribution Enclosures",
      subtitle: "Reliable enclosures for outdoor & infrastructure-level power supply.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
     {
      id: 7,
     title: "Flooring & Specialty Boxes",
      subtitle: " For modern interiors, workstations, and industrial flooring networks.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop",
    },
  ];

  const allApplications = [
    "Manufacturing & Engineering",
    "Energy & Power",
    "Renewable & Solar",
    "Construction & Infrastructure",
    "Transportation & Metro Projects",
    "Commercial & Industrial Buildings",
    "Oil, Gas & Utilities",
    "Automation & Control Systems"
  ];

  const allProductRange = [
    "Weatherproof & Outdoor Enclosures",
    "Metal Enclosures & Boxes",
    "Industrial Socket Boxes & Panels",
    "Industrial Plugs & Sockets",
    "Solar & Power Distribution Solutions",
    "Accessories & Components",
    "Flooring & Specialty Boxes"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Industrial Product Categories</h1>
          <p className="text-xl text-center opacity-90">Comprehensive enclosure solutions for every industrial application</p>
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

        {/* Applications Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Applications We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allApplications.map((application, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-red-50 hover:text-red-700 hover:shadow-md transition-all duration-300 cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-3 group-hover:bg-red-700 transition-colors duration-300"></div>
                  <span className="font-medium group-hover:text-red-700 transition-colors duration-300">{application}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Range Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Complete Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProductRange.map((product, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:border-red-300 hover:shadow-md hover:bg-red-50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-4 mt-1 flex-shrink-0 group-hover:bg-red-700 transition-colors duration-300"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-red-700 transition-colors duration-300">{product}</h3>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      High-quality {product.toLowerCase()} designed for industrial applications
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
