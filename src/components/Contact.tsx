import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Clock, Send, CheckCircle, Navigation, ZoomIn, ZoomOut, Globe, Youtube, Instagram, MessageCircle } from 'lucide-react';
import { Language, Translation } from '../types';

interface ContactProps {
  currentLang: Language;
  t: Translation;
}

export default function Contact({ currentLang, t }: ContactProps) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);
  
  // Custom Map states
  const [zoomLevel, setZoomLevel] = useState(2);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending message
    setSentSuccess(true);
    setSubject('');
    setMessage('');
    setName('');
    setEmail('');
    
    setTimeout(() => {
      setSentSuccess(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase block mb-3 font-bold">
            {t.navContact}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6">
            {t.contactSubtitle}
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Contact Details & Interactive Custom Map */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/905322730708" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 sm:p-6 bg-stone-950 border border-stone-800 rounded-2xl flex items-start space-x-4 hover:border-emerald-500/20 hover:bg-stone-900/40 transition-all duration-300 shadow-sm group"
              >
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 flex-shrink-0 border border-emerald-500/20 shadow-md group-hover:text-emerald-300 group-hover:bg-emerald-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-1">
                    WhatsApp
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-sans font-semibold group-hover:text-emerald-400 transition-colors">
                    0090 532 273 07 08
                  </p>
                  <p className="text-[10px] text-emerald-500/80 font-mono mt-0.5">
                    Instant Messaging
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:info@magictulip.com"
                className="p-5 sm:p-6 bg-stone-950 border border-stone-800 rounded-2xl flex items-start space-x-4 hover:border-amber-500/20 hover:bg-stone-900/40 transition-all duration-300 shadow-sm group"
              >
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 flex-shrink-0 border border-amber-500/20 shadow-md group-hover:text-amber-300 group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-1">
                    {t.contactEmail}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-sans break-all font-medium group-hover:text-amber-400 transition-colors">
                    info@magictulip.com
                  </p>
                  <p className="text-[10px] text-stone-500 font-mono mt-0.5">
                    Email Support
                  </p>
                </div>
              </a>

              {/* Website Card */}
              <a 
                href="https://www.magictulip.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 sm:p-6 bg-stone-950 border border-stone-800 rounded-2xl flex items-start space-x-4 hover:border-amber-500/20 hover:bg-stone-900/40 transition-all duration-300 shadow-sm group"
              >
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 flex-shrink-0 border border-amber-500/20 shadow-md group-hover:text-amber-300 group-hover:bg-amber-500/20 transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-1">
                    Website
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-sans font-medium group-hover:text-amber-400 transition-colors">
                    www.magictulip.com
                  </p>
                  <p className="text-[10px] text-stone-500 font-mono mt-0.5">
                    Official Website
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a 
                href="https://www.instagram.com/magictuliphotels" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 sm:p-6 bg-stone-950 border border-stone-800 rounded-2xl flex items-start space-x-4 hover:border-pink-500/20 hover:bg-stone-900/40 transition-all duration-300 shadow-sm group"
              >
                <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400 flex-shrink-0 border border-pink-500/20 shadow-md group-hover:text-pink-300 group-hover:bg-pink-500/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-1">
                    Instagram
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-sans font-medium group-hover:text-pink-400 transition-colors">
                    @magictuliphotels
                  </p>
                  <p className="text-[10px] text-pink-500/80 font-mono mt-0.5">
                    Follow Our Story
                  </p>
                </div>
              </a>

              {/* YouTube Card */}
              <a 
                href="https://youtu.be/45ANdjSiczY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 sm:p-6 bg-stone-950 border border-stone-800 rounded-2xl flex items-start space-x-4 hover:border-red-500/20 hover:bg-stone-900/40 transition-all duration-300 shadow-sm group"
              >
                <div className="p-3 bg-red-500/10 rounded-xl text-red-400 flex-shrink-0 border border-red-500/20 shadow-md group-hover:text-red-300 group-hover:bg-red-500/20 transition-colors">
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-1">
                    YouTube
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-sans font-medium group-hover:text-red-400 transition-colors">
                    Magic Tulip Hotel Video
                  </p>
                  <p className="text-[10px] text-red-500/80 font-mono mt-0.5">
                    Watch Video Tour
                  </p>
                </div>
              </a>

              {/* Hours Card */}
              <div className="p-5 sm:p-6 bg-stone-950 border border-stone-800 rounded-2xl flex items-start space-x-4 hover:border-amber-500/20 transition-all duration-300 shadow-sm">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 flex-shrink-0 border border-amber-500/20 shadow-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-1">
                    {t.contactHours}
                  </h4>
                  <p className="text-xs text-stone-300 font-sans font-medium">
                    {t.contactHoursWeekdays}
                  </p>
                  <p className="text-xs text-stone-300 font-sans mt-0.5 font-medium">
                    {t.contactHoursWeekend}
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Vector Map Showcase */}
            <div className="bg-stone-950 border border-stone-850 rounded-3xl overflow-hidden h-72 relative shadow-2xl group">
              
              {/* Map grid simulation */}
              <div className="absolute inset-0 bg-stone-900/20 flex flex-wrap gap-1 p-2 opacity-40 pointer-events-none">
                {Array.from({ length: 80 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 border border-stone-900/30 rounded-sm" />
                ))}
              </div>

              {/* Stylized custom vector terrain map */}
              <div 
                className="absolute inset-0 transition-transform duration-500 flex items-center justify-center cursor-grab"
                style={{ transform: `scale(${zoomLevel * 0.5 + 0.5})` }}
              >
                {/* Coastal line vector illustration using simple shapes */}
                <div className="absolute w-[800px] h-[800px] rounded-full bg-stone-900/40 -top-64 -left-64 border border-stone-800/10" />
                {/* Sea body */}
                <div className="absolute w-[400px] h-[400px] rounded-full bg-stone-900 -bottom-32 -right-32 border border-stone-800/30" />
                {/* Beach sand */}
                <div className="absolute w-[420px] h-[420px] rounded-full border-4 border-amber-500/5 -bottom-40 -right-40" />

                {/* Major streets */}
                <div className="absolute h-1 bg-stone-900 w-[600px] rotate-[15deg]" />
                <div className="absolute h-1.5 bg-stone-900 w-[600px] -rotate-[35deg]" />
                <div className="absolute w-1 bg-stone-900 h-[600px] left-[40%]" />

                {/* Tulip field fields indicator */}
                <div className="absolute top-[20%] left-[15%] flex flex-col items-center">
                  <div className="w-16 h-7 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center text-[8px] font-mono font-bold text-amber-500 shadow-sm">
                    Tulip Field
                  </div>
                </div>

                <div className="absolute bottom-[35%] left-[25%] flex flex-col items-center">
                  <div className="w-20 h-7 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center text-[8px] font-mono font-bold text-amber-500 shadow-sm">
                    Ölüdeniz Beach
                  </div>
                </div>

                {/* Hotel Marker (Magic Tulip) */}
                <motion.div 
                  initial={{ y: -10 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute z-10 flex flex-col items-center"
                >
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 p-2.5 rounded-full shadow-2xl border-2 border-stone-950 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-stone-950 fill-stone-950/20" />
                  </div>
                  <div className="bg-stone-900 border border-amber-500/20 py-1 px-3 rounded-lg mt-2 text-[10px] font-mono font-bold uppercase tracking-widest shadow-md flex items-center space-x-1 text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>Magic Tulip</span>
                  </div>
                </motion.div>
              </div>

              {/* Map Floating Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-20">
                <button
                  id="map-zoom-in"
                  onClick={() => setZoomLevel(Math.min(zoomLevel + 1, 4))}
                  className="p-2.5 bg-stone-900 hover:bg-stone-850 text-stone-300 border border-stone-800 rounded-xl transition-all shadow-md hover:scale-105 cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  id="map-zoom-out"
                  onClick={() => setZoomLevel(Math.max(zoomLevel - 1, 1))}
                  className="p-2.5 bg-stone-900 hover:bg-stone-850 text-stone-300 border border-stone-800 rounded-xl transition-all shadow-md hover:scale-105 cursor-pointer"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>

              {/* Map Label badge top left */}
              <div className="absolute top-4 left-4 bg-stone-900/90 text-stone-400 border border-stone-800 py-1 px-3 rounded-xl text-[10px] font-mono uppercase tracking-widest flex items-center space-x-2 shadow-md">
                <Navigation className="w-3 h-3 text-amber-500 animate-pulse" />
                <span>Boutique Interactive Location</span>
              </div>
            </div>

          </div>

          {/* Column 2: Contact Form Card */}
          <div className="lg:col-span-6 bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-100 mb-6 flex items-center space-x-2 border-b border-stone-900 pb-4">
                <Send className="w-5 h-5 text-amber-500" />
                <span>
                  {currentLang === 'en' ? 'Send a Message' : 'Bize Ulaşın'}
                </span>
              </h3>

              <AnimatePresence mode="wait">
                {sentSuccess ? (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 bg-emerald-950/20 border border-emerald-800/30 text-emerald-400 rounded-2xl text-center py-16"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                    <h4 className="font-serif text-lg font-bold mb-2">
                      {currentLang === 'en' ? 'Message Received!' : 'Mesajınız Alındı!'}
                    </h4>
                    <p className="text-sm text-stone-300 leading-relaxed font-sans max-w-sm mx-auto">
                      {t.contactSuccess}
                    </p>
                  </motion.div>
                ) : (
                  <form id="contact-message-form" onSubmit={handleContactSubmit} className="space-y-4">
                    
                    {/* Grid inputs Name/Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-2">
                          {currentLang === 'en' ? 'Full Name' : 'Adınız Soyadınız'}
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-stone-900 border border-stone-850 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-2">
                          {currentLang === 'en' ? 'Email Address' : 'E-posta Adresi'}
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-stone-900 border border-stone-850 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Subject field */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-2">
                        {t.contactLabelSubject}
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-850 rounded-xl px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans text-sm"
                      />
                    </div>

                    {/* Message field */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-2">
                        {t.contactLabelMessage}
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-850 rounded-xl px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans text-sm resize-none"
                      />
                    </div>

                    {/* Send Message CTA */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-650 hover:to-amber-700 text-stone-950 font-extrabold uppercase tracking-widest text-xs rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-stone-950 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>{t.contactSubmit}</span>
                    </button>

                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
