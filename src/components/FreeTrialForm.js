import React, { useState } from 'react';

const FreeTrialForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        fitnessGoal: '',
        workoutTime: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                fullName: '',
                phoneNumber: '',
                fitnessGoal: '',
                workoutTime: ''
            });
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <section id="free-trial" className="section-padding bg-dark-900">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-12">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
                            <p className="text-gray-400 text-lg">
                                Your free trial has been booked successfully. Our team will contact you within 24 hours to schedule your session.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="free-trial" className="section-padding bg-dark-900">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Book Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Free Trial</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Ready to start your fitness journey? Book a free trial session and experience our world-class facilities and expert guidance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Form */}
                        <div className="bg-dark-800 rounded-2xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="fitnessGoal" className="block text-sm font-medium text-gray-300 mb-2">
                                        Fitness Goal *
                                    </label>
                                    <select
                                        id="fitnessGoal"
                                        name="fitnessGoal"
                                        value={formData.fitnessGoal}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    >
                                        <option value="">Select your fitness goal</option>
                                        <option value="weight-loss">Weight Loss</option>
                                        <option value="muscle-gain">Muscle Gain</option>
                                        <option value="general-fitness">General Fitness</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="workoutTime" className="block text-sm font-medium text-gray-300 mb-2">
                                        Preferred Workout Time *
                                    </label>
                                    <select
                                        id="workoutTime"
                                        name="workoutTime"
                                        value={formData.workoutTime}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    >
                                        <option value="">Select preferred time</option>
                                        <option value="morning">Morning (6 AM - 10 AM)</option>
                                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                                        <option value="evening">Evening (6 PM - 10 PM)</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary"
                                >
                                    Book Free Trial
                                </button>
                            </form>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6">What's Included in Your Free Trial?</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Personal Consultation</h4>
                                        <p className="text-gray-400">One-on-one session with our certified trainer to assess your fitness level and goals.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a2 2 0 012-2h2a2 2 0 012 2v12M13 7h-2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Facility Tour</h4>
                                        <p className="text-gray-400">Complete tour of our gym facilities and equipment demonstration.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Custom Workout</h4>
                                        <p className="text-gray-400">Personalized workout session designed specifically for your fitness level.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Nutrition Guidance</h4>
                                        <p className="text-gray-400">Basic nutrition tips and dietary recommendations from our experts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeTrialForm;