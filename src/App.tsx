import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Compass, 
  Search, 
  TrendingUp, 
  BarChart3, 
  Mail, 
  Linkedin, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

type View = 'home' | 'privacy' | 'terms';

const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: View) => void, currentView: View }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-midnight/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Compass className="text-polaris w-8 h-8" />
            <span className="text-stark font-display text-xl tracking-wider">NORTH STAR DIGITAL</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {currentView === 'home' ? (
              <>
                <a href="#services" className="text-stark/80 hover:text-polaris transition-colors text-sm font-medium">Services</a>
                <a href="#case-studies" className="text-stark/80 hover:text-polaris transition-colors text-sm font-medium">Case Studies</a>
                <a href="#about" className="text-stark/80 hover:text-polaris transition-colors text-sm font-medium">About</a>
              </>
            ) : (
              <button 
                onClick={() => onNavigate('home')}
                className="text-stark/80 hover:text-polaris transition-colors text-sm font-medium"
              >
                Home
              </button>
            )}
            <a href="#contact" className="bg-polaris text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:text-midnight transition-all transform hover:scale-105">
              Free Audit
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stark">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-midnight border-b border-white/10 px-4 py-6 flex flex-col gap-4"
        >
          {currentView === 'home' ? (
            <>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-stark/80 text-lg">Services</a>
              <a href="#case-studies" onClick={() => setIsOpen(false)} className="text-stark/80 text-lg">Case Studies</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-stark/80 text-lg">About</a>
            </>
          ) : (
            <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-stark/80 text-lg text-left">Home</button>
          )}
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-polaris text-white px-6 py-3 rounded-full font-bold text-center">
            Free Audit
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-midnight">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3B82F6_0%,transparent_50%)]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-polaris font-bold tracking-widest uppercase text-sm mb-4 block">
            Navigational Marketing Partner
          </span>
          <h1 className="text-5xl md:text-7xl text-stark leading-tight mb-6">
            Your path to <span className="text-polaris">predictable growth.</span>
          </h1>
          <p className="text-xl text-stark/70 mb-10 leading-relaxed">
            We solve the problem of "marketing noise" with data-backed strategies that prioritize high-intent lead generation and measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-polaris text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-midnight transition-all group">
              Start Navigation Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="border border-white/20 text-stark px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center">
              View Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Decorative Element */}
    <motion.div 
      animate={{ 
        rotate: 360,
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block opacity-20"
    >
      <Compass className="w-[600px] h-[600px] text-polaris" strokeWidth={0.5} />
    </motion.div>
  </section>
);

const Services = () => {
  const services = [
    {
      phase: "Phase 1",
      title: "Discovery & Infrastructure",
      description: "Laying the foundation for success with deep audits and technical precision.",
      items: ["SEO Audits", "Landing Page Optimization", "Analytics Setup"],
      icon: Search
    },
    {
      phase: "Phase 2",
      title: "Growth Engine",
      description: "Aggressive lead generation through high-intent paid channels and outreach.",
      items: ["Managed PPC (Google/Meta)", "Targeted LinkedIn Outreach", "Lead Gen Funnels"],
      icon: TrendingUp
    },
    {
      phase: "Phase 3",
      title: "Retention & Scale",
      description: "Maximizing Customer Lifetime Value through intelligent automation.",
      items: ["Email Marketing Automation", "CRM Management", "Scaling Strategies"],
      icon: BarChart3
    }
  ];

  return (
    <section id="services" className="py-24 bg-stark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4">Our Three-Pillar Model</h2>
          <div className="w-20 h-1.5 bg-polaris mx-auto mb-6" />
          <p className="text-midnight/60 max-w-2xl mx-auto text-lg">
            We don't just run ads. We build systems that ensure long-term, scalable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 bg-white border border-midnight/5 rounded-3xl shadow-sm transition-all cursor-default group"
            >
              <div className="bg-midnight/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-polaris/10 transition-colors">
                <service.icon className="text-midnight w-8 h-8 group-hover:text-polaris transition-colors" />
              </div>
              <span className="text-polaris bg-polaris/10 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">
                {service.phase}
              </span>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-midnight/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-midnight/80">
                    <CheckCircle2 className="text-polaris w-4 h-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "North Star Digital didn't just run our ads; they rebuilt our entire growth engine. Our ROI has never been clearer.",
      author: "Sarah Jenkins",
      role: "CEO, TechFlow SaaS",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      quote: "The level of technical precision they bring to SEO and analytics is unmatched. They are a true navigational partner.",
      author: "Marcus Chen",
      role: "Marketing Director, GreenLeaf",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      quote: "Finally, an agency that speaks the language of data. Their automation systems saved us 20+ hours of manual work weekly.",
      author: "Elena Rodriguez",
      role: "COO, Nexus Logistics",
      avatar: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-midnight text-stark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Trusted by Industry Leaders</h2>
          <div className="w-20 h-1.5 bg-polaris mx-auto" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center min-h-[300px]">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="text-polaris w-12 h-12 mx-auto mb-8 opacity-50" />
              <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author}
                  className="w-14 h-14 rounded-full border-2 border-polaris/30"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-stark/60 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-stark/60 hover:text-polaris"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-polaris w-8' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-stark/60 hover:text-polaris"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-polaris/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-polaris/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      client: "TechFlow SaaS",
      challenge: "High churn rate and low trial-to-paid conversion.",
      solution: "Implemented behavior-based email automation and optimized landing pages.",
      results: "45% increase in conversion rate and 20% reduction in churn.",
      industry: "Software"
    },
    {
      client: "GreenLeaf E-commerce",
      challenge: "Stagnant organic traffic and high CAC on paid ads.",
      solution: "Full SEO audit and technical optimization combined with high-intent Google Ads.",
      results: "150% growth in organic traffic and 30% decrease in CAC.",
      industry: "Retail"
    },
    {
      client: "Nexus Logistics",
      challenge: "Poor lead quality from LinkedIn outreach.",
      solution: "Refined targeting parameters and personalized messaging sequences.",
      results: "3x increase in qualified sales meetings.",
      industry: "Logistics"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-stark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4">Success Stories</h2>
          <div className="w-20 h-1.5 bg-polaris mx-auto mb-6" />
          <p className="text-midnight/60 max-w-2xl mx-auto text-lg">
            Real results for real businesses. See how we've helped our clients navigate their growth journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="p-8 bg-white border border-midnight/5 rounded-3xl shadow-sm transition-all group"
            >
              <span className="text-polaris font-bold text-xs uppercase tracking-widest mb-2 block">
                {item.industry}
              </span>
              <h3 className="text-2xl mb-6 font-display">{item.client}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-midnight uppercase tracking-wider mb-2">Challenge</h4>
                  <p className="text-midnight/70 text-sm leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-midnight uppercase tracking-wider mb-2">Solution</h4>
                  <p className="text-midnight/70 text-sm leading-relaxed">{item.solution}</p>
                </div>
                <div className="pt-4 border-t border-midnight/5">
                  <h4 className="text-sm font-bold text-polaris uppercase tracking-wider mb-2">Results</h4>
                  <p className="text-midnight font-bold text-lg leading-tight">{item.results}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-midnight text-stark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Clarity in a complex digital landscape.</h2>
            <p className="text-xl text-stark/70 mb-8 leading-relaxed">
              North Star Digital is a specialized agency designed to act as a "navigational partner" for businesses entering the next phase of their growth.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-polaris/20 p-3 rounded-xl">
                  <Compass className="text-polaris w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                  <p className="text-stark/60">To provide clarity and direction, cutting through the noise with data-backed precision.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-polaris/20 p-3 rounded-xl">
                  <TrendingUp className="text-polaris w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Competitive Advantage</h4>
                  <p className="text-stark/60">A lean, "systems-first" approach using automation to keep overhead low while delivering enterprise results.</p>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <a href="#contact" className="inline-flex items-center gap-3 bg-polaris text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-midnight transition-all group shadow-lg shadow-polaris/20 hover:shadow-white/20">
                Schedule a Call
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
              <motion.img 
                style={{ y, scale: 1.2 }}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-polaris p-8 rounded-3xl text-white max-w-xs hidden md:block shadow-2xl">
              <p className="text-2xl font-bold mb-2">15-min</p>
              <p className="font-medium">Navigation Session to find leaks in your marketing funnel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-stark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-midnight rounded-[40px] p-8 md:p-16 text-stark relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-5xl mb-6">Book Your Free Navigation Session</h2>
            <p className="text-xl text-stark/70 mb-10">
              In 15 minutes, we'll find three immediate leaks in your current marketing funnel. No fluff, just growth.
            </p>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-polaris/10 border border-polaris/30 p-8 rounded-3xl text-center"
              >
                <CheckCircle2 className="text-polaris w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Session Requested!</h3>
                <p className="text-stark/70">Our lead strategist will reach out within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-polaris transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  required
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-polaris transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Company Website" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-polaris transition-colors sm:col-span-2"
                />
                <button type="submit" className="bg-polaris text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-midnight transition-all sm:col-span-2">
                  Claim My Free Audit
                </button>
              </form>
            )}
          </div>
          
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-polaris/5 -skew-x-12 transform translate-x-1/4" />
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (view: View) => void }) => (
  <footer className="bg-midnight border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Compass className="text-polaris w-6 h-6" />
          <span className="text-stark font-display text-lg tracking-wider">NORTH STAR DIGITAL</span>
        </button>
        
        <div className="flex gap-8 text-stark/60 text-sm">
          <button onClick={() => onNavigate('privacy')} className="hover:text-polaris transition-colors">Privacy Policy</button>
          <button onClick={() => onNavigate('terms')} className="hover:text-polaris transition-colors">Terms of Service</button>
        </div>

        <div className="flex gap-4">
          <a href="#" className="bg-white/5 p-3 rounded-full text-stark hover:text-polaris hover:bg-white/10 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="bg-white/5 p-3 rounded-full text-stark hover:text-polaris hover:bg-white/10 transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-stark/40 text-xs">
        © {new Date().getFullYear()} North Star Digital. Your path to predictable growth.
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setView} currentView={view} />
      
      {view === 'home' && (
        <>
          <Hero />
          <Services />
          <CaseStudies />
          <Testimonials />
          <About />
          <Contact />
        </>
      )}

      {view === 'privacy' && (
        <PrivacyPolicy onBack={() => setView('home')} />
      )}

      {view === 'terms' && (
        <TermsOfService onBack={() => setView('home')} />
      )}

      <Footer onNavigate={setView} />
    </div>
  );
}
