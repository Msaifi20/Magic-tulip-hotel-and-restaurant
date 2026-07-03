import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, Flower2, ShoppingBasket, Trash2, Minus, Plus, Sun, Moon } from 'lucide-react';
import { Language, Translation, BasketItem } from '../types';
import LanguageSelector from './LanguageSelector';

const getCategoryLogoSymbol = (category: string) => {
  switch (category) {
    case 'breakfast': return '🍳';
    case 'omelette': return '🥚';
    case 'lunch_burger': return '🍔';
    case 'sandwiches_toast': return '🥪';
    case 'wraps': return '🌯';
    case 'jacket_potato': return '🥔';
    case 'pizza': return '🍕';
    case 'spaghetti_pasta': return '🍝';
    case 'vegetable_dishes': return '🥗';
    case 'hot_starters': return '🍟';
    case 'cold_starters': return '🥣';
    case 'chicken_dishes': return '🍗';
    case 'meat_dishes': return '🥩';
    case 'salads': return '🌿';
    case 'seafood_dishes': return '🐟';
    case 'kids_menu': return '🧸';
    case 'specials': return '👑';
    case 'desserts': return '🍰';
    // Drinks:
    case 'cocktails': return '🍹';
    case 'wines': return '🍷';
    case 'refreshers': return '🥤';
    default: return '🍽️';
  }
};

interface HeaderProps {
  currentLang: Language;
  t: Translation;
  onLanguageChange: (lang: Language) => void;
  onExploreMenu: () => void;
  basket: BasketItem[];
  onRemoveFromBasket: (itemId: string) => void;
  onUpdateQuantity: (itemId: string, qty: number) => void;
  onClearBasket: () => void;
  onSelectCategory: (catId: string) => void;
  onSelectView?: (view: 'home' | 'food' | 'drinks') => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export default function Header({
  currentLang,
  t,
  onLanguageChange,
  onExploreMenu,
  basket,
  onRemoveFromBasket,
  onUpdateQuantity,
  onClearBasket,
  onSelectCategory,
  onSelectView,
  theme,
  onThemeToggle,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
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

  interface HeaderMenuItem {
    label: string;
    target: string;
    isAction: boolean;
    type: string;
    catId?: string;
  }

  const menuItems: HeaderMenuItem[] = [
    { label: t.navHome, target: 'hero', isAction: false, type: 'scroll' },
    { label: t.navAbout, target: 'about', isAction: false, type: 'scroll' },
    { label: currentLang === 'en' ? 'Explore Menu' : 'Menüyü Keşfet', target: 'explore', isAction: true, type: 'action' },
    { label: t.navContact, target: 'contact', isAction: false, type: 'scroll' },
  ];

  const handleNavClick = (item: HeaderMenuItem) => {
    setIsMobileMenuOpen(false);
    if (item.type === 'action') {
      onExploreMenu();
    } else if (item.type === 'category' && onSelectCategory) {
      onSelectCategory(item.catId || 'all');
    } else {
      if (item.target === 'hero') {
        if (onSelectView) onSelectView('home');
        setTimeout(() => scrollToSection('hero'), 50);
      } else if (item.target === 'about') {
        if (onSelectView) onSelectView('home');
        setTimeout(() => scrollToSection('about'), 50);
      } else if (item.target === 'contact') {
        if (onSelectView) onSelectView('home');
        setTimeout(() => scrollToSection('contact'), 50);
      } else {
        scrollToSection(item.target);
      }
    }
  };

  // Total quantity calculation
  const totalItemsCount = basket.reduce((sum, item) => sum + item.quantity, 0);

  // Group total calculation by currency
  const calculateTotal = () => {
    const totals: Record<string, number> = {};
    basket.forEach((bi) => {
      const cur = bi.item.currency || 'TL';
      totals[cur] = (totals[cur] || 0) + bi.item.price * bi.quantity;
    });

    return Object.entries(totals).map(([cur, amount]) => {
      if (cur === 'GBP') return `£${amount.toFixed(2)}`;
      if (cur === 'USD') return `$${amount.toFixed(2)}`;
      return `₺${amount}`;
    }).join(' + ') || (currentLang === 'en' ? '₺0' : '₺0');
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          theme === 'dark'
            ? isScrolled || isBasketOpen
              ? 'bg-stone-900/95 backdrop-blur-md shadow-xl py-4 text-white border-b border-stone-800'
              : 'bg-stone-950/40 backdrop-blur-[2px] py-6 text-white'
            : isScrolled || isBasketOpen
              ? 'bg-white/95 backdrop-blur-md shadow-md py-4 text-stone-900 border-b border-stone-200'
              : 'bg-stone-100/70 backdrop-blur-[2px] py-6 text-stone-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            id="logo-btn"
            onClick={() => {
              if (onSelectView) onSelectView('home');
              setTimeout(() => scrollToSection('hero'), 50);
            }}
            className="flex items-center space-x-2 focus:outline-none group cursor-pointer text-left"
          >
            <Flower2 className="h-8 w-8 text-amber-500 transition-colors duration-300 group-hover:text-amber-400" />
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none text-amber-500">
                Magic Tulip
              </span>
              <span className={`block text-[10px] uppercase tracking-[0.25em] font-mono mt-0.5 ${
                theme === 'dark' ? 'text-stone-400' : 'text-stone-600'
              }`}>
                Hotel & Restaurant
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <ul className="flex items-center space-x-6 text-sm font-medium tracking-wide">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <button
                    id={`nav-item-${item.target}`}
                    onClick={() => handleNavClick(item)}
                    className={`transition-colors duration-300 relative py-1 focus:outline-none group cursor-pointer ${
                      theme === 'dark'
                        ? 'text-stone-300 hover:text-amber-400'
                        : 'text-stone-700 hover:text-amber-600'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <LanguageSelector
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
              darkBg={theme === 'dark'}
            />

            {/* Theme Toggle Button */}
            <button
              id="desktop-theme-toggle"
              onClick={onThemeToggle}
              className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                theme === 'dark'
                  ? 'bg-stone-850/80 border-stone-850 text-amber-400 hover:text-amber-300 hover:border-stone-700'
                  : 'bg-stone-100 border-stone-200 text-stone-700 hover:text-amber-600 hover:border-stone-300'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* INTEGRATED GOURMET BASKET ICON BUTTON */}
            <button
              id="header-basket-btn"
              onClick={() => setIsBasketOpen(true)}
              className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer relative ${
                totalItemsCount > 0
                  ? 'bg-amber-500 border-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400'
                  : theme === 'dark'
                    ? 'bg-stone-850/80 border-stone-800 text-stone-300 hover:text-white hover:border-stone-700'
                    : 'bg-stone-100 border-stone-200 text-stone-700 hover:text-stone-950 hover:border-stone-300'
              }`}
            >
              <ShoppingBasket className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <span className="font-mono text-xs font-black px-1.5 py-0.5 bg-stone-950 text-amber-400 rounded-full leading-none">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* View Menu Button */}
            <button
              id="header-book-btn"
              onClick={onExploreMenu}
              className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 cursor-pointer bg-amber-500 hover:bg-amber-600 text-stone-950 hover:shadow"
            >
              {t.heroBtnMenu}
            </button>
          </nav>

          {/* Mobile Hamburguer button with Basket on Mobile */}
          <div className="flex items-center lg:hidden space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              id="mobile-theme-toggle"
              onClick={onThemeToggle}
              className={`p-2 rounded-full border transition flex items-center justify-center cursor-pointer ${
                theme === 'dark'
                  ? 'bg-stone-850/80 border-stone-800 text-amber-400'
                  : 'bg-stone-100 border-stone-200 text-stone-700'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Basket Button for Mobile */}
            <button
              id="mobile-basket-btn"
              onClick={() => setIsBasketOpen(true)}
              className={`p-2 rounded-full border transition flex items-center justify-center relative ${
                totalItemsCount > 0
                  ? 'bg-amber-500 border-amber-500 text-stone-950'
                  : theme === 'dark'
                    ? 'bg-stone-850/80 border-stone-800 text-stone-300'
                    : 'bg-stone-100 border-stone-200 text-stone-700'
              }`}
            >
              <ShoppingBasket className="w-4.5 h-4.5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 font-mono text-[9px] font-black w-4.5 h-4.5 bg-stone-950 text-amber-400 rounded-full flex items-center justify-center leading-none">
                  {totalItemsCount}
                </span>
              )}
            </button>

            <LanguageSelector
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
              darkBg={theme === 'dark'}
            />

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none cursor-pointer ${
                theme === 'dark' ? 'text-white hover:text-amber-500' : 'text-stone-900 hover:text-amber-600'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-Over */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          >
            <motion.div
              id="mobile-menu-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-stone-900 shadow-2xl p-6 flex flex-col justify-between z-50 text-white border-l border-stone-850"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                  <div className="flex items-center space-x-2">
                    <Flower2 className="h-6 w-6 text-amber-500" />
                    <span className="font-serif text-lg font-bold text-amber-500">Magic Tulip</span>
                  </div>
                  <button
                    id="close-mobile-menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-stone-400 hover:text-amber-500"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="mt-8">
                  <ul className="space-y-4">
                    {menuItems.map((item, i) => (
                      <li key={i}>
                        <button
                          id={`mobile-nav-item-${item.target}`}
                          onClick={() => handleNavClick(item)}
                          className="block w-full text-left py-2 text-base font-medium text-stone-200 hover:text-amber-400 hover:bg-stone-850/50 px-3 rounded-lg transition-colors"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="mt-auto space-y-4 pt-6 border-t border-stone-800">
                <button
                  id="mobile-book-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onExploreMenu();
                  }}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-sm uppercase tracking-wider text-center shadow transition-all cursor-pointer"
                >
                  {t.heroBtnMenu}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gourmet Basket Sliding Drawer */}
      <AnimatePresence>
        {isBasketOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="basket-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBasketOpen(false)}
              className="fixed inset-0 bg-stone-950/85 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Panel */}
            <motion.div
              id="basket-drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-y-0 right-0 h-full w-full sm:max-w-md bg-stone-950 border-l border-stone-850 shadow-2xl z-50 text-white flex flex-col"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-stone-850 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <ShoppingBasket className="w-5 h-5 text-amber-500" />
                  <h4 className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                    {currentLang === 'en' ? 'Gourmet Basket' : 'Gurme Sepetiniz'}
                  </h4>
                </div>
                <div className="flex items-center space-x-4">
                  {basket.length > 0 && (
                    <button
                      id="clear-basket-btn"
                      onClick={onClearBasket}
                      className="text-xs uppercase font-mono tracking-wider text-stone-400 hover:text-red-400 cursor-pointer transition-colors"
                    >
                      {currentLang === 'en' ? 'Clear All' : 'Boşalt'}
                    </button>
                  )}
                  <button
                    id="close-basket-drawer"
                    onClick={() => setIsBasketOpen(false)}
                    className="p-1.5 rounded-lg border border-stone-800 text-stone-400 hover:text-white hover:border-stone-700 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Items list */}
              <div className="flex-grow overflow-y-auto p-5 sm:p-6 space-y-4 custom-scrollbar">
                {basket.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <span className="text-4xl">🍽️</span>
                    <p className="text-sm font-medium text-stone-300">
                      {currentLang === 'en'
                        ? 'Your basket is currently empty.'
                        : 'Sepetiniz şu anda boş.'}
                    </p>
                    <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                      {currentLang === 'en'
                        ? 'Browse the menu sections and add premium dishes to your basket!'
                        : 'Menü bölümlerini inceleyerek harika lezzetleri sepetinize ekleyebilirsiniz!'}
                    </p>
                    <button
                      id="basket-browse-menu-btn"
                      onClick={() => {
                        setIsBasketOpen(false);
                        onExploreMenu();
                      }}
                      className="mt-2 px-4 py-2 border border-amber-500/30 hover:border-amber-500/60 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
                    >
                      {currentLang === 'en' ? 'Browse Menu' : 'Menüyü İncele'}
                    </button>
                  </div>
                ) : (
                  basket.map((bi) => (
                    <div
                      key={bi.item.id}
                      className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-stone-900/20 border border-stone-850 hover:bg-stone-900/40 hover:border-amber-500/10 transition-all group relative overflow-hidden"
                    >
                      {/* Visual watermark/logo replacing image */}
                      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-stone-950 border border-stone-850 flex flex-col items-center justify-center p-1 relative">
                        <span className="text-xl z-10 select-none">
                          {getCategoryLogoSymbol(bi.item.category)}
                        </span>
                        <span className="text-[5px] font-mono tracking-widest text-stone-500 uppercase mt-0.5 select-none">
                          {bi.item.type === 'food' ? 'Kitchen' : 'Bar'}
                        </span>
                      </div>

                      <div className="flex-grow min-w-0">
                        <h5 className="text-xs sm:text-sm font-serif font-bold text-stone-200 truncate group-hover:text-amber-400 transition-colors">
                          {bi.item.name[currentLang]}
                        </h5>
                        <p className="font-mono text-xs text-amber-500 mt-1">
                          {bi.item.price > 0 ? (
                            bi.item.currency === 'GBP'
                              ? `£${bi.item.price.toFixed(2)}`
                              : bi.item.currency === 'TL' || bi.item.currency === 'TRY'
                                ? `₺${bi.item.price}`
                                : `$${bi.item.price.toFixed(2)}`
                          ) : (
                            currentLang === 'en' ? 'Price on request' : 'Fiyat sorunuz'
                          )}
                        </p>
                      </div>

                      {/* Actions: Minus / Plus / Trash */}
                      <div className="flex items-center space-x-3 flex-shrink-0">
                        <div className="flex items-center bg-stone-950 border border-stone-850 rounded-xl p-0.5">
                          <button
                            id={`basket-qty-minus-${bi.item.id}`}
                            onClick={() => onUpdateQuantity(bi.item.id, bi.quantity - 1)}
                            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-900 transition cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-bold px-2 sm:px-2.5">
                            {bi.quantity}
                          </span>
                          <button
                            id={`basket-qty-plus-${bi.item.id}`}
                            onClick={() => onUpdateQuantity(bi.item.id, bi.quantity + 1)}
                            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-900 transition cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          id={`basket-item-remove-${bi.item.id}`}
                          onClick={() => onRemoveFromBasket(bi.item.id)}
                          className="p-2 bg-stone-950 hover:bg-red-500/15 hover:text-red-400 text-stone-500 rounded-xl border border-stone-850 hover:border-red-500/20 transition cursor-pointer"
                          title={currentLang === 'en' ? 'Remove' : 'Çıkar'}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Area */}
              {basket.length > 0 && (
                <div className="p-5 sm:p-6 border-t border-stone-850 bg-stone-950/80 space-y-4">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-stone-400 text-xs sm:text-sm">
                      {currentLang === 'en' ? 'Subtotal' : 'Ara Toplam'}
                    </span>
                    <span className="text-amber-400 font-bold text-sm sm:text-base">
                      {calculateTotal()}
                    </span>
                  </div>
                  
                  <button
                    id="basket-checkout-btn"
                    onClick={() => {
                      alert(currentLang === 'en' 
                        ? `Order received! We are preparing your delicacies. Total: ${calculateTotal()}`
                        : `Siparişiniz alındı! Enfes lezzetleriniz hazırlanıyor. Toplam: ${calculateTotal()}`
                      );
                      onClearBasket();
                      setIsBasketOpen(false);
                    }}
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded-xl text-xs sm:text-sm uppercase tracking-wider transition text-center cursor-pointer shadow-lg shadow-amber-500/10 border border-amber-500/20"
                  >
                    {currentLang === 'en' ? 'Place Gourmet Order' : 'Sipariş Ver'}
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
