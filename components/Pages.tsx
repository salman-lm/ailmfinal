import React, { useState, useEffect, useRef } from 'react';
import { Mail, Zap, Heart, Cpu, Users, Bot, Globe, UserCheck, Clock, Copy, Check, ShieldCheck, CheckCircle2, AlertTriangle, Cloud, Archive, Info, BookOpen, CreditCard, Edit3, FileText, DatabaseZap, Share2, Sparkles, Terminal, Smartphone, ArrowRight, Menu, Clapperboard, Scissors, Megaphone, Palette, Code2, Linkedin, Instagram, Youtube } from 'lucide-react';

export const AboutPage = () => (
  <div className="min-h-screen bg-slate-950 text-white pt-32 pb-24 px-4 overflow-hidden">
    {/* Hero Section */}
    <div className="max-w-3xl mx-auto text-center mb-16 animate-float">
      <h1 className="text-4xl md:text-5xl font-tech font-bold mb-6 leading-tight">
        Digital Media & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Software Innovation
        </span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
        AILM is a full-service digital agency bridging the gap between high-end media production and custom software development. We build the digital infrastructure and the content that powers modern brands.
      </p>
    </div>

    {/* The Hybrid Advantage Card */}
    <div className="max-w-3xl mx-auto mb-20">
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-0"></div>
        
        <div className="flex items-center justify-between mb-10 relative z-10">
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <Cpu className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/50 to-purple-500/50 mx-4"></div>
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <Users className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 font-tech text-center">The Tech-Creative Synergy</h2>
          <p className="text-slate-400 mb-6 text-center">
            Traditional agencies are siloed. We integrate creative storytelling with robust software engineering.
          </p>
          <p className="text-lg font-medium text-white mb-8 text-center">
            We build the tools and the content.
          </p>
          
          <ul className="space-y-4 max-w-md mx-auto">
            <li className="flex items-center gap-3 text-slate-300">
              <Zap className="w-5 h-5 text-yellow-500 shrink-0" />
              <span>Software Development scales your business operations.</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Heart className="w-5 h-5 text-red-500 shrink-0" />
              <span>Media Production builds your brand's visual authority.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Our Mission Section */}
    <div className="max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl font-extrabold mb-8 font-tech text-center">Our Mission</h2>
      <div className="space-y-6 text-slate-400 text-lg leading-relaxed text-center">
        <p>
          We believe high-end digital solutions shouldn't be reserved for Fortune 500 companies with massive budgets.
        </p>
        <p>
          By leveraging modern development frameworks and cinematic production techniques, we deliver enterprise-grade results at startup speed, passing those efficiencies directly to you.
        </p>
      </div>
    </div>

    {/* Core Values Grid */}
    <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6 mb-24">
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
        <DatabaseZap className="w-10 h-10 text-cyan-400 mb-6" />
        <h3 className="text-2xl font-extrabold mb-3 font-tech">Full-Stack Excellence</h3>
        <p className="text-slate-400 leading-relaxed">
          Our software team builds robust, scalable, and secure applications using the latest technologies, ensuring your business is ready for the future.
        </p>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
        <Bot className="w-10 h-10 text-cyan-400 mb-6" />
        <h3 className="text-2xl font-extrabold mb-3 font-tech">Tech-First</h3>
        <p className="text-slate-400 leading-relaxed">
          We constantly upgrade our tech stack and production tools to ensure you get the most efficient and impactful results available.
        </p>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
        <Globe className="w-10 h-10 text-cyan-400 mb-6" />
        <h3 className="text-2xl font-extrabold mb-3 font-tech">Remote & Agile</h3>
        <p className="text-slate-400 leading-relaxed">
          We have no physical office overhead. Our team spans 3 continents, allowing us to work around the clock.
        </p>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
        <UserCheck className="w-10 h-10 text-cyan-400 mb-6" />
        <h3 className="text-2xl font-extrabold mb-3 font-tech">Customer Obsessed</h3>
        <p className="text-slate-400 leading-relaxed">
          Our "Pay After Satisfaction" model proves our commitment. We don't rest until you are thrilled with the result.
        </p>
      </div>
    </div>

    {/* Footer Quote */}
    <div className="max-w-3xl mx-auto text-center border-t border-slate-900 pt-16">
      <p className="text-xl italic text-slate-400 mb-2">"Creativity is the new productivity."</p>
      <p className="font-bold text-white font-tech">- The AILM Team</p>
    </div>
  </div>
);

export const ContactPage = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('support@ailm.in');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 font-tech">Contact Us</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            We operate as a digital-first agency to keep efficiency high and costs low.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Support Card */}
          <div className="bg-slate-50 dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col">
            <div className="mb-6">
              <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800/50 rounded-xl flex items-center justify-center">
                <Mail className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 font-tech">Email Support</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
              For project inquiries, support, or agency partnerships. We reply typically within 2 hours.
            </p>
            
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex items-center justify-between mb-4">
              <span className="text-slate-700 dark:text-slate-300 font-mono text-sm">support@ailm.in</span>
              <button onClick={handleCopy} className="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a 
              href="mailto:support@ailm.in"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg text-center transition-colors"
            >
              Send Email Now
            </a>
          </div>

          {/* Availability Card */}
          <div className="bg-slate-50 dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col">
             <div className="mb-6">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-800/50 rounded-xl flex items-center justify-center">
                <Globe className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 font-tech">Availability</h3>

            <div className="space-y-6 flex-grow">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white mb-1">Business Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Mon - Sat: 9:00 AM - 8:00 PM EST</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Sunday: Priority Projects Only</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-1">
                   <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white mb-1">Current Status</h4>
                  <p className="text-green-600 dark:text-green-400 font-semibold text-sm">Accepting New Clients</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">Next available slot: Today</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-500">
               <p className="font-semibold">AILM Digital Agency</p>
               <p>Digital Operations Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const LegalPage: React.FC<{ title: string; subtitle?: string; content: React.ReactNode }> = ({ title, subtitle, content }) => (
  <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 font-tech">{title}</h1>
        {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
      </div>
      <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
        {content}
      </div>
    </div>
  </div>
);


export const TERMS_CONTENT = (
  <div className="max-w-3xl mx-auto">
    <div className="bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
      
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><BookOpen className="w-5 h-5 text-slate-400"/>1. Introduction</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">Welcome to AILM. By accessing our website and using our video/image production services, you agree to comply with and be bound by the following terms and conditions.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><Zap className="w-5 h-5 text-slate-400"/>2. Services</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">AILM provides high-end digital media production and custom software development services. We deliver digital solutions, including custom web and mobile applications, based on client briefs. Our output is curated and refined by experts to ensure enterprise-grade quality.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><CreditCard className="w-5 h-5 text-slate-400"/>3. Payments & Deliverables</h3>
        <ul className="pl-8 space-y-3 mt-4 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0"/><p><strong>Pay After Satisfaction:</strong> For standard orders, invoices are issued only after the client approves the watermarked preview.</p></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0"/><p><strong>Final Delivery:</strong> High-resolution, unwatermarked files are released immediately upon receipt of payment.</p></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0"/><p><strong>Non-Payment:</strong> AILM retains full ownership of all drafts and final works until payment is cleared. Unpaid usage of our drafts is a violation of copyright.</p></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-slate-400"/>4. Intellectual Property & License</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">Upon full payment, AILM grants the Client a <strong className="text-slate-800 dark:text-white">Lifetime Commercial License.</strong></p>
        <div className="mt-4 ml-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>✓ You own the final exported video/image file.</li>
            <li>✓ You may use it for advertising, social media, websites, and broadcast indefinitely.</li>
            <li>✓ You do not need to pay royalties to AILM.</li>
            <li>✓ AILM reserves the right to use the work in our portfolio (Showreel) unless a Non-Disclosure Agreement (NDA) is signed prior to the project.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><Edit3 className="w-5 h-5 text-slate-400"/>5. Revisions</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">We offer unlimited revisions during the production phase to ensure satisfaction. However, revisions must be within the original scope of the brief. A complete change of direction (e.g., changing the entire script after approval) may incur additional costs.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-slate-400"/>6. Limitation of Liability</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">AILM shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability is limited to the amount paid for the specific service.</p>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 pt-6 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          For any legal inquiries, please contact <a href="mailto:support@ailm.in" className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">support@ailm.in</a>.
        </p>
      </div>
    </div>
  </div>
);

export const REFUND_CONTENT = (
  <div className="max-w-3xl mx-auto">
    <div className="bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
      {/* Satisfaction First Box */}
      <div className="bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 dark:border-cyan-500/30 rounded-xl p-6 flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-cyan-500 dark:text-cyan-400 mt-1 shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Satisfaction First, Payment Second</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            At AILM, we do not ask for full payment upfront for most standard projects. We believe you should only pay for what you love. Because we operate on this approval-based model, <strong className="text-slate-800 dark:text-white">we do not offer refunds once payment is processed</strong>.
          </p>
        </div>
      </div>

      {/* How Our Process Protects You */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How Our Process Protects You</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Step 1: Draft Creation.</strong> We create the video/images based on your brief.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Step 2: Watermarked Preview.</strong> We send you the files with a watermark for your review.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Step 3: Unlimited Revisions.</strong> If you aren't happy, we revise it. We keep refining until you are 100% satisfied.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Step 4: Approval & Payment.</strong> You only pay the invoice when you approve the final result.
            </p>
          </li>
        </ul>
      </div>

      {/* Final Sale Policy Box */}
      <div className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 dark:border-red-500/30 rounded-xl p-6 flex items-start gap-4">
        <AlertTriangle className="w-8 h-8 text-red-500 dark:text-red-400 mt-1 shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Final Sale Policy</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Since payment is only made after your explicit approval and satisfaction with the creative work, <strong className="text-slate-800 dark:text-white">all payments are final.</strong> Once payment is received and the non-watermarked, high-resolution files are delivered to you, no refunds will be issued under any circumstances. This policy prevents the misuse of digital assets.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
              If you have any questions regarding this policy before starting a project, please contact us at <a href="mailto:support@ailm.in" className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">support@ailm.in</a>.
          </p>
      </div>
    </div>
  </div>
);


export const SHIPPING_CONTENT = (
  <div className="max-w-3xl mx-auto">
    <div className="bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
      {/* Digital Delivery Box */}
      <div className="bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 rounded-xl p-6 flex items-start gap-4">
        <Cloud className="w-8 h-8 text-blue-500 dark:text-blue-400 mt-1 shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Digital Delivery Only</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            AILM provides strictly digital services (Video & Image files). We do not ship physical products (DVDs, USB drives, or prints) to your address. Everything is delivered online via the cloud.
          </p>
        </div>
      </div>

      {/* How You Receive Your Files */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How You Receive Your Files</h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-full font-bold text-slate-700 dark:text-slate-200">1</div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">Project Completion & Payment</h4>
              <p className="text-slate-700 dark:text-slate-300">
                Once you have approved the watermarked preview and completed the payment invoice, our system marks the project as "Ready for Delivery".
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-full font-bold text-slate-700 dark:text-slate-200">2</div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">Cloud Upload (Google Drive)</h4>
              <p className="text-slate-700 dark:text-slate-300">
                We upload your high-resolution, unwatermarked files to a private, secure Google Drive folder. This ensures you get the highest quality without email attachment size limits.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-full font-bold text-slate-700 dark:text-slate-200">3</div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">Access Link Sent</h4>
              <p className="text-slate-700 dark:text-slate-300">
                You will receive an email containing a Direct Download Link. We grant access specifically to the email address provided during the briefing stage.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Delivery Speed & File Retention */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-5 h-5 text-slate-500 dark:text-slate-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">Delivery Speed</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            <strong className="text-slate-800 dark:text-white">Standard:</strong> 24-48 Hours<br/>
            <strong className="text-slate-800 dark:text-white">Complex/Bulk:</strong> 3-5 Business Days
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
            Delivery time starts once the initial brief is confirmed.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Archive className="w-5 h-5 text-slate-500 dark:text-slate-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">File Retention</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            We keep a backup of your project files in our cloud storage for <strong className="text-slate-800 dark:text-white">30 days</strong> after delivery. Please download and save your files locally as soon as you receive the link.
          </p>
        </div>
      </div>
      
      <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
        <div className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
          <Info className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
          <p>
            <strong className="text-slate-700 dark:text-slate-300">Having trouble downloading?</strong><br/>
            Sometimes Google Drive permissions can be tricky. If you see "Access Denied", please request access directly via the Google Drive page or email us at <a href="mailto:support@ailm.in" className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">support@ailm.in</a> and we will fix it instantly.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const PRIVACY_CONTENT = (
  <div className="max-w-3xl mx-auto">
    <div className="bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
      
      <p className="text-slate-700 dark:text-slate-300 text-center">Your privacy is important to us. It is AILM Digital's policy to respect your privacy regarding any information we may collect from you across our website.</p>
      
      <div className="space-y-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">Information Collection</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <DatabaseZap className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">Data Usage</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300">We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Share2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">Third Parties</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300">We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          <br/><br/>
          For any legal inquiries, please contact <a href="mailto:support@ailm.in" className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">support@ailm.in</a>.
        </p>
      </div>
    </div>
  </div>
);

export const AILabsPage = ({ navigate }: { navigate: (path: string) => void }) => (
  <div className="min-h-screen bg-slate-950 text-white pt-32 pb-24 px-4 overflow-hidden relative selection:bg-cyan-500/30">
    {/* High-Tech Background Elements */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full -z-0 animate-pulse"></div>
    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-0"></div>
    <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
    
    <div className="max-w-6xl mx-auto relative z-10">
      {/* Premium Hero */}
      <div className="text-center mb-32 relative">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 mb-8 backdrop-blur-xl">
          <Smartphone className="w-3.5 h-3.5 text-green-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Android Exclusive Architecture</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-tech font-black mb-8 leading-none tracking-tighter">
          AILM <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">LABS</span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium">
          The engineering core of AILM. We specialize in deep-tier Android systems, high-performance web kernels, and integrated neural workflows.
        </p>
      </div>

      {/* Services Grid */}
      <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-12 text-center">Core Disciplines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
        {[
          { 
            title: "Advanced Android Kernels", 
            desc: "Native C++ and Kotlin optimization for performance-critical Android applications.",
            icon: <Smartphone className="w-8 h-8 text-green-400" />,
            spec: "Level 1"
          },
          { 
            title: "High-Freq Web Apps", 
            desc: "Next-gen web architectures optimized for extreme load and ultra-low latency.",
            icon: <Cloud className="w-8 h-8 text-cyan-400" />,
            spec: "Edge Tech"
          },
          { 
            title: "Neural Integration", 
            desc: "On-device AI inference and large-scale LLM business process automation.",
            icon: <Bot className="w-8 h-8 text-purple-400" />,
            spec: "Cognitive"
          },
          { 
            title: "Security Hardening", 
            desc: "Enterprise-grade security audits and binary-level protection for digital assets.",
            icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
            spec: "Fortress"
          }
        ].map((item, i) => (
          <div key={i} className="bg-slate-900/50 backdrop-blur-3xl border border-slate-800/50 rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <div className="text-[40px] font-black font-tech leading-none">{i+1}</div>
            </div>
            <div className="mb-8">
              <div className="p-4 bg-slate-800/50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 border border-slate-700/50">
                {item.icon}
              </div>
            </div>
            <div className="mb-2">
               <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{item.spec}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 font-tech leading-tight">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-400 transition-colors">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Android Exclusive Section - More Premium */}
      <div className="mb-32">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.05),transparent)]"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-tech font-black mb-8 tracking-tighter">
              Android-First <br/>
              <span className="text-slate-500 font-sans font-light">Ecosystem Specialist.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              We made a strategic choice to master the Android ecosystem. By focusing exclusively on Android, we deliver deep integration, thermal-optimized performance, and hardware-level precision that generalist agencies cannot match.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-slate-800/50 rounded-2xl border border-slate-700 text-sm font-bold text-slate-300">No iOS Compromises</div>
              <div className="px-6 py-3 bg-slate-800/50 rounded-2xl border border-slate-700 text-sm font-bold text-slate-300">Native Performance</div>
              <div className="px-6 py-3 bg-slate-800/50 rounded-2xl border border-slate-700 text-sm font-bold text-slate-300">Hardware Synergy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center relative">
        <h3 className="text-3xl font-tech font-bold mb-8">Ready to engineer the future?</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => navigate('/contact')}
            className="px-12 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-cyan-400 transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/5 active:translate-y-0"
          >
            Initiate Project
          </button>
          <button 
             onClick={() => navigate('/contact')}
             className="px-12 py-5 bg-slate-950 text-white border border-slate-800 font-black rounded-2xl hover:bg-slate-900 transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            Technical Consult
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const FIRA_PRO_PRIVACY_CONTENT = (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold mb-4 text-cyan-500 font-tech">1. DATA MINIMIZATION</h2>
      <p className="text-slate-700 dark:text-slate-300">
        Fira Pro is designed to be privacy-first. We do not sell your data, and because we do not show advertisements, we do not use any ad-tracking identifiers.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-fuchsia-500 font-tech">2. INFORMATION WE COLLECT</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li><strong>Account Data:</strong> We use anonymous authentication via Supabase. We do not collect personal identifiers unless you contact support.</li>
        <li><strong>Usage Insights:</strong> We use Firebase Analytics to understand which stories and masterclasses are popular so we can improve content.</li>
        <li><strong>Crash Reporting:</strong> Firebase Crashlytics helps us fix bugs by collecting technical device data during app failures.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-purple-500 font-tech">3. SERVICE PROVIDERS</h2>
      <p className="mb-4 text-slate-700 dark:text-slate-300">We use trusted partners to power the app:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li><strong>Supabase:</strong> Secure database and cloud storage for your Notepad and preferences.</li>
        <li><strong>Firebase:</strong> Analytics and system notifications.</li>
        <li><strong>Google Play Billing:</strong> To securely process your Pro upgrades.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-orange-500 font-tech">4. YOUR CONTROL</h2>
      <p className="text-slate-700 dark:text-slate-300">
        You have full control over your data. Since we use local and cloud-based storage for your stories and notes, you can manage your preferences directly within the App Settings.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-500 font-tech">5. CONTACT</h2>
      <p className="text-slate-700 dark:text-slate-300">
        For privacy inquiries: <a href="mailto:firapro.support@gmail.com" className="text-cyan-400 hover:underline">firapro.support@gmail.com</a>
      </p>
    </section>
  </div>
);

export const FIRA_PRO_TERMS_CONTENT = (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold mb-4 text-cyan-500 font-tech">1. PRO STATUS & SUBSCRIPTIONS</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li><strong>Fira Pro:</strong> Access to premium prompts and masterclasses is granted via a one-time upgrade or subscription.</li>
        <li><strong>Billing:</strong> All transactions are processed via Google Play Store. We do not store your credit card information.</li>
        <li><strong>No Ads:</strong> We guarantee a 100% ad-free experience for all users of the Fira Pro application.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-fuchsia-500 font-tech">2. CONTENT & INTELLECTUAL PROPERTY</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li><strong>App Content:</strong> All stories, lessons, and masterclass materials are the property of AILM Labs.</li>
        <li><strong>Your Notes:</strong> Content created by you in the Notepad remains yours. We provide the storage, but you own the words.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-purple-500 font-tech">3. AI PROMPT USAGE</h2>
      <p className="text-slate-700 dark:text-slate-300">
        Prompts provided by Fira Pro are tools for creative inspiration. AILM Labs is not responsible for the output generated by external AI engines (like Midjourney or Sora) when using these prompts.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-orange-500 font-tech">4. USER CONDUCT</h2>
      <p className="text-slate-700 dark:text-slate-300">
        You agree not to attempt to reverse engineer the app or use our automated story content for commercial redistribution without a specific license.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-500 font-tech">5. DISCLAIMER</h2>
      <p className="text-slate-700 dark:text-slate-300">
        Fira Pro is provided "as is." While we strive for 100% uptime and bug-free performance, we are not liable for any data loss or service interruptions.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-emerald-500 font-tech">6. UPDATES</h2>
      <p className="text-slate-700 dark:text-slate-300">
        We may update these terms to reflect new app features. Continued use of the app implies acceptance of updated terms.
      </p>
    </section>
  </div>
);

export const TestersPage = ({ onContact }: { onContact: () => void }) => (
  <div className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-4 overflow-hidden relative selection:bg-blue-600/20">
    <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    
    <div className="max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Google Play Console Ready</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-tech font-black mb-6 leading-tight tracking-tighter text-slate-900">
          12 TESTERS <br/>
          <span className="text-blue-600">HELP</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Professional closed-testing services designed to meet Google's 14-day requirement with 100% success guaranteed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {[
          { title: "14 Days Testing", icon: <Clock className="w-6 h-6"/>, desc: "Continuous testing for the required duration." },
          { title: "Console Success", icon: <ShieldCheck className="w-6 h-6"/>, desc: "Verified testers to ensure production approval." },
          { title: "No Upfront", icon: <CreditCard className="w-6 h-6"/>, desc: "Pay only after successful testing completion." },
          { title: "100% Guaranteed", icon: <CheckCircle2 className="w-6 h-6"/>, desc: "Money-back guarantee on all services." }
        ].map((feat, i) => (
          <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-4 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl">
              {feat.icon}
            </div>
            <h4 className="font-bold text-slate-900 mb-1">{feat.title}</h4>
            <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-500/5 mb-16 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl font-tech font-black text-slate-900">Premium Testing Infrastructure</h2>
            <p className="text-slate-600 leading-relaxed">
              We provide 20+ real Android devices and verified accounts to fulfill your Google Play Console closed testing requirements. Our team monitors your app daily, providing logs and feedback to satisfy Google's review algorithm.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <Check className="w-5 h-5 text-blue-500" /> Real human testers (No bots)
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <Check className="w-5 h-5 text-blue-500" /> Daily interaction reports
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <Check className="w-5 h-5 text-blue-500" /> Policy compliance check
              </li>
            </ul>
            <div className="pt-4">
              <button 
                onClick={onContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                Get Started Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative">
             <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 aspect-square flex flex-col justify-between overflow-hidden shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400"><Terminal className="w-10 h-10" /></span>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Protocol</p>
                    <p className="text-sm font-bold text-blue-600">GPC-20-SECURE</p>
                  </div>
                </div>
                <div className="space-y-4 py-8">
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-blue-500 animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-500">
                    <span>TESTING PROGRESS</span>
                    <span>14 / 14 DAYS</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white p-4 rounded-xl border border-slate-100">
                      <p className="text-[8px] text-slate-400 uppercase font-black mb-1">Status</p>
                      <p className="text-xs font-bold text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Verified</p>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-slate-100">
                      <p className="text-[8px] text-slate-400 uppercase font-black mb-1">Load</p>
                      <p className="text-xs font-bold text-slate-900">Optimal</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-slate-400 text-sm font-medium">Trusted by indie developers worldwide.</p>
      </div>
    </div>
  </div>
);

export const MdKaifAnsariPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const revealsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Intersection Observer for animation reveals
    const reveals = document.querySelectorAll('.kaif-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.d || '0';
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('in');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.14 }
    );

    reveals.forEach((el, index) => {
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll('.kaif-reveal'));
        const idx = siblings.indexOf(el);
        (el as HTMLElement).dataset.d = String(Math.min(idx, 5) * 85);
      }
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="kaif-portfolio-body bg-[#101016] text-[#f4f4f6] font-sans antialiased overflow-x-hidden min-h-screen">
      <style>{`
        :root {
          --kaif-bg: oklch(15% 0.014 275);
          --kaif-bg-2: oklch(18% 0.018 274);
          --kaif-bg-3: oklch(22% 0.02 272);
          --kaif-ink: oklch(96% 0.006 250);
          --kaif-ink-2: oklch(80% 0.012 250);
          --kaif-ink-3: oklch(64% 0.014 252);
          --kaif-accent: oklch(72% 0.16 200);
          --kaif-accent-2: oklch(70% 0.18 300);
          --kaif-accent-3: oklch(78% 0.15 160);
          --kaif-line: oklch(100% 0 0 / 0.10);
          --kaif-line-2: oklch(100% 0 0 / 0.055);
          --kaif-maxw: 1180px;
          --kaif-ease: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kaif-portfolio-body ::selection {
          background: var(--kaif-accent);
          color: var(--kaif-bg);
        }

        .kaif-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s var(--kaif-ease), transform 0.9s var(--kaif-ease);
        }

        .kaif-reveal.in {
          opacity: 1;
          transform: none;
        }

        @keyframes kaif-drift1 {
          to { transform: translate(-50px, 40px) scale(1.08); }
        }

        @keyframes kaif-drift2 {
          to { transform: translate(50px, -30px) scale(1.1); }
        }

        @keyframes kaif-shine {
          0% { left: -120%; }
          55%, 100% { left: 130%; }
        }

        @keyframes kaif-scroll {
          to { transform: translateX(-50%); }
        }

        .kaif-scroll-track {
          animation: kaif-scroll 28s linear infinite;
        }

        .kaif-shine-effect {
          animation: kaif-shine 3.4s var(--kaif-ease) infinite;
        }
      `}</style>

      {/* NAV */}
      <nav className={`fixed inset-x-0 top-0 z-50 py-5 transition-all duration-500 ease-out border-b ${isScrolled ? 'py-3 bg-[#101016]/80 backdrop-blur-lg border-white/5' : 'border-transparent'}`}>
        <div className="max-w-[1180px] mx-auto px-8 flex items-center justify-between">
          <a href="#top" className="font-tech font-bold text-xl tracking-tight text-white">
            Md Kaif Ansari<span className="text-cyan-400">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-[#ccc] hover:text-white transition-colors duration-300">Services</a>
            <a href="#process" className="text-sm text-[#ccc] hover:text-white transition-colors duration-300">Process</a>
            <a href="#contact" className="text-xs font-semibold text-[#101016] bg-cyan-400 px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_6px_20px_-8px_rgba(34,211,238,0.6)] hover:translate-y-[-2px] hover:shadow-[0_10px_28px_-8px_rgba(34,211,238,0.8)]">
              Hire Me
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white hover:text-cyan-400 transition-colors" aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#101016] border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-base text-[#ccc] hover:text-white py-2">Services</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-base text-[#ccc] hover:text-white py-2">Process</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-center font-semibold text-[#101016] bg-cyan-400 py-3 rounded-full">
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="relative pt-44 pb-28 overflow-hidden" id="top">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[720px] h-[720px] right-[-200px] top-[-260px] rounded-full filter blur-[120px] opacity-30" style={{ background: 'radial-gradient(circle, oklch(72% 0.16 200) 0%, transparent 62%)', animation: 'kaif-drift1 18s ease-in-out infinite alternate' }}></div>
          <div className="absolute w-[600px] h-[600px] left-[-200px] bottom-[-200px] rounded-full filter blur-[120px] opacity-25" style={{ background: 'radial-gradient(circle, oklch(70% 0.18 300) 0%, transparent 62%)', animation: 'kaif-drift2 22s ease-in-out infinite alternate' }}></div>
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(120% 80% at 50% 30%, #000 0%, transparent 75%)' }}></div>

        <div className="max-w-[1180px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 text-cyan-400 font-bold uppercase tracking-[0.24em] text-xs">
              <span className="w-6 h-[1px] bg-cyan-400"></span>
              AI Trainer & Content Creator
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-tech font-bold text-white mt-6 leading-[1.05] tracking-tight">
              Content that makes brands <span className="text-cyan-400">impossible to ignore.</span>
            </h1>
            
            <p className="text-lg text-[#ccc] max-w-xl mt-6 leading-relaxed font-light">
              I'm Md Kaif Ansari. I craft premium video, ads, and design that turn attention into growth, powered by 8+ years of experience and AI-accelerated workflows.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className="font-tech font-bold text-sm bg-cyan-400 text-[#101016] px-8 py-4 rounded-full flex items-center gap-2.5 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] hover:translate-y-[-3px] hover:shadow-[0_16px_40px_-12px_rgba(34,211,238,0.85)]">
                Let's Work Together <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="font-tech font-bold text-sm bg-transparent text-white border border-white/20 px-8 py-4 rounded-full flex items-center gap-2.5 transition-all duration-300 hover:translate-y-[-3px] hover:border-cyan-400 hover:text-cyan-400">
                Explore Services
              </a>
            </div>

            <div className="flex gap-8 mt-10 flex-wrap">
              <div>
                <div className="font-tech font-bold text-3xl text-white">8+</div>
                <div className="text-xs text-slate-500 mt-1">Years experience</div>
              </div>
              <div>
                <div className="font-tech font-bold text-3xl text-white">500+</div>
                <div className="text-xs text-slate-500 mt-1">Projects delivered</div>
              </div>
              <div>
                <div className="font-tech font-bold text-3xl text-white">50+</div>
                <div className="text-xs text-slate-500 mt-1">Happy clients</div>
              </div>
            </div>
          </div>

          {/* PORTRAIT */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-[-14px] bg-gradient-to-br from-cyan-400/40 to-purple-500/30 rounded-[30px] filter blur-[2px] opacity-70"></div>
            <div className="relative z-10 bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 border border-white/10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl flex flex-col items-center justify-center p-8 text-center text-slate-500">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center font-tech font-bold text-4xl text-[#101016] shadow-xl mb-6">
                MK
              </div>
              <p className="font-semibold text-white text-base">Your photo here</p>
              <p className="text-xs text-[#888] mt-2 max-w-[200px]">Replace with a sharp headshot (portrait, 4:5)</p>
            </div>

            {/* floating card */}
            <div className="absolute z-20 left-[-26px] bottom-8 bg-[#181822]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5eead4] shadow-[0_0_0_4px_rgba(94,234,212,0.2)]"></span>
              <div className="text-left">
                <p className="font-tech font-bold text-sm text-white">Available for work</p>
                <p className="text-[10px] text-slate-400">Usually replies in under an hour</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="border-y border-white/5 py-5 overflow-hidden white-space-nowrap bg-[#181824]">
        <div className="flex gap-12 whitespace-nowrap w-max kaif-scroll-track">
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-12 text-sm font-semibold text-slate-400 uppercase tracking-wider items-center">
              <span>Video Editing</span><span className="text-cyan-400">◆</span>
              <span>Brand Ads</span><span className="text-cyan-400">◆</span>
              <span>AI Video</span><span className="text-cyan-400">◆</span>
              <span>Poster Design</span><span className="text-cyan-400">◆</span>
              <span>Social Content</span><span className="text-cyan-400">◆</span>
              <span>Script Research</span><span className="text-cyan-400">◆</span>
              <span>Web Development</span><span className="text-cyan-400">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-28" id="services">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="max-w-[56ch] mb-14 kaif-reveal">
            <span className="text-cyan-400 font-bold uppercase tracking-[0.24em] text-xs flex items-center gap-3">
              <span className="w-6 h-[1px] bg-cyan-400"></span>
              What I Do
            </span>
            <h2 className="text-4xl md:text-5xl font-tech font-bold text-white mt-4 tracking-tight leading-tight">
              Everything your brand needs to <span className="text-cyan-400">stand out.</span>
            </h2>
            <p className="text-base text-[#ccc] mt-4 font-light leading-relaxed">
              From the first frame to the final pixel, I handle the creative work that helps you grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6 bg-[#181824] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[230px] flex flex-col justify-between kaif-reveal">
              <span className="absolute top-7 right-8 font-tech text-xs text-slate-500 font-semibold opacity-50">01</span>
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                <Clapperboard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-tech font-bold text-lg text-white mb-2">AI Video & Footage</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  AI-generated video, imagery, and audio, plus full production of scroll-stopping content built to convert.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 bg-[#181824] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[230px] flex flex-col justify-between kaif-reveal">
              <span className="absolute top-7 right-8 font-tech text-xs text-slate-500 font-semibold opacity-50">02</span>
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-tech font-bold text-lg text-white mb-2">Video Editing</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Precision editing and motion graphics, short and long-form, with fast turnaround.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#181824] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[230px] flex flex-col justify-between kaif-reveal">
              <span className="absolute top-7 right-8 font-tech text-xs text-slate-500 font-semibold opacity-50">03</span>
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-tech font-bold text-lg text-white mb-2">Brand Ads</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  High-performing video ad campaigns that drive results.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#181824] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[230px] flex flex-col justify-between kaif-reveal">
              <span className="absolute top-7 right-8 font-tech text-xs text-slate-500 font-semibold opacity-50">04</span>
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-tech font-bold text-lg text-white mb-2">Poster & Design</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Brand visuals and social creatives with real polish.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#181824] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[230px] flex flex-col justify-between kaif-reveal">
              <span className="absolute top-7 right-8 font-tech text-xs text-slate-500 font-semibold opacity-50">05</span>
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-tech font-bold text-lg text-white mb-2">Social Content</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Consistent, on-brand content that keeps your audience growing.
                </p>
              </div>
            </div>

            <div className="md:col-span-12 bg-[#181824] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 min-h-[230px] flex flex-col justify-between kaif-reveal">
              <span className="absolute top-7 right-8 font-tech text-xs text-slate-500 font-semibold opacity-50">06</span>
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-tech font-bold text-lg text-white mb-2">Web & Software Development</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Custom websites and software built to grow your business, designed with the same taste as the creative work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* PROCESS */}
      <section className="py-28" id="process">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="max-w-[56ch] mb-14 kaif-reveal">
            <span className="text-cyan-400 font-bold uppercase tracking-[0.24em] text-xs flex items-center gap-3">
              <span className="w-6 h-[1px] bg-cyan-400"></span>
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-tech font-bold text-white mt-4 tracking-tight leading-tight">
              Simple process. <span className="text-cyan-400">Serious results.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="pt-8 border-t border-white/10 kaif-reveal">
              <span className="font-tech font-bold text-4xl text-cyan-400 leading-none">01</span>
              <h3 className="font-tech font-bold text-lg text-white mt-4 mb-2">Discover</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                We talk through your brand, goals, and the direction that fits.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 kaif-reveal">
              <span className="font-tech font-bold text-4xl text-cyan-400 leading-none">02</span>
              <h3 className="font-tech font-bold text-lg text-white mt-4 mb-2">Create</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                AI-accelerated production of video, design, and content, done right.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 kaif-reveal">
              <span className="font-tech font-bold text-4xl text-cyan-400 leading-none">03</span>
              <h3 className="font-tech font-bold text-lg text-white mt-4 mb-2">Refine</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Feedback and polish until every detail lands.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 kaif-reveal">
              <span className="font-tech font-bold text-4xl text-cyan-400 leading-none">04</span>
              <h3 className="font-tech font-bold text-lg text-white mt-4 mb-2">Deliver</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Final assets, ready to publish and grow your presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-36 relative overflow-hidden text-center" id="contact">
        <div className="absolute w-[1000px] h-[1000px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-[radial-gradient(circle,rgba(34,211,238,0.14)_0%,transparent_56%)] z-0"></div>
        
        <div className="max-w-[1180px] mx-auto px-8 relative z-10 flex flex-col items-center">
          <span className="text-cyan-400 font-bold uppercase tracking-[0.24em] text-xs flex items-center gap-3 mb-6">
            <span className="w-6 h-[1px] bg-cyan-400"></span>
            Let's Build
          </span>
          <h2 className="text-4xl md:text-7xl font-tech font-bold text-white tracking-tight leading-tight">
            Have a project in <span className="text-cyan-400">mind?</span>
          </h2>
          <p className="text-[#ccc] text-lg max-w-xl mt-6 mb-12 font-light leading-relaxed">
            Tell me what you're building. I'll show you what we can create together, fast, premium, and affordable.
          </p>

          <a className="relative group overflow-hidden bg-gradient-to-r from-cyan-400 to-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 py-5 px-10 rounded-full flex items-center gap-4 text-[#101016] shadow-[0_20px_50px_-16px_rgba(34,211,238,0.7)] hover:shadow-[0_28px_64px_-18px_rgba(34,211,238,0.9)]" href="mailto:mdkaif62990@gmail.com?subject=Project%20Inquiry%20for%20Md%20Kaif%20Ansari&body=Hi%20Kaif%2C%0A%0AI'd%20like%20to%20discuss%20a%20project.%0A%0AWhat%20I%20need%3A%20%0ATimeline%3A%20%0ABudget%3A%20%0A%0AThanks!">
            <span className="absolute top-0 left-[-120%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/35 to-transparent kaif-shine-effect"></span>
            <span className="w-11 h-11 bg-[#101016]/10 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#101016]" />
            </span>
            <div className="text-left leading-tight">
              <p className="font-tech font-bold text-base">Start a Project</p>
              <p className="text-[10px] opacity-80 font-normal font-sans">Replies in under an hour</p>
            </div>
          </a>

          <div className="flex gap-6 mt-10 justify-center flex-wrap text-sm text-[#ccc] font-light">
            <a href="https://ailm.in" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Globe className="w-4 h-4" /> AILM.in
            </a>
            <a href="https://www.linkedin.com/in/imdkaifansari/" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 bg-[#14141d]">
        <div className="max-w-[1180px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-xs text-slate-500 font-light">© 2026 Md Kaif Ansari · AILM Digital Agency</p>
          <div className="flex gap-3">
      
            <a href="https://www.linkedin.com/in/imdkaifansari/" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
          
            <a href="mailto:mdkaif62990@gmail.com" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

