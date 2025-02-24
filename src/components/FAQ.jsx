import { useState } from 'react';

export default function FAQ() {
    const faqs = [
      { question: "How does the referral program work?", answer: "You refer a friend, and once they enroll, you get a cash reward." },
      { question: "When will I receive my referral bonus?", answer: "Bonuses are credited within 7 days after your friend's enrollment." },
      { question: "Is there a limit to how many people I can refer?", answer: "No, you can refer as many people as you want and earn more rewards!" },
      { question: "Do I need an account to refer?", answer: "Yes, you need to sign up for an account to get your unique referral link." },
    ];
  
    const [openIndex, setOpenIndex] = useState(null);
  
    return (
      <div id="faq-section" className="container mx-auto py-16 px-4 min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-2 p-6 rounded-xl shadow-lg bg-white hover:border-purple-500 transition-all duration-300"
            >
              <button
                className="w-full text-left text-xl font-semibold flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="flex-1">{faq.question}</span>
                <span className="text-2xl text-purple-600 ml-4">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
