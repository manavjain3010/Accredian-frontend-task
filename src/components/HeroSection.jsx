import { useState } from 'react';
import PropTypes from 'prop-types';

export default function HeroSection({ onReferClick }) {
    const [isSelected, setIsSelected] = useState(false);
    
    const scrollToBenefits = () => {
        setIsSelected(true);
        const benefitsSection = document.getElementById('benefits-section');
        benefitsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFAQ = () => {
        setIsSelected(false);
        const faqSection = document.getElementById('faq-section');
        faqSection?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <div className="relative z-0">
            <div className="flex justify-center gap-4 bg-slate-900 p-6 shadow-lg border-b border-slate-800">
                <button 
                    onClick={scrollToBenefits} 
                    className={isSelected ? 
                        "bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg font-medium" : 
                        "bg-slate-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-slate-600 transition-all duration-300 text-lg font-medium"
                    }
                >
                    Benefits
                </button>
                <button 
                    onClick={scrollToFAQ} 
                    className={isSelected ? 
                        "ml-4 bg-slate-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-slate-600 transition-all duration-300 text-lg font-medium" : 
                        "ml-4 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg font-medium"
                    }
                >
                    FAQ
                </button>
            </div>

            <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/network-bg.jpg")'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 animate-gradient-x"></div>
                
                <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
                            Refer & Earn Rewards!
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
                            Join our referral program and earn exciting rewards for every successful referral.
                            Start sharing and start earning today!
                        </p>
                        <button
                            onClick={onReferClick}
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold
                                hover:bg-blue-700 transform hover:scale-105 transition-all duration-300
                                animate-bounce-slow shadow-lg hover:shadow-xl"
                        >
                            Start Referring Now
                        </button>
                    </div>
                    
                    <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl w-full px-4">
                        {[
                            { title: "Invite Friends", icon: "👥" },
                            { title: "They Sign Up", icon: "✍️" },
                            { title: "You Earn Rewards", icon: "💰" }
                        ].map((step, index) => (
                            <div 
                                key={index} 
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center
                                    transform hover:scale-105 transition-all duration-300
                                    hover:bg-white/20 cursor-pointer animate-fade-in-up"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

HeroSection.propTypes = {
    onReferClick: PropTypes.func.isRequired
};

