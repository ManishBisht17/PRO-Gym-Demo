import React from 'react';

const MembershipPlans = () => {
    const plans = [
        {
            name: "Monthly",
            price: "₹1,500",
            period: "per month",
            features: [
                "Access to all equipment",
                "Basic fitness consultation",
                "Locker facility",
                "Free Wi-Fi"
            ],
            popular: false
        },
        {
            name: "Quarterly",
            price: "₹4,000",
            period: "per 3 months",
            features: [
                "All Monthly features",
                "2 Personal training sessions",
                "Nutrition guidance",
                "Group class access",
                "Progress tracking"
            ],
            popular: true
        },
        {
            name: "Yearly",
            price: "₹12,000",
            period: "per year",
            features: [
                "All Quarterly features",
                "Unlimited personal training",
                "Diet plan included",
                "Priority booking",
                "Guest passes (2/month)",
                "Supplement discounts"
            ],
            popular: false
        }
    ];

    return (
        <section id="membership" className="section-padding bg-dark-900">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Membership <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Plans</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Choose the perfect plan that fits your fitness goals and budget. All plans include access to our premium facilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-dark-800 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${plan.popular
                                    ? 'ring-2 ring-blue-500 shadow-2xl shadow-blue-500/20'
                                    : 'hover:shadow-xl'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                                <div className="mb-2">
                                    <span className="text-4xl md:text-5xl font-black text-blue-400">{plan.price}</span>
                                </div>
                                <p className="text-gray-400">{plan.period}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-gray-300">
                                        <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${plan.popular
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg'
                                        : 'bg-dark-700 hover:bg-dark-600 text-white border border-gray-600 hover:border-blue-500'
                                    }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                {/* Money Back Guarantee */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
                        <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-green-400 font-semibold">30-Day Money Back Guarantee</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipPlans;