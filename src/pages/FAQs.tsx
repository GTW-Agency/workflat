import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is WorkFlat?",
    answer: "WorkFlat is an international employment platform that connects skilled professionals with verified overseas job opportunities. We provide recruitment, visa support, and relocation assistance."
  },
  {
    question: "Is WorkFlat free for job seekers?",
    answer: "Yes, creating a profile, uploading your CV, and browsing jobs is free. Hands-on recruitment support, including applying on your behalf and visa guidance, may involve a fee, which is clearly communicated upfront."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "We specialize in Healthcare, IT, Engineering, Skilled Trades, Education, Finance, and other professional sectors where employers seek certified talent."
  },
  {
    question: "How do I apply for a job?",
    answer: "Create a profile on WorkFlat.com, upload your CV, select preferred sectors and countries, and submit your application. Our recruitment team will match you with suitable roles and apply on your behalf."
  },
  {
    question: "Can I apply for jobs myself?",
    answer: "Job browsing is open, but direct applications are handled by our team to improve your success rate."
  },
  {
    question: "What countries can I apply to?",
    answer: "We work with employers in Australia, Canada, the UK, Ireland, New Zealand, and the USA. Additional countries may be available depending on demand."
  },
  {
    question: "Do I need prior international experience?",
    answer: "No, international experience is not required. We work with employers open to skilled candidates abroad and provide orientation and relocation support."
  },
  {
    question: "Does WorkFlat provide visa and relocation support?",
    answer: "Yes. We assist with visa sponsorship, documentation guidance, and relocation logistics once a job offer is secured."
  },
  {
    question: "Are the job placements direct hire or contract-based?",
    answer: "We focus on direct-hire placements, ensuring long-term employment with partner employers."
  },
  {
    question: "What documents do I need to get started?",
    answer: "A professional CV/resume, relevant academic or trade qualifications, a valid passport, and proof of work experience. Some roles may require language tests or licensing."
  },
  {
    question: "How long does the recruitment process take?",
    answer: "Timelines vary by employer, country, and role. On average, it takes 4–12 weeks from profile approval to job offer, excluding visa processing."
  },
  {
    question: "How does WorkFlat choose jobs to apply for on my behalf?",
    answer: "Our team reviews your profile, qualifications, and preferences, then matches you with roles you're most likely to succeed in, focusing on quality over quantity."
  },
  {
    question: "Can I track my application status?",
    answer: "Yes. You'll receive updates on employer responses, interview schedules, and next steps through your WorkFlat dashboard or email."
  },
  {
    question: "Do you guarantee job placement?",
    answer: "No, job placement cannot be guaranteed. However, we maximize your chances by presenting your profile to vetted employers and guiding you throughout the process."
  },
  {
    question: "What happens if I don't get selected?",
    answer: "If you're not selected, we continue to search and apply to other suitable opportunities until placement is achieved or you choose to pause the process."
  },
  {
    question: "How do I stay updated on job openings?",
    answer: "After registering, you'll receive email alerts for relevant jobs and can track new opportunities via your WorkFlat profile."
  }
];

const FAQAccordion = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 px-4 text-left hover:bg-gray-50 transition-colors rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-4 pb-5 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <HelpCircle className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Help Center</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Find answers to common questions about using WorkFlat for your international job search
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
