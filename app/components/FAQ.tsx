'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
    const faqs = [
        {
            question: "How does AI screening work?",
            answer: "Our AI analyzes resumes and applications against your specific job requirements, identifying key skills, experience, and potential even if keywords are missing. It scores and ranks candidates instantly so you focus on the top 1%."
        },
        {
            question: "Does RecruiterAI integrate with our existing ATS?",
            answer: "Yes! RecruiterAI integrates seamlessly with major ATS platforms like Greenhouse, Lever, Ashby, and Workday. It acts as an intelligence layer on top of your existing workflow."
        },
        {
            question: "What's the pricing structure?",
            answer: "We offer flexible pricing plans starting with a free trial. You can choose from monthly subscriptions for small teams or custom enterprise packages for high-volume hiring needs."
        },
        {
            question: "How long does the setup take?",
            answer: "Most teams are up and running in less than 20 minutes. Our one-click integrations and pre-built templates mean you can start automating your hiring process on day one."
        },
        {
            question: "Is candidate data secure?",
            answer: "Absolutely. We are SOC 2 Type II compliant and fully adhere to GDPR and CCPA regulations. Your data is encrypted at rest and in transit to ensure maximum security."
        }
    ];

    return (
        <section className="bg-primary/5 py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
            >
                <span className="font-bold text-gray-900 text-lg">{question}</span>
                <ChevronDown className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
                className={`px-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 py-5 pt-0 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
            >
                {answer}
            </div>
        </div>
    )
}
