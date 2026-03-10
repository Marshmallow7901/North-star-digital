import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<LegalPageProps> = ({ onBack }) => {
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

        <h1 className="text-4xl md:text-5xl mb-8">Terms of Service</h1>
        <p className="text-midnight/60 mb-12 italic">Last Updated: March 9, 2026</p>

        <div className="prose prose-midnight max-w-none space-y-8 text-midnight/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the North Star Digital website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on North Star Digital's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">3. Disclaimer</h2>
            <p>
              The materials on North Star Digital's website are provided on an 'as is' basis. North Star Digital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">4. Limitations</h2>
            <p>
              In no event shall North Star Digital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on North Star Digital's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-midnight mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
