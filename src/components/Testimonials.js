import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rahul Sharma",
            review: "PRE ULTIMATE GYMS transformed my life! The trainers are amazing and the equipment is top-notch. I've lost 15kg in just 4 months!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
        },
        {
            name: "Priya Patel",
            review: "Best gym in the city! The personal training sessions helped me achieve my fitness goals faster than I ever imagined. Highly recommended!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
        },
        {
            name: "Arjun Singh",
            review: "The facilities are world-class and the community is so supportive. I've gained muscle mass and confidence. Thank you PRE ULTIMATE GYMS!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-600'
                    }`}
            >
                ★
            </span>
        ));
    };

    return (
        <section className="section-padding bg-dark-800">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Members Say</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our amazing members have to say about their transformation journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-dark-700 rounded-2xl p-8 hover:bg-dark-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            {/* Stars */}
                            <div className="flex justify-center mb-6">
                                {renderStars(testimonial.rating)}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-300 text-center mb-8 leading-relaxed italic">
                                "{testimonial.review}"
                            </p>

                            {/* Member Info */}
                            <div className="flex items-center justify-center space-x-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
                                />
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm">Member</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Stats */}
                <div className="mt-20 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">98%</div>
                            <div className="text-gray-400">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
                            <div className="text-gray-400">Success Stories</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1000+</div>
                            <div className="text-gray-400">Transformations</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">5★</div>
                            <div className="text-gray-400">Average Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;