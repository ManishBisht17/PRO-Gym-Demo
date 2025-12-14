import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: "🏆",
            title: "Certified Trainers",
            description: "Our expert trainers are certified professionals with years of experience in fitness and nutrition."
        },
        {
            icon: "💪",
            title: "Modern Equipment",
            description: "State-of-the-art fitness equipment and facilities to help you achieve your fitness goals effectively."
        },
        {
            icon: "👨‍💼",
            title: "Personal Training",
            description: "One-on-one personal training sessions tailored to your specific needs and fitness level."
        },
        {
            icon: "💰",
            title: "Affordable Plans",
            description: "Flexible membership plans that fit your budget without compromising on quality and service."
        }
    ];

    return (
        <section id="why-choose-us" className="section-padding bg-dark-800">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We provide everything you need to transform your fitness journey with professional guidance and top-notch facilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-dark-700 p-8 rounded-xl text-center hover:bg-dark-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                        >
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Benefits */}
                <div className="mt-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h4 className="text-2xl font-bold text-blue-400 mb-2">24/7 Access</h4>
                            <p className="text-gray-400">Work out anytime that fits your schedule</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-purple-400 mb-2">Free Consultation</h4>
                            <p className="text-gray-400">Get personalized fitness advice from experts</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-blue-400 mb-2">Group Classes</h4>
                            <p className="text-gray-400">Join energizing group fitness sessions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;