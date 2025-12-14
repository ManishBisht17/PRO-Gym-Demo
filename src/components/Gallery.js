import React from 'react';

const Gallery = () => {
    // Using placeholder images for demo
    const images = [
        {
            src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Modern gym equipment"
        },
        {
            src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Weight training area"
        },
        {
            src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Cardio equipment"
        },
        {
            src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Personal training session"
        },
        {
            src: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Group fitness class"
        },
        {
            src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Free weights section"
        },
        {
            src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Gym interior"
        },
        {
            src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            alt: "Functional training area"
        }
    ];

    return (
        <section id="gallery" className="section-padding bg-dark-800">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Gym <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gallery</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Take a look at our state-of-the-art facilities and modern equipment designed to help you achieve your fitness goals.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg bg-dark-700 aspect-square"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white text-sm font-medium">{image.alt}</p>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6">Ready to experience our amazing facilities?</p>
                    <button
                        onClick={() => {
                            const element = document.getElementById('free-trial');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-primary"
                    >
                        Book Your Free Trial
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;