import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Flame, Leaf, Search, Info, X, Clock, Eye, ShoppingBasket, Check, Plus, Layers } from 'lucide-react';
import { Language, Translation, MenuItem, BasketItem } from '../types';
import { menuItems } from '../data';

interface FoodMenuProps {
  currentLang: Language;
  t: Translation;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  onAddToBasket: (item: MenuItem) => void;
  basket: BasketItem[];
}

export default function FoodMenu({
  currentLang,
  t,
  activeCategory,
  setActiveCategory,
  onAddToBasket,
  basket,
}: FoodMenuProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'drink'>('food');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [dietFilter, setDietFilter] = useState<'all' | 'vegetarian' | 'glutenFree' | 'spicy' | 'special'>('all');
  const [addedFeedback, setAddedFeedback] = useState<Record<string, boolean>>({});
  const [isSidebarExpandedMobile, setIsSidebarExpandedMobile] = useState(false);

  // Synchronize activeTab based on external activeCategory prop changes
  React.useEffect(() => {
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
      'cocktail_list',
      'cocktails',
      'wines',
      'refreshers'
    ].includes(activeCategory);
    if (isDrinkCategory) {
      setActiveTab('drink');
    } else {
      setActiveTab('food');
    }
  }, [activeCategory]);

  // Food categories
  const foodCategories = [
    { id: 'all_food', label: currentLang === 'en' ? 'All Foods' : 'Tüm Yemekler' },
    { id: 'breakfast', label: currentLang === 'en' ? 'Breakfast' : 'Kahvaltı' },
    { id: 'omelette', label: currentLang === 'en' ? 'Omelette' : 'Omletler' },
    { id: 'lunch_burger', label: currentLang === 'en' ? 'Lunch Burger' : 'Öğle Burgeri' },
    { id: 'sandwiches_toast', label: currentLang === 'en' ? 'Sandwiches & Toast' : 'Sandviç & Tost' },
    { id: 'wraps', label: currentLang === 'en' ? 'Wraps' : 'Dürümler' },
    { id: 'jacket_potato', label: currentLang === 'en' ? 'Jacket Potato' : 'Kumpir' },
    { id: 'pizza', label: currentLang === 'en' ? 'Pizza' : 'Pizzalar' },
    { id: 'spaghetti_pasta', label: currentLang === 'en' ? 'Spaghetti & Pasta' : 'Makarna & Spagetti' },
    { id: 'vegetable_dishes', label: currentLang === 'en' ? 'Vegetable Dishes' : 'Sebze Yemekleri' },
    { id: 'hot_starters', label: currentLang === 'en' ? 'Hot Starters' : 'Sıcak Başlangıçlar' },
    { id: 'cold_starters', label: currentLang === 'en' ? 'Cold Starters' : 'Soğuk Başlangıçlar' },
    { id: 'chicken_dishes', label: currentLang === 'en' ? 'Chicken Dishes' : 'Tavuk Yemekleri' },
    { id: 'meat_dishes', label: currentLang === 'en' ? 'Meat Dishes' : 'Et Yemekleri' },
    { id: 'salads', label: currentLang === 'en' ? 'Salads' : 'Salatalar' },
    { id: 'seafood_dishes', label: currentLang === 'en' ? 'Sea Food Dishes' : 'Deniz Ürünleri' },
    { id: 'kids_menu', label: currentLang === 'en' ? 'Kids Menu' : 'Çocuk Menüsü' },
    { id: 'specials', label: currentLang === 'en' ? 'Specials' : 'Özellerimiz' },
    { id: 'desserts', label: currentLang === 'en' ? 'Desserts' : 'Tatlılar' },
  ];

  // Drink categories
  const drinkCategories = [
    { id: 'all_drinks', label: currentLang === 'en' ? 'All Drinks' : 'Tüm İçecekler' },
    { id: 'cocktails', label: currentLang === 'en' ? 'Botanical Cocktails' : 'Botanist Kokteylleri' },
    { id: 'wines', label: currentLang === 'en' ? 'Fine Wines' : 'Seçkin Şaraplar' },
    { id: 'refreshers', label: currentLang === 'en' ? 'Cold Refreshers' : 'Soğuk Ferahlatıcılar' },
  ];

  // All category mapping to easily handle unified lists
  const currentCategories = activeTab === 'food' ? foodCategories : drinkCategories;

  // Filter items based on active states, search queries, and diet filters
  const filteredItems = menuItems.filter((item) => {
    // 1. Food/Drink Type filter
    if (activeTab === 'food' && item.type !== 'food') return false;
    if (activeTab === 'drink' && item.type !== 'drink') return false;

    // 2. Category filter
    const isAllFood = activeCategory === 'all' || activeCategory === 'all_food';
    const isAllDrinks = activeCategory === 'all_drinks';
    const matchesCategory =
      isAllFood || isAllDrinks || item.category === activeCategory;

    // 3. Search query filter
    const nameText = item.name[currentLang].toLowerCase();
    const descText = item.description[currentLang].toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = nameText.includes(query) || descText.includes(query);

    // 4. Diet filter
    let matchesDiet = true;
    if (dietFilter === 'vegetarian') {
      matchesDiet = !!item.tags?.some(tag => tag.en.toLowerCase().includes('vegetarian') || tag.tr.toLowerCase().includes('vejetaryen') || tag.en.toLowerCase().includes('vegan'));
    } else if (dietFilter === 'glutenFree') {
      matchesDiet = !!item.tags?.some(tag => tag.en.toLowerCase().includes('gluten free') || tag.tr.toLowerCase().includes('glutensiz'));
    } else if (dietFilter === 'spicy') {
      matchesDiet = !!item.tags?.some(tag => tag.en.toLowerCase().includes('spicy') || tag.tr.toLowerCase().includes('acılı'));
    } else if (dietFilter === 'special') {
      matchesDiet = !!item.isChefSpecial;
    }

    return matchesCategory && matchesSearch && matchesDiet;
  });

  const getTagIcon = (tagName: string) => {
    const name = tagName.toLowerCase();
    if (name.includes('spicy') || name.includes('acılı')) return <Flame className="w-3.5 h-3.5 text-red-500" />;
    if (name.includes('vegetarian') || name.includes('vejetaryen') || name.includes('organic') || name.includes('organik') || name.includes('vegan')) return <Leaf className="w-3.5 h-3.5 text-emerald-500" />;
    return <Sparkles className="w-3.5 h-3.5 text-amber-500" />;
  };

  // Click handler with feedback
  const handleAddToBasketClick = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToBasket(item);
    
    // Provide a visual trigger feedback
    setAddedFeedback((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedFeedback((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  // Get basket quantity for item
  const getItemQuantityInBasket = (itemId: string) => {
    const found = basket.find((bi) => bi.item.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="food-menu" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Elegantly placed ambient backlights */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-500 font-mono text-sm tracking-widest uppercase block mb-3 font-bold">
            {currentLang === 'en' ? 'Interactive Gourmet Experience' : 'Etkileşimli Gurme Deneyimi'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white mb-6">
            {currentLang === 'en' ? 'The Digital Courtyard Menu' : 'Dijital Avlu Menümüz'}
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mx-auto mb-6">
            {currentLang === 'en'
              ? 'Select any gourmet section, view exquisite details, and add delicate plates directly to your basket.'
              : 'Dilediğiniz gurme bölümünü seçin, malzemeleri inceleyin ve enfes tabakları doğrudan sepetinize ekleyin.'}
          </p>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Main Content Layout with Left Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 mt-12">
          
          {/* Left Column: Sidebar Category List */}
          <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-28 lg:self-start z-30">
            {/* Mobile Collapsible Header */}
            <div className="lg:hidden mb-4">
              <button
                id="mobile-category-toggle-btn"
                onClick={() => setIsSidebarExpandedMobile(!isSidebarExpandedMobile)}
                className="w-full flex items-center justify-between px-5 py-4 bg-stone-950 border border-stone-800 rounded-2xl text-xs font-bold uppercase tracking-wider text-stone-200 hover:text-amber-500 transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-amber-500" />
                  <span>
                    {currentLang === 'en' ? 'Category:' : 'Kategori:'} {' '}
                    <span className="text-amber-500 font-bold ml-1">
                      {currentCategories.find(c => c.id === activeCategory)?.label || 
                        ((activeCategory === 'all' || activeCategory === 'all_food') 
                          ? (currentLang === 'en' ? 'All Foods' : 'Tüm Yemekler') 
                          : activeCategory === 'all_drinks' 
                            ? (currentLang === 'en' ? 'All Drinks' : 'Tüm İçecekler')
                            : activeCategory)}
                    </span>
                  </span>
                </div>
                <span className="text-amber-500">{isSidebarExpandedMobile ? '▲' : '▼'}</span>
              </button>
            </div>

            {/* Sidebar content (always visible on desktop, toggle-controlled on mobile) */}
            <div className={`space-y-6 ${isSidebarExpandedMobile ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-stone-950/80 border border-stone-850 rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur-md space-y-6">
                
                {/* Section title inside sidebar */}
                <div>
                  <h3 className="font-serif text-sm font-bold text-stone-100 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span className="text-amber-500">🌷</span>
                    <span>{currentLang === 'en' ? 'Menu Sections' : 'Menü Bölümleri'}</span>
                  </h3>
                  <p className="text-[10px] text-stone-500 font-mono">
                    {currentLang === 'en' ? 'Select culinary category' : 'Gurme kategori seçin'}
                  </p>
                </div>

                {/* Main Food / Drinks Segmented Control inside Sidebar */}
                <div className="grid grid-cols-2 p-1 bg-stone-900 border border-stone-800 rounded-xl w-full">
                  <button
                    id="menu-select-food-tab"
                    onClick={() => {
                      setActiveTab('food');
                      setActiveCategory('all_food');
                      setIsSidebarExpandedMobile(false);
                    }}
                    className={`py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                      activeTab === 'food'
                        ? 'bg-amber-500 text-stone-950 shadow'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {currentLang === 'en' ? 'Fine Food' : 'Yemekler'}
                  </button>
                  <button
                    id="menu-select-drink-tab"
                    onClick={() => {
                      setActiveTab('drink');
                      setActiveCategory('all_drinks');
                      setIsSidebarExpandedMobile(false);
                    }}
                    className={`py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                      activeTab === 'drink'
                        ? 'bg-amber-500 text-stone-950 shadow'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {currentLang === 'en' ? 'Curated Drinks' : 'İçecekler'}
                  </button>
                </div>

                {/* Category Vertical List */}
                <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
                  {currentCategories.map((cat) => {
                    const isAllSelected = (activeCategory === 'all' || activeCategory === 'all_food') && cat.id === 'all_food';
                    const isAllDrinksSelected = activeCategory === 'all_drinks' && cat.id === 'all_drinks';
                    const isActive = isAllSelected || isAllDrinksSelected || activeCategory === cat.id;

                    // Calculate total count of items in this category
                    const count = menuItems.filter(item => {
                      if (item.type !== activeTab) return false;
                      if (cat.id === 'all_food' || cat.id === 'all_drinks') return true;
                      return item.category === cat.id;
                    }).length;

                    return (
                      <button
                        id={`sub-cat-side-${cat.id}`}
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setIsSidebarExpandedMobile(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-200 group text-left cursor-pointer border ${
                          isActive
                            ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/5'
                            : 'bg-stone-900/40 text-stone-400 hover:text-stone-200 border-stone-850 hover:border-stone-800 hover:bg-stone-900/80'
                        }`}
                      >
                        <span className="truncate pr-2">{cat.label}</span>
                        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded-full flex-shrink-0 min-w-[20px] text-center ${
                          isActive 
                            ? 'bg-stone-950/15 text-stone-950 font-black' 
                            : 'bg-stone-950/40 text-stone-500 group-hover:text-stone-400'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>
          </aside>

          {/* Right Column: Main Content Area */}
          <div className="flex-grow space-y-6 min-w-0">
            
            {/* Search and Quick Diet Filters panel */}
            <div className="bg-stone-950/80 border border-stone-850 rounded-3xl p-5 shadow-xl backdrop-blur-md flex flex-col sm:flex-row gap-4 items-center justify-between">
              
              {/* Search input field */}
              <div className="relative w-full sm:max-w-xs group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-500 group-hover:text-amber-500 transition-colors w-4 h-4" />
                <input
                  id="food-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentLang === 'en' ? 'Search gourmet dishes...' : 'Gurme lezzet ara...'}
                  className="w-full bg-stone-900 border border-stone-800 rounded-2xl pl-11 pr-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans text-xs"
                />
              </div>

              {/* Diet selection pills */}
              <div className="flex flex-wrap justify-center sm:justify-end gap-1.5 w-full sm:w-auto">
                {[
                  { id: 'all', label: currentLang === 'en' ? 'All Diets' : 'Tüm Diyetler' },
                  { id: 'vegetarian', label: t.menuVegetarian },
                  { id: 'glutenFree', label: t.menuGlutenFree },
                  { id: 'spicy', label: t.menuSpicy },
                  { id: 'special', label: currentLang === 'en' ? 'Specials' : 'Özeller' },
                ].map((pill) => (
                  <button
                    id={`diet-pill-${pill.id}`}
                    key={pill.id}
                    onClick={() => setDietFilter(pill.id as any)}
                    className={`px-3 py-2 rounded-xl text-[10px] font-mono tracking-wide transition-all border cursor-pointer ${
                      dietFilter === pill.id
                        ? 'bg-amber-500/15 text-amber-400 border-amber-500/30 shadow-sm font-bold'
                        : 'bg-stone-900 text-stone-400 border-stone-850 hover:text-stone-200 hover:border-stone-700'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Menu Items Grid */}
            {activeCategory === 'meat_dishes' && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center space-x-3 text-amber-400 mb-6">
                <Info className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-mono tracking-wide">
                  {currentLang === 'en' 
                    ? 'Served with rice, chips and salad.' 
                    : 'Pilav, patates kızartması ve salata ile servis edilir.'}
                </span>
              </div>
            )}

            {activeCategory === 'seafood_dishes' && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center space-x-3 text-amber-400 mb-6">
                <Info className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-mono tracking-wide">
                  {currentLang === 'en' 
                    ? 'Served with chips and salad.' 
                    : 'Patates kızartması ve salata ile servis edilir.'}
                </span>
              </div>
            )}

            {activeCategory === 'specials' && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center space-x-3 text-amber-400 mb-6">
                <Info className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-mono tracking-wide">
                  {currentLang === 'en' 
                    ? 'Served with rice, chips and salad.' 
                    : 'Pilav, patates kızartması ve salata ile servis edilir.'}
                </span>
              </div>
            )}

            {filteredItems.length === 0 ? (
              <div className="text-center py-20 bg-stone-950/40 border border-stone-850 rounded-3xl shadow-sm">
                <Search className="w-8 h-8 text-stone-600 mx-auto mb-4" />
                <p className="text-stone-400 font-serif text-sm">
                  {currentLang === 'en' ? 'No items found matching your criteria.' : 'Kriterlerinize uygun ürün bulunamadı.'}
                </p>
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item, index) => {
                    const qtyInBasket = getItemQuantityInBasket(item.id);
                    return (
                      <motion.div
                        id={`food-item-card-${item.id}`}
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: index * 0.02 }}
                        className="flex flex-col sm:flex-row bg-stone-900/30 border border-stone-850 hover:border-amber-500/25 hover:bg-stone-900/70 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
                      >
                        {/* Image Box with Quantity overlay & badge */}
                        <div className="w-full sm:w-36 h-36 sm:h-auto flex-shrink-0 overflow-hidden relative bg-stone-950">
                          <img
                            src={item.image}
                            alt={item.name[currentLang]}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent opacity-60" />

                          {/* Chef Special Badge */}
                          {item.isChefSpecial && (
                            <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-[8px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider flex items-center space-x-1 shadow-md border border-amber-400/20">
                              <Sparkles className="w-2.5 h-2.5 fill-stone-950" />
                              <span>CHEF SPEC</span>
                            </div>
                          )}

                          {/* Quantity in Basket Badge Overlay */}
                          {qtyInBasket > 0 && (
                            <div className="absolute bottom-3 right-3 bg-stone-950/90 backdrop-blur border border-amber-500/40 text-amber-400 font-mono text-[9px] font-black px-2 py-0.5 rounded-full shadow flex items-center space-x-1">
                              <ShoppingBasket className="w-3 h-3 text-amber-500" />
                              <span>{qtyInBasket} {currentLang === 'en' ? 'in Basket' : 'Sepette'}</span>
                            </div>
                          )}
                        </div>

                        {/* Description & Action Box */}
                        <div className="p-5 flex flex-col justify-between flex-grow min-w-0">
                          <div>
                            {/* Title and price row */}
                            <div className="flex items-start justify-between gap-3 mb-1.5">
                              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 group-hover:text-amber-400 transition-colors truncate">
                                {item.name[currentLang]}
                              </h3>
                              <span className="text-base sm:text-lg font-mono font-black text-amber-500 flex-shrink-0">
                                {item.price === 0
                                  ? (currentLang === 'en' ? 'No price' : 'Fiyat yok')
                                  : item.currency === 'GBP' 
                                    ? `£${item.price.toFixed(2)}` 
                                    : item.currency === 'TL' || item.currency === 'TRY'
                                      ? `₺${item.price}` 
                                      : `$${item.price.toFixed(2)}`}
                              </span>
                            </div>

                            {/* Description text */}
                            <p className="text-stone-400 text-xs leading-relaxed mb-3 line-clamp-2">
                              {item.description[currentLang]}
                            </p>
                          </div>

                          {/* Footer Area: Tags and Action Buttons */}
                          <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-950 gap-2">
                            <div className="flex flex-wrap gap-1">
                              {item.tags?.slice(0, 1).map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="inline-flex items-center space-x-0.5 bg-stone-950 border border-stone-850 px-1.5 py-0.5 rounded text-[8px] text-stone-400 font-mono"
                                >
                                  {getTagIcon(tag[currentLang])}
                                  <span>{tag[currentLang]}</span>
                                </span>
                              ))}
                            </div>

                            {/* Double actions block */}
                            <div className="flex items-center space-x-1.5">
                              <button
                                id={`view-details-food-${item.id}`}
                                onClick={() => setSelectedItem(item)}
                                className="p-1.5 bg-stone-900 hover:bg-stone-850 text-stone-400 hover:text-white rounded-lg border border-stone-800 hover:border-stone-750 transition"
                                title={currentLang === 'en' ? 'View ingredients' : 'Malzemeleri gör'}
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>

                              {/* Direct add trigger */}
                              <button
                                id={`add-to-basket-${item.id}`}
                                onClick={(e) => handleAddToBasketClick(e, item)}
                                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all duration-300 flex items-center space-x-1 cursor-pointer ${
                                  addedFeedback[item.id]
                                    ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                                    : 'bg-amber-500 hover:bg-amber-400 text-stone-950 border-amber-500 hover:border-amber-400'
                                }`}
                              >
                                {addedFeedback[item.id] ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                                    <span>{currentLang === 'en' ? 'Added' : 'Eklendi'}</span>
                                  </>
                                ) : (
                                  <>
                                    <Plus className="w-3 h-3 stroke-[2.5]" />
                                    <span>{currentLang === 'en' ? 'Add' : 'Ekle'}</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}

          </div>

        </div>

      </div>

      {/* Modal Overlay for Item Details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            id="food-detail-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              id="food-detail-card"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-stone-950 border border-stone-800 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden text-stone-100"
            >
              {/* Product Photo Banner */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name[currentLang]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                {/* Close Button */}
                <button
                  id="close-food-details"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-stone-900/80 hover:bg-red-500 text-stone-400 hover:text-white rounded-full transition-all shadow-md cursor-pointer border border-stone-800"
                >
                  <X className="w-4 h-4" />
                </button>

                {selectedItem.isChefSpecial && (
                  <div className="absolute bottom-4 left-6 bg-stone-900 text-amber-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center space-x-1.5 shadow-md border border-amber-500/20">
                    <Sparkles className="w-3.5 h-3.5 fill-amber-500" />
                    <span>CHEF'S SIGNATURE SPECIAL</span>
                  </div>
                )}
              </div>

              {/* Detail Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {selectedItem.name[currentLang]}
                    </h3>
                    <span className="text-xl sm:text-2xl font-mono font-bold text-amber-500">
                      {selectedItem.price === 0
                        ? (currentLang === 'en' ? 'No price' : 'Fiyat yok')
                        : selectedItem.currency === 'GBP'
                          ? `£${selectedItem.price.toFixed(2)}`
                          : selectedItem.currency === 'TL' || selectedItem.currency === 'TRY'
                            ? `₺${selectedItem.price}`
                            : `$${selectedItem.price.toFixed(2)}`}
                    </span>
                  </div>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {selectedItem.description[currentLang]}
                  </p>
                </div>

                {/* Specs / Calories */}
                {selectedItem.calories && (
                  <div className="flex items-center space-x-2 text-stone-500 text-xs font-mono border-t border-b border-stone-900 py-3">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>{currentLang === 'en' ? 'Freshly prepared' : 'Taze pişirilir'}</span>
                    <span className="text-stone-700">•</span>
                    <span>{selectedItem.calories} kcal</span>
                  </div>
                )}

                {/* Ingredients list */}
                {selectedItem.ingredients && selectedItem.ingredients.length > 0 && (
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-mono text-amber-400 font-bold mb-3 flex items-center space-x-1.5">
                      <Info className="w-4 h-4 text-amber-500" />
                      <span>{currentLang === 'en' ? 'Selected Ingredients' : 'Özel Malzemeler'}</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-2.5">
                      {selectedItem.ingredients.map((ing, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-stone-300">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                          <span>{ing[currentLang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action button in Modal */}
                <div className="flex items-center gap-3 pt-3 border-t border-stone-900">
                  <button
                    id="modal-add-to-basket"
                    onClick={(e) => {
                      handleAddToBasketClick(e, selectedItem);
                    }}
                    className="flex-grow py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-xs uppercase tracking-wider transition text-center flex items-center justify-center space-x-2"
                  >
                    <ShoppingBasket className="w-4.5 h-4.5" />
                    <span>
                      {getItemQuantityInBasket(selectedItem.id) > 0
                        ? `${currentLang === 'en' ? 'Add Another to Basket' : 'Sepete Bir Tane Daha Ekle'} (${getItemQuantityInBasket(selectedItem.id)})`
                        : (currentLang === 'en' ? 'Add Deluxe Plate to Basket' : 'Enfes Tabak Sepete Ekle')}
                    </span>
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
