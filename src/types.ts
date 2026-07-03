export type Language = 'en' | 'tr';

export interface Translation {
  navHome: string;
  navAbout: string;
  navFood: string;
  navDrinks: string;
  navTestimonials: string;
  navContact: string;
  
  heroTitle: string;
  heroSubtitle: string;
  heroBtnMenu: string;
  hotelDiscount: string;
  
  aboutTitle: string;
  aboutSubtitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutFeat1Title: string;
  aboutFeat1Desc: string;
  aboutFeat2Title: string;
  aboutFeat2Desc: string;
  aboutFeat3Title: string;
  aboutFeat3Desc: string;
  aboutFeat4Title: string;
  aboutFeat4Desc: string;
  
  foodTitle: string;
  foodSubtitle: string;
  foodTabAll: string;
  foodTabBreakfast: string;
  foodTabMains: string;
  foodTabDesserts: string;

  drinksTitle: string;
  drinksSubtitle: string;
  drinksTabAll: string;
  drinksTabCocktails: string;
  drinksTabWines: string;
  drinksTabRefreshers: string;
  drinksTabSoftDrinks: string;
  drinksTabHotDrinks: string;
  drinksTabLocalDrinks: string;
  drinksTabBeerList: string;
  drinksTabWhiskies: string;
  drinksTabSpecials: string;
  drinksTabKidsCocktails: string;
  drinksTabImportantDrinks: string;
  drinksTabCocktailList: string;
  
  menuSpicy: string;
  menuVegetarian: string;
  menuPopular: string;
  menuGlutenFree: string;
  
  reviewTitle: string;
  reviewSubtitle: string;
  reviewWriteTitle: string;
  reviewLabelName: string;
  reviewLabelRating: string;
  reviewLabelComment: string;
  reviewSubmit: string;
  reviewPlaceholderName: string;
  reviewPlaceholderComment: string;
  
  contactTitle: string;
  contactSubtitle: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;
  contactHours: string;
  contactHoursWeekdays: string;
  contactHoursWeekend: string;
  contactLabelSubject: string;
  contactLabelMessage: string;
  contactSubmit: string;
  contactSuccess: string;
  
  footerDesc: string;
  footerQuickLinks: string;
  footerHours: string;
  footerNewsletter: string;
  footerNewsDesc: string;
  footerSubscribe: string;
  footerSubscribed: string;
}

export interface MenuItem {
  id: string;
  category: string;
  type: 'food' | 'drink';
  name: { en: string; tr: string };
  description: { en: string; tr: string };
  price: number;
  currency?: string;
  image: string;
  tags?: { en: string; tr: string }[];
  isChefSpecial?: boolean;
  ingredients?: { en: string; tr: string }[];
  alcoholByVolume?: string; // for drinks
  calories?: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: { en: string; tr: string };
  date: string;
  avatar?: string;
}

export interface BasketItem {
  item: MenuItem;
  quantity: number;
}
