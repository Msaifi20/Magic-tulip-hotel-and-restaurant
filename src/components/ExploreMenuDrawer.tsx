import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Utensils, 
  Wine, 
  Clock,
  Plus,
  Check,
  ShoppingBasket,
  ChevronLeft,
  Flame,
  Leaf,
  Info,
  ArrowRight
} from 'lucide-react';
import { Language, Translation, MenuItem, BasketItem } from '../types';
import { menuItems } from '../data';
import DancingChef from './DancingChef';

const FOOD_CATEGORIES = [
  { id: 'all_food', name: { en: 'All Foods', tr: 'Tüm Yemekler' }, desc: { en: 'Our entire collection of culinary masterpieces.', tr: 'Mutfak şaheserlerimizin tüm koleksiyonu.' }, icon: '🍽️' },
  { id: 'breakfast', name: { en: 'Breakfast', tr: 'Kahvaltı' }, desc: { en: 'Traditional morning spreads and premium bakeries.', tr: 'Geleneksel serpme sabah lezzetleri.' }, icon: '🍳' },
  { id: 'omelette', name: { en: 'Omelette', tr: 'Omletler' }, desc: { en: 'Fluffy, freshly whipped organic egg creations.', tr: 'Taze çırpılmış organik yumurtalı omletler.' }, icon: '🥚' },
  { id: 'lunch_burger', name: { en: 'Lunch Burger', tr: 'Öğle Burgeri' }, desc: { en: 'Flame-grilled prime beef with artisan brioche.', tr: 'Ateş ızgarasında pişmiş özel burgerler.' }, icon: '🍔' },
  { id: 'sandwiches_toast', name: { en: 'Sandwiches & Toast', tr: 'Sandviç & Tost' }, desc: { en: 'Toasted local sourdoughs and fresh fillings.', tr: 'Ekşi mayalı çıtır tost ve sandviçler.' }, icon: '🥪' },
  { id: 'wraps', name: { en: 'Wraps', tr: 'Dürümler' }, desc: { en: 'Lavash rolls packed with fresh meats and greens.', tr: 'Taze yeşillik ve etlerle hazırlanmış dürümler.' }, icon: '🌯' },
  { id: 'jacket_potato', name: { en: 'Jacket Potato', tr: 'Kumpir' }, desc: { en: 'Giant baked potatoes loaded with delicious toppings.', tr: 'Fırınlanmış dev kumpirler.' }, icon: '🥔' },
  { id: 'pizza', name: { en: 'Pizza', tr: 'Pizzalar' }, desc: { en: 'Stone-baked thin crust sourdough pizzas.', tr: 'Taş fırında pişen ince hamurlu pizzalar.' }, icon: '🍕' },
  { id: 'spaghetti_pasta', name: { en: 'Spaghetti & Pasta', tr: 'Makarna & Spagetti' }, desc: { en: 'House-made bronze-cut pasta tossed in rich sauces.', tr: 'Özel soslarla harmanlanmış ev yapımı makarnalar.' }, icon: '🍝' },
  { id: 'vegetable_dishes', name: { en: 'Vegetable Dishes', tr: 'Sebze Yemekleri' }, desc: { en: 'Nourishing, slow-simmered organic produce.', tr: 'Organik sebzelerle hazırlanan hafif tabaklar.' }, icon: '🥗' },
  { id: 'hot_starters', name: { en: 'Hot Starters', tr: 'Sıcak Başlangıçlar' }, desc: { en: 'Crispy, warm small plates to awaken the senses.', tr: 'Duyularınızı harekete geçirecek sıcak atıştırmalıklar.' }, icon: '🍟' },
  { id: 'cold_starters', name: { en: 'Cold Starters', tr: 'Soğuk Başlangıçlar' }, desc: { en: 'Classic Turkish meze spreads and chilled delicacies.', tr: 'Geleneksel Türk mezeleri ve soğuk başlangıçlar.' }, icon: '🥣' },
  { id: 'chicken_dishes', name: { en: 'Chicken Dishes', tr: 'Tavuk Yemekleri' }, desc: { en: 'Tender marinated poultry cooked over open coals.', tr: 'Özel marinasyonlu kömür ateşinde pişen tavuklar.' }, icon: '🍗' },
  { id: 'meat_dishes', name: { en: 'Meat Dishes', tr: 'Et Yemekleri' }, desc: { en: 'Served with rice, chips and salad. Prime cuts and traditional kebabs.', tr: 'Pilav, patates kızartması ve salata ile servis edilir. Seçkin etler ve kebaplar.' }, icon: '🥩' },
  { id: 'salads', name: { en: 'Salads', tr: 'Salatalar' }, desc: { en: 'Crisp handpicked garden greens with house vinaigrettes.', tr: 'Bahçemizden taze toplanmış çıtır salatalar.' }, icon: '🌿' },
  { id: 'seafood_dishes', name: { en: 'Sea Food Dishes', tr: 'Deniz Ürünleri' }, desc: { en: 'Served with chips and salad. Wild-caught fresh fish and delicious shellfish.', tr: 'Patates kızartması ve salata ile servis edilir. Taze deniz balıkları ve kabuklu deniz ürünleri.' }, icon: '🐟' },
  { id: 'kids_menu', name: { en: 'Kids Menu', tr: 'Çocuk Menüsü' }, desc: { en: 'Gentle, balanced bites made with pure love.', tr: 'Çocuklar için özenle hazırlanan lezzetli porsiyonlar.' }, icon: '🧸' },
  { id: 'specials', name: { en: 'Specials', tr: 'Özellerimiz' }, desc: { en: 'Served with rice, chips and salad. The ultimate culinary crown jewels of our chef.', tr: 'Pilav, patates kızartması ve salata ile servis edilir. Şefimizin en iddialı imza lezzetleri.' }, icon: '👑' },
  { id: 'desserts', name: { en: 'Desserts', tr: 'Tatlılar' }, desc: { en: 'Exquisite sweet endings and fine pastry creations.', tr: 'Zarif tatlı sonlar ve taze hamur işleri.' }, icon: '🍰' }
];

const DRINK_CATEGORIES = [
  { id: 'all_drinks', name: { en: 'All Drinks', tr: 'Tüm İçecekler' }, desc: { en: 'Our comprehensive collection of boutique beverages.', tr: 'Butik içeceklerimizin tamamı.' }, icon: '🥛' },
  { id: 'soft_drinks', name: { en: 'Soft Drinks', tr: 'Alkolsüz İçecekler' }, desc: { en: 'Chilled sodas, gourmet tonics, and iced teas.', tr: 'Soğuk gazlı içecekler, gurme tonikler ve taze demlenmiş soğuk çaylar.' }, icon: '🥤' },
  { id: 'hot_drinks', name: { en: 'Hot Drinks', tr: 'Sıcak İçecekler' }, desc: { en: 'Aromatic espresso, organic herbal teas, and hot chocolate.', tr: 'Taze kavrulmuş sıcak kahveler ve demlenmiş bitki çayları.' }, icon: '☕' },
  { id: 'local_drinks', name: { en: 'Local Drinks', tr: 'Yerel İçecekler' }, desc: { en: 'Traditional regional favorites and heritage mocktails.', tr: 'Geleneksel lezzetler ve yöresel tazeleyici içecekler.' }, icon: '🥛' },
  { id: 'beer_list', name: { en: 'Beer List', tr: 'Bira Listesi' }, desc: { en: 'Crisp premium draft beers and curated local craft brews.', tr: 'Fıçı biralar ve özel yerel butik bira çeşitleri.' }, icon: '🍺' },
  { id: 'whiskies', name: { en: 'Whiskies', tr: 'Viskiler' }, desc: { en: 'Selected single malt and premium blended whiskies.', tr: 'Özel seçilmiş tek malt ve premium harman viskiler.' }, icon: '🥃' },
  { id: 'specials_drinks', name: { en: 'Specials', tr: 'Özel İçecekler' }, desc: { en: 'Our mixologists’ seasonal creations and limited-edition elixirs.', tr: 'Barmenlerimizin mevsimlik kreasyonları ve sınırlı üretim iksirleri.' }, icon: '✨' },
  { id: 'kids_cocktails', name: { en: 'Kids Cocktails', tr: 'Çocuk Kokteylleri' }, desc: { en: 'Colorful, sweet, fruit-driven mocktails for our young guests.', tr: 'Küçük misafirlerimiz için tatlı, meyve dolu ve renkli kokteyller.' }, icon: '🍭' },
  { id: 'important_drinks', name: { en: 'Important Drinks', tr: 'Seçkin İçecekler' }, desc: { en: 'Premium reserve spirits, fine cognac, and ultra-rare select liquors.', tr: 'Lüks rezerv içkiler, konyaklar ve nadir seçkin likörler.' }, icon: '👑' },
  { id: 'cocktail_list', name: { en: 'Cocktail List', tr: 'Kokteyl Listesi' }, desc: { en: 'A complete collection of handcrafted signature & classic cocktails.', tr: 'Tasarım imza kokteyller ve dünyaca ünlü klasik kokteyller.' }, icon: '🍹' },
];

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
    case 'soft_drinks': return '🥤';
    case 'hot_drinks': return '☕';
    case 'local_drinks': return '🥛';
    case 'beer_list': return '🍺';
    case 'whiskies': return '🥃';
    case 'specials_drinks': return '✨';
    case 'kids_cocktails': return '🍭';
    case 'important_drinks': return '👑';
    case 'cocktail_list': return '🍹';
    default: return '🍽️';
  }
};

interface ExploreMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  t: Translation;
  onSelectCategory: (catId: string) => void;
  onAddToBasket: (item: MenuItem) => void;
  basket: BasketItem[];
}

type StepState = 'root' | 'categories' | 'items';

export default function ExploreMenuDrawer({
  isOpen,
  onClose,
  currentLang,
  t,
  onSelectCategory,
  onAddToBasket,
  basket,
}: ExploreMenuDrawerProps) {
  // Navigation Steps State
  const [step, setStep] = useState<StepState>('root');
  const [selectedType, setSelectedType] = useState<'food' | 'drink' | null>(null);
  const [activeCatId, setActiveCatId] = useState<string | null>(null);

  const [addedItemFeedback, setAddedItemFeedback] = useState<Record<string, boolean>>({});

  // Reset helper when explorer is closed
  const handleCloseExplorer = () => {
    onClose();
    // Delayed reset to avoid sudden visual flickers during close transitions
    setTimeout(() => {
      setStep('root');
      setSelectedType(null);
      setActiveCatId(null);
    }, 300);
  };

  const getActiveCategoriesList = () => {
    const list = selectedType === 'food' ? FOOD_CATEGORIES : DRINK_CATEGORIES;
    return list.filter(cat => {
      if (cat.id === 'all_food' || cat.id === 'all_drinks') {
        return menuItems.some(item => item.type === selectedType);
      }
      return menuItems.some(item => item.category === cat.id);
    });
  };

  const getFilteredItems = () => {
    if (!selectedType || !activeCatId) return [];
    
    return menuItems.filter((item) => {
      // Filter by type (food/drink)
      if (item.type !== selectedType) return false;

      // Filter by subcategory unless it is 'all_food' or 'all_drinks'
      if (activeCatId === 'all_food' || activeCatId === 'all_drinks') {
        return true;
      }
      return item.category === activeCatId;
    });
  };

  const handleAddDirect = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToBasket(item);
    setAddedItemFeedback((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemFeedback((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const getItemQtyInBasket = (itemId: string) => {
    const found = basket.find((bi) => bi.item.id === itemId);
    return found ? found.quantity : 0;
  };

  const getTagIcon = (tagName: string) => {
    const name = tagName.toLowerCase();
    if (name.includes('spicy') || name.includes('acılı')) return <Flame className="w-3 h-3 text-red-500" />;
    if (name.includes('vegetarian') || name.includes('vejetaryen') || name.includes('vegan')) return <Leaf className="w-3 h-3 text-emerald-500" />;
    return <Sparkles className="w-3 h-3 text-amber-500" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="immersive-explorer-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-stone-950/98 backdrop-blur-xl flex flex-col text-white overflow-hidden"
        >
          {/* Subtle Back Glow decoration */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Persistent Sticky Top Header bar */}
          <header className="p-5 sm:p-6 border-b border-stone-900 flex items-center justify-between bg-stone-950/80 backdrop-blur-md relative z-20">
            <div className="flex items-center space-x-3.5">
              {step !== 'root' && (
                <button
                  id="explorer-back-btn"
                  onClick={() => {
                    if (step === 'items') {
                      setStep('categories');
                    } else if (step === 'categories') {
                      setStep('root');
                      setSelectedType(null);
                    }
                  }}
                  className="p-2 bg-stone-900 hover:bg-stone-850 hover:text-amber-500 border border-stone-800 rounded-xl transition cursor-pointer flex items-center justify-center"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide flex items-center gap-2">
                  <span className="text-amber-500 text-sm">🌷</span>
                  <span>{currentLang === 'en' ? 'Magic Tulip Explorer' : 'Magic Tulip Kaşifi'}</span>
                </h2>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest font-black">
                    {step === 'root' && (currentLang === 'en' ? 'Select Section' : 'Bölüm Seçin')}
                    {step === 'categories' && (selectedType === 'food' ? (currentLang === 'en' ? 'Food Categories' : 'Yemek Kategorileri') : (currentLang === 'en' ? 'Drink Categories' : 'İçecek Kategorileri'))}
                    {step === 'items' && (currentLang === 'en' ? 'Gourmet Selection' : 'Gurme Seçenekleri')}
                  </span>
                </div>
              </div>
            </div>

            {/* Close Button to return back to main hotel & restaurant page */}
            <button
              id="close-explorer-btn"
              onClick={handleCloseExplorer}
              className="p-2.5 bg-stone-900 hover:bg-red-500/20 hover:text-red-400 border border-stone-800 rounded-full transition-all cursor-pointer flex items-center justify-center"
              title={currentLang === 'en' ? 'Close explorer' : 'Kapat'}
            >
              <X className="w-4 h-4" />
            </button>
          </header>

          {/* Scrollable central content viewport */}
          <div className="flex-grow overflow-hidden relative">
            <AnimatePresence mode="wait">
              
              {/* ================= STEP 1: ROOT SECTION SELECTION ================= */}
              {step === 'root' && (
                <motion.div
                  key="step-root"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="h-full overflow-y-auto max-w-5xl mx-auto px-6 py-8 sm:py-16 flex flex-col justify-start md:justify-center w-full"
                >
                  <div className="text-center mb-10 max-w-xl mx-auto">
                    <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.2em] font-bold block mb-2">
                      {currentLang === 'en' ? 'Interactive Gastronomy' : 'Etkileşimli Gastronomi'}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight">
                      {currentLang === 'en' ? 'What are you in the mood for?' : 'Canınız bugün ne çekiyor?'}
                    </h3>
                  </div>

                  {/* Exactly Two Main Visual Section Choices */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full pb-10 md:pb-0">
                    {/* Foods Section panel */}
                    <button
                      id="explorer-select-foods"
                      onClick={() => {
                        setSelectedType('food');
                        setStep('categories');
                      }}
                      className="group relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-stone-800/80 hover:border-amber-500/50 bg-stone-900/40 hover:bg-stone-900/60 shadow-2xl transition-all duration-500 cursor-pointer text-left focus:outline-none flex flex-col justify-between p-6 sm:p-8"
                    >
                      {/* Decorative inner gradient glows */}
                      <div className="absolute top-10 right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/15 transition-all duration-500 pointer-events-none" />
                      
                      {/* Brand Logo Watermark in top right */}
                      <div className="self-end z-10 text-[9px] font-mono uppercase tracking-[0.3em] text-stone-600 group-hover:text-amber-500/40 transition-colors">
                        Magic Tulip Kitchen
                      </div>

                      {/* Giant glowing vector emblem and Dancing Chef side by side */}
                      <div className="flex-grow flex items-center justify-center gap-6 sm:gap-8 z-10">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-stone-900 to-stone-950 border border-stone-800 group-hover:border-amber-500/40 flex items-center justify-center shadow-lg transition-all duration-500 relative">
                          {/* Pulsing outer ring */}
                          <div className="absolute -inset-2 rounded-full border border-amber-500/5 opacity-50 group-hover:opacity-100 group-hover:border-amber-500/15 transition-all duration-500 animate-pulse" />
                          <div className="absolute inset-1 rounded-full border border-dashed border-stone-800 group-hover:border-amber-500/20 animate-[spin_40s_linear_infinite]" />
                          <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-500">🍽️</span>
                        </div>

                        {/* Animated Dancing Chef beside the logo emblem */}
                        <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center relative transition-all">
                          <DancingChef />
                        </div>
                      </div>

                      {/* Content panel */}
                      <div className="space-y-3 z-10 mt-auto">
                        <div className="p-3 bg-amber-500/15 border border-amber-500/30 rounded-2xl w-fit text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300">
                          <Utensils className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xl sm:text-2xl font-black tracking-wide text-white flex items-center space-x-2">
                            <span>{currentLang === 'en' ? 'FOOD MENU' : 'YEMEK MENÜSÜ'}</span>
                            <ArrowRight className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                          </h4>
                          <p className="text-stone-400 text-xs sm:text-sm font-sans font-light leading-relaxed mt-1.5">
                            {currentLang === 'en'
                              ? 'Delight in masterfully composed morning breakfasts, fresh salads, thin crust pizzas, and delicate desserts.'
                              : 'Özenle pişirilmiş sabah kahvaltıları, salatalar, çıtır pizzalar ve nefis şef spesiyallerimizi keşfedin.'}
                          </p>
                        </div>
                      </div>
                    </button>

                    {/* Drinks Section panel */}
                    <button
                      id="explorer-select-drinks"
                      onClick={() => {
                        setSelectedType('drink');
                        setStep('categories');
                      }}
                      className="group relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-stone-800/80 hover:border-amber-500/50 bg-stone-900/40 hover:bg-stone-900/60 shadow-2xl transition-all duration-500 cursor-pointer text-left focus:outline-none flex flex-col justify-between p-6 sm:p-8"
                    >
                      {/* Decorative inner gradient glows */}
                      <div className="absolute top-10 right-10 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:bg-fuchsia-500/15 transition-all duration-500 pointer-events-none" />
                      
                      {/* Brand Logo Watermark in top right */}
                      <div className="self-end z-10 text-[9px] font-mono uppercase tracking-[0.3em] text-stone-600 group-hover:text-fuchsia-500/40 transition-colors">
                        Magic Tulip Bar
                      </div>

                      {/* Giant glowing vector emblem in the center/upper area */}
                      <div className="flex-grow flex items-center justify-center z-10">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-stone-900 to-stone-950 border border-stone-800 group-hover:border-fuchsia-500/40 flex items-center justify-center shadow-lg transition-all duration-500 relative">
                          {/* Pulsing outer ring */}
                          <div className="absolute -inset-2 rounded-full border border-fuchsia-500/5 opacity-50 group-hover:opacity-100 group-hover:border-fuchsia-500/15 transition-all duration-500 animate-pulse" />
                          <div className="absolute inset-1 rounded-full border border-dashed border-stone-800 group-hover:border-fuchsia-500/20 animate-[spin_40s_linear_infinite]" />
                          <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-500">🍷</span>
                        </div>
                      </div>

                      {/* Content panel */}
                      <div className="space-y-3 z-10 mt-auto">
                        <div className="p-3 bg-amber-500/15 border border-amber-500/30 rounded-2xl w-fit text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300">
                          <Wine className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xl sm:text-2xl font-black tracking-wide text-white flex items-center space-x-2">
                            <span>{currentLang === 'en' ? 'DRINKS' : 'İÇECEKLER'}</span>
                            <ArrowRight className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                          </h4>
                          <p className="text-stone-400 text-xs sm:text-sm font-sans font-light leading-relaxed mt-1.5">
                            {currentLang === 'en'
                              ? 'Sip handcrafted signature botanical spirits, selected vintage vineyard wines, and chilled organic refreshers.'
                              : 'Butik şarap çeşitleri, taze otlar içeren imza kokteyllerimiz ve serinletici özel meşrubatlarımız.'}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ================= STEP 2: LEFT SIDEBAR CATEGORIES LIST ================= */}
              {step === 'categories' && (
                <motion.div
                  key="step-categories"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col lg:flex-row w-full bg-stone-950/20"
                >
                  {/* Left Column: Sidebar list */}
                  <div className="w-full lg:w-80 h-full border-r border-stone-900 bg-stone-950/60 p-5 overflow-y-auto flex-shrink-0 custom-scrollbar flex flex-col justify-between">
                    <div>
                      {/* Active Main Type Identifier */}
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 font-bold flex items-center space-x-2">
                          {selectedType === 'food' ? <Utensils className="w-3.5 h-3.5 text-amber-500" /> : <Wine className="w-3.5 h-3.5 text-amber-500" />}
                          <span>{selectedType === 'food' ? t.navFood : t.navDrinks}</span>
                        </span>
                        <span className="text-[9px] font-mono text-stone-600 bg-stone-900/60 border border-stone-850 px-2 py-0.5 rounded-full">
                          {getActiveCategoriesList().length} {currentLang === 'en' ? 'Sections' : 'Bölüm'}
                        </span>
                      </div>

                      {/* Main Scrollable Vertical List */}
                      <div className="space-y-1.5">
                        {getActiveCategoriesList().length === 0 ? (
                          <div className="p-6 text-center border border-dashed border-stone-800 rounded-3xl bg-stone-900/10">
                            <Utensils className="mx-auto w-8 h-8 text-stone-600 mb-3 animate-pulse" />
                            <h5 className="text-sm font-bold text-stone-300 font-serif mb-1.5">
                              {currentLang === 'en' ? 'Kitchen is Closed' : 'Mutfak Kapalıdır'}
                            </h5>
                            <p className="text-[11px] text-stone-500 leading-relaxed">
                              {currentLang === 'en' 
                                ? 'We are currently updating our kitchen offerings. Please check out our fine selection of drinks!' 
                                : 'Mutfak menümüz güncellenmektedir. Lütfen barımızdan seçkin içecekleri keşfedin!'}
                            </p>
                          </div>
                        ) : (
                          getActiveCategoriesList().map((cat) => {
                            // Calculate number of items in this category
                            const count = menuItems.filter((item) => {
                              if (item.type !== selectedType) return false;
                              if (cat.id === 'all_food' || cat.id === 'all_drinks') return true;
                              return item.category === cat.id;
                            }).length;

                            return (
                              <button
                                id={`explorer-cat-btn-${cat.id}`}
                                key={cat.id}
                                onClick={() => {
                                  setActiveCatId(cat.id);
                                  setStep('items');
                                }}
                                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-stone-900/40 hover:bg-stone-900 border border-stone-850/60 hover:border-amber-500/30 transition-all duration-300 text-left group cursor-pointer"
                              >
                                <div className="flex items-center space-x-3.5 min-w-0">
                                  <span className="text-lg bg-stone-950/80 p-2 border border-stone-850 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                    {cat.icon}
                                  </span>
                                  <div className="min-w-0">
                                    <h4 className="font-serif text-sm font-bold text-stone-200 group-hover:text-amber-400 transition-colors truncate">
                                      {cat.name[currentLang]}
                                    </h4>
                                    <p className="text-[9px] text-stone-500 font-mono tracking-tight mt-0.5 truncate max-w-[160px]">
                                      {cat.desc[currentLang]}
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-center space-x-1.5 flex-shrink-0 pl-1">
                                  <span className="font-mono text-[9px] bg-stone-950/60 text-stone-400 group-hover:text-amber-500 px-2 py-0.5 rounded-full">
                                    {count}
                                  </span>
                                  <span className="text-stone-600 group-hover:text-amber-500 transition-colors text-xs">▶</span>
                                </div>
                              </button>
                            );
                          })
                        )}
                      </div>
                    </div>

                    {/* Bottom Back trigger inside sidebar */}
                    <div className="pt-6 border-t border-stone-900/60 mt-6 hidden lg:block">
                      <button
                        id="explorer-sidebar-back"
                        onClick={() => {
                          setStep('root');
                          setSelectedType(null);
                        }}
                        className="w-full py-2.5 bg-stone-900 hover:bg-stone-850 text-stone-400 hover:text-white rounded-xl border border-stone-850 transition flex items-center justify-center space-x-2 text-xs font-mono uppercase tracking-widest cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>{currentLang === 'en' ? 'Back to Main' : 'Ana Bölüme Dön'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Aesthetic category splash / preview guide */}
                  <div className="hidden lg:flex flex-col items-center justify-center p-12 text-center flex-grow max-w-2xl mx-auto">
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-2xl mb-6 shadow-lg animate-bounce">
                      ✨
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-200 tracking-tight">
                      {currentLang === 'en' ? 'Unveil Our Chef\'s Secrets' : 'Şefimizin Sırlarını Keşfedin'}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm max-w-sm mx-auto mt-3.5 leading-relaxed">
                      {currentLang === 'en'
                        ? 'Select any section from the left sidebar. It will open a beautiful dedicated view displaying complete lists, fine ingredients, and precise pricing.'
                        : 'Sol menüden dilediğiniz gurme bölümünü seçerek enfes tabakların taze içeriklerine, özel detaylarına ve fiyatlarına erişebilirsiniz.'}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* ================= STEP 3: DEDICATED NEW ITEMS LIST VIEW ================= */}
              {step === 'items' && activeCatId && (
                <motion.div
                  key="step-items"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="h-full flex flex-col w-full"
                >
                  {/* Category description title bar */}
                  <div className="px-6 py-5 border-b border-stone-900 bg-stone-950/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-3.5">
                      <span className="text-2xl bg-stone-900 p-2 border border-stone-800 rounded-2xl flex-shrink-0">
                        {getActiveCategoriesList().find((c) => c.id === activeCatId)?.icon}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                          {getActiveCategoriesList().find((c) => c.id === activeCatId)?.name[currentLang]}
                        </h3>
                        <p className="text-stone-400 text-[11px] leading-none mt-1">
                          {getActiveCategoriesList().find((c) => c.id === activeCatId)?.desc[currentLang]}
                        </p>
                      </div>
                    </div>

                    {/* Back to Categories list Button */}
                    <div className="flex items-center space-x-6">
                      {selectedType === 'food' && (
                        <div className="hidden md:flex items-center space-x-3 bg-stone-900/40 border border-stone-850 px-3 py-1.5 rounded-2xl">
                          <div className="w-10 h-10">
                            <DancingChef />
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500 font-bold">
                            {currentLang === 'en' ? "Chef's Culinary Dance" : "Şefin Gurme Dansı"}
                          </span>
                        </div>
                      )}

                      <button
                        id="explorer-return-categories"
                        onClick={() => setStep('categories')}
                        className="px-4 py-2 bg-stone-900 hover:bg-stone-850 hover:text-amber-500 text-stone-300 border border-stone-800 rounded-xl text-xs font-mono uppercase tracking-wider transition flex items-center space-x-1.5 self-start sm:self-auto cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>{currentLang === 'en' ? 'Back to Sections' : 'Kategorilere Dön'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Complete Items List - scrollable */}
                  <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar pb-16">
                    {getFilteredItems().length === 0 ? (
                      <div className="text-center py-20 border border-stone-900 rounded-3xl bg-stone-950/20">
                        <Clock className="w-8 h-8 text-stone-600 mx-auto mb-4" />
                        <p className="text-stone-400 font-serif text-sm">
                          {currentLang === 'en' ? 'Crafting new menu additions...' : 'Yeni eklemeler yakında menüde...'}
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                        {getFilteredItems().map((item, index) => {
                          const qtyInBasket = getItemQtyInBasket(item.id);
                          return (
                            <motion.div
                              id={`explorer-item-card-${item.id}`}
                              key={item.id}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.02 }}
                              className="group flex flex-row bg-stone-900/20 border border-stone-850 hover:border-amber-500/20 hover:bg-stone-900/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative items-center"
                            >
                              {/* Left Side: Elegant branding emblem logo */}
                              <div className="w-20 sm:w-24 h-20 sm:h-24 flex-shrink-0 overflow-hidden relative bg-stone-950/80 border-r border-stone-900/60 flex flex-col items-center justify-center p-2.5 sm:p-3">
                                <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 border border-amber-500/20 group-hover:border-amber-500/40 flex items-center justify-center shadow-lg transition-all duration-500">
                                  {/* Inner decorative dotted/dashed border */}
                                  <div className="absolute inset-1 rounded-full border border-dashed border-stone-800 group-hover:border-amber-500/10 animate-[spin_30s_linear_infinite]" />
                                  
                                  {/* Center Category Symbol/Emoji */}
                                  <span className="text-lg sm:text-2xl z-10 select-none transform group-hover:scale-110 transition-transform duration-300">
                                    {getCategoryLogoSymbol(item.category)}
                                  </span>
                                </div>
                                <span className="text-[7px] sm:text-[8px] font-mono font-bold tracking-[0.2em] text-stone-500/80 mt-1.5 uppercase select-none text-center">
                                  {item.type === 'food' ? 'MT Kitchen' : 'MT Bar'}
                                </span>
                                
                                {item.isChefSpecial && (
                                  <div className="absolute top-1 right-1 bg-amber-500 text-stone-950 text-[5px] font-black px-1 py-0.2 rounded uppercase tracking-wider flex items-center space-x-0.5 shadow-sm">
                                    <span>★</span>
                                  </div>
                                )}
                              </div>

                              {/* Right Side: Name, Price & Action Button */}
                              <div className="p-3 sm:p-4 flex flex-row items-center justify-between flex-grow min-w-0 gap-3 sm:gap-4">
                                <div className="min-w-0 flex-grow">
                                  {/* Title */}
                                  <h4 className="text-sm sm:text-base md:text-[17px] font-serif font-bold text-stone-100 group-hover:text-amber-400 transition-colors truncate">
                                    {item.name[currentLang]}
                                  </h4>
                                  {(item.category === 'cocktail_list' || item.category === 'kids_cocktails') && item.ingredients && (
                                    <p className="text-[11px] font-mono font-medium text-amber-500/80 mt-1 leading-snug tracking-wide">
                                      ({item.ingredients.map(ing => ing[currentLang]).join(', ')})
                                    </p>
                                  )}
                                  {/* Price */}
                                  <p className="text-sm sm:text-base font-mono font-black text-amber-500 mt-0.5 sm:mt-1">
                                    {item.price > 0 ? (
                                      item.currency === 'GBP' 
                                        ? `£${item.price.toFixed(2)}` 
                                        : item.currency === 'TL' || item.currency === 'TRY'
                                          ? `₺${item.price}` 
                                          : `$${item.price.toFixed(2)}`
                                    ) : (
                                      currentLang === 'en' ? 'Price on request' : 'Fiyat sorunuz'
                                    )}
                                  </p>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
                                  {qtyInBasket > 0 && (
                                    <span className="text-[8px] sm:text-[9px] font-mono font-bold text-amber-500 flex items-center space-x-0.5 sm:space-x-1 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 rounded-full border border-amber-500/20">
                                      <ShoppingBasket className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                      <span>{qtyInBasket}</span>
                                    </span>
                                  )}

                                  <button
                                    id={`explorer-add-btn-${item.id}`}
                                    onClick={(e) => handleAddDirect(e, item)}
                                    className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-mono font-bold uppercase transition-all duration-300 flex items-center space-x-1 border cursor-pointer ${
                                      addedItemFeedback[item.id]
                                        ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400'
                                        : 'bg-amber-500 hover:bg-amber-400 text-stone-950 border-amber-500 hover:border-amber-400 font-black'
                                    }`}
                                  >
                                    {addedItemFeedback[item.id] ? (
                                      <>
                                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                                        <span>{currentLang === 'en' ? 'Added' : 'Eklendi'}</span>
                                      </>
                                    ) : (
                                      <>
                                        <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                                        <span>{currentLang === 'en' ? 'Add' : 'Ekle'}</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Sticky decorative explorer footer bar */}
          <footer className="p-4 border-t border-stone-900 bg-stone-950 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono uppercase tracking-widest text-stone-500 gap-2 relative z-10">
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-amber-500/70" />
              <span>
                {currentLang === 'en' ? 'Kitchen: 08:00 AM - 10:00 PM' : 'Mutfak: 08:00 - 22:00'}
              </span>
            </div>
            {basket.length > 0 && (
              <div className="flex items-center space-x-2 text-amber-400">
                <ShoppingBasket className="w-4 h-4 text-amber-500" />
                <span>
                  {basket.reduce((sum, item) => sum + item.quantity, 0)} {currentLang === 'en' ? 'items in basket' : 'sepetinizde ürün var'}
                </span>
              </div>
            )}
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
