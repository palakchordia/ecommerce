"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const CategoryDetailPage = () => {
  const params = useParams();
  const categoryId = parseInt(params.id);

  // // Contact modal state
  // const [showContactModal, setShowContactModal] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  // // Contact helper functions
  // const handleContactClick = (product) => {
  //   setSelectedProduct(product);
  //   setShowContactModal(true);
  // };

  // const handleCall = (phoneNumber) => {
  //   window.open(`tel:${phoneNumber}`, '_self');
  // };

  // const handleWhatsApp = (phoneNumber) => {
  //   const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  //   window.open(`https://wa.me/${cleanNumber}`, '_blank');
  // };

  // const handleEmail = (productName) => {
  //   const subject = encodeURIComponent(`Inquiry about ${productName}`);
  //   const body = encodeURIComponent(`Hi, I'm interested in learning more about ${productName}. Please provide me with detailed specifications and pricing information.`);
  //   window.open(`mailto:info@company.com?subject=${subject}&body=${body}`, '_blank');
  // };

  // Mock data - in real app this would come from API/database
  const categoryData = {
    1: {
      title: "Weatherproof & Outdoor Enclosures",
      subtitle: "Focused on outdoor electrical safety, waterproof protection & reliability",
      description: "Our industrial enclosures are specifically designed to protect electrical and electronic equipment in harsh manufacturing environments. Built to withstand extreme conditions, vibrations, and contaminants while ensuring optimal performance and safety.",
      features: [
        "IP65/IP66 protection ratings",
        "Heavy-duty steel construction",
        "Vibration and impact resistant",
        "Custom sizing available",
        "Multiple mounting options",
        "Corrosion-resistant coating"
      ],
      specifications: {
        "Material": "Galvanized Steel / Stainless Steel",
        "Protection Rating": "IP65, IP66, IP67",
        "Temperature Range": "-20°C to +80°C",
        "Load Capacity": "Up to 500kg",
        "Finish": "Powder coated / Hot-dip galvanized"
      },
      gallery: [
        "https://images.unsplash.com/photo-1581092335878-5c8c7f4a4c8d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
      ],
      relatedProducts: [
        {
          name: "Weatherproof Meter Boxes (IP65 / IP67 Rated)",
          description: "High-quality meter boxes designed for outdoor electrical installations with superior protection against water, dust, and environmental elements.",
          specifications: ["IP65/IP67 Protection", "UV Resistant", "Corrosion Proof", "Easy Installation"],
        },
        {
          name: "Weatherproof Junction Boxes for Outdoor Applications",
          description: "Durable junction boxes specifically engineered for harsh outdoor environments, providing reliable electrical connections and protection.",
          specifications: ["IP66 Protection", "Multiple Sizes", "Impact Resistant", "Weatherproof"],
        },
        {
          name: "Polycarbonate Outdoor Enclosures",
          description: "Transparent and durable polycarbonate enclosures offering excellent visibility and protection for electrical components in outdoor settings.",
          specifications: ["Clear Visibility", "IP65 Rated", "Lightweight", "Chemical Resistant"],

        },
        {
          name: "Polycarbonate Socket Enclosure Boxes",
          description: "Specialized socket enclosures made from high-grade polycarbonate, perfect for power distribution in demanding outdoor conditions.",
          specifications: ["Socket Compatible", "IP67 Protection", "High Impact", "Easy Access"],

        },
        {
          name: "EV Charging Enclosures & Power Distribution Boxes",
          description: "Advanced enclosures designed for electric vehicle charging stations and power distribution systems with enhanced safety features.",
          specifications: ["EV Compatible", "High Load Capacity", "Safety Certified", "Modular Design"],

        }
      ]
    },
    2: {
      title: "Metal Enclosures & Boxes",
      subtitle: "Designed for industrial durability, high-load protection & long life.",
      description: "Engineered for critical infrastructure projects including bridges, tunnels, airports, and urban development. Our enclosures provide reliable protection for electrical systems in challenging outdoor environments.",
      features: [
        "Weatherproof and corrosion resistant",
        "Seismic and vibration tested",
        "UV resistant materials",
        "High impact resistance",
        "Easy maintenance access",
        "Long-term durability guarantee"
      ],
      specifications: {
        "Material": "Marine-grade aluminum / Stainless Steel",
        "Protection Rating": "IP67, IP68",
        "Temperature Range": "-40°C to +85°C",
        "Load Capacity": "Up to 800kg",
        "Finish": "Anodized / Marine-grade coating"
      },
      gallery: [
        "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
      ],
      relatedProducts: [
        {
          name: "Heavy-Duty GI Junction Boxes",
          description: "Robust galvanized iron junction boxes designed for heavy industrial applications, offering maximum protection and durability.",
          specifications: ["Galvanized Iron", "Heavy Duty", "Large Sizes", "Industrial Grade"],

        },
        {
          name: "Powder-Coated Steel Enclosures",
          description: "Premium steel enclosures with powder coating finish, providing excellent corrosion resistance and professional appearance.",
          specifications: ["Powder Coated", "Steel Construction", "Custom Colors", "Professional Finish"],

        },
        {
          name: "Industrial Metal Junction Boxes (Custom Sizes)",
          description: "Custom-sized metal junction boxes tailored to your specific requirements, perfect for specialized industrial applications.",
          specifications: ["Custom Sizes", "Metal Construction", "Tailored Solutions", "Industrial Use"],

        },
        {
          name: "Metal Open Type Junction Boxes",
          description: "Open-style metal junction boxes for applications requiring easy access and ventilation while maintaining structural integrity.",
          specifications: ["Open Design", "Metal Frame", "Easy Access", "Ventilated"],

        },
        {
          name: "Metal Clad Socket Enclosures",
          description: "Metal-clad enclosures specifically designed for socket installations, combining safety with robust protection.",
          specifications: ["Socket Ready", "Metal Clad", "Safety Enhanced", "Installation Ready"],

        },
        {
          name: "Meter Panels & Meter Enclosure Cabinets",
          description: "Comprehensive meter panel solutions with secure cabinet enclosures for electrical metering and distribution systems.",
          specifications: ["Meter Compatible", "Panel Integration", "Secure Cabinets", "Distribution Ready"],

        },
        {
          name: "Custom-Built Metal Enclosures for OEM Applications",
          description: "Bespoke metal enclosures manufactured to OEM specifications, ensuring perfect fit and functionality for specialized equipment.",
          specifications: ["OEM Custom", "Bespoke Design", "Quality Assured", "Specialized Fit"],

        }
      ]
    },
    3: {
      title: "Industrial Socket Boxes & Panels",
      subtitle: "Specialized enclosures for photovoltaic installations",
      description: "Engineered for safe, reliable power distribution in industries.",
      features: [
        "Heat dissipation optimized",
        "Weatherproof for all climates",
        "Anti-theft security features",
        "Easy cable management",
        "Ventilation systems included",
        "UV and temperature resistant"
      ],
      specifications: {
        "Material": "Aluminum / Polycarbonate blend",
        "Protection Rating": "IP65, IP66",
        "Temperature Range": "-30°C to +90°C",
        "Load Capacity": "Up to 300kg",
        "Finish": "Anti-reflective coating"
      },
      gallery: [
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop"
      ],
      relatedProducts: [
        {
          name: "Industrial Socket Distribution Boxes with Stand",
          description: "Comprehensive power distribution systems designed specifically for solar installations, ensuring efficient energy management and distribution.",
          specifications: ["Solar Optimized", "High Efficiency", "Modular Design", "Energy Management"],
        },
        {
          name: "Portable Industrial Socket Boxes (IP65 / IP67 Rated)",
          description: "Specialized weatherproof enclosures for solar applications, protecting critical components from environmental elements.",
          specifications: ["Solar Grade", "Weatherproof", "UV Protected", "Durable Construction"],
        },
        {
          name: "Industrial Socket Panels",
          description: "Heavy-duty industrial plugs and sockets designed for solar power applications with enhanced safety and reliability features.",
          specifications: ["Industrial Grade", "Safety Enhanced", "Weather Resistant", "High Current"],

        },
        {
          name: "Heavy-Duty Power Distribution Units (PDUs)",
          description: "Robust mounting systems for solar panels, engineered for optimal positioning and maximum energy capture in various installations.",
          specifications: ["Panel Compatible", "Adjustable Angles", "Wind Resistant", "Easy Installation"],
          
        },
        {
          name: "Polycarbonate Socket Distribution Boxes",
          description: "Robust mounting systems for solar panels, engineered for optimal positioning and maximum energy capture in various installations.",
          specifications: ["Panel Compatible", "Adjustable Angles", "Wind Resistant", "Easy Installation"],
          
        }
      ]
    },
    4: {
      title: "Solar & Power Distribution Solutions",
      subtitle: "Smart, efficient enclosures for solar and electrical power systems.",
      description: "Built tough for demanding construction environments. Our enclosures protect electrical equipment from dust, moisture, impacts, and extreme weather conditions during construction projects.",
      features: [
        "Impact and crush resistant",
        "Dust and water tight",
        "Portable and relocatable",
        "Quick installation design",
        "Lockable security features",
        "Temporary and permanent options"
      ],
      specifications: {
        "Material": "Heavy-duty polyethylene / Steel",
        "Protection Rating": "IP65, IP66",
        "Temperature Range": "-25°C to +70°C",
        "Load Capacity": "Up to 400kg",
        "Finish": "High-impact resistant coating"
      },
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop"
      ],
      relatedProducts: [
        {
          name: "Solar ACDB & DCDB Enclosures",
          description: "Heavy-duty socket boxes and panels designed for construction site applications, providing reliable power distribution in harsh environments.",
          specifications: ["Construction Grade", "Multiple Outlets", "Impact Resistant", "Site Ready"],
          
        },
        {
          name: "CT Meter Panel Enclosures",
          description: "Essential accessories and components for construction site electrical systems, ensuring safety and efficiency on the job site.",
          specifications: ["Site Accessories", "Safety Components", "Easy Installation", "Durable Parts"],
          
        },
        {
          name: "APFC Control Panels",
          description: "Temporary power distribution solutions specifically designed for construction sites, providing flexible and safe electrical supply.",
          specifications: ["Temporary Use", "Flexible Setup", "Site Safe", "Quick Deploy"],
          
        },
        {
          name: "Meter Panels for Solar Integration",
          description: "Comprehensive electrical distribution systems tailored for construction environments, ensuring reliable power where it's needed most.",
          specifications: ["Site Distribution", "Multi-Point Supply", "Weather Protected", "Construction Optimized"],
          
        },
        {
          name: "Sub-Pillar & Feeder Pillar Boxes ",
          description: "Comprehensive electrical distribution systems tailored for construction environments, ensuring reliable power where it's needed most.",
          specifications: ["Site Distribution", "Multi-Point Supply", "Weather Protected", "Construction Optimized"],
          
        }
      ]
    },
    5: {
      title: "Infrastructure & Outdoor Power Distribution Enclosures",
      subtitle: "Reliable enclosures for outdoor & infrastructure-level power supply.",
      description: "Aesthetically designed enclosures that blend seamlessly with modern office and commercial building architecture while providing robust protection for electrical and networking equipment.",
      features: [
        "Modern aesthetic design",
        "Quiet operation features",
        "Easy integration with HVAC",
        "Cable management systems",
        "Fire-resistant materials",
        "Professional installation service"
      ],
      specifications: {
        "Material": "Powder-coated steel / Aluminum",
        "Protection Rating": "IP54, IP55",
        "Temperature Range": "-10°C to +60°C",
        "Load Capacity": "Up to 200kg",
        "Finish": "Professional grade coating"
      },
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      ],
      relatedProducts: [
        {
          name: "Feeder Pillar Boxes",
          description: "Premium metal enclosures designed for commercial applications, combining aesthetic appeal with robust protection for electrical systems.",
          specifications: ["Commercial Grade", "Aesthetic Design", "Professional Finish", "Secure Protection"],
          
        },
        {
          name: "Street Lighting Pillar Boxes",
          description: "High-quality industrial plugs and sockets suitable for commercial building applications, ensuring reliable power connections.",
          specifications: ["Commercial Use", "Reliable Connection", "Safety Compliant", "Professional Grade"],
         
        },
        {
          name: "Outdoor Power Distribution Cabinets",
          description: "Specialized panels for network and communication equipment in commercial buildings, providing organized and protected installations.",
          specifications: ["Network Ready", "Communication Optimized", "Organized Layout", "Commercial Standard"],
         
        },
        {
          name: "Utility Pillar Enclosures",
          description: "Comprehensive electrical solutions tailored for office buildings, ensuring efficient power distribution and equipment protection.",
          specifications: ["Office Optimized", "Building Integration", "Efficient Distribution", "Professional Solutions"],
         
        }
      ]
    },
     6: {
      title: "Cable Management Systems",
      subtitle: "Organized, long-life solutions for industrial and commercial wiring.",
      description: "Aesthetically designed enclosures that blend seamlessly with modern office and commercial building architecture while providing robust protection for electrical and networking equipment.",
      features: [
        "Modern aesthetic design",
        "Quiet operation features",
        "Easy integration with HVAC",
        "Cable management systems",
        "Fire-resistant materials",
        "Professional installation service"
      ],
      specifications: {
        "Material": "Powder-coated steel / Aluminum",
        "Protection Rating": "IP54, IP55",
        "Temperature Range": "-10°C to +60°C",
        "Load Capacity": "Up to 200kg",
        "Finish": "Professional grade coating"
      },
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      ],
      relatedProducts: [
        {
          name: "FRP Cable Tray Systems",
          description: "Premium metal enclosures designed for commercial applications, combining aesthetic appeal with robust protection for electrical systems.",
          specifications: ["Commercial Grade", "Aesthetic Design", "Professional Finish", "Secure Protection"],
          
        },
        {
          name: "GI Cable Tray Systems",
          description: "High-quality industrial plugs and sockets suitable for commercial building applications, ensuring reliable power connections.",
          specifications: ["Commercial Use", "Reliable Connection", "Safety Compliant", "Professional Grade"],
         
        },
        {
          name: "Heavy-Duty Cable Tray Supports & Fittings",
          description: "Specialized panels for network and communication equipment in commercial buildings, providing organized and protected installations.",
          specifications: ["Network Ready", "Communication Optimized", "Organized Layout", "Commercial Standard"],
         
        },
        {
          name: "Cable Management Accessories",
          description: "Comprehensive electrical solutions tailored for office buildings, ensuring efficient power distribution and equipment protection.",
          specifications: ["Office Optimized", "Building Integration", "Efficient Distribution", "Professional Solutions"],
         
        }
      ]
    },
    7: {
      title: "Flooring & Specialty Boxes",
      subtitle: " For modern interiors, workstations, and industrial flooring networks.",
      description: "Aesthetically designed enclosures that blend seamlessly with modern office and commercial building architecture while providing robust protection for electrical and networking equipment.",
      features: [
        "Modern aesthetic design",
        "Quiet operation features",
        "Easy integration with HVAC",
        "Cable management systems",
        "Fire-resistant materials",
        "Professional installation service"
      ],
      specifications: {
        "Material": "Powder-coated steel / Aluminum",
        "Protection Rating": "IP54, IP55",
        "Temperature Range": "-10°C to +60°C",
        "Load Capacity": "Up to 200kg",
        "Finish": "Professional grade coating"
      },
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
      ],
      relatedProducts: [
        {
          name: "Modular Floor Junction Boxes",
          description: "Premium metal enclosures designed for commercial applications, combining aesthetic appeal with robust protection for electrical systems.",
          specifications: ["Commercial Grade", "Aesthetic Design", "Professional Finish", "Secure Protection"],
          
        },
        {
          name: "Pop-Up Floor Socket Boxes",
          description: "High-quality industrial plugs and sockets suitable for commercial building applications, ensuring reliable power connections.",
          specifications: ["Commercial Use", "Reliable Connection", "Safety Compliant", "Professional Grade"],
         
        },
        {
          name: "Industrial Floor Outlet Enclosures",
          description: "Specialized panels for network and communication equipment in commercial buildings, providing organized and protected installations.",
          specifications: ["Network Ready", "Communication Optimized", "Organized Layout", "Commercial Standard"],
         
        }
      ]
    },
  };

  const category = categoryData[categoryId];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            The category you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/product-categories"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm sm:text-base inline-block w-full sm:w-auto text-center"
          >
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
            <Link href="/" className="text-red-600 hover:underline whitespace-nowrap">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/product-categories" className="text-red-600 hover:underline whitespace-nowrap">Categories</Link>
            <span className="text-gray-500  sm:inline">/</span>
            <span className="text-gray-800 font-medium break-words max-w-full sm:max-w-none" title={category.title}>
              {category.title.length > 30 ? `${category.title.substring(0, 30)}...` : category.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                {category.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-4 sm:mb-6 leading-relaxed">
                {category.subtitle}
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-none">
                {category.description}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1581092335878-5c8c7f4a4c8d?w=500&h=300&fit=crop"
                alt={category.title}
                className="rounded-lg shadow-2xl max-w-full sm:max-w-sm lg:max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Features Section */}
        {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-300">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Specifications */}
        {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(category.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold text-gray-700">{key}:</span>
                <span className="text-gray-800">{value}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Image Gallery */}
        {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.gallery.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${category.title} - Image ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Related Products */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Products Range</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
            {category.relatedProducts.map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                {/* Product Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Product Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {product.description.length > 300
                      ? `${product.description.substring(0, 300)}...`
                      : product.description
                    }
                  </p>

                  {/* Specifications */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-xs sm:text-sm text-gray-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.specifications.slice(0, 5).map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                      {product.specifications.length > 5 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          +{product.specifications.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Mobile-friendly touch area */}
                  <div className="pt-2 border-t border-gray-200">
                    <button className="w-full text-left text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-300">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Contact our experts for customized solutions for your industrial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-base sm:text-lg w-full sm:w-auto text-center"
            >
              Get Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryDetailPage;
