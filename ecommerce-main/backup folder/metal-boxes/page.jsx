"use client";
import React from 'react';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";

const IndustrialProductsDetailPage = () => {
    const categoryData = {
        title: "Metal Enclosures & Boxes",
        subtitle: "Comprehensive Range of Industrial Solutions",
        description: "Our extensive range of industrial products caters to diverse manufacturing and engineering needs. From enclosures to control systems, we provide reliable solutions for every industrial application.",
        features: [
            "Durable Construction",
            "Corrosion Resistant",
            "Custom Sizes Available",
            "Easy Maintenance",
            "Safety Compliant",
            "Cost Effective"
        ],
        specifications: {
            "Material Options": "Mild Steel, Stainless Steel, Aluminum",
            "Protection Rating": "IP54 to IP66",
            "Surface Finish": "Powder Coating, Galvanized",
            "Mounting": "Wall Mount, Floor Standing",
            "Cable Entry": "Top/Bottom Gland Plates",
            "Locking System": "Cam Lock, Pad Lock"
        },
        applications: [
            "Manufacturing Plants",
            "Process Industries",
            "Power Generation",
            "Chemical Plants",
            "Food Processing",
            "Pharmaceuticals"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
            "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=300&fit=crop"
        ],
        relatedProducts: [
            {
                title: "Control Panels",
                description: "Custom control panels for industrial automation",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop"
            },
            {
                title: "Distribution Boards",
                description: "Power distribution solutions for industrial facilities",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
            },
            {
                title: "Motor Control Centers",
                description: "Centralized motor control and protection systems",
                image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white py-4 shadow-sm">
                <div className="max-w-[1170px] mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">Home</Link>
                        <FaAngleRight className="text-gray-400" />
                        <span className="text-gray-800 font-medium">{categoryData.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="max-w-[1170px] mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryData.title}</h1>
                            <p className="text-xl mb-6 text-blue-100">{categoryData.subtitle}</p>
                            <p className="text-lg leading-relaxed">{categoryData.description}</p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
                                alt={categoryData.title}
                                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16">
                <div className="max-w-[1170px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Quality features that make our industrial products stand out
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryData.features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{feature}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Specifications */}
            <div className="py-16 bg-gray-100">
                <div className="max-w-[1170px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Specifications</h2>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(categoryData.specifications).map(([key, value]) => (
                                <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                                    <span className="font-semibold text-gray-700">{key}:</span>
                                    <span className="text-gray-600">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Applications */}
            <div className="py-16">
                <div className="max-w-[1170px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Applications</h2>
                        <p className="text-gray-600">Wide range of industrial applications</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryData.applications.map((application, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{application}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="py-16 bg-gray-100">
                <div className="max-w-[1170px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Product Gallery</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {categoryData.gallery.map((image, index) => (
                            <div key={index} className="group cursor-pointer">
                                <img
                                    src={image}
                                    alt={`Product view ${index + 1}`}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="py-16">
                <div className="max-w-[1170px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Products</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {categoryData.relatedProducts.map((product, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                                    <p className="text-gray-600">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-blue-600">
                <div className="max-w-[1170px] mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Need Industrial Products?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Contact us for comprehensive industrial product solutions</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Quote
                        </Link>
                        <Link href="/enquiry" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Send Enquiry
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustrialProductsDetailPage;
