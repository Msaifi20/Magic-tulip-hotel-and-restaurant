import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wine, Sparkles, Flame, Percent, Info, X, Compass, GlassWater } from 'lucide-react';
import { Language, Translation, MenuItem } from '../types';
import { menuItems } from '../data';

interface DrinksMenuProps {
  currentLang: Language;
  t: Translation;
}

export default function DrinksMenu({ currentLang, t }: DrinksMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDrink, setSelectedDrink] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: t.drinksTabAll },
    { id: 'soft_drinks', label: t.drinksTabSoftDrinks },
    { id: 'hot_drinks', label: t.drinksTabHotDrinks },
    { id: 'local_drinks', label: t.drinksTabLocalDrinks },
    { id: 'beer_list', label: t.drinksTabBeerList },
    { id: 'whiskies', label: t.drinksTabWhiskies },
    { id: 'specials_drinks', label: t.drinksTabSpecials },
    { id: 'kids_cocktails', label: t.drinksTabKidsCocktails },
    { id: 'important_drinks', label: t.drinksTabImportantDrinks },
    { id: 'cocktail_list', label: t.drinksTabCocktailList },
  ] as const;

  const drinkItems = menuItems.filter(item => item.type === 'drink');

  const filteredItems = drinkItems.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  return (
    <section id="drinks-menu" className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Visual neon light glows simulating a moody bar lounge */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase block mb-3 font-bold">
            {t.drinksTitle}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white mb-6">
            {t.drinksSubtitle}
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-2xl mx-auto bg-stone-900/40 p-2.5 rounded-full border border-stone-850 shadow-inner">
          {categories.map((cat) => (
            <button
              id={`drinks-tab-${cat.id}`}
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-stone-950 shadow-md shadow-amber-600/10'
                  : 'bg-transparent text-stone-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Custom Interactive Mixologist Highlight widget */}
        <div className="mb-16 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-amber-500/10 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-amber-500/5 pointer-events-none">
            <Wine className="w-48 h-48" />
          </div>
          <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center border border-stone-800 shadow-lg flex-shrink-0">
            <Compass className="w-8 h-8 text-amber-400 animate-spin-slow" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              {currentLang === 'en' ? "Mixologist's Palette Discovery" : "Miksolojist Keşif Paleti"}
            </h4>
            <p className="text-stone-300 text-sm leading-relaxed max-w-2xl">
              {currentLang === 'en'
                ? "Every libation on our menu tells a tale of terroir, using handpicked botanicals and premium local spirits. Filter by category, and click any glass to unveil its craft ingredients, ABV content, and sensory profile."
                : "Menümüzdeki her yudum bir yöre hikayesi anlatır. Özenle seçilmiş botanikler ve seçkin yerel alkoller kullanılır. Kategorileri filtreleyin ve bardakların üzerine tıklayarak içerik, alkol oranı ve lezzet detaylarını keşfedin."}
            </p>
          </div>
        </div>

        {/* Dynamic Drinks Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                id={`drink-card-${item.id}`}
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedDrink(item)}
                className="group bg-stone-900/40 hover:bg-stone-900/80 border border-stone-850 hover:border-amber-500/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                {/* Background accent glow on hover */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all duration-500" />

                {/* Top strip: Category Tag & ABV */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-stone-950 border border-stone-850 text-stone-400 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md">
                    {item.category === 'soft_drinks' && (currentLang === 'en' ? 'Soft Drink' : 'Alkolsüz İçecek')}
                    {item.category === 'hot_drinks' && (currentLang === 'en' ? 'Hot Drink' : 'Sıcak İçecek')}
                    {item.category === 'local_drinks' && (currentLang === 'en' ? 'Local Heritage' : 'Yöresel Lezzet')}
                    {item.category === 'beer_list' && (currentLang === 'en' ? 'Premium Beer' : 'Premium Bira')}
                    {item.category === 'whiskies' && (currentLang === 'en' ? 'Fine Whisky' : 'Seçkin Viski')}
                    {item.category === 'specials_drinks' && (currentLang === 'en' ? 'Specials' : 'Özellerimiz')}
                    {item.category === 'kids_cocktails' && (currentLang === 'en' ? 'Kids Cocktail' : 'Çocuk Kokteyli')}
                    {item.category === 'important_drinks' && (currentLang === 'en' ? 'Important Drink' : 'Önemli İçecek')}
                    {item.category === 'cocktail_list' && (currentLang === 'en' ? 'Craft Cocktail' : 'Tasarım Kokteyl')}
                  </span>
                  
                  {item.alcoholByVolume && (
                    <span className="flex items-center space-x-1 font-mono text-[10px] text-amber-400">
                      <Percent className="w-3 h-3 text-amber-500/60" />
                      <span>{item.alcoholByVolume} ABV</span>
                    </span>
                  )}
                </div>

                {/* Center Item Info */}
                <div className="mb-6 flex gap-4">
                  {/* Small round photo avatar */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border border-stone-800">
                    <img
                      src={item.image}
                      alt={item.name[currentLang]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-100 group-hover:text-amber-400 transition-colors line-clamp-1">
                      {item.name[currentLang]}
                    </h3>
                    {(item.category === 'cocktail_list' || item.category === 'kids_cocktails') && item.ingredients && (
                      <p className="text-[11.5px] font-mono font-medium text-amber-500/85 mt-1 mb-1 leading-snug tracking-wide">
                        ({item.ingredients.map(ing => ing[currentLang]).join(', ')})
                      </p>
                    )}
                    <span className="text-xl font-mono font-bold text-amber-500 block mb-2">
                      {item.price > 0 ? (
                        item.currency === 'GBP'
                          ? `£${item.price.toFixed(2)}`
                          : item.currency === 'TL' || item.currency === 'TRY'
                            ? `₺${item.price}`
                            : `$${item.price.toFixed(2)}`
                      ) : (
                        currentLang === 'en' ? 'Price on request' : 'Fiyat sorunuz'
                      )}
                    </span>
                    <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed">
                      {item.description[currentLang]}
                    </p>
                  </div>
                </div>

                {/* Bottom section: Ingredients snippet & View Action */}
                <div className="pt-4 border-t border-stone-950 flex items-center justify-between">
                  <div className="flex gap-1">
                    {item.isChefSpecial && (
                      <span className="inline-flex items-center space-x-1 bg-stone-950 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded text-[8px] uppercase tracking-wider font-bold">
                        <Sparkles className="w-2.5 h-2.5 fill-amber-500/20" />
                        <span>Sign</span>
                      </span>
                    )}
                    {item.tags?.slice(0, 1).map((tag, tIdx) => (
                      <span key={tIdx} className="bg-stone-950 text-stone-400 text-[8px] uppercase font-mono px-2 py-0.5 rounded border border-stone-850">
                        {tag[currentLang]}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10px] text-amber-500 group-hover:text-amber-400 font-mono tracking-wider flex items-center space-x-1 font-bold">
                    <span>{currentLang === 'en' ? 'EXPLORE' : 'KEŞFET'}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Drink Detail Drawer / Modal */}
      <AnimatePresence>
        {selectedDrink && (
          <motion.div
            id="drink-detail-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              id="drink-detail-card"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-stone-950 border border-stone-800 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden text-stone-100"
            >
              {/* Product Large Photo Banner */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedDrink.image}
                  alt={selectedDrink.name[currentLang]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                {/* Close Button */}
                <button
                  id="close-drink-details"
                  onClick={() => setSelectedDrink(null)}
                  className="absolute top-4 right-4 p-2 bg-stone-900/80 hover:bg-red-500 text-stone-400 hover:text-white rounded-full transition-all shadow-md cursor-pointer border border-stone-800"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Category Badge overlay */}
                <div className="absolute bottom-4 left-6 bg-stone-900 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest flex items-center space-x-1.5 shadow-md border border-stone-800">
                  <GlassWater className="w-4 h-4 text-amber-500" />
                  <span>
                    {selectedDrink.category === 'soft_drinks' && (currentLang === 'en' ? 'Soft Drink' : 'Alkolsüz İçecek')}
                    {selectedDrink.category === 'hot_drinks' && (currentLang === 'en' ? 'Hot Drink' : 'Sıcak İçecek')}
                    {selectedDrink.category === 'local_drinks' && (currentLang === 'en' ? 'Local Drink' : 'Yerel İçecek')}
                    {selectedDrink.category === 'beer_list' && (currentLang === 'en' ? 'Beer List' : 'Bira Listesi')}
                    {selectedDrink.category === 'whiskies' && (currentLang === 'en' ? 'Whisky' : 'Viski')}
                    {selectedDrink.category === 'specials_drinks' && (currentLang === 'en' ? 'Specials' : 'Özel İçecek')}
                    {selectedDrink.category === 'kids_cocktails' && (currentLang === 'en' ? 'Kids Cocktail' : 'Çocuk Kokteyli')}
                    {selectedDrink.category === 'important_drinks' && (currentLang === 'en' ? 'Important Drink' : 'Seçkin İçecek')}
                    {selectedDrink.category === 'cocktail_list' && (currentLang === 'en' ? 'Cocktail' : 'Kokteyl')}
                  </span>
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-8 space-y-6">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                        {selectedDrink.name[currentLang]}
                      </h3>
                      {(selectedDrink.category === 'cocktail_list' || selectedDrink.category === 'kids_cocktails') && selectedDrink.ingredients && (
                        <p className="text-[13px] font-mono font-medium text-amber-500/85 mt-1.5 leading-snug tracking-wide">
                          ({selectedDrink.ingredients.map(ing => ing[currentLang]).join(', ')})
                        </p>
                      )}
                    </div>
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-500 whitespace-nowrap">
                      {selectedDrink.price > 0 ? (
                        selectedDrink.currency === 'GBP'
                          ? `£${selectedDrink.price.toFixed(2)}`
                          : selectedDrink.currency === 'TL' || selectedDrink.currency === 'TRY'
                            ? `₺${selectedDrink.price}`
                            : `$${selectedDrink.price.toFixed(2)}`
                      ) : (
                        currentLang === 'en' ? 'Price on request' : 'Fiyat sorunuz'
                      )}
                    </span>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed font-sans">
                    {selectedDrink.description[currentLang]}
                  </p>
                </div>

                {/* Technical specs / ABV & Calories */}
                {(selectedDrink.alcoholByVolume || selectedDrink.calories) && (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-stone-500 text-xs font-mono border-t border-b border-stone-900 py-3">
                    {selectedDrink.alcoholByVolume && (
                      <span className="flex items-center space-x-1 text-amber-400">
                        <Percent className="w-3.5 h-3.5 text-amber-500/60" />
                        <span>{selectedDrink.alcoholByVolume} Alcohol by Volume</span>
                      </span>
                    )}
                    {selectedDrink.alcoholByVolume && selectedDrink.calories && (
                      <span className="text-stone-700">•</span>
                    )}
                    {selectedDrink.calories && (
                      <span>{selectedDrink.calories} kcal</span>
                    )}
                  </div>
                )}

                {/* Botanical/Craft Ingredients list */}
                {selectedDrink.ingredients && selectedDrink.ingredients.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-mono text-amber-400 font-bold mb-3 flex items-center space-x-2">
                      <Info className="w-4 h-4 text-amber-500" />
                      <span>{currentLang === 'en' ? 'Craft Components' : 'Komponent Detayları'}</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedDrink.ingredients.map((ing, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-stone-300">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                          <span>{ing[currentLang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Custom Pairings Widget */}
                <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-850 text-[11px] text-stone-500 leading-relaxed font-sans flex items-start space-x-3">
                  <span className="text-amber-500 font-extrabold text-sm leading-none">⚡</span>
                  <p>
                    {currentLang === 'en' 
                      ? "Mixologist's Tip: Let our hosts recommend the ideal savory pairing from 'The Kitchen' menu to complement the notes of this specific beverage." 
                      : "Barmen Tavsiyesi: Bu içeceğin aroma notalarını kusursuz biçimde tamamlayacak, 'Mutfak' menümüzden en ideal eşleşme için servis ekibimize danışın."}
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
