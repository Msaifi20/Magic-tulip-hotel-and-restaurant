/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Language, BasketItem, MenuItem } from './types';
import { translations } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FoodMenu from './components/FoodMenu';
import DrinksMenu from './components/DrinksMenu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExploreMenuDrawer from './components/ExploreMenuDrawer';
import { playClickSound } from './utils/audio';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [view, setView] = useState<'home' | 'food' | 'drinks'>('home');
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Hook to handle tactile feedback (click and touch sounds) globally
  useEffect(() => {
    const handleGlobalInteraction = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      // Check if target or any parent element is interactive
      let currentEl: HTMLElement | null = target;
      let isInteractive = false;

      while (currentEl && currentEl !== document.body) {
        const tagName = currentEl.tagName?.toLowerCase();
        const role = currentEl.getAttribute('role');
        const hasCursorPointer = currentEl.classList?.contains('cursor-pointer');
        const hasOnClick = currentEl.getAttribute('onClick') || (currentEl as any).onclick;

        if (
          tagName === 'button' ||
          tagName === 'a' ||
          tagName === 'input' ||
          tagName === 'select' ||
          tagName === 'textarea' ||
          role === 'button' ||
          role === 'link' ||
          role === 'tab' ||
          hasCursorPointer ||
          hasOnClick ||
          currentEl.id?.includes('btn') ||
          currentEl.id?.includes('tab') ||
          currentEl.id?.includes('card') ||
          currentEl.id?.includes('item')
        ) {
          isInteractive = true;
          break;
        }
        currentEl = currentEl.parentElement;
      }

      if (isInteractive) {
        playClickSound();
      }
    };

    window.addEventListener('click', handleGlobalInteraction, { capture: true });
    return () => {
      window.removeEventListener('click', handleGlobalInteraction, { capture: true });
    };
  }, []);

  const t = translations[language];

  // Basket Handlers
  const addToBasket = (item: MenuItem) => {
    setBasket((prev) => {
      const existing = prev.find((bi) => bi.item.id === item.id);
      if (existing) {
        return prev.map((bi) =>
          bi.item.id === item.id ? { ...bi, quantity: bi.quantity + 1 } : bi
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeFromBasket = (itemId: string) => {
    setBasket((prev) => prev.filter((bi) => bi.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromBasket(itemId);
      return;
    }
    setBasket((prev) =>
      prev.map((bi) => (bi.item.id === itemId ? { ...bi, quantity } : bi))
    );
  };

  const clearBasket = () => {
    setBasket([]);
  };

  // Category Selector & Smooth Scroll
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsMenuDrawerOpen(false);

    // Determine if we should scroll to food or drinks section
    const isDrinkCategory = [
      'all_drinks',
      'soft_drinks',
      'hot_drinks',
      'local_drinks',
      'beer_list',
      'whiskies',
      'specials_drinks',
      'kids_cocktails',
      'important_drinks',
      'text_drinks',
      'cocktail_list',
      'cocktails',
      'wines',
      'refreshers'
    ].includes(categoryId);
    const targetId = isDrinkCategory ? 'drinks-menu' : 'food-menu';
    setView(isDrinkCategory ? 'drinks' : 'food');

    // Smooth scroll down to target section
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  const handleExploreMenu = () => {
    setIsMenuDrawerOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-500 selection:bg-amber-500 selection:text-white animate-fade-in ${
      theme === 'dark' ? 'bg-stone-950 text-stone-200 dark' : 'bg-stone-50 text-stone-800 light'
    }`}>
      {/* Top Header / Nav bar with Integrated Shopping Basket */}
      <Header
        currentLang={language}
        t={t}
        onLanguageChange={setLanguage}
        onExploreMenu={handleExploreMenu}
        basket={basket}
        onRemoveFromBasket={removeFromBasket}
        onUpdateQuantity={updateQuantity}
        onClearBasket={clearBasket}
        onSelectCategory={handleSelectCategory}
        onSelectView={setView}
        theme={theme}
        onThemeToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      />

      <main id="app-main">
        {view === 'home' && (
          <>
            {/* Full screen Hero section */}
            <Hero
              t={t}
              onExploreMenu={handleExploreMenu}
            />

            {/* About Us/Story section with custom user photos */}
            <About />

            {/* Contact Us, Maps & Info Section */}
            <Contact
              currentLang={language}
              t={t}
            />
          </>
        )}

        {view === 'food' && (
          <div className="pt-28 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => {
                  setView('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-stone-900 border border-white/15 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow"
              >
                <span>←</span>
                <span>{language === 'en' ? 'Back to Main Page' : 'Ana Sayfaya Dön'}</span>
              </button>
            </div>
            {/* Food Menu Section */}
            <FoodMenu
              currentLang={language}
              t={t}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              onAddToBasket={addToBasket}
              basket={basket}
            />
          </div>
        )}

        {view === 'drinks' && (
          <div className="pt-28 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => {
                  setView('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-stone-900 border border-white/15 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow"
              >
                <span>←</span>
                <span>{language === 'en' ? 'Back to Main Page' : 'Ana Sayfaya Dön'}</span>
              </button>
            </div>
            {/* Drinks & Cocktails Menu Section */}
            <DrinksMenu
              currentLang={language}
              t={t}
            />
          </div>
        )}
      </main>

      {/* Explore Menu Sliding Drawer with Category Click scroll integration */}
      <ExploreMenuDrawer
        isOpen={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
        currentLang={language}
        t={t}
        onSelectCategory={handleSelectCategory}
        onAddToBasket={addToBasket}
        basket={basket}
      />

      {/* Styled Footer */}
      <Footer t={t} />
    </div>
  );
}
