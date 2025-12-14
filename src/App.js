import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import MembershipPlans from './components/MembershipPlans';
import Gallery from './components/Gallery';
import FreeTrialForm from './components/FreeTrialForm';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <div className="bg-dark-900 text-white min-h-screen">
            <Header />
            <Hero />
            <WhyChooseUs />
            <MembershipPlans />
            <Gallery />
            <FreeTrialForm />
            <Contact />
            <WhatsAppButton />
        </div>
    );
}

export default App;