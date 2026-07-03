import { motion } from 'motion/react';
import { CalendarDays, Coffee, ArrowDown } from 'lucide-react';
import { Translation } from '../types';

interface HeroProps {
  t: Translation;
  onExploreMenu: () => void;
}

// Pre-generated static snowflakes configurations for ultra-smooth performance
const SNOWFLAKES = Array.from({ length: 45 }, (_, i) => {
  const size = Math.random() * 3.5 + 1.5; // size between 1.5px and 5px
  const isLeft = Math.random() > 0.5;
  return {
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${size}px`,
    delay: `${Math.random() * -12}s`, // start falling instantly
    duration: `${Math.random() * 7 + 6}s`, // fall speed between 6s and 13s
    opacity: Math.random() * 0.55 + 0.35, // nice soft visibility
    animationName: isLeft ? 'snowfall-left' : 'snowfall-right',
    filter: Math.random() > 0.8 ? 'blur(1px)' : 'none',
  };
});

export default function Hero({ t, onExploreMenu }: HeroProps) {
  const scrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = nextSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* Decorative neon light glows simulating a moody bar lounge */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container with Glassmorphism Framing */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Elegant Glassmorphic Center Card */}
        <div className="bg-stone-950/55 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden max-w-3xl mx-auto">
          {/* Subtle floral color leak inside the card */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Featured Courtyard Picture as elegant landscape banner inside the card */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden border-b border-white/10">
            <img
              src="https://lh3.googleusercontent.com/d/1MKGvyTtfcyScnJ5hD_NDXkTiqz0jjrL_"
              alt="Magic Tulip Garden Courtyard"
              className="w-full h-full object-cover scale-100 hover:scale-[1.02] transition-transform duration-700 filter brightness-95"
              referrerPolicy="no-referrer"
            />
            {/* Soft designer gradient over the picture bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Card Text Content */}
          <div className="p-6 sm:p-12 text-center text-white relative z-10">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-400/30 px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                {t.heroSubtitle}
              </span>
            </motion.div>

            {/* Title with beautiful snow falling effect */}
            <div className="relative inline-block overflow-hidden py-2 px-4 sm:py-3 sm:px-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] mb-4 max-w-full mx-auto">
              {/* Inject beautiful customized snow style */}
              <style>{`
                @keyframes snowfall-left {
                  0% {
                    top: -20px;
                    transform: translateX(0);
                  }
                  50% {
                    transform: translateX(-15px);
                  }
                  100% {
                    top: 110%;
                    transform: translateX(-30px);
                  }
                }

                @keyframes snowfall-right {
                  0% {
                    top: -20px;
                    transform: translateX(0);
                  }
                  50% {
                    transform: translateX(15px);
                  }
                  100% {
                    top: 110%;
                    transform: translateX(30px);
                  }
                }

                .snowflake-particle {
                  position: absolute;
                  background: white;
                  border-radius: 50%;
                  pointer-events: none;
                  box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
                  will-change: transform, top;
                }
              `}</style>

              {/* Snow overlay layer */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
                {SNOWFLAKES.map((flake) => (
                  <div
                    key={flake.id}
                    className="snowflake-particle"
                    style={{
                      left: flake.left,
                      width: flake.size,
                      height: flake.size,
                      opacity: flake.opacity,
                      animation: `${flake.animationName} ${flake.duration} linear infinite`,
                      animationDelay: flake.delay,
                      filter: flake.filter,
                    }}
                  />
                ))}
              </div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-2xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight relative z-20 break-words leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-amber-200">
                  {t.heroTitle}
                </span>
              </motion.h1>
            </div>

            {/* Divider with beautiful gold/amber dot */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-3 mx-auto mb-6"
            >
              <div className="h-[1px] bg-amber-500/60 flex-grow max-w-12 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-sm shadow-fuchsia-500" />
              <div className="h-[1px] bg-amber-500/60 flex-grow max-w-12 rounded-full" />
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg font-light text-stone-200 max-w-2xl mx-auto mb-6 leading-relaxed font-sans"
            >
              {t.aboutSubtitle}
            </motion.p>

            {/* Hotel Customer 5% Discount Note */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-10 max-w-md mx-auto px-5 py-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-md shadow-sm flex items-center justify-center space-x-3"
            >
              <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <p className="text-xs sm:text-sm font-medium text-amber-300/90 tracking-wide font-sans">
                {t.hotelDiscount}
              </p>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-extrabold rounded-full uppercase tracking-widest text-xs shadow-lg hover:shadow-xl hover:shadow-amber-900/20 transition-all duration-300 flex items-center justify-center space-x-2.5 group hover:scale-[1.02] cursor-pointer"
              >
                <Coffee className="w-4 h-4 text-stone-950 group-hover:rotate-12 transition-transform" />
                <span>{t.heroBtnMenu}</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating indicator */}
      <motion.button
        id="hero-scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 p-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-full text-white/70 hover:text-white transition-all cursor-pointer hidden lg:block"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
