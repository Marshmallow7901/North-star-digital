import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<LegalPageProps> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-stark pt-32 pb-24 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-midnight/60 hover:text-midnight mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl mb-8">Privacy Policy</h1>
        <p className="text-midnight/60 mb-12 italic">Last Updated: March 9, 2026</p>

        <div className="prose prose-midnight max-w-none space-y-8 text-midnight/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">1. Information We Collect</h2>
            <p>
              North Star Digital collects information that you provide directly to us, such as when you request a free audit, sign up for our newsletter, or contact us for support. This may include your name, email address, company name, and website URL.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide, maintain, and improve our services.</li>
              <li>Process your requests for audits and sessions.</li>
              <li>Send you technical notices, updates, and support messages.</li>
              <li>Communicate with you about products, services, and events.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">3. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">4. Cookies</h2>
            <p>
              We use cookies and similar technologies to track activity on our website and hold certain information to improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@northstardigital.com.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
