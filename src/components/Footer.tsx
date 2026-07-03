import React from 'react';
import { Flower2, Mail, Instagram, Youtube, Globe, MessageCircle } from 'lucide-react';
import { Translation } from '../types';

interface FooterProps {
  t: Translation;
}

export default function Footer({ t }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="footer" className="bg-stone-950 text-white pt-20 pb-10 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-900">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-5 space-y-6">
            <button
              id="footer-logo-btn"
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 focus:outline-none group text-left"
            >
              <Flower2 className="h-8 w-8 text-rose-500 group-hover:text-rose-400 transition-colors" />
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white">
                  Magic Tulip
                </span>
                <span className="block text-[10px] uppercase tracking-[0.25em] font-mono text-rose-500 mt-0.5">
                  Gourmet Kitchen & Bar
                </span>
              </div>
            </button>
            <p className="text-stone-400 text-sm leading-relaxed font-sans max-w-sm">
              {t.footerDesc}
            </p>
            {/* Social icons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                id="social-instagram"
                href="https://www.instagram.com/magictuliphotels"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="p-3 bg-stone-900 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-amber-500 hover:text-stone-950 text-stone-400 rounded-xl transition-all shadow duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="social-youtube"
                href="https://youtu.be/45ANdjSiczY"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="p-3 bg-stone-900 hover:bg-red-650 hover:text-stone-950 text-stone-400 rounded-xl transition-all shadow duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="social-whatsapp"
                href="https://wa.me/905322730708"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="p-3 bg-stone-900 hover:bg-emerald-600 hover:text-stone-950 text-stone-400 rounded-xl transition-all shadow duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                id="social-website"
                href="https://www.magictulip.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Website"
                className="p-3 bg-stone-900 hover:bg-amber-600 hover:text-stone-950 text-stone-400 rounded-xl transition-all shadow duration-300"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                id="social-email"
                href="mailto:info@magictulip.com"
                title="Email"
                className="p-3 bg-stone-900 hover:bg-amber-600 hover:text-stone-950 text-stone-400 rounded-xl transition-all shadow duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-300 font-mono">
              {t.footerQuickLinks}
            </h4>
            <ul className="space-y-3 text-sm text-stone-400 font-medium">
              {[
                { id: 'hero', label: t.navHome },
                { id: 'food-menu', label: t.navFood },
                { id: 'drinks-menu', label: t.navDrinks },
                { id: 'contact', label: t.navContact },
              ].map((sect) => (
                <li key={sect.id}>
                  <button
                    id={`footer-link-${sect.id}`}
                    onClick={() => scrollToSection(sect.id)}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    {sect.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Dining Hours */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-300 font-mono">
              {t.footerHours}
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex justify-between border-b border-stone-900 pb-2">
                <span>Breakfast (Kahvaltı)</span>
                <span className="text-amber-500 font-mono">08:00 - 10:00</span>
              </li>
              <li className="flex justify-between border-b border-stone-900 pb-2">
                <span>Kitchen (Mutfak)</span>
                <span className="text-amber-500 font-mono">08:00 - 22:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center pt-8 text-xs text-stone-500 font-mono text-center">
          <p>© {new Date().getFullYear()} Magic Tulip Gourmet Kitchen & Bar. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
