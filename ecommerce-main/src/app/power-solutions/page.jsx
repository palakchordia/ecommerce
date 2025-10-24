"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PowerSolutionsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setAnimateCards(true), 100);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const powerSolutions = [
    {
      id: 1,
      title: "Power control",
      description: "Complete solar energy management and distribution systems for residential and commercial applications",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop",
      features: ["Grid-tied inverters", "Solar charge controllers", "Battery storage systems", "Monitoring solutions"],
      applications: ["Residential solar", "Commercial solar farms", "Off-grid systems", "Hybrid solutions"]
    },
    {
      id: 2,
      title: "Motor Control",
      description: "Reliable backup power solutions including generators, UPS systems, and battery backups",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      features: ["Diesel generators", "UPS systems", "Battery banks", "Automatic transfer switches"],
      applications: ["Hospitals", "Data centers", "Financial institutions", "Critical infrastructure"]
    },
    {
      id: 3,
      title: "Detection & Sensing",
      description: "Smart energy management systems to optimize power consumption and reduce operational costs",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
      features: ["Smart meters", "Energy audits", "LED lighting systems", "HVAC optimization"],
      applications: ["Commercial buildings", "Industrial facilities", "Retail spaces", "Office complexes"]
    },
    {
      id: 4,
      title: "Heavy Machinery Control",
      description: "Seamless integration of renewable energy sources with existing power infrastructure",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop",
      features: ["Wind energy systems", "Hydroelectric solutions", "Biomass energy", "Hybrid systems"],
      applications: ["Remote locations", "Agricultural facilities", "Eco-friendly buildings", "Sustainable communities"]
    },
  ];

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
                  <div className="flex gap-2 mb-2">
                    <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                    <div className="h-6 bg-gray-300 rounded-full w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">Power Solutions</h1>
          <p className="text-xl text-center opacity-90 max-w-3xl mx-auto">
            Comprehensive power management and distribution solutions for industrial, commercial, and residential applications
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Solutions Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${animateCards ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {powerSolutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 hover:rotate-1 ${animateCards ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Solution Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Solution Content */}
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition-colors duration-300 relative">
                  {solution.title}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
                </h3>
                <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">{solution.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2 group-hover:text-red-600 transition-colors duration-300">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs group-hover:bg-red-50 group-hover:text-red-700 transition-all duration-300 transform hover:scale-105"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-2 group-hover:text-red-600 transition-colors duration-300">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {solution.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs group-hover:bg-red-200 transition-all duration-300 transform hover:scale-105"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Power Solutions?</h2>
          <p className="text-xl mb-6 opacity-90">Our experts can design and implement tailored power solutions for your specific requirements</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
              Get Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerSolutionsPage;
