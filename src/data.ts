import { Translation, MenuItem, Review } from './types';

export const translations: Record<'en' | 'tr', Translation> = {
  en: {
    navHome: 'Home',
    navAbout: 'Gallery',
    navFood: 'The Kitchen',
    navDrinks: 'The Bar',
    navTestimonials: 'Guest Reviews',
    navContact: 'Contact Us',
    
    heroTitle: 'Magic Tulip',
    heroSubtitle: 'Gourmet Kitchen & Bar',
    heroBtnMenu: 'Explore Menus',
    hotelDiscount: 'We offer 5% discount for our hotel customers',
    
    aboutTitle: 'Our Culinary Story',
    aboutSubtitle: 'A Legacy of Exquisite Taste and Artistry',
    aboutText1: 'Born from a deep passion for culinary craft and premium beverage artistry, Magic Tulip provides a majestic dining experience where traditional recipes meet innovative flair. Located in a beautifully preserved garden pavilion, we celebrate fresh beginnings, elegant flavors, and authentic Turkish hospitality.',
    aboutText2: 'Our kitchen works in tandem with local organic growers to source handpicked ingredients of unparalleled quality. Every single dish is composed with painstaking attention to detail, resulting in taste profiles that are nothing short of magical.',
    aboutFeat1Title: 'Gourmet Gastronomy',
    aboutFeat1Desc: 'Masterfully prepared dishes merging classic heritage with experimental design.',
    aboutFeat2Title: 'Artisan Mixology',
    aboutFeat2Desc: 'Handcrafted premium cocktails infused with local botanicals and dried fruits.',
    aboutFeat3Title: 'Exquisite Garden',
    aboutFeat3Desc: 'An ambient courtyard illuminated by warm fairy lights and beautiful, vibrant tulips.',
    aboutFeat4Title: 'Warm Hospitality',
    aboutFeat4Desc: 'Impeccable, highly personalized table service dedicated to your sensory comfort.',
    
    foodTitle: 'The Gourmet Kitchen',
    foodSubtitle: 'An exquisite selection of starters, mains, and artisanal desserts',
    foodTabAll: 'All Plates',
    foodTabBreakfast: 'Morning Rituals',
    foodTabMains: 'Chef\'s Mains',
    foodTabDesserts: 'Sweet Indulgences',

    drinksTitle: 'The Craft Bar',
    drinksSubtitle: 'Handcrafted signature cocktails, vintage Turkish wines, and refreshing mocktails',
    drinksTabAll: 'All Libations',
    drinksTabCocktails: 'Botanical Cocktails',
    drinksTabWines: 'Fine Wines',
    drinksTabRefreshers: 'Cold Refreshers',
    drinksTabSoftDrinks: 'Soft Drinks',
    drinksTabHotDrinks: 'Hot Drinks',
    drinksTabLocalDrinks: 'Local Drinks',
    drinksTabBeerList: 'Beer List',
    drinksTabWhiskies: 'Whiskies',
    drinksTabSpecials: 'Specials',
    drinksTabKidsCocktails: 'Kids Cocktails',
    drinksTabImportantDrinks: 'Important Drinks',
    drinksTabCocktailList: 'Cocktail List',
    
    menuSpicy: 'Spicy',
    menuVegetarian: 'Vegetarian',
    menuPopular: 'Popular',
    menuGlutenFree: 'Gluten Free',
    
    reviewTitle: 'Guest Stories',
    reviewSubtitle: 'What our valued guests say about their sensory dining experience',
    reviewWriteTitle: 'Share Your Dining Experience',
    reviewLabelName: 'Your Name',
    reviewLabelRating: 'Rating',
    reviewLabelComment: 'Your Review',
    reviewSubmit: 'Submit Review',
    reviewPlaceholderName: 'E.g. John Doe',
    reviewPlaceholderComment: 'Tell us about the flavors, atmosphere, or table service...',
    
    contactTitle: 'Find Our Courtyard',
    contactSubtitle: 'Join us for lunch, dinner, or late-night cocktails. Reservations optional.',
    contactAddress: 'Address',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactHours: 'Opening Hours',
    contactHoursWeekdays: 'Breakfast: 08:00 AM - 10:00 AM',
    contactHoursWeekend: 'Kitchen: 08:00 AM - 10:00 PM',
    contactLabelSubject: 'Subject',
    contactLabelMessage: 'Your Message',
    contactSubmit: 'Send Message',
    contactSuccess: 'Your message has been sent successfully! We look forward to welcoming you.',
    
    footerDesc: 'Magic Tulip Gourmet Kitchen & Bar offers a distinctive fusion of artisanal culinary craftsmanship, curated botanical mixology, and high-end Turkish hospitality.',
    footerQuickLinks: 'Quick Navigation',
    footerHours: 'Operating Hours',
    footerNewsletter: 'Sensory Club',
    footerNewsDesc: 'Receive invitations to exclusive wine tastings, seasonal menu releases, and chef events.',
    footerSubscribe: 'Join Club',
    footerSubscribed: 'Welcome to the Magic Tulip Club!',
  },
  tr: {
    navHome: 'Ana Sayfa',
    navAbout: 'Galeri',
    navFood: 'Mutfak',
    navDrinks: 'Bar & Kokteyl',
    navTestimonials: 'Misafir Yorumları',
    navContact: 'İletişim',
    
    heroTitle: 'Magic Tulip',
    heroSubtitle: 'Seçkin Mutfak & Bar',
    heroBtnMenu: 'Menüyü Keşfet',
    hotelDiscount: 'Otel müşterilerimize %5 indirim sunuyoruz',
    
    aboutTitle: 'Gastronomi Hikayemiz',
    aboutSubtitle: 'Eşsiz Lezzetlerin ve Mutfak Sanatının Buluşması',
    aboutText1: 'Yemek sanatına ve premium miksolojiye duyulan derin tutkuyla kurulan Magic Tulip, geleneksel tariflerin yenilikçi dokunuşlarla buluştuğu görkemli bir lezzet deneyimi sunuyor. Özenle korunan bahçe köşkümüzde, taze başlangıçları, şık aromaları ve özgün Türk konukseverliğini yaşatıyoruz.',
    aboutText2: 'Mutfağımız, yerel ve organik üreticilerle iş birliği yaparak benzersiz kalitedeki taze malzemeleri tedarik ediyor. Her bir tabak, duyusal bir şölen yaratmak adına büyük bir hassasiyet ve estetik kaygısıyla hazırlanmaktadır.',
    aboutFeat1Title: 'Gurme Gastronomi',
    aboutFeat1Desc: 'Klasik mutfak mirasını modern ve deneysel sunumlarla birleştiren imza tabaklar.',
    aboutFeat2Title: 'Artizan Miksoloji',
    aboutFeat2Desc: 'Yerel bitki özleri, taze meyveler ve kurutulmuş garnitürlerle hazırlanan özel kokteyller.',
    aboutFeat3Title: 'Büyüleyici Bahçe',
    aboutFeat3Desc: 'Sıcak ve loş ışıklar, rengarenk laleler ve huzurlu bir ambiyansla sarmalanmış teras.',
    aboutFeat4Title: 'Sıcak Karşılama',
    aboutFeat4Desc: 'Masadaki konforunuz ve duyusal memnuniyetiniz için kendini adamış, kusursuz servis ekibi.',
    
    foodTitle: 'Gurme Mutfak',
    foodSubtitle: 'Başlangıçlar, ana yemekler ve el yapımı özel tatlılardan oluşan seçkin bir koleksiyon',
    foodTabAll: 'Tüm Tabaklar',
    foodTabBreakfast: 'Güne Başlangıç',
    foodTabMains: 'Şefin Ana Yemekleri',
    foodTabDesserts: 'Tatlı Kaçamaklar',

    drinksTitle: 'Artizan Bar',
    drinksSubtitle: 'Özel tasarım kokteyller, yıllanmış Türk şarapları ve alkolsüz tazeleyici içecekler',
    drinksTabAll: 'Tüm İçecekler',
    drinksTabCocktails: 'Botanikal Kokteyller',
    drinksTabWines: 'Seçkin Şaraplar',
    drinksTabRefreshers: 'Soğuk Tazeleyiciler',
    drinksTabSoftDrinks: 'Alkolsüz İçecekler',
    drinksTabHotDrinks: 'Sıcak İçecekler',
    drinksTabLocalDrinks: 'Yerel İçecekler',
    drinksTabBeerList: 'Bira Listesi',
    drinksTabWhiskies: 'Viskiler',
    drinksTabSpecials: 'Özellerimiz',
    drinksTabKidsCocktails: 'Çocuk Kokteylleri',
    drinksTabImportantDrinks: 'Önemli İçecekler',
    drinksTabCocktailList: 'Kokteyl Listesi',
    
    menuSpicy: 'Acılı',
    menuVegetarian: 'Vejetaryen',
    menuPopular: 'Popüler',
    menuGlutenFree: 'Glutensiz',
    
    reviewTitle: 'Misafir Hikayeleri',
    reviewSubtitle: 'Değerli misafirlerimizin enfes lezzetler ve atmosfer hakkındaki içten görüşleri',
    reviewWriteTitle: 'Deneyiminizi Paylaşın',
    reviewLabelName: 'Adınız',
    reviewLabelRating: 'Puan',
    reviewLabelComment: 'Yorumunuz',
    reviewSubmit: 'Yorumu Gönder',
    reviewPlaceholderName: 'Örn. Ahmet Yılmaz',
    reviewPlaceholderComment: 'Lezzetler, atmosfer veya masa servis kalitemiz hakkında yazın...',
    
    contactTitle: 'Bahçemizi Keşfedin',
    contactSubtitle: 'Öğle yemeği, akşam yemeği veya gece kokteylleri için bize katılın. Rezervasyon isteğe bağlıdır.',
    contactAddress: 'Adres',
    contactPhone: 'Telefon',
    contactEmail: 'E-posta',
    contactHours: 'Çalışma Saatleri',
    contactHoursWeekdays: 'Kahvaltı: 08:00 - 10:00',
    contactHoursWeekend: 'Mutfak: 08:00 - 22:00',
    contactLabelSubject: 'Konu',
    contactLabelMessage: 'Mesajınız',
    contactSubmit: 'Mesaj Gönder',
    contactSuccess: 'Mesajınız başarıyla iletildi! En kısa sürede sizi ağırlamayı heyecanla bekliyoruz.',
    
    footerDesc: 'Magic Tulip Gurme Mutfak & Bar, artizan gastronomi, botanik kokteyl sanatı ve seçkin Türk misafirperverliğinin eşsiz ve büyüleyici bir harmanını sunar.',
    footerQuickLinks: 'Hızlı Menü',
    footerHours: 'Çalışma Saatleri',
    footerNewsletter: 'Lezzet Kulübü',
    footerNewsDesc: 'Özel şarap tadımları, mevsimlik menü lansmanları ve şef etkinliklerine davetiyeler alın.',
    footerSubscribe: 'Kulübe Katıl',
    footerSubscribed: 'Magic Tulip Lezzet Kulübüne Hoş Geldiniz!',
  }
};

export const menuItems: MenuItem[] = [
  // FOOD - Breakfast
  {
    id: 'f-breakfast-english',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Full English Breakfast', tr: 'Tam İngiliz Kahvaltısı' },
    description: {
      en: 'A hearty breakfast including fried eggs, bacon, sausages, baked beans, grilled tomato, mushrooms, and buttered toast.',
      tr: 'Sahanda yumurta, domuz pastırması, sosis, fırınlanmış kuru fasulye, ızgara domates, mantar ve tereyağlı tost ekmeğinden oluşan doyurucu klasik İngiliz tabağı.'
    },
    price: 10,
    currency: 'GBP',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Hearty', tr: 'Doyurucu' },
      { en: 'Traditional', tr: 'Geleneksel' }
    ]
  },
  {
    id: 'f-breakfast-turkish',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Turkish Breakfast', tr: 'Türk Kahvaltısı' },
    description: {
      en: 'An individual classic spread of fresh tomatoes, cucumbers, feta cheese, olives, boiled egg, honey, clotted cream, and fresh tea.',
      tr: 'Taze domates, salatalık, beyaz peynir, zeytinler, haşlanmış yumurta, bal, kaymak ve sıcak çaydan oluşan tek kişilik klasik lezzet tabağı.'
    },
    price: 490,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Traditional', tr: 'Geleneksel' }
    ]
  },
  {
    id: 'f-breakfast-scrambled-toast',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Scrambled Egg on Toast', tr: 'Tost Üstü Çırpılmış Yumurta' },
    description: {
      en: 'Creamy, softly scrambled organic eggs served on top of toasted thick-cut bread.',
      tr: 'Kalın dilimlenmiş kızarmış ekmek üzerinde sunulan yumuşacık ve kremsi çırpılmış organik yumurtalar.'
    },
    price: 250,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-breakfast-fried-toast',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Fried Egg on Toast', tr: 'Tost Üstü Göz Yumurta' },
    description: {
      en: 'Perfectly fried organic eggs with runny yolks, served over crisp toasted artisan bread.',
      tr: 'Çıtır kızarmış ekmek üzerinde, sarısı akışkan mükemmel pişmiş organik göz yumurtalar.'
    },
    price: 250,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-breakfast-bacon-egg-toast',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Bacon Egg on Toast', tr: 'Tost Üstü Yumurtalı Pastırma' },
    description: {
      en: 'Crispy premium bacon paired with a perfectly cooked egg on warm buttered toast.',
      tr: 'Sıcak tereyağlı tost ekmeği üzerinde çıtır pastırma ve mükemmel kıvamda pişmiş yumurta.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Savory', tr: 'Lezzetli' }
    ]
  },
  {
    id: 'f-breakfast-bacon-beans-toast',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Bacon and Baked Beans on Toast', tr: 'Tost Üstü Pastırma ve Kuru Fasulye' },
    description: {
      en: 'Crispy bacon and sweet, rich baked beans served hot over toasted artisan bread.',
      tr: 'Kızarmış ekmek üzerinde çıtır pastırma ve tatlı, sıcak fırınlanmış kuru fasulye sunumu.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Hearty', tr: 'Doyurucu' }
    ]
  },
  {
    id: 'f-breakfast-sausage-egg-beans-toast',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Sausage Egg and Beans on Toast', tr: 'Tost Üstü Sosis, Yumurta ve Fasulye' },
    description: {
      en: 'Grilled breakfast sausage, a cooked egg, and sweet baked beans served over warm buttered toast.',
      tr: 'Kızarmış ekmek üzerinde ızgara kahvaltı sosisi, pişmiş yumurta ve tatlı fırınlanmış fasulye.'
    },
    price: 290,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Classic', tr: 'Klasik' }
    ]
  },
  {
    id: 'f-breakfast-poached-toast',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Poached Egg on Toast', tr: 'Tost Üstü Poşe Yumurta' },
    description: {
      en: 'Delicately poached organic egg with a perfectly runny yolk, served over toasted artisan bread.',
      tr: 'Kızarmış ekmek üzerinde sarısı akışkan, tam kıvamında poşe organik yumurta.'
    },
    price: 200,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-breakfast-scrambled-sausage-toast',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Scrambled Sausage on Toast', tr: 'Tost Üstü Sosisli Çırpılmış Yumurta' },
    description: {
      en: 'Fluffy scrambled eggs cooked together with sliced savory breakfast sausage, served on crisp toast.',
      tr: 'Çıtır tost ekmeği üzerinde, dilimlenmiş enfes sosislerle çırpılarak pişirilmiş yumuşacık yumurtalar.'
    },
    price: 220,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'High Protein', tr: 'Yüksek Protein' }
    ]
  },
  {
    id: 'f-breakfast-cornflakes',
    category: 'breakfast',
    type: 'food',
    name: { en: 'Cornflakes', tr: 'Mısır Gevreği' },
    description: {
      en: 'Golden, crispy cornflakes served with cold organic milk.',
      tr: 'Soğuk organik süt ile servis edilen çıtır, altın rengi mısır gevreği.'
    },
    price: 200,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1585445490387-f47934b73b54?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Quick Option', tr: 'Hızlı Seçenek' }
    ]
  },
  // FOOD - Omelette
  {
    id: 'f-omelette-plain',
    category: 'omelette',
    type: 'food',
    name: { en: 'Plain Omelette', tr: 'Sade Omlet' },
    description: {
      en: 'Classic fluffy omelette made with whisked organic eggs and butter.',
      tr: 'Çırpılmış organik yumurtalar ve tereyağı ile hazırlanan klasik yumuşacık sade omlet.'
    },
    price: 240,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' },
      { en: 'Classic', tr: 'Klasik' }
    ]
  },
  {
    id: 'f-omelette-cheese-tomato',
    category: 'omelette',
    type: 'food',
    name: { en: 'Cheese & Tomato Omelette', tr: 'Peynirli ve Domatesli Omlet' },
    description: {
      en: 'Fluffy omelette stuffed with melted cheese and juicy ripe tomatoes.',
      tr: 'Erimiş peynir ve sulu olgun domateslerle doldurulmuş nefis omlet.'
    },
    price: 260,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-omelette-mushroom',
    category: 'omelette',
    type: 'food',
    name: { en: 'Mushroom Omelette', tr: 'Mantarlı Omlet' },
    description: {
      en: 'Sautéed forest mushrooms folded into a fluffy organic egg omelette.',
      tr: 'Sote edilmiş yaban mantarlarının çırpılmış organik yumurta ile buluştuğu leziz omlet.'
    },
    price: 260,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-omelette-bacon',
    category: 'omelette',
    type: 'food',
    name: { en: 'Bacon Omelette', tr: 'Pastırmalı Omlet' },
    description: {
      en: 'Crispy bacon pieces folded into a perfectly cooked egg omelette.',
      tr: 'Çıtır pastırma dilimleriyle zenginleştirilmiş nefis sıcak omlet.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Savory', tr: 'Lezzetli' }
    ]
  },
  {
    id: 'f-omelette-mix',
    category: 'omelette',
    type: 'food',
    name: { en: 'Mix Omelette', tr: 'Karışık Omlet' },
    description: {
      en: 'A delicious combination of cheese, tomatoes, mushrooms, and savory sausage.',
      tr: 'Peynir, domates, mantar ve lezzetli sosislerin mükemmel uyumuyla hazırlanan karışık omlet.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Rich', tr: 'Zengin' }
    ]
  },
  {
    id: 'f-omelette-vegetable',
    category: 'omelette',
    type: 'food',
    name: { en: 'Vegetable Omelette', tr: 'Sebzeli Omlet' },
    description: {
      en: 'Fluffy omelette filled with fresh bell peppers, onions, tomatoes, and spinach.',
      tr: 'Taze renkli biberler, soğan, domates ve ıspanak ile hazırlanan sağlıklı sebzeli omlet.'
    },
    price: 280,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  // FOOD - Lunch Burger
  {
    id: 'f-burger-hamburger',
    category: 'lunch_burger',
    type: 'food',
    name: { en: 'Hamburger', tr: 'Hamburger' },
    description: {
      en: 'Classic flame-grilled beef patty with lettuce, tomato, pickles, and burger sauce.',
      tr: 'Klasik ateş ızgarasında pişmiş dana köftesi, marul, domates, turşu ve burger sosu.'
    },
    price: 490,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Classic', tr: 'Klasik' }
    ]
  },
  {
    id: 'f-burger-cheeseburger',
    category: 'lunch_burger',
    type: 'food',
    name: { en: 'Cheeseburger', tr: 'Cheeseburger' },
    description: {
      en: 'Flame-grilled beef patty topped with melted cheddar cheese, lettuce, tomato, pickles, and sauce.',
      tr: 'Erimiş cheddar peynirli dana köftesi, marul, domates, turşu ve burger sosu.'
    },
    price: 510,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Popular', tr: 'Popüler' }
    ]
  },
  {
    id: 'f-burger-chicken',
    category: 'lunch_burger',
    type: 'food',
    name: { en: 'Chicken Burger', tr: 'Tavuk Burger' },
    description: {
      en: 'Crispy golden chicken breast fillet, fresh lettuce, and creamy mayonnaise on a soft bun.',
      tr: 'Çıtır tavuk göğsü filetosu, taze marul ve kremsi mayonez ile yumuşacık ekmekte.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Chicken', tr: 'Tavuklu' }
    ]
  },
  {
    id: 'f-burger-bacon-egg',
    category: 'lunch_burger',
    type: 'food',
    name: { en: 'Bacon Egg Burger', tr: 'Yumurtalı Pastırmalı Burger' },
    description: {
      en: 'Delicious grilled beef patty with crispy bacon, a fried egg, melted cheese, and fresh greens.',
      tr: 'Çıtır pastırma, sahanda yumurta, erimiş peynir ve taze yeşilliklerle leziz dana burger.'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Special', tr: 'Özel' }
    ]
  },
  {
    id: 'f-burger-double',
    category: 'lunch_burger',
    type: 'food',
    name: { en: 'Double Burger', tr: 'Double Burger' },
    description: {
      en: 'Two juicy beef patties stacked high with fresh lettuce, tomatoes, and house special burger sauce.',
      tr: 'İki adet sulu dana burger köftesi, taze marul, domates ve özel burger sosu.'
    },
    price: 690,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Big Portion', tr: 'Doyurucu Porsiyon' }
    ]
  },
  {
    id: 'f-burger-double-cheese',
    category: 'lunch_burger',
    type: 'food',
    name: { en: 'Double Cheese Burger', tr: 'Double Cheeseburger' },
    description: {
      en: 'Double beef patties layered with double melted cheddar cheese, pickles, onions, and mustard sauce.',
      tr: 'İki kat dana burger köftesi ve iki kat erimiş cheddar peyniri, turşu, soğan ve hardallı sos.'
    },
    price: 700,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Cheese Lover', tr: 'Bol Peynirli' }
    ]
  },
  {
    id: 'f-burger-chips-butty',
    category: 'lunch_burger',
    type: 'food',
    name: { en: 'Chips Butty', tr: 'Ekmek Arası Patates' },
    description: {
      en: 'A classic favorite: hot, crispy golden fries stuffed inside soft buttered white bread rolls.',
      tr: 'Sıcak ve çıtır altın sarısı patates kızartmasının tereyağlı yumuşak ekmek arasındaki klasik sunumu.'
    },
    price: 270,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Classic UK', tr: 'Klasik İngiliz' }
    ]
  },
  {
    id: 'f-burger-chips',
    category: 'lunch_burger',
    type: 'food',
    name: { en: 'Chips', tr: 'Patates Kızartması' },
    description: {
      en: 'A generous portion of hot, crispy golden French fries seasoned to perfection.',
      tr: 'Mükemmel şekilde baharatlanmış, çıtır ve sıcak altın sarısı patates kızartması.'
    },
    price: 250,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Side', tr: 'Garnitür' }
    ]
  },
  // FOOD - Sandwiches & Toast
  {
    id: 'f-sandwich-cheese-tomato',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Cheese Tomato Sandwich', tr: 'Peynirli ve Domatesli Sandviç' },
    description: {
      en: 'Fresh soft bread stuffed with delicious cheddar or feta cheese and ripe sliced tomatoes.',
      tr: 'Nefis peynir ve dilimlenmiş olgun domateslerle doldurulmuş taze yumuşak sandviç ekmeği.'
    },
    price: 250,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-sandwich-cheese-tomato-onion',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Cheese Tomato Onion Sandwich', tr: 'Peynirli Domatesli ve Soğanlı Sandviç' },
    description: {
      en: 'Freshly sliced tomatoes, onions, and rich cheese in a delicious sandwich bread.',
      tr: 'Taze dilimlenmiş domates, soğan ve lezzetli peynirin sandviç ekmeğindeki harika birlikteliği.'
    },
    price: 250,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-sandwich-tuna-mayo',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Tuna Mayonnaise Sandwich', tr: 'Ton Balıklı Mayonezli Sandviç' },
    description: {
      en: 'Premium tuna flakes mixed with creamy mayonnaise and sweetcorn, served in fresh bread.',
      tr: 'Kremsi mayonezle harmanlanmış kaliteli ton balığı ve mısır tanelerinin taze sandviç ekmeğinde sunumu.'
    },
    price: 380,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Seafood', tr: 'Deniz Ürünü' }
    ]
  },
  {
    id: 'f-sandwich-bacon-egg',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Bacon Egg Sandwich', tr: 'Yumurtalı Pastırmalı Sandviç' },
    description: {
      en: 'Crispy premium bacon and a perfectly fried egg inside freshly baked sandwich bread.',
      tr: 'Taze pişmiş sandviç ekmeği içinde çıtır çıtır pastırma ve mükemmel göz yumurta lezzeti.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Savory', tr: 'Lezzetli' }
    ]
  },
  {
    id: 'f-sandwich-bacon-butty',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Bacon Butty Sandwich', tr: 'Pastırmalı Butty Sandviç' },
    description: {
      en: 'A classic British favorite: warm buttered roll generously filled with crispy bacon.',
      tr: 'Klasik bir İngiliz lezzeti: Sıcak tereyağlı ekmek arasında bolca çıtır pastırma.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Classic UK', tr: 'Klasik İngiliz' }
    ]
  },
  {
    id: 'f-sandwich-steak',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Steak Sandwich', tr: 'Biftekli Sandviç' },
    description: {
      en: 'Tender grilled steak slices with caramelized onions and house sauce on a rustic sandwich roll.',
      tr: 'Karamelize soğan ve özel sosla tatlandırılmış, ızgara biftek dilimlerinin rustik ekmekte buluşması.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Rich', tr: 'Zengin' }
    ]
  },
  {
    id: 'f-sandwich-chicken-bacon-club',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Chicken Bacon Club', tr: 'Tavuklu Pastırmalı Club Sandviç' },
    description: {
      en: 'Triple-decker sandwich with grilled chicken breast, crispy bacon, lettuce, tomatoes, and mayo.',
      tr: 'Izgara tavuk göğsü, çıtır pastırma, taze marul, domates ve mayonez ile hazırlanan üç katlı klasik.'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Popular', tr: 'Popüler' }
    ]
  },
  {
    id: 'f-sandwich-chicken',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Chicken Sandwich', tr: 'Tavuklu Sandviç' },
    description: {
      en: 'Tender shredded or grilled chicken breast with fresh greens and house sauce in soft bread.',
      tr: 'Taze yeşillikler ve hafif sos eşliğinde yumuşacık sandviç ekmeğinde tavuk göğsü dilimleri.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Chicken', tr: 'Tavuklu' }
    ]
  },
  {
    id: 'f-toast-cheese-tomato',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Cheese Tomato Toast', tr: 'Kaşarlı Domatesli Tost' },
    description: {
      en: 'Warm, crispy pressed toast filled with melted cheese and fresh tomato slices.',
      tr: 'Erimiş kaşar peyniri ve taze domates dilimleriyle doldurulmuş sıcak, çıtır tost.'
    },
    price: 280,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-toast-cheese',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Cheese Toast', tr: 'Kaşarlı Tost' },
    description: {
      en: 'Classic pressed toast loaded with gooey melted local kashar cheese.',
      tr: 'Bol erimiş kaşar peyniri ile hazırlanan sıcak, çıtır geleneksel tost.'
    },
    price: 250,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-toast-mix',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Mix Toast', tr: 'Karışık Tost' },
    description: {
      en: 'Richly filled pressed toast with melted cheese, spicy Turkish sausage, and tomato slices.',
      tr: 'Erimiş kaşar peyniri, lezzetli sucuk ve domates dilimleriyle zengin içerikli karışık tost.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Classic', tr: 'Klasik' }
    ]
  },
  {
    id: 'f-toast-sausage-cheese',
    category: 'sandwiches_toast',
    type: 'food',
    name: { en: 'Sausage Cheese Toast', tr: 'Sucuklu Kaşarlı Tost' },
    description: {
      en: 'Delicious hot pressed toast filled with local spicy sausage and melted kashar cheese.',
      tr: 'Enfes sucuk dilimleri ve bol erimiş kaşar peynirli sıcak çıtır tost.'
    },
    price: 280,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Savory', tr: 'Lezzetli' }
    ]
  },
  // FOOD - Wraps
  {
    id: 'f-wrap-chicken-chips',
    category: 'wraps',
    type: 'food',
    name: { en: 'Chicken Wrap', tr: 'Tavuk Dürüm' },
    description: {
      en: 'Served with chips.',
      tr: 'Patates kızartması ile servis edilir.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Served with Chips', tr: 'Patates Kızartmalı' }
    ]
  },
  {
    id: 'f-wrap-meatball',
    category: 'wraps',
    type: 'food',
    name: { en: 'Meatball Wrap', tr: 'Köfte Dürüm' },
    description: {
      en: 'Served with chips.',
      tr: 'Patates kızartması ile servis edilir.'
    },
    price: 480,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Served with Chips', tr: 'Patates Kızartmalı' }
    ]
  },
  {
    id: 'f-wrap-bacon',
    category: 'wraps',
    type: 'food',
    name: { en: 'Bacon Wrap', tr: 'Pastırmalı Dürüm' },
    description: {
      en: 'Served with chips.',
      tr: 'Patates kızartması ile servis edilir.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Served with Chips', tr: 'Patates Kızartmalı' }
    ]
  },
  {
    id: 'f-wrap-vegetable',
    category: 'wraps',
    type: 'food',
    name: { en: 'Vegetable Wrap', tr: 'Sebzeli Dürüm' },
    description: {
      en: 'Served with chips.',
      tr: 'Patates kızartması ile servis edilir.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Served with Chips', tr: 'Patates Kızartmalı' },
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-wrap-mix',
    category: 'wraps',
    type: 'food',
    name: { en: 'Mix Wrap', tr: 'Karışık Dürüm' },
    description: {
      en: 'Served with chips.',
      tr: 'Patates kızartması ile servis edilir.'
    },
    price: 750,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Served with Chips', tr: 'Patates Kızartmalı' }
    ]
  },
  {
    id: 'f-wrap-tuna',
    category: 'wraps',
    type: 'food',
    name: { en: 'Tuna Fish Wrap', tr: 'Ton Balıklı Dürüm' },
    description: {
      en: 'Served with chips.',
      tr: 'Patates kızartması ile servis edilir.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Served with Chips', tr: 'Patates Kızartmalı' }
    ]
  },
  // FOOD - Jacket Potato
  {
    id: 'f-potato-cheese-butter',
    category: 'jacket_potato',
    type: 'food',
    name: { en: 'Cheese & Butter Jacket Potato', tr: 'Tereyağlı ve Kaşarlı Kumpir' },
    description: {
      en: 'Fluffy baked potato mashed with creamy butter and melted local kashar cheese.',
      tr: 'Sıcak fırınlanmış patatesin nefis tereyağı ve bol erimiş kaşar peyniri ile harmanlanması.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-potato-chili-con-carne',
    category: 'jacket_potato',
    type: 'food',
    name: { en: 'Chili Con Carne Jacket Potato', tr: 'Acı Kıyma Soslu Kumpir' },
    description: {
      en: 'Perfectly baked potato loaded with rich, spicy chili con carne ground beef sauce.',
      tr: 'Özel baharatlı acı kıyma sosu (chili con carne) ile doldurulmuş fırınlanmış sıcak kumpir.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Spicy', tr: 'Acılı' }
    ]
  },
  {
    id: 'f-potato-garlic-mushroom',
    category: 'jacket_potato',
    type: 'food',
    name: { en: 'Garlic Mushroom Jacket Potato', tr: 'Sarımsaklı Mantarlı Kumpir' },
    description: {
      en: 'Fluffy baked potato filled with sautéed garlic forest mushrooms and melted cheese.',
      tr: 'Sarımsaklı sote mantarlar ve erimiş kaşar peyniriyle zenginleştirilmiş sıcak kumpir.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-potato-cheese-coleslaw',
    category: 'jacket_potato',
    type: 'food',
    name: { en: 'Cheese & Coleslaw Jacket Potato', tr: 'Peynirli ve Coleslaw Salatalı Kumpir' },
    description: {
      en: 'Fabulous baked potato stuffed with melted cheese and fresh, creamy coleslaw salad.',
      tr: 'Erimiş kaşar peyniri ve taze kremalı lahana salatası (coleslaw) ile doldurulmuş harika kumpir.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-potato-baked-beans-cheese',
    category: 'jacket_potato',
    type: 'food',
    name: { en: 'Baked Beans & Cheese Jacket Potato', tr: 'Kuru Fasulyeli ve Peynirli Kumpir' },
    description: {
      en: 'Classic combination of warm sweet baked beans in tomato sauce and melted cheese.',
      tr: 'Tatlı domates soslu fırınlanmış kuru fasulye ve erimiş kaşar peynirinin nefis klasik buluşması.'
    },
    price: 570,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-potato-chicken-mayo',
    category: 'jacket_potato',
    type: 'food',
    name: { en: 'Chicken Mayonnaise Jacket Potato', tr: 'Mayonezli Tavuklu Kumpir' },
    description: {
      en: 'Savoury baked potato topped with tender shredded chicken breast and creamy mayonnaise.',
      tr: 'Yumuşacık tiftiklenmiş tavuk göğsü ve kremsi mayonez dolgulu sıcak nefis kumpir.'
    },
    price: 490,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Chicken', tr: 'Tavuklu' }
    ]
  },
  {
    id: 'f-potato-plain',
    category: 'jacket_potato',
    type: 'food',
    name: { en: 'Plain Jacket Potato', tr: 'Sade Kumpir' },
    description: {
      en: 'Simply baked, crispy on the outside, fluffy on the inside giant potato.',
      tr: 'Dışı çıtır, içi yumuşacık fırınlanmış sade dev patates.'
    },
    price: 290,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-potato-mix',
    category: 'jacket_potato',
    type: 'food',
    name: { en: 'Mixed Jacket Potato', tr: 'Karışık Kumpir' },
    description: {
      en: 'Richly loaded with sweetcorn, green peas, black olives, sliced sausage, carrots, red cabbage, cheddar cheese, and butter.',
      tr: 'Mısır, bezelye, siyah zeytin, sosis dilimleri, havuç, kırmızı lahana, cheddar peyniri ve tereyağı dolgulu zengin kumpir.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Rich', tr: 'Zengin İçerik' }
    ]
  },
  {
    id: 'f-potato-tuna-sweetcorn',
    category: 'jacket_potato',
    type: 'food',
    name: { en: 'Tuna & Sweetcorn Jacket Potato', tr: 'Ton Balıklı ve Mısırlı Kumpir' },
    description: {
      en: 'Fabulous combination of flaked tuna and sweetcorn kernels with melted cheese.',
      tr: 'Erimiş peynir, kaliteli ton balığı parçacıkları ve tatlı mısır tanelerinin harika uyumu.'
    },
    price: 470,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Seafood', tr: 'Deniz Ürünlü' }
    ]
  },
  // FOOD - Pizza
  {
    id: 'f-pizza-margarita',
    category: 'pizza',
    type: 'food',
    name: { en: 'Pizza Margarita', tr: 'Pizza Margarita' },
    description: {
      en: 'Classic Italian pizza with rich tomato sauce, fresh mozzarella, and aromatic basil leaves.',
      tr: 'Klasik İtalyan tarifiyle zengin domates sosu, taze mozzarella ve aromatik fesleğen yaprakları.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' },
      { en: 'Classic', tr: 'Klasik' }
    ]
  },
  {
    id: 'f-pizza-prosciutto-funghi',
    category: 'pizza',
    type: 'food',
    name: { en: 'Pizza Prosciutto e Funghi', tr: 'Jambonlu Mantarlı Pizza' },
    description: {
      en: 'Stone-baked pizza topped with mozzarella, savory turkey ham, sliced fresh mushrooms, and herbs.',
      tr: 'Mozzarella peyniri, dana jambon, dilimlenmiş taze mantarlar ve baharatlarla taş fırında pişen pizza.'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Stone Baked', tr: 'Taş Fırında' }
    ]
  },
  {
    id: 'f-pizza-diavola',
    category: 'pizza',
    type: 'food',
    name: { en: 'Pizza Diavola', tr: 'Biberli Sosisli Pizza' },
    description: {
      en: 'Fiery Italian pizza with spicy sausage slices, bell peppers, chili flakes, and melted mozzarella.',
      tr: 'Acılı sosis dilimleri, renkli biberler, pul biber ve erimiş mozzarella peynirli acılı İtalyan pizzası.'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Spicy', tr: 'Acılı' }
    ]
  },
  {
    id: 'f-pizza-gamberetti',
    category: 'pizza',
    type: 'food',
    name: { en: 'Pizza Gamberetti', tr: 'Karidesli Pizza' },
    description: {
      en: 'Gourmet thin-crust pizza topped with juicy marinated shrimp, fresh garlic, parsley, and mozzarella.',
      tr: 'Marine edilmiş nefis karidesler, taze sarımsak, maydanoz ve mozzarella ile gurme ince kenar pizza.'
    },
    price: 750,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Seafood', tr: 'Deniz Ürünlü' }
    ]
  },
  {
    id: 'f-pizza-pepperoni-classic',
    category: 'pizza',
    type: 'food',
    name: { en: 'Pizza Pepperoni', tr: 'Biberli Sucuklu Pizza' },
    description: {
      en: 'Satisfying pizza loaded with premium pepperoni slices, green bell peppers, and plenty of cheese.',
      tr: 'Bol pepperoni dilimleri, yeşil biber ve bol peynirle hazırlanan doyurucu nefis pizza.'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Popular', tr: 'Popüler' }
    ]
  },
  {
    id: 'f-pizza-mix',
    category: 'pizza',
    type: 'food',
    name: { en: 'Mixed Pizza', tr: 'Karışık Pizza' },
    description: {
      en: 'A rich combination of sausage, pepperoni, mushrooms, corn, olives, and bell peppers.',
      tr: 'Sosis, sucuk, mantar, mısır, zeytin ve renkli biberlerin zengin buluşmasından oluşan karışık lezzet.'
    },
    price: 800,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Rich', tr: 'Zengin İçerik' }
    ]
  },
  {
    id: 'f-pizza-vegetable',
    category: 'pizza',
    type: 'food',
    name: { en: 'Vegetable Pizza', tr: 'Sebzeli Pizza' },
    description: {
      en: 'Garden fresh tomatoes, bell peppers, onions, black olives, sweetcorn, and mushrooms on melted mozzarella.',
      tr: 'Taze domates, renkli biberler, soğan, siyah zeytin, mısır ve mantarların nefis mozzarella üzerindeki renkli şöleni.'
    },
    price: 570,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1571066811602-71683a3f680d?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-pizza-tuna',
    category: 'pizza',
    type: 'food',
    name: { en: 'Tuna Fish Pizza', tr: 'Ton Balıklı Pizza' },
    description: {
      en: 'Flaked tuna fish, red onions, sweetcorn, and black olives over rich tomato sauce and cheese.',
      tr: 'Zengin domates sosu ve peynir üzerinde ton balığı parçacıkları, kırmızı soğan, mısır ve siyah zeytin.'
    },
    price: 570,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Seafood', tr: 'Deniz Ürünlü' }
    ]
  },
  {
    id: 'f-pizza-chicken',
    category: 'pizza',
    type: 'food',
    name: { en: 'Chicken Pizza', tr: 'Tavuklu Pizza' },
    description: {
      en: 'Grilled chicken breast cubes, caramelized onions, sweetcorn, and savory sauce on a cheese crust.',
      tr: 'Izgara tavuk göğsü küpleri, karamelize soğan, tatlı mısır ve peynirli taban üzerinde enfes sos.'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Chicken', tr: 'Tavuklu' }
    ]
  },
  // FOOD - Spaghetti & Pasta
  {
    id: 'f-pasta-napolitan',
    category: 'spaghetti_pasta',
    type: 'food',
    name: { en: 'Spaghetti Napolitana', tr: 'Domates Soslu Makarna' },
    description: {
      en: 'Classic spaghetti pasta tossed in a rich, slow-cooked herb tomato sauce and fresh basil.',
      tr: 'Ağır ateşte pişmiş baharatlı zengin domates sosu ve taze fesleğen ile harmanlanmış klasik spagetti.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-pasta-bolognaise',
    category: 'spaghetti_pasta',
    type: 'food',
    name: { en: 'Spaghetti Bolognaise', tr: 'Kıyma Soslu Makarna' },
    description: {
      en: 'Spaghetti pasta topped with a classic hearty slow-simmered beef bolognese sauce and parmesan.',
      tr: 'Yavaşça demlenmiş klasik kıymalı bolonez sosu ve parmesan peyniri ile servis edilen nefis spagetti.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1516100882582-76c9a486dd57?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Hearty', tr: 'Doyurucu' }
    ]
  },
  {
    id: 'f-pasta-carbonara',
    category: 'spaghetti_pasta',
    type: 'food',
    name: { en: 'Spaghetti Carbonara', tr: 'Kremalı Yumurtalı Makarna' },
    description: {
      en: 'Creamy and rich pasta made with organic eggs, crispy cured meats, cracked black pepper, and cheese.',
      tr: 'Organik yumurta, çıtır et dilimleri, taze çekilmiş siyah karabiber ve peynirle hazırlanan kremalı enfes spagetti.'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Rich', tr: 'Zengin' }
    ]
  },
  {
    id: 'f-pasta-arrabbiata',
    category: 'spaghetti_pasta',
    type: 'food',
    name: { en: 'Spaghetti Arrabbiata', tr: 'Arabiata Soslu Makarna' },
    description: {
      en: 'Classic spicy pasta tossed in a fiery tomato sauce with garlic, chili flakes, and extra virgin olive oil.',
      tr: 'Sarımsak, acı pul biber ve sızma zeytinyağı ile hazırlanan acılı domates soslu klasik spagetti.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' },
      { en: 'Spicy', tr: 'Acılı' }
    ]
  },
  {
    id: 'f-pasta-cheese',
    category: 'spaghetti_pasta',
    type: 'food',
    name: { en: 'Spaghetti Cheese', tr: 'Peynirli Spagetti' },
    description: {
      en: 'Simple and comforting: spaghetti pasta tossed with melted cheeses and fresh butter.',
      tr: 'Hem sade hem nefis: Tereyağı ve erimiş peynir çeşitleri ile harmanlanmış spagetti.'
    },
    price: 530,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-pasta-penne-plain',
    category: 'spaghetti_pasta',
    type: 'food',
    name: { en: 'Pasta Penne', tr: 'Penne Makarna' },
    description: {
      en: 'Perfectly al dente penne pasta served with your choice of light tomato-herb sauce or butter sauce.',
      tr: 'Hafif domates sosu veya tereyağlı sos eşliğinde tam kıvamında pişmiş penne makarna.'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-pasta-vegetable',
    category: 'spaghetti_pasta',
    type: 'food',
    name: { en: 'Vegetable Pasta', tr: 'Sebzeli Makarna' },
    description: {
      en: 'Pasta tossed with a colorful medley of garden vegetables like zucchini, bell peppers, tomatoes, and broccoli.',
      tr: 'Kabak, renkli biberler, domates ve brokoli gibi bahçe sebzelerinin taze karışımıyla harmanlanmış makarna.'
    },
    price: 540,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-pasta-seafood',
    category: 'spaghetti_pasta',
    type: 'food',
    name: { en: 'Pasta Seafood', tr: 'Deniz Ürünleri Makarna' },
    description: {
      en: 'Bronze-cut pasta tossed in a delicate garlic and white sauce with premium calamari, mussels, and shrimp.',
      tr: 'Hafif sarımsaklı ve kremalı sos içerisinde birinci sınıf kalamar, midye ve karideslerle harmanlanmış makarna.'
    },
    price: 900,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Seafood', tr: 'Deniz Ürünlü' }
    ]
  },
  // FOOD - Vegetable Dishes
  {
    id: 'f-veg-casserole',
    category: 'vegetable_dishes',
    type: 'food',
    name: { en: 'Vegetable Casserole', tr: 'Sebzeli Güveç' },
    description: {
      en: 'Slow-cooked fresh seasonal vegetables with garlic, herbs, and a light tomato broth.',
      tr: 'Sarımsak, taze otlar ve hafif domates sosu ile güveçte ağır ağır pişirilmiş taze mevsim sebzeleri.'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-veg-curry',
    category: 'vegetable_dishes',
    type: 'food',
    name: { en: 'Vegetable Curry', tr: 'Sebzeli Köri' },
    description: {
      en: 'Aromatic and flavorful mild vegetable curry served with fluffy steamed rice.',
      tr: 'Tane pirinç pilavı eşliğinde servis edilen aromatik ve lezzetli hafif sebzeli köri.'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-veg-shish',
    category: 'vegetable_dishes',
    type: 'food',
    name: { en: 'Vegetable Shish', tr: 'Sebze Şiş' },
    description: {
      en: 'Grilled skewers of colorful bell peppers, onions, mushrooms, and cherry tomatoes, seasoned and chargrilled.',
      tr: 'Izgarada pişirilmiş renkli biberler, soğan, mantar ve çeri domatesli nefis sebze şiş.'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' },
      { en: 'Grilled', tr: 'Izgara' }
    ]
  },
  {
    id: 'f-veg-menemen',
    category: 'vegetable_dishes',
    type: 'food',
    name: { en: 'Turkish Menemen', tr: 'Menemen' },
    description: {
      en: 'Traditional Turkish scrambled eggs cooked with diced tomatoes, green bell peppers, and olive oil.',
      tr: 'İnce kıyılmış domates, yeşil biber ve sızma zeytinyağı ile pişen geleneksel nefis menemen.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Traditional', tr: 'Geleneksel' },
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  // FOOD - Hot Starters
  {
    id: 'f-starter-soup',
    category: 'hot_starters',
    type: 'food',
    name: { en: 'Soup of the Day', tr: 'Günün Çorbası' },
    description: {
      en: 'Freshly prepared daily soup, served with warm house bread.',
      tr: 'Taze malzemelerle günlük hazırlanan sıcak çorba, taze ekmek eşliğinde.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Warm', tr: 'Sıcak' }
    ]
  },
  {
    id: 'f-starter-cheese-rolls',
    category: 'hot_starters',
    type: 'food',
    name: { en: 'Cheese Rolls', tr: 'Sigara Böreği' },
    description: {
      en: 'Crispy golden pastry rolls filled with savory feta cheese and fresh parsley.',
      tr: 'Feta peyniri ve taze maydanoz dolgulu çıtır altın sarısı sıcak sigara böreği.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-starter-garlic-bread-cheese',
    category: 'hot_starters',
    type: 'food',
    name: { en: 'Garlic Bread and Cheese', tr: 'Sarımsaklı ve Peynirli Ekmek' },
    description: {
      en: 'Toasted artisan bread slices rubbed with garlic butter and topped with melted mozzarella cheese.',
      tr: 'Sarımsaklı tereyağı sürülmüş ve erimiş mozzarella peyniriyle fırınlanmış çıtır ekmek dilimleri.'
    },
    price: 280,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-starter-garlic-mushroom',
    category: 'hot_starters',
    type: 'food',
    name: { en: 'Garlic Mushroom', tr: 'Sarımsaklı Mantar' },
    description: {
      en: 'Sautéed mushrooms cooked with rich garlic, butter, and herbs.',
      tr: 'Sarımsak, tereyağı ve taze otlar ile sote edilmiş nefis mantarlar.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-starter-garlic-prawn',
    category: 'hot_starters',
    type: 'food',
    name: { en: 'Garlic Prawn in Cream Sauce', tr: 'Kremalı Sarımsaklı Karides' },
    description: {
      en: 'Tender prawns sautéed in a rich, creamy garlic and white sauce.',
      tr: 'Zengin krema ve sarımsaklı sos içerisinde sote edilmiş nefis taze karidesler.'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Seafood', tr: 'Deniz Ürünü' }
    ]
  },
  // FOOD - Cold Starters
  {
    id: 'f-starter-vine-leaves',
    category: 'cold_starters',
    type: 'food',
    name: { en: 'Stuffed Vine Leaves', tr: 'Yaprak Sarması' },
    description: {
      en: 'Grapevine leaves stuffed with seasoned aromatic rice, pine nuts, and currants, cooked in olive oil.',
      tr: 'Baharatlı pirinç, dolmalık fıstık ve kuş üzümlü iç harçla sarılmış, zeytinyağlı geleneksel yaprak sarması.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' },
      { en: 'Traditional', tr: 'Geleneksel' }
    ]
  },
  {
    id: 'f-starter-chili-dip',
    category: 'cold_starters',
    type: 'food',
    name: { en: 'Chili Dip', tr: 'Acılı Ezme' },
    description: {
      en: 'Finely minced spicy tomatoes, bell peppers, onions, garlic, and fresh herbs with pomegranate molasses.',
      tr: 'İnce kıyılmış taze domates, biber, soğan, sarımsak, taze otlar ve nar ekşili nefis acılı ezme.'
    },
    price: 330,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Spicy', tr: 'Acılı' }
    ]
  },
  {
    id: 'f-starter-yoghurt-dip',
    category: 'cold_starters',
    type: 'food',
    name: { en: 'Yoghurt Dip', tr: 'Haydari' },
    description: {
      en: 'Thick strained yoghurt blended with garlic, fresh mint, dill, and a touch of extra virgin olive oil.',
      tr: 'Sarımsak, taze nane, dereotu ve sızma zeytinyağı ile hazırlanan süzme yoğurtlu meze.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-starter-russian-salad',
    category: 'cold_starters',
    type: 'food',
    name: { en: 'Russian Salad', tr: 'Rus Salatası' },
    description: {
      en: 'Classic salad of diced boiled potatoes, carrots, peas, and pickles, folded in rich creamy mayonnaise.',
      tr: 'Haşlanmış patates, havuç, bezelye ve kornişon turşu küplerinin kremsi mayonezle harmanlandığı klasik Rus salatası.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  {
    id: 'f-starter-aubergine-salad',
    category: 'cold_starters',
    type: 'food',
    name: { en: 'Aubergine Salad', tr: 'Patlıcan Salatası' },
    description: {
      en: 'Smoky fire-roasted aubergine purée with garlic, olive oil, lemon juice, and red bell peppers.',
      tr: 'Közlenmiş patlıcan, sarımsak, sızma zeytinyağı, limon suyu ve köz kırmızı biberli nefis salata.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vegetarian', tr: 'Vejetaryen' }
    ]
  },
  // FOOD - Chicken Dishes
  {
    id: 'f-chicken-breast',
    category: 'chicken_dishes',
    type: 'food',
    name: { en: 'Chicken Breast', tr: 'Tavuk Göğsü' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-chicken-bombay',
    category: 'chicken_dishes',
    type: 'food',
    name: { en: 'Chicken Bombay', tr: 'Beyaz Şarap Soslu Mantarlı Kremalı Peynirli Tavuk' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 680,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-chicken-stroganoff',
    category: 'chicken_dishes',
    type: 'food',
    name: { en: 'Chicken Stroganoff', tr: 'Mantarlı Kremalı Tavuk' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 680,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-chicken-curry',
    category: 'chicken_dishes',
    type: 'food',
    name: { en: 'Chicken Curry', tr: 'Köri Soslu Tavuk' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 680,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-chicken-shish',
    category: 'chicken_dishes',
    type: 'food',
    name: { en: 'Chicken Shish Kebap', tr: 'Tavuk Şiş Kebap' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-chicken-saute',
    category: 'chicken_dishes',
    type: 'food',
    name: { en: 'Chicken Sauté', tr: 'Tavuk Sote' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-chicken-schnitzel',
    category: 'chicken_dishes',
    type: 'food',
    name: { en: 'Chicken Schnitzel', tr: 'Tavuk Şinitzel' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 650,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop&q=80'
  },
  // FOOD - Meat Dishes
  {
    id: 'f-meat-lamb-shank',
    category: 'meat_dishes',
    type: 'food',
    name: { en: 'Lamb Shank', tr: 'Kuzu İncik' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 1500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-meat-steak-saute',
    category: 'meat_dishes',
    type: 'food',
    name: { en: 'Steak Sauté', tr: 'Et Sote' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 950,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-meat-pepper-steak',
    category: 'meat_dishes',
    type: 'food',
    name: { en: 'Pepper Steak', tr: 'Biberli Biftek' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 1200,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-meat-beef-fillet',
    category: 'meat_dishes',
    type: 'food',
    name: { en: 'Beef Fillet Steak', tr: 'Dana Bonfile' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 1200,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-meat-beef-stroganoff',
    category: 'meat_dishes',
    type: 'food',
    name: { en: 'Beef Stroganoff', tr: 'Et Stroganoff' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 990,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-meat-beef-curry',
    category: 'meat_dishes',
    type: 'food',
    name: { en: 'Beef Curry', tr: 'Etli Köri' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 990,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-meat-beef-shish',
    category: 'meat_dishes',
    type: 'food',
    name: { en: 'Beef Shish Kebap', tr: 'Dana Şiş Kebap' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 970,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-meat-meatballs',
    category: 'meat_dishes',
    type: 'food',
    name: { en: 'Meatballs', tr: 'Köfte' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, patates kızartması ve salata ile servis edilir'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  // FOOD - Salads
  {
    id: 'f-salad-cheese',
    category: 'salads',
    type: 'food',
    name: { en: 'Cheese Salad', tr: 'Peynirli Salata' },
    description: {
      en: 'Fresh mixed salad greens topped with crumbled feta cheese and dressed with olive oil.',
      tr: 'Taze karışık salata yeşillikleri üzerine ufalanmış beyaz peynir ve zeytinyağlı sos eşliğinde.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-salad-cheese-tomato-onion',
    category: 'salads',
    type: 'food',
    name: { en: 'Cheese Tomato Onion Salad', tr: 'Peynirli Domatesli Soğanlı Salata' },
    description: {
      en: 'A fresh, traditional salad of ripe tomatoes, onions, and crumbled cheese drizzled with olive oil.',
      tr: 'Olgun domatesler, soğan halkaları ve sızma zeytinyağı ile tatlandırılmış leziz peynirli salata.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-salad-chicken',
    category: 'salads',
    type: 'food',
    name: { en: 'Chicken Salad', tr: 'Tavuk Salatası' },
    description: {
      en: 'Coal-grilled chicken breast slices on top of crisp greens with a light dressing.',
      tr: 'Kömür ateşinde pişmiş tavuk göğsü dilimleri ve taze çıtır salata yeşillikleri.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-salad-tuna',
    category: 'salads',
    type: 'food',
    name: { en: 'Tuna Mayonnaise Sweetcorn Salad', tr: 'Ton Balıklı ve Mısırlı Salata' },
    description: {
      en: 'Tender tuna chunks, mayonnaise, and sweetcorn tossed with fresh lettuce and vegetables.',
      tr: 'Taze yeşillikler, ton balığı, mayonez ve tatlı mısır taneleri ile harmanlanmış nefis salata.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-salad-green',
    category: 'salads',
    type: 'food',
    name: { en: 'Green Salad', tr: 'Yeşillik Salatası' },
    description: {
      en: 'An assortment of fresh seasonal green leaves dressed with olive oil and lemon juice.',
      tr: 'Sızma zeytinyağı ve limon sosuyla hazırlanan taze mevsim yeşillikleri salatası.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-salad-mixed',
    category: 'salads',
    type: 'food',
    name: { en: 'Mixed Salad', tr: 'Karışık Salata' },
    description: {
      en: 'A combination of lettuce, cucumbers, tomatoes, carrots, and red cabbage with olive oil.',
      tr: 'Marul, salatalık, domates, havuç ve kırmızı lahana içeren zeytinyağlı klasik karışık salata.'
    },
    price: 450,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-salad-seafood',
    category: 'salads',
    type: 'food',
    name: { en: 'Seafood Salad', tr: 'Deniz Ürünleri Salatası' },
    description: {
      en: 'A premium mix of fresh seafood served over a bed of crisp greens.',
      tr: 'Taze yeşillikler üzerinde servis edilen nefis deniz ürünleri karışımı salatası.'
    },
    price: 900,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-salad-octopus',
    category: 'salads',
    type: 'food',
    name: { en: 'Octopus Salad', tr: 'Ahtapot Salatası' },
    description: {
      en: 'Tender marinated octopus slices tossed with fresh greens, herbs, and lemon-olive oil dressing.',
      tr: 'Zeytinyağı, limon ve taze otlarla marina edilmiş nefis ahtapot salatası.'
    },
    price: 850,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-salad-shrimp',
    category: 'salads',
    type: 'food',
    name: { en: 'Shrimp Salad', tr: 'Karides Salatası' },
    description: {
      en: 'Sautéed tender shrimps on a bed of fresh, crisp green salad with olive oil and herbs.',
      tr: 'Sızma zeytinyağı ve taze otlar ile harmanlanmış, çıtır yeşillikler üzerinde nefis karides salatası.'
    },
    price: 850,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  // FOOD - Sea Food Dishes
  {
    id: 'f-seafood-calamari',
    category: 'seafood_dishes',
    type: 'food',
    name: { en: 'Fried Calamary', tr: 'Kalamar Tava' },
    description: {
      en: 'Served with chips and salad',
      tr: 'Cips ve salata ile servis edilir'
    },
    price: 950,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-seafood-prawn-casserole',
    category: 'seafood_dishes',
    type: 'food',
    name: { en: 'Prawn Casserole', tr: 'Karides Güveç' },
    description: {
      en: 'Served with chips and salad',
      tr: 'Cips ve salata ile servis edilir'
    },
    price: 950,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-seafood-whiting',
    category: 'seafood_dishes',
    type: 'food',
    name: { en: 'Whiting', tr: 'Mezgit' },
    description: {
      en: 'Served with chips and salad',
      tr: 'Cips ve salata ile servis edilir'
    },
    price: 850,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-seafood-seabass-new',
    category: 'seafood_dishes',
    type: 'food',
    name: { en: 'Seabass', tr: 'Levrek' },
    description: {
      en: 'Served with chips and salad',
      tr: 'Cips ve salata ile servis edilir'
    },
    price: 850,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-seafood-seabream',
    category: 'seafood_dishes',
    type: 'food',
    name: { en: 'Seabream', tr: 'Çupra' },
    description: {
      en: 'Served with chips and salad',
      tr: 'Cips ve salata ile servis edilir'
    },
    price: 850,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-seafood-trout',
    category: 'seafood_dishes',
    type: 'food',
    name: { en: 'Trout', tr: 'Alabalık' },
    description: {
      en: 'Served with chips and salad',
      tr: 'Cips ve salata ile servis edilir'
    },
    price: 0,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80'
  },
  // FOOD - Kids Menu
  {
    id: 'f-kids-sausage-egg-chips',
    category: 'kids_menu',
    type: 'food',
    name: { en: 'Sausage Egg Chips', tr: 'Sosis Yumurta Patates' },
    description: {
      en: 'Juicy sausage, fried egg, and crispy golden fries.',
      tr: 'Sosis, sahanda yumurta ve çıtır patates kızartması.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-kids-nuggets',
    category: 'kids_menu',
    type: 'food',
    name: { en: 'Chicken Nugget', tr: 'Parmak Tavuk' },
    description: {
      en: 'Golden crispy chicken nuggets served with delicious fries.',
      tr: 'Sıcak patates kızartması eşliğinde çıtır çıtır altın tavuk lokmaları.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-kids-egg-chips-beans',
    category: 'kids_menu',
    type: 'food',
    name: { en: 'Egg Chips Beans', tr: 'Yumurta Patates Fasulye' },
    description: {
      en: 'A classic pairing of fried egg, golden fries, and baked beans.',
      tr: 'Sahanda yumurta, çıtır patates kızartması ve fırınlanmış fasulye.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-kids-sausage-egg-beans-chips',
    category: 'kids_menu',
    type: 'food',
    name: { en: 'Sausage Egg Beans Chips', tr: 'Sosis Yumurta Fasulye Patates' },
    description: {
      en: 'A loaded children\'s plate with sausage, fried egg, beans, and crispy fries.',
      tr: 'Sosis, sahanda yumurta, fırınlanmış fasulye ve çıtır patates kızartması.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-kids-fish-fingers',
    category: 'kids_menu',
    type: 'food',
    name: { en: 'Fish Fingers', tr: 'Parmak Balık' },
    description: {
      en: 'Served with chips.',
      tr: 'Cips ile servis edilir.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80'
  },
  // FOOD - Specials
  {
    id: 'f-special-gammon-steak',
    category: 'specials',
    type: 'food',
    name: { en: 'Gammon Steak', tr: 'Domuz Biftek' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, cips ve salata ile servis edilir'
    },
    price: 21,
    currency: 'GBP',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-special-pork-chops',
    category: 'specials',
    type: 'food',
    name: { en: 'Pork Chops', tr: 'Domuz Pirzola' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, cips ve salata ile servis edilir'
    },
    price: 21,
    currency: 'GBP',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-special-pork-fillet',
    category: 'specials',
    type: 'food',
    name: { en: 'Pork Fillet', tr: 'Domuz Fileto' },
    description: {
      en: 'Served with rice, chips and salad',
      tr: 'Pilav, cips ve salata ile servis edilir'
    },
    price: 25,
    currency: 'GBP',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  // FOOD - Desserts
  {
    id: 'f-dessert-chocolate-pc',
    category: 'desserts',
    type: 'food',
    name: { en: 'Chocolate PC', tr: 'Çikolatalı Krep' },
    description: {
      en: 'Delicious crepe filled with premium warm chocolate sauce.',
      tr: 'Nefis sıcak çikolata sosu dolgulu taze krep.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-dessert-sugar-lemon-pc',
    category: 'desserts',
    type: 'food',
    name: { en: 'Sugar & Lemon PC', tr: 'Şekerli Limonlu Krep' },
    description: {
      en: 'Classic crepe dusted with sugar and drizzled with fresh lemon juice.',
      tr: 'Üzerine şeker serpiştirilmiş ve taze sıkılmış limon suyu gezdirilmiş klasik krep.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-dessert-walnut-honey-pc',
    category: 'desserts',
    type: 'food',
    name: { en: 'Walnut & Honey PC', tr: 'Cevizli Ballı Krep' },
    description: {
      en: 'Freshly made crepe filled with organic honey and crunchy walnuts.',
      tr: 'Süzme çiçek balı ve çıtır ceviz içiyle doldurulmuş taze krep.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-dessert-banana-honey-pc',
    category: 'desserts',
    type: 'food',
    name: { en: 'Banana & Honey PC', tr: 'Muzlu Ballı Krep' },
    description: {
      en: 'Warm crepe loaded with sweet banana slices and pure organic honey.',
      tr: 'Muz dilimleri ve süzme çiçek balı ile tatlandırılmış enfes krep.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-dessert-ice-cream',
    category: 'desserts',
    type: 'food',
    name: { en: 'Ice Cream', tr: 'Dondurma' },
    description: {
      en: 'A selection of traditional, rich, and creamy ice cream scoops.',
      tr: 'Geleneksel, zengin kıvamlı ve lezzetli dondurma çeşitleri.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-dessert-fruit-salad',
    category: 'desserts',
    type: 'food',
    name: { en: 'Fresh Fruit Salad', tr: 'Meyve Salatası' },
    description: {
      en: 'A refreshing bowl of seasonal fresh fruits cut into bite-sized pieces.',
      tr: 'Mevsimin en taze meyvelerinin bir araya geldiği ferahlatıcı meyve tabağı.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-dessert-cheesecake',
    category: 'desserts',
    type: 'food',
    name: { en: 'Cheese Cake', tr: 'Peynirli Kek' },
    description: {
      en: 'Rich and velvety baked cheesecake slice on a sweet crust.',
      tr: 'Kıtır taban üzerinde fırınlanmış, kadifemsi kıvamda nefis cheesecake dilimi.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'f-dessert-baklava-classic',
    category: 'desserts',
    type: 'food',
    name: { en: 'Baklava', tr: 'Baklava' },
    description: {
      en: 'Traditional crispy layered pastry filled with chopped nuts and sweetened with syrup.',
      tr: 'Şerbet ve fıstık dolgulu çıtır çıtır geleneksel ev baklavası.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&auto=format&fit=crop&q=80'
  },
  // DRINKS - Soft Drinks (Fulfills Soft Drinks requests)
  {
    id: 'd-sd-fruitjuice',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Fruit Juice', tr: 'Meyve Suyu' },
    description: {
      en: 'A selection of refreshing fruit juices.',
      tr: 'Serinletici meyve suyu çeşitleri.'
    },
    price: 130,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Refreshing', tr: 'Ferahlatıcı' },
      { en: 'Fruity', tr: 'Meyveli' }
    ]
  },
  {
    id: 'd-sd-fanta',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Fanta', tr: 'Fanta' },
    description: {
      en: 'Classic fizzy orange soft drink.',
      tr: 'Klasik gazlı portakallı meşrubat.'
    },
    price: 130,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Fizzy', tr: 'Gazlı' },
      { en: 'Sweet', tr: 'Tatlı' }
    ]
  },
  {
    id: 'd-sd-sprite',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Sprite', tr: 'Sprite' },
    description: {
      en: 'Crisp and refreshing lemon-lime soda.',
      tr: 'Ferahlatıcı limon ve misket limonlu gazoz.'
    },
    price: 130,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1625772290748-160b2a603897?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Crisp', tr: 'Gevrek' },
      { en: 'Citrus', tr: 'Narenciye' }
    ]
  },
  {
    id: 'd-sd-mineral',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Mineral Water', tr: 'Maden Suyu' },
    description: {
      en: 'Sparkling premium local mineral water.',
      tr: 'Doğal mineralli maden suyu.'
    },
    price: 100,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1608885898957-a599fb15ec3e?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Sparkling', tr: 'Gazlı' },
      { en: 'Pure', tr: 'Doğal' }
    ]
  },
  {
    id: 'd-sd-redbull',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Red Bull', tr: 'Red Bull' },
    description: {
      en: 'Energy drink to vitalize body and mind.',
      tr: 'Zihin ve bedeni canlandıran enerji içeceği.'
    },
    price: 200,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1622543953490-0b70068779a9?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Energy', tr: 'Enerji' },
      { en: 'Active', tr: 'Aktif' }
    ]
  },
  {
    id: 'd-sd-orange',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Fresh Orange Juice', tr: 'Taze Sıkılmış Portakal Suyu' },
    description: {
      en: 'Freshly squeezed sweet Mediterranean oranges.',
      tr: 'Taze sıkılmış tatlı Akdeniz portakalları.'
    },
    price: 200,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Fresh', tr: 'Taze' },
      { en: 'Healthy', tr: 'Sağlıklı' }
    ]
  },
  {
    id: 'd-sd-icetea',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Ice Tea', tr: 'Soğuk Çay (Ice Tea)' },
    description: {
      en: 'Chilled iced tea available in peach or lemon flavors.',
      tr: 'Şeftali veya limon aromalı ferahlatıcı soğuk çay.'
    },
    price: 130,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Chilled', tr: 'Soğuk' },
      { en: 'Flavored', tr: 'Aromalı' }
    ]
  },
  {
    id: 'd-sd-milkshake',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Milkshake', tr: 'Milkshake' },
    description: {
      en: 'Creamy blended milkshake with your choice of chocolate, vanilla, or strawberry.',
      tr: 'Çikolatalı, vanilyalı veya çilekli kremamsı milkshake.'
    },
    price: 250,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Creamy', tr: 'Kremamsı' },
      { en: 'Sweet', tr: 'Tatlı' }
    ]
  },
  {
    id: 'd-sd-iceespresso',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Ice Cafe Espresso', tr: 'Ice Cafe Espresso' },
    description: {
      en: 'A chilled double shot of bold espresso poured over ice.',
      tr: 'Buz üzerinde servis edilen soğuk ve sert çift shot espresso.'
    },
    price: 130,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Caffeine', tr: 'Kafeinli' },
      { en: 'Bold', tr: 'Sert' }
    ]
  },
  {
    id: 'd-sd-cansoft',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Can of Soft Drinks', tr: 'Kutu Meşrubat' },
    description: {
      en: 'Your choice of canned soda (Coca-Cola, Coke Zero, Fanta, or Sprite).',
      tr: 'Tercihinize göre kutu meşrubat seçenekleri (Coca-Cola, Cola Zero, Fanta veya Sprite).'
    },
    price: 130,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1581636625402-29b2a7ba4efd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Canned', tr: 'Kutuda' }
    ]
  },
  {
    id: 'd-sd-icecoffee',
    category: 'soft_drinks',
    type: 'drink',
    name: { en: 'Ice Coffee', tr: 'Soğuk Kahve (Ice Coffee)' },
    description: {
      en: 'Chilled brewed coffee served over ice with a splash of milk.',
      tr: 'Buzlu ve hafif sütlü ferahlatıcı soğuk kahve.'
    },
    price: 150,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1517701553060-d518ba58bbad?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Chilled', tr: 'Soğuk' },
      { en: 'Smooth', tr: 'Yumuşak' }
    ]
  },
  // DRINKS - Hot Drinks (Fulfills Hot Drinks requests)
  {
    id: 'd-hd-coffee',
    category: 'hot_drinks',
    type: 'drink',
    name: { en: 'Brewed Coffee', tr: 'Çekirdek Kahve' },
    description: {
      en: 'Freshly brewed aromatic filter coffee made from premium beans.',
      tr: 'Seçkin kahve çekirdeklerinden taze demlenmiş aromatik çekirdek kahve.'
    },
    price: 150,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Classic', tr: 'Klasik' },
      { en: 'Aromatic', tr: 'Aromatik' }
    ],
    ingredients: [
      { en: 'Premium Coffee Beans', tr: 'Premium Kahve Çekirdekleri' }
    ],
    calories: 5
  },
  {
    id: 'd-hd-turkish',
    category: 'hot_drinks',
    type: 'drink',
    name: { en: 'Turkish Coffee', tr: 'Türk Kahvesi' },
    description: {
      en: 'Traditional slowly sand-brewed Turkish coffee with rich froth, served with Turkish delight.',
      tr: 'Kumda ağır ağır pişirilmiş bol köpüklü geleneksel Türk kahvesi, lokum eşliğinde.'
    },
    price: 150,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Traditional', tr: 'Geleneksel' },
      { en: 'Strong', tr: 'Sert' }
    ],
    ingredients: [
      { en: 'Finely Ground Arabica', tr: 'İnce Öğütülmüş Arabica' }
    ],
    calories: 10
  },
  {
    id: 'd-hd-espresso',
    category: 'hot_drinks',
    type: 'drink',
    name: { en: 'Espresso', tr: 'Espresso' },
    description: {
      en: 'A bold, concentrated shot of premium espresso with a beautiful crema.',
      tr: 'Yoğun lezzete ve kadifemsi kremaya sahip tek shot premium espresso.'
    },
    price: 100,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1510707513156-46c31e05188a?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Bold', tr: 'Yoğun' },
      { en: 'Pure', tr: 'Sade' }
    ],
    ingredients: [
      { en: 'Espresso Roast', tr: 'Espresso Kavrulmuş Çekirdek' }
    ],
    calories: 2
  },
  {
    id: 'd-hd-cappuccino',
    category: 'hot_drinks',
    type: 'drink',
    name: { en: 'Cappuccino', tr: 'Kapuçino (Cappuccino)' },
    description: {
      en: 'Classic espresso balanced with steamed milk and a deep layer of velvety foam.',
      tr: 'Klasik espresso, sıcak süt ve yoğun kadifemsi süt köpüğünün mükemmel uyumu.'
    },
    price: 180,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Frothy', tr: 'Köpüklü' },
      { en: 'Balanced', tr: 'Dengeli' }
    ],
    ingredients: [
      { en: 'Espresso', tr: 'Espresso' },
      { en: 'Steamed Milk', tr: 'Sıcak Süt' },
      { en: 'Milk Foam', tr: 'Süt Köpüğü' }
    ],
    calories: 120
  },
  {
    id: 'd-hd-hotchocolate',
    category: 'hot_drinks',
    type: 'drink',
    name: { en: 'Hot Chocolate', tr: 'Sıcak Çikolata' },
    description: {
      en: 'Rich Belgian chocolate melted into creamy hot steamed milk, topped with a pinch of cocoa.',
      tr: 'Yoğun Belçika çikolatasının sıcak kremamsı sütle eritilmesiyle hazırlanan enfes içecek.'
    },
    price: 180,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Sweet', tr: 'Tatlı' },
      { en: 'Comforting', tr: 'Isıtıcı' }
    ],
    ingredients: [
      { en: 'Belgian Chocolate', tr: 'Belçika Çikolatası' },
      { en: 'Whole Milk', tr: 'Tam Yağlı Süt' }
    ],
    calories: 210
  },
  {
    id: 'd-hd-latte',
    category: 'hot_drinks',
    type: 'drink',
    name: { en: 'Caffe Latte', tr: 'Kafet Latte (Caffe Latte)' },
    description: {
      en: 'A smooth shot of espresso combined with plenty of velvety steamed milk and a light foam layer.',
      tr: 'Bol miktarda sıcak süt ve hafif köpük ile birleştirilmiş yumuşak içimli espresso.'
    },
    price: 180,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Smooth', tr: 'Yumuşak' },
      { en: 'Milky', tr: 'Bol Sütlü' }
    ],
    ingredients: [
      { en: 'Espresso shot', tr: 'Espresso shot' },
      { en: 'Steamed Milk', tr: 'Sıcak Süt' }
    ],
    calories: 130
  },
  {
    id: 'd-hd-tea',
    category: 'hot_drinks',
    type: 'drink',
    name: { en: 'Traditional Tea', tr: 'Türk Çayı' },
    description: {
      en: 'Premium Turkish black tea freshly brewed in a traditional double teapot, served in a tulip glass.',
      tr: 'Geleneksel çift demlikte taze demlenmiş seçkin Türk çayı, ince belli bardakta servis edilir.'
    },
    price: 120,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Traditional', tr: 'Geleneksel' },
      { en: 'Freshly Brewed', tr: 'Taze Demleme' }
    ],
    ingredients: [
      { en: 'Black Tea Leaves', tr: 'Siyah Çay Yaprakları' }
    ],
    calories: 2
  },
  {
    id: 'd-hd-irish',
    category: 'hot_drinks',
    type: 'drink',
    name: { en: 'Irish Coffee', tr: 'İrlanda Kahvesi (Irish Coffee)' },
    description: {
      en: 'A warming cocktail of hot coffee, premium Irish whiskey, and sugar, topped with thick fresh cream.',
      tr: 'Sıcak çekirdek kahve, premium İrlanda viskisi ve esmer şeker karışımının, yoğun taze krema ile buluşması.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Spirited', tr: 'Alkollü' },
      { en: 'Warming', tr: 'Isıtıcı' }
    ],
    ingredients: [
      { en: 'Brewed Coffee', tr: 'Demleme Kahve' },
      { en: 'Irish Whiskey', tr: 'İrlanda Viskisi' },
      { en: 'Fresh Cream', tr: 'Taze Krema' }
    ],
    alcoholByVolume: '8.0%',
    calories: 210
  },
  {
    id: 'd-hd-french',
    category: 'hot_drinks',
    type: 'drink',
    name: { en: 'French Coffee', tr: 'Fransız Kahvesi (French Coffee)' },
    description: {
      en: 'Hot brewed coffee elevated with aromatic Grand Marnier orange liqueur and fresh whipped cream.',
      tr: 'Sıcak çekirdek kahvenin, aromatik Grand Marnier portakal likörü ve taze çırpılmış krema ile lüks sunumu.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Spirited', tr: 'Alkollü' },
      { en: 'Elegant', tr: 'Şık Sunum' }
    ],
    ingredients: [
      { en: 'Brewed Coffee', tr: 'Demleme Kahve' },
      { en: 'Grand Marnier Liqueur', tr: 'Grand Marnier Likörü' },
      { en: 'Whipped Cream', tr: 'Çırpılmış Krema' }
    ],
    alcoholByVolume: '7.5%',
    calories: 220
  },

  // DRINKS - Local Drinks (Fulfills Local Drinks requests)
  {
    id: 'd-ld-raki',
    category: 'local_drinks',
    type: 'drink',
    name: { en: 'Raki', tr: 'Türk Rakısı (Raki)' },
    description: {
      en: 'Anise-flavored traditional grape spirit, served chilled with water and ice side-by-side.',
      tr: 'Geleneksel anason aromalı yaş üzüm distilesi, soğuk su ve buz eşliğinde sunulur.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbbc5d?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Anise Spirit', tr: 'Anasonlu' },
      { en: 'Traditional', tr: 'Geleneksel' }
    ],
    ingredients: [
      { en: 'Grape Distillate', tr: 'Kuru/Yaş Üzüm Distilesi' },
      { en: 'Aniseed', tr: 'Anason Tohumu' }
    ],
    alcoholByVolume: '45.0%',
    calories: 130
  },
  {
    id: 'd-ld-vodka',
    category: 'local_drinks',
    type: 'drink',
    name: { en: 'Vodka', tr: 'Votka' },
    description: {
      en: 'Triple-distilled premium vodka, exceptionally smooth and crisp, served with your choice of mixer.',
      tr: 'Üç kez damıtılmış seçkin sek votka, tercih edeceğiniz bir meşrubat veya buzla servis edilir.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Smooth', tr: 'Yumuşak' },
      { en: 'Chilled', tr: 'Soğuk' }
    ],
    ingredients: [
      { en: 'Premium Spirit', tr: 'Premium Alkol' }
    ],
    alcoholByVolume: '40.0%',
    calories: 96
  },
  {
    id: 'd-ld-gin',
    category: 'local_drinks',
    type: 'drink',
    name: { en: 'Gin', tr: 'Cin' },
    description: {
      en: 'Crisp botanical gin infused with natural juniper berries, coriander, and citrus peels.',
      tr: 'Doğal ardıç meyveleri, kişniş ve narenciye kabukları ile aromalandırılmış canlandırıcı cin.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Botanical', tr: 'Bitkisel Aromalı' }
    ],
    ingredients: [
      { en: 'Juniper Berries', tr: 'Ardıç Meyveleri' },
      { en: 'Coriander', tr: 'Kişniş' }
    ],
    alcoholByVolume: '40.0%',
    calories: 96
  },
  {
    id: 'd-ld-brandy',
    category: 'local_drinks',
    type: 'drink',
    name: { en: 'Brandy', tr: 'Brendi' },
    description: {
      en: 'Warm, oak-aged brandy featuring rich complex notes of vanilla, oak wood, and dried raisins.',
      tr: 'Meşe fıçılarda yıllandırılmış, vanilya ve kuru üzüm tonları barındıran gövdeli brendi.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Oak Aged', tr: 'Meşede Yıllanmış' },
      { en: 'Rich', tr: 'Geniş Gövdeli' }
    ],
    ingredients: [
      { en: 'Wine Distillate', tr: 'Damıtılmış Üzüm Şırası' }
    ],
    alcoholByVolume: '38.0%',
    calories: 110
  },
  {
    id: 'd-ld-glasswine',
    category: 'local_drinks',
    type: 'drink',
    name: { en: 'Glass of Wine', tr: 'Kadeh Şarap' },
    description: {
      en: 'A glass of our exquisite house selection red, white, or rosé wine.',
      tr: 'Tesisimize özel seçilmiş kırmızı, beyaz veya roze ev şarabımızdan bir kadeh lezzet.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'By the Glass', tr: 'Kadeh' }
    ],
    ingredients: [
      { en: 'House Grapes Selection', tr: 'Özel Ev Üzümleri Seçkisi' }
    ],
    alcoholByVolume: '13.0%',
    calories: 120
  },
  {
    id: 'd-ld-liquors',
    category: 'local_drinks',
    type: 'drink',
    name: { en: 'Liquors', tr: 'Likör Çeşitleri' },
    description: {
      en: 'An assortment of premium local and international sweet digestif liquors.',
      tr: 'Yemek sonrası keyif için sunulan yerli ve yabancı seçkin tatlı likör alternatiflerimiz.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Digestif', tr: 'Yemek Sonrası' },
      { en: 'Sweet', tr: 'Tatlı Aromalı' }
    ],
    ingredients: [
      { en: 'Sweet Liqueur Infusions', tr: 'Tatlı Likör Özütleri' }
    ],
    alcoholByVolume: '18.0%',
    calories: 105
  },

  // DRINKS - Beer List (Fulfills Beer list requests)
  {
    id: 'd-b-large',
    category: 'beer_list',
    type: 'drink',
    name: { en: 'Large Beer', tr: 'Büyük Bira' },
    description: {
      en: 'A generous pour of cold, crisp draft beer.',
      tr: 'Buz gibi ve taze fıçı biranın büyük boy sunumu.'
    },
    price: 0,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Draft', tr: 'Fıçı' }
    ],
    ingredients: [
      { en: 'Draft Beer', tr: 'Fıçı Bira' }
    ],
    alcoholByVolume: '5.0%',
    calories: 220
  },
  {
    id: 'd-b-small',
    category: 'beer_list',
    type: 'drink',
    name: { en: 'Small Beer', tr: 'Küçük Bira' },
    description: {
      en: 'A chilled pour of cold, crisp draft beer.',
      tr: 'Buz gibi ve taze fıçı biranın küçük boy sunumu.'
    },
    price: 0,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Draft', tr: 'Fıçı' }
    ],
    ingredients: [
      { en: 'Draft Beer', tr: 'Fıçı Bira' }
    ],
    alcoholByVolume: '5.0%',
    calories: 140
  },
  {
    id: 'd-b-efes-bottle',
    category: 'beer_list',
    type: 'drink',
    name: { en: 'Efes bottle', tr: 'Efes Şişe' },
    description: {
      en: 'Classic premium Turkish pilsner served chilled in its signature bottle.',
      tr: 'Geleneksel Türk pilsner birası, ikonik şişesinde buz gibi servis edilir.'
    },
    price: 250,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Bottle', tr: 'Şişe' },
      { en: 'Local Lager', tr: 'Yerel Lager' }
    ],
    ingredients: [
      { en: 'Premium Barley Malt', tr: 'Kaliteli Arpa Maltı' }
    ],
    alcoholByVolume: '5.0%',
    calories: 140
  },
  {
    id: 'd-b-bomonti',
    category: 'beer_list',
    type: 'drink',
    name: { en: 'Bomonti', tr: 'Bomonti Filtresiz' },
    description: {
      en: 'Smooth, 100% malt unfiltered Turkish lager, well known for its soft drinkable profile.',
      tr: '%100 malt, taze ve yumuşak içimli filtre edilmemiş pürüzsüz yerli lager bira.'
    },
    price: 250,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Unfiltered', tr: 'Filtresiz' },
      { en: '100% Malt', tr: '%100 Malt' }
    ],
    ingredients: [
      { en: 'Unfiltered Barley Malt', tr: 'Filtrelenmemiş Arpa Maltı' }
    ],
    alcoholByVolume: '4.8%',
    calories: 150
  },
  {
    id: 'd-b-miller',
    category: 'beer_list',
    type: 'drink',
    name: { en: 'Miller', tr: 'Miller' },
    description: {
      en: 'An exceptionally smooth, quad-filtered international golden lager.',
      tr: 'Dört kez filtrelenmiş, son derece pürüzsüz ve hafif içimli uluslararası lager bira.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Imported', tr: 'İthal' }
    ],
    ingredients: [
      { en: 'Quad-filtered Malt', tr: 'Dört Kez Filtrelenmiş Malt' }
    ],
    alcoholByVolume: '4.7%',
    calories: 140
  },
  {
    id: 'd-b-becks',
    category: 'beer_list',
    type: 'drink',
    name: { en: 'Becks', tr: 'Becks' },
    description: {
      en: 'Classic German pilsner with a distinctive full-bodied taste and fresh hoppy aroma.',
      tr: 'Kendine has dolgun gövdesi ve yoğun şerbetçiotu aromasıyla klasik Alman pilsner birası.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'German Pilsner', tr: 'Alman Pilsner' }
    ],
    ingredients: [
      { en: 'German Noble Hops', tr: 'Alman Şerbetçiotu' }
    ],
    alcoholByVolume: '5.0%',
    calories: 145
  },
  {
    id: 'd-b-corona',
    category: 'beer_list',
    type: 'drink',
    name: { en: 'Corona', tr: 'Corona' },
    description: {
      en: 'Light and refreshing Mexican lager, traditionally served cold with a lime wedge.',
      tr: 'Hafif ve canlandırıcı Meksika birası, limon dilimi eşliğinde soğuk servis edilir.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1629115911451-913a8fc4856f?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Mexican Lager', tr: 'Meksika Birası' }
    ],
    ingredients: [
      { en: 'Barley Malt, Yeast, Water, Lime', tr: 'Arpa Maltı, Maya, Su, Limon' }
    ],
    alcoholByVolume: '4.5%',
    calories: 140
  },
  {
    id: 'd-b-strongbow',
    category: 'beer_list',
    type: 'drink',
    name: { en: 'Strongbow', tr: 'Strongbow Elma Siderı' },
    description: {
      en: 'A pleasant, sweet and crisp golden apple cider with a refreshing sparkling finish.',
      tr: 'Tatlı ve ferahlatıcı altın elma siderı, tazeleyici hafif asitli bitiş.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Apple Cider', tr: 'Elma Siderı' }
    ],
    ingredients: [
      { en: 'Fermented Apple Juice', tr: 'Fermente Elma Suyu' }
    ],
    alcoholByVolume: '5.0%',
    calories: 160
  },
  {
    id: 'd-b-cider',
    category: 'beer_list',
    type: 'drink',
    name: { en: 'Cider', tr: 'Cider (Elma Siderı)' },
    description: {
      en: 'Artisanal fermented fruit cider boasting clean, fruity, and crisp flavors.',
      tr: 'Taze meyvelerden fermente edilmiş, canlandırıcı ve meyvemsi butik sider.'
    },
    price: 350,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Artisanal', tr: 'Butik Üretim' }
    ],
    ingredients: [
      { en: 'Fermented Fruit Selection', tr: 'Seçkin Fermente Meyveler' }
    ],
    alcoholByVolume: '4.5%',
    calories: 150
  },

  // DRINKS - Whiskies (Fulfills Whiskies requests)
  {
    id: 'd-wh-jack',
    category: 'whiskies',
    type: 'drink',
    name: { en: 'Jack Daniel’s', tr: 'Jack Daniel’s' },
    description: {
      en: 'Classic sour mash Tennessee whiskey with sweet notes of caramel, vanilla, and toasted oak.',
      tr: 'Karamel, vanilya ve fırınlanmış meşe aromalı klasik Tennessee viskisi.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Tennessee', tr: 'Tennessee Viskisi' }
    ],
    ingredients: [
      { en: 'Sour Mash Whiskey', tr: 'Damıtılmış Tennessee Viskisi' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },
  {
    id: 'd-wh-jim',
    category: 'whiskies',
    type: 'drink',
    name: { en: 'Lım beam', tr: 'Jim Beam (Lim Beam)' },
    description: {
      en: 'Elegant, smooth, and refined Kentucky straight bourbon whiskey aged in oak.',
      tr: 'Meşe fıçılarda yıllandırılmış, yumuşak ve pürüzsüz Kentucky düz burbon viski.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Bourbon', tr: 'Burbon' }
    ],
    ingredients: [
      { en: 'Corn Mash Whiskey', tr: 'Mısır Distilesi Viski' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },
  {
    id: 'd-wh-famous',
    category: 'whiskies',
    type: 'drink',
    name: { en: 'Famous grouse', tr: 'The Famous Grouse' },
    description: {
      en: 'A smooth, perfectly balanced premium blended Scotch whiskey with hints of citrus and spice.',
      tr: 'Narenciye ve hafif baharat notaları içeren, mükemmel dengeli ve pürüzsüz harman İskoç viskisi.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Blended Scotch', tr: 'Harman İskoç' }
    ],
    ingredients: [
      { en: 'Blended Malt and Grain', tr: 'Malt ve Tahıl Viskileri' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },
  {
    id: 'd-wh-johnnie',
    category: 'whiskies',
    type: 'drink',
    name: { en: 'Johnie walker', tr: 'Johnnie Walker Red Label' },
    description: {
      en: 'A dynamic, complex blended Scotch whiskey bursting with fresh spice and smoke flavors.',
      tr: 'Taze baharatlar ve isli tatlar barındıran, dinamik ve zengin harman İskoç viskisi.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Scotch', tr: 'İskoç' }
    ],
    ingredients: [
      { en: 'Premium Blended Scotch', tr: 'Harman İskoç Viskisi' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },
  {
    id: 'd-wh-chivas',
    category: 'whiskies',
    type: 'drink',
    name: { en: 'Chivas regal', tr: 'Chivas Regal 12' },
    description: {
      en: 'An exceptionally smooth, rich, and aromatic 12-year-old blended Scotch whiskey with hints of honey and orchard fruits.',
      tr: 'Bal ve meyve aromalarıyla zenginleştirilmiş, son derece yumuşak 12 yıllık harman İskoç viskisi.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Aged Scotch', tr: 'Yıllanmış İskoç' },
      { en: '12 Years Old', tr: '12 Yıllık' }
    ],
    ingredients: [
      { en: 'Blended Scotch Whiskey', tr: 'Harman İskoç Viskisi' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },
  {
    id: 'd-wh-jameson',
    category: 'whiskies',
    type: 'drink',
    name: { en: 'Jameson', tr: 'Jameson' },
    description: {
      en: 'A classic, triple-distilled Irish whiskey renowned for its outstanding smoothness and light sweet notes.',
      tr: 'Olağanüstü yumuşak içimi ve hafif tatlı notalarıyla ünlü, üç kez damıtılmış klasik İrlanda viskisi.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Irish Whiskey', tr: 'İrlanda Viskisi' }
    ],
    ingredients: [
      { en: 'Triple Distilled Barley', tr: 'Üç Kez Damıtılmış Arpa' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },
  {
    id: 'd-wh-teachers',
    category: 'whiskies',
    type: 'drink',
    name: { en: 'Teacher’s', tr: 'Teacher’s Highland Cream' },
    description: {
      en: 'A rich blended Scotch whiskey featuring an exceptionally high peat malt content for a deep smoky flavor.',
      tr: 'Yoğun is aroması sunmak için yüksek oranda malt viski içeren, dolgun gövdeli harman İskoç viskisi.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Blended Scotch', tr: 'Harman İskoç' }
    ],
    ingredients: [
      { en: 'Peated Highland Malt', tr: 'İsli Highland Maltı' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },
  {
    id: 'd-wh-jb',
    category: 'whiskies',
    type: 'drink',
    name: { en: 'J&B', tr: 'J&B Rare' },
    description: {
      en: 'A crisp, light blended Scotch whiskey with a distinctive fruity and smooth character.',
      tr: 'Kendine has meyvemsi ve hafif aromasıyla son derece popüler, canlandırıcı İskoç viskisi.'
    },
    price: 550,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Blended Scotch', tr: 'Harman İskoç' }
    ],
    ingredients: [
      { en: 'Blended Malt and Grain', tr: 'Malt ve Tahıl Harmanı' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },

  // DRINKS - Specials (Fulfills Specials drinks requests)
  {
    id: 'd-sp-sangria',
    category: 'specials_drinks',
    type: 'drink',
    name: { en: 'Jug of sangria', tr: 'Sürahi Sangria' },
    description: {
      en: 'A refreshing jug of Spanish sangria, crafted with red wine, fresh orange slices, brandy, and a hint of cinnamon.',
      tr: 'Kırmızı şarap, taze portakal dilimleri, konyak ve hafif tarçın dokunuşuyla hazırlanan ferahlatıcı sürahi sangria.'
    },
    price: 1500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Sharing', tr: 'Paylaşımlı' },
      { en: 'Fruity', tr: 'Meyveli' }
    ],
    ingredients: [
      { en: 'Red Wine', tr: 'Kırmızı Şarap' },
      { en: 'Brandy', tr: 'Konyak' },
      { en: 'Fresh Fruits', tr: 'Taze Meyveler' }
    ],
    alcoholByVolume: '11.5%',
    calories: 450
  },
  {
    id: 'd-sp-fishbowl',
    category: 'specials_drinks',
    type: 'drink',
    name: { en: 'Fish bowl', tr: 'Akvaryum Kokteyli (Fish Bowl)' },
    description: {
      en: 'An immersive and massive sharing cocktail served in a fish bowl, featuring premium vodkas, blue curaçao, and sparkling citrus juices.',
      tr: 'Devasa akvaryum bardağında servis edilen, kaliteli votkalar, mavi curaçao ve taze narenciye sularıyla hazırlanan muazzam bir paylaşım kokteyli.'
    },
    price: 1500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Signature', tr: 'İmza Lezzet' },
      { en: 'Large Sharing', tr: 'Büyük Paylaşım' }
    ],
    ingredients: [
      { en: 'Premium Vodka', tr: 'Premium Votka' },
      { en: 'Blue Curaçao', tr: 'Mavi Likör' },
      { en: 'Sparkling Lemonade', tr: 'Gazlı Limonata' }
    ],
    alcoholByVolume: '12.0%',
    calories: 600
  },
  {
    id: 'd-kc-cinderella',
    category: 'kids_cocktails',
    type: 'drink',
    name: { en: 'Cinderella', tr: 'Cinderella' },
    description: {
      en: 'A playful, sweet and refreshing kid-friendly cocktail made with sweet Coca-Cola and sparkling Fanta.',
      tr: "Coca-Cola ve gazlı Fanta'nın tatlı uyumuyla hazırlanan, eğlenceli ve serinletici çocuk kokteyli."
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Sweet', tr: 'Tatlı' },
      { en: 'Sparkling', tr: 'Gazlı' }
    ],
    ingredients: [
      { en: 'Coke', tr: 'Kola' },
      { en: 'Fanta', tr: 'Fanta' }
    ],
    calories: 110
  },
  {
    id: 'd-kc-shrek',
    category: 'kids_cocktails',
    type: 'drink',
    name: { en: 'Shrek', tr: 'Shrek' },
    description: {
      en: 'An adventurous and tangy mix of rich cherry juice and refreshing lemonade.',
      tr: 'Yoğun vişne suyu ve serinletici limonatanın macera dolu, mayhoş karışımı.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Tangy', tr: 'Mayhoş' },
      { en: 'Refreshing', tr: 'Ferahlatıcı' }
    ],
    ingredients: [
      { en: 'Cherry Juice', tr: 'Vişne Suyu' },
      { en: 'Lemonade', tr: 'Limonata' }
    ],
    calories: 95
  },
  {
    id: 'd-kc-tweety',
    category: 'kids_cocktails',
    type: 'drink',
    name: { en: 'Tweety', tr: 'Tweety' },
    description: {
      en: 'A bright, sunshine-colored cocktail with layered pineapple, cherry, and orange juices.',
      tr: 'Katmanlı ananas, vişne ve portakal sularıyla hazırlanan güneş gibi parlak bir çocuk kokteyli.'
    },
    price: 300,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1570598912132-0ba19951d747?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Fruity', tr: 'Meyveli' },
      { en: 'Vibrant', tr: 'Canlı' }
    ],
    ingredients: [
      { en: 'Pineapple Juice', tr: 'Ananas Suyu' },
      { en: 'Cherry Juice', tr: 'Vişne Suyu' },
      { en: 'Orange Juice', tr: 'Portakal Suyu' }
    ],
    calories: 120
  },
  {
    id: 'd-imp-martini-bianco',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Martini Bianco', tr: 'Martini Bianco' },
    description: {
      en: 'A medium-dry blend of fine Italian white wine infused with herbs and sweet botanicals.',
      tr: 'Bitki özleri ve tatlı botaniklerle zenginleştirilmiş kaliteli İtalyan sek beyaz şarabı harmanı.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vermouth', tr: 'Vermut' },
      { en: 'Italian', tr: 'İtalyan' }
    ],
    ingredients: [
      { en: 'Italian White Wine', tr: 'İtalyan Beyaz Şarabı' },
      { en: 'Herbal Infusions', tr: 'Bitkisel Özütler' }
    ],
    alcoholByVolume: '15.0%',
    calories: 140
  },
  {
    id: 'd-imp-martini-dry',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Martini Dry', tr: 'Martini Dry' },
    description: {
      en: 'Elegant, crisp, and exceptionally dry Italian vermouth with delicate herbal tones.',
      tr: 'Zarif, sek ve narin bitkisel tonlara sahip İtalyan vermutu.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vermouth', tr: 'Vermut' },
      { en: 'Dry', tr: 'Sek' }
    ],
    ingredients: [
      { en: 'Dry White Vermouth', tr: 'Sek Beyaz Vermut' }
    ],
    alcoholByVolume: '18.0%',
    calories: 120
  },
  {
    id: 'd-imp-gordon-gin',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Gordon Gin', tr: 'Gordon Gin' },
    description: {
      en: 'A classic, triple-distilled London dry gin boasting handpicked juniper berries and botanicals.',
      tr: 'Özenle seçilmiş ardıç meyveleri ve botaniklerle hazırlanan klasik, üç kez damıtılmış London dry cin.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Dry Gin', tr: 'Kuru Cin' },
      { en: 'London Dry', tr: 'Londra Tipi' }
    ],
    ingredients: [
      { en: 'Juniper Berries', tr: 'Ardıç Meyveleri' },
      { en: 'Botanical Blend', tr: 'Botanik Karışım' }
    ],
    alcoholByVolume: '37.5%',
    calories: 96
  },
  {
    id: 'd-imp-martini-rosso',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Martini Rosso', tr: 'Martini Rosso' },
    description: {
      en: 'A sweet, aromatic Italian red vermouth infused with a secret blend of local botanicals.',
      tr: 'Gizli bir yerel botanik karışımıyla zenginleştirilmiş tatlı, aromatik İtalyan kırmızı vermutu.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vermouth', tr: 'Vermut' },
      { en: 'Sweet Red', tr: 'Tatlı Kırmızı' }
    ],
    ingredients: [
      { en: 'Red Vermouth Infusions', tr: 'Kırmızı Vermut Özleri' }
    ],
    alcoholByVolume: '15.0%',
    calories: 140
  },
  {
    id: 'd-imp-pink-gin',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Pink Gin', tr: 'Pink Gin (Pembe Cin)' },
    description: {
      en: 'A delightfully sweet gin infused with the natural, aromatic flavors of red berries.',
      tr: 'Kırmızı orman meyvelerinin doğal ve aromatik lezzetleriyle harmanlanmış tatlı pembe cin.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Fruity Gin', tr: 'Meyveli Cin' },
      { en: 'Sweet', tr: 'Tatlı' }
    ],
    ingredients: [
      { en: 'Pink Gin Infusions', tr: 'Pembe Cin Özleri' }
    ],
    alcoholByVolume: '37.5%',
    calories: 110
  },
  {
    id: 'd-imp-smirnoff-gin',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Smirnoff Gin', tr: 'Smirnoff Gin' },
    description: {
      en: 'A crisp and exceptionally refreshing dry gin with a clean juniper and citrus focus.',
      tr: 'Temiz ardıç ve narenciye odaklı, gevrek ve son derece tazeleyici bir kuru cin.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Dry Gin', tr: 'Kuru Cin' }
    ],
    ingredients: [
      { en: 'Juniper Distillate', tr: 'Ardıç Distilesi' }
    ],
    alcoholByVolume: '37.5%',
    calories: 96
  },
  {
    id: 'd-imp-tequila',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Tequila', tr: 'Tekila (Tequila)' },
    description: {
      en: 'Smooth and vibrant Mexican silver tequila crafted from selected blue agave plants.',
      tr: 'Seçkin mavi agave bitkilerinden üretilmiş pürüzsüz ve canlı Meksika gümüş tekilası.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1516535794938-6063878f08cc?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Silver Tequila', tr: 'Gümüş Tekila' },
      { en: 'Mexican', tr: 'Meksika' }
    ],
    ingredients: [
      { en: 'Blue Agave', tr: 'Mavi Agave' }
    ],
    alcoholByVolume: '38.0%',
    calories: 96
  },
  {
    id: 'd-imp-baileys',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Baileys', tr: 'Baileys' },
    description: {
      en: 'A velvety, sweet Irish cream liqueur blending fine aged whiskey with fresh dairy cream.',
      tr: 'Yıllanmış kaliteli viski ile taze kremanın kadifemsi ve tatlı İrlanda kremalı likörü uyumu.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Cream Liqueur', tr: 'Kremsi Likör' },
      { en: 'Irish', tr: 'İrlanda' }
    ],
    ingredients: [
      { en: 'Irish Whiskey', tr: 'İrlanda Viskisi' },
      { en: 'Fresh Cream', tr: 'Taze Krema' },
      { en: 'Cocoa', tr: 'Kakao' }
    ],
    alcoholByVolume: '17.0%',
    calories: 160
  },
  {
    id: 'd-imp-tia-maria',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Tia Maria', tr: 'Tia Maria' },
    description: {
      en: 'Exquisite sweet dark coffee liqueur highlighting natural vanilla and cold brew coffee.',
      tr: 'Doğal vanilya ve soğuk demlenmiş kahve tonları barındıran seçkin tatlı koyu kahve likörü.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Coffee Liqueur', tr: 'Kahve Likörü' },
      { en: 'Sweet', tr: 'Tatlı' }
    ],
    ingredients: [
      { en: 'Coffee Beans', tr: 'Kahve Çekirdekleri' },
      { en: 'Madagascar Vanilla', tr: 'Madagaskar Vanilyası' }
    ],
    alcoholByVolume: '20.0%',
    calories: 110
  },
  {
    id: 'd-imp-safari',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Safari', tr: 'Safari' },
    description: {
      en: 'Exotic orange, passion fruit, lime, and papaya liqueur with a beautiful tropical sweetness.',
      tr: 'Egzotik portakal, çarkıfelek meyvesi, misket limonu ve papaya içeren tropikal tatlı likör.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Tropical', tr: 'Tropikal' },
      { en: 'Fruity', tr: 'Meyveli' }
    ],
    ingredients: [
      { en: 'Exotic Fruit Blend', tr: 'Egzotik Meyve Karışımı' }
    ],
    alcoholByVolume: '20.0%',
    calories: 120
  },
  {
    id: 'd-imp-malibu',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Malibu', tr: 'Malibu' },
    description: {
      en: 'Smooth coconut-flavored Caribbean rum delivering the sweet, sun-kissed taste of the tropics.',
      tr: 'Tropikal esintiler ve tatlı Hindistan cevizi aroması sunan yumuşak Karayip romu.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Coconut Rum', tr: 'Hindistan Cevizi Romu' },
      { en: 'Caribbean', tr: 'Karayip' }
    ],
    ingredients: [
      { en: 'Caribbean Rum', tr: 'Karayip Romu' },
      { en: 'Coconut Extract', tr: 'Hindistan Cevizi Özütü' }
    ],
    alcoholByVolume: '21.0%',
    calories: 130
  },
  {
    id: 'd-imp-bacardi',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Bacardi', tr: 'Bacardi' },
    description: {
      en: 'Superior light and smooth Cuban white rum with soft notes of vanilla and almond.',
      tr: 'Vanilya ve badem notalarına sahip, hafif ve pürüzsüz üstün kaliteli Küba beyaz romu.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'White Rum', tr: 'Beyaz Rom' },
      { en: 'Cuban', tr: 'Küba' }
    ],
    ingredients: [
      { en: 'Premium White Rum', tr: 'Premium Beyaz Rom' }
    ],
    alcoholByVolume: '37.5%',
    calories: 96
  },
  {
    id: 'd-imp-captain-morgan',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Captain Morgan', tr: 'Captain Morgan' },
    description: {
      en: 'Authentic, gold-colored Caribbean dark rum aged in oak barrels.',
      tr: 'Meşe fıçılarda yıllandırılmış otantik, altın renkli kaliteli Karayip romu.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Gold Rum', tr: 'Altın Rom' },
      { en: 'Caribbean', tr: 'Karayip' }
    ],
    ingredients: [
      { en: 'Aged Gold Rum', tr: 'Yıllanmış Altın Rom' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },
  {
    id: 'd-imp-captain-morgan-black',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Captain Morgan black', tr: 'Captain Morgan Black' },
    description: {
      en: 'Exceptionally deep and rich dark rum with heavy caramel and oak notes.',
      tr: 'Karamel ve meşe aromaları içeren, derin gövdeli ve zengin koyu renkli rom.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Dark Rum', tr: 'Koyu Rom' }
    ],
    ingredients: [
      { en: 'Aged Dark Rum', tr: 'Yıllanmış Koyu Rom' }
    ],
    alcoholByVolume: '40.0%',
    calories: 100
  },
  {
    id: 'd-imp-captain-morgan-spiced',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Captain Morgan spiced', tr: 'Captain Morgan Spiced' },
    description: {
      en: 'Premium spirit drink perfectly blended with Caribbean rum and expert warming spices.',
      tr: 'Karayip romu ve ısıtıcı tatlı baharatların mükemmel birleşimiyle üretilen premium içki.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Spiced Rum', tr: 'Baharatlı Rom' }
    ],
    ingredients: [
      { en: 'Spiced Caribbean Rum', tr: 'Baharatlı Karayip Romu' }
    ],
    alcoholByVolume: '35.0%',
    calories: 105
  },
  {
    id: 'd-imp-cointreau',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Cointreau', tr: 'Cointreau' },
    description: {
      en: 'Crystal clear French orange liqueur offering a perfect balance of sweet and bitter peels.',
      tr: 'Tatlı ve acı portakal kabuklarının mükemmel dengesini sunan şeffaf Fransız portakal likörü.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Orange Liqueur', tr: 'Portakal Likörü' },
      { en: 'French', tr: 'Fransız' }
    ],
    ingredients: [
      { en: 'Sweet and Bitter Orange Peels', tr: 'Tatlı ve Acı Portakal Kabukları' }
    ],
    alcoholByVolume: '40.0%',
    calories: 110
  },
  {
    id: 'd-imp-dramblu',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Dramblu', tr: 'Dramblu (Drambuie)' },
    description: {
      en: 'Golden scotch whiskey liqueur enriched with heather honey, herbs, and spices.',
      tr: 'Funda balı, şifalı otlar ve baharatlarla zenginleştirilmiş altın renkli viski likörü.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Whiskey Liqueur', tr: 'Viski Likörü' }
    ],
    ingredients: [
      { en: 'Scotch Whiskey', tr: 'İskoç Viskisi' },
      { en: 'Heather Honey', tr: 'Funda Balı' },
      { en: 'Secret Botanical Mix', tr: 'Gizli Bitki Karışımı' }
    ],
    alcoholByVolume: '40.0%',
    calories: 125
  },
  {
    id: 'd-imp-amaretto',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Amaretto', tr: 'Amaretto' },
    description: {
      en: 'Sweet, aromatic Italian liqueur featuring a distinctive, delicious almond-like flavor.',
      tr: 'Kendine has nefis ve tatlı badem aromasıyla ünlü İtalyan likörü.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Almond Liqueur', tr: 'Badem Likörü' },
      { en: 'Italian', tr: 'İtalyan' }
    ],
    ingredients: [
      { en: 'Almond extract', tr: 'Badem özü' },
      { en: 'Stone Fruit Kernels', tr: 'Çekirdek Özütleri' }
    ],
    alcoholByVolume: '28.0%',
    calories: 110
  },
  {
    id: 'd-imp-southern-comfort',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Southern comfort', tr: 'Southern Comfort' },
    description: {
      en: 'Unique American whiskey liqueur blended with sweet fruit and spice flavors.',
      tr: 'Tatlı meyve ve baharat aromalarıyla zenginleştirilmiş eşsiz Amerikan viski likörü.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Whiskey Liqueur', tr: 'Viski Likörü' },
      { en: 'American', tr: 'Amerikan' }
    ],
    ingredients: [
      { en: 'Whiskey Infusions', tr: 'Viski Özleri' },
      { en: 'Peach and Fruit Aromas', tr: 'Şeftali ve Meyve Aromaları' }
    ],
    alcoholByVolume: '35.0%',
    calories: 105
  },
  {
    id: 'd-imp-kahlua',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Kahlua', tr: 'Kahlua' },
    description: {
      en: 'Sweet and rich Mexican coffee liqueur crafted with 100% Arabica beans and rum.',
      tr: '%100 Arabica çekirdekleri ve rom ile üretilen tatlı ve zengin Meksika kahve likörü.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Coffee Liqueur', tr: 'Kahve Likörü' }
    ],
    ingredients: [
      { en: 'Arabica Coffee Beans', tr: 'Arabica Kahve Çekirdekleri' },
      { en: 'Sugar Cane Rum', tr: 'Şeker Kamışı Romu' }
    ],
    alcoholByVolume: '20.0%',
    calories: 110
  },
  {
    id: 'd-imp-archers',
    category: 'important_drinks',
    type: 'drink',
    name: { en: 'Archers', tr: 'Archers Peach Schnapps' },
    description: {
      en: 'Crisp and sweet peach schnapps offering clean, mouthwatering fruit flavors.',
      tr: 'Canlandırıcı, tatlı ve temiz şeftali aromaları sunan şeftali likörü.'
    },
    price: 400,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Peach Schnapps', tr: 'Şeftali Likörü' },
      { en: 'Fruity', tr: 'Meyveli' }
    ],
    ingredients: [
      { en: 'Peach Essences', tr: 'Şeftali Özleri' }
    ],
    alcoholByVolume: '18.0%',
    calories: 100
  },
  {
    id: 'd-cocktail-sex-on-the-beach',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Sex on the Beach', tr: 'Sex on the Beach' },
    description: {
      en: 'A classic beach favorite blending premium vodka, sweet peach schnapps (archers), tart cranberry, and fresh orange juice.',
      tr: 'Premium votka, tatlı şeftali likörü (archers), kızılcık ve taze portakal suyunun harika uyumu.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Fruity', tr: 'Meyveli' },
      { en: 'Tropical', tr: 'Tropikal' }
    ],
    ingredients: [
      { en: 'Vodka', tr: 'Votka' },
      { en: 'Archers', tr: 'Archers' },
      { en: 'Grenadine', tr: 'Grenadin' },
      { en: 'Orange Juice', tr: 'Portakal Suyu' }
    ],
    alcoholByVolume: '11.5%',
    calories: 185
  },
  {
    id: 'd-cocktail-cuba-libre',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Cuba Libre', tr: 'Cuba Libre' },
    description: {
      en: 'A timeless, simple classic of premium white rum and ice-cold cola, finished with fresh lime juice.',
      tr: 'Kaliteli beyaz rom ve buz gibi kola karışımına taze sıkılmış misket limonu suyu dokunuşu.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1551538827-9c02e5c031f4?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Classic', tr: 'Klasik' },
      { en: 'Refreshing', tr: 'Ferahlatıcı' }
    ],
    ingredients: [
      { en: 'White Rum', tr: 'Beyaz Rom' },
      { en: 'Cola', tr: 'Kola' },
      { en: 'Lime Juice', tr: 'Misket Limonu Suyu' }
    ],
    alcoholByVolume: '10.0%',
    calories: 150
  },
  {
    id: 'd-cocktail-bloody-mary',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Bloody Mary', tr: 'Bloody Mary' },
    description: {
      en: 'A savory, spicy wake-up call featuring crisp vodka, rich tomato juice, fresh lime, chili sauce, and seasonings.',
      tr: 'Sek votka, zengin domates suyu, taze misket limonu, acı sos ve taze baharatlarla hazırlanan iştah açıcı, hafif acılı klasik.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Savory', tr: 'Baharatlı' },
      { en: 'Spicy', tr: 'Acılı' }
    ],
    ingredients: [
      { en: 'Vodka', tr: 'Votka' },
      { en: 'Tomato Juice', tr: 'Domates Suyu' },
      { en: 'Chili Sauce', tr: 'Acı Sos' },
      { en: 'Lime Juice', tr: 'Misket Limonu Suyu' },
      { en: 'Black Pepper', tr: 'Karabiber' },
      { en: 'Salt', tr: 'Tuz' }
    ],
    alcoholByVolume: '12.0%',
    calories: 140
  },
  {
    id: 'd-cocktail-blue-lagoon',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Blue Lagoon', tr: 'Blue Lagoon' },
    description: {
      en: 'A vibrant blue-hued cocktail combining vodka, sweet peach schnapps, blue curaçao, and sparkling Sprite.',
      tr: 'Votka, tatlı şeftali likörü (archers), mavi curaçao ve gazlı Sprite ile hazırlanan göz alıcı mavi renkte egzotik kokteyl.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vibrant', tr: 'Canlı' },
      { en: 'Sweet', tr: 'Tatlı' }
    ],
    ingredients: [
      { en: 'Vodka', tr: 'Votka' },
      { en: 'Archers', tr: 'Archers' },
      { en: 'Blue Curaçao', tr: 'Mavi Kürasao' },
      { en: 'Sprite', tr: 'Sprite' }
    ],
    alcoholByVolume: '11.0%',
    calories: 160
  },
  {
    id: 'd-cocktail-tequila-sunrise',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Tequila Sunrise', tr: 'Tequila Sunrise' },
    description: {
      en: 'A bright, layered cocktail featuring fine tequila and fresh orange juice, with a beautiful sunrise effect of sweet grenadine.',
      tr: 'Kaliteli tekila ve taze portakal suyunun, tatlı nar şurubu (grenadin) ile oluşturduğu muhteşem gün doğumu manzarası.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Vibrant', tr: 'Canlı' },
      { en: 'Fruity', tr: 'Meyveli' }
    ],
    ingredients: [
      { en: 'Tequila', tr: 'Tekila' },
      { en: 'Grenadine', tr: 'Grenadin' },
      { en: 'Orange Juice', tr: 'Portakal Suyu' }
    ],
    alcoholByVolume: '12.0%',
    calories: 190
  },
  {
    id: 'd-cocktail-woo-woo',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Woo Woo', tr: 'Woo Woo' },
    description: {
      en: 'A fun and fruity mix of crisp vodka, sweet peach archers, fresh orange juice, and tart cranberry juice.',
      tr: 'Sek votka, tatlı şeftali likörü (archers), taze portakal suyu ve mayhoş kızılcık suyunun enerjik, meyvemsi birleşimi.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Sweet', tr: 'Tatlı' },
      { en: 'Fruity', tr: 'Meyveli' }
    ],
    ingredients: [
      { en: 'Vodka', tr: 'Votka' },
      { en: 'Archers', tr: 'Archers' },
      { en: 'Orange Juice', tr: 'Portakal Suyu' },
      { en: 'Cranberry Juice', tr: 'Kızılcık Suyu' }
    ],
    alcoholByVolume: '10.5%',
    calories: 155
  },
  {
    id: 'd-cocktail-pina-colada',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Pina Colada', tr: 'Pina Colada (Piña Colada)' },
    description: {
      en: 'An ultra-creamy tropical indulgence crafted with premium rum, Malibu coconut rum, coconut cream, and sweet pineapple juice.',
      tr: 'Premium rom, Malibu hindistan cevizi romu, yoğun hindistan cevizi kreması ve tatlı ananas suyunun ipeksi, egzotik uyumu.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1526333651147-5a8b5730d11e?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Creamy', tr: 'Kremsi' },
      { en: 'Tropical', tr: 'Tropikal' }
    ],
    ingredients: [
      { en: 'Rum', tr: 'Rom' },
      { en: 'Malibu', tr: 'Malibu' },
      { en: 'Coconut Cream', tr: 'Hindistan Cevizi Kreması' },
      { en: 'Pineapple Juice', tr: 'Ananas Suyu' }
    ],
    alcoholByVolume: '9.0%',
    calories: 245
  },
  {
    id: 'd-cocktail-margarita',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Margarita', tr: 'Margarita' },
    description: {
      en: 'A classic crisp margarita blending quality tequila, triple sec orange liqueur, and tart, freshly squeezed lime juice, served with a salt rim.',
      tr: 'Tuzlu bardak kenarında sunulan, kaliteli tekila, portakal likörü ve taze sıkılmış misket limonu suyunun eşsiz dengesi.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Classic', tr: 'Klasik' },
      { en: 'Sour', tr: 'Ekşi' }
    ],
    ingredients: [
      { en: 'Tequila', tr: 'Tekila' },
      { en: 'Orange Liqueur', tr: 'Portakal Likörü' },
      { en: 'Lime Juice', tr: 'Misket Limonu Suyu' }
    ],
    alcoholByVolume: '15.0%',
    calories: 140
  },
  {
    id: 'd-cocktail-cosmopolitan',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Cosmopolitan', tr: 'Cosmopolitan' },
    description: {
      en: 'An elegant, classy martini cocktail of premium vodka, sweet orange liqueur, tart cranberry, and fresh lime juice.',
      tr: 'Premium votka, tatlı portakal likörü, mayhoş kızılcık ve taze misket limonu suyunun bir araya geldiği asil ve zarif kokteyl.'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Elegant', tr: 'Şık Sunum' },
      { en: 'Fruity', tr: 'Meyveli' }
    ],
    ingredients: [
      { en: 'Vodka', tr: 'Votka' },
      { en: 'Orange Liqueur', tr: 'Portakal Likörü' },
      { en: 'Lime Juice', tr: 'Misket Limonu Suyu' },
      { en: 'Cranberry Juice', tr: 'Kızılcık Suyu' }
    ],
    alcoholByVolume: '14.0%',
    calories: 150
  },
  {
    id: 'd-cocktail-mojito',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Mojito', tr: 'Mojito' },
    description: {
      en: 'An incredibly refreshing cuban cocktail of light rum muddled with fresh mint leaves, zesty lime wedges, brown sugar, and sparkling mineral water.',
      tr: 'Taze nane yaprakları, sulu misket limonu dilimleri, esmer şeker, beyaz rom ve gazlı maden suyunun efsanevi ferahlatıcı dansı.'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Fresh', tr: 'Tazeleyici' },
      { en: 'Minty', tr: 'Naneli' }
    ],
    ingredients: [
      { en: 'Rum', tr: 'Rom' },
      { en: 'Lime', tr: 'Misket Limonu' },
      { en: 'Mineral Water', tr: 'Maden Suyu' },
      { en: 'Fresh Mint', tr: 'Taze Nane' },
      { en: 'Sugar', tr: 'Şeker' }
    ],
    alcoholByVolume: '10.0%',
    calories: 160
  },
  {
    id: 'd-cocktail-long-island',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Long Island Iced Tea', tr: 'Long Island Iced Tea' },
    description: {
      en: 'A potent, legendary highball blending white rum, tequila, vodka, gin, Cointreau orange liqueur, and a splash of cola.',
      tr: 'Beyaz rom, tekila, votka, cin ve Cointreau portakal likörünün, bir parça kola eşliğinde sunulduğu güçlü ve efsanevi kokteyl.'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Strong', tr: 'Sert İçecek' },
      { en: 'Legendary', tr: 'Efsanevi' }
    ],
    ingredients: [
      { en: 'Rum', tr: 'Rom' },
      { en: 'Tequila', tr: 'Tekila' },
      { en: 'Vodka', tr: 'Votka' },
      { en: 'Gin', tr: 'Cin' },
      { en: 'Cointreau', tr: 'Cointreau' },
      { en: 'Coke', tr: 'Kola' }
    ],
    alcoholByVolume: '22.0%',
    calories: 220
  },
  {
    id: 'd-cocktail-black-russian',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Black Russian', tr: 'Black Russian' },
    description: {
      en: 'A dark and smooth mix of clean vodka and rich Kahlúa coffee liqueur, layered with a touch of cola.',
      tr: 'Sek votka ve yoğun Kahlúa kahve likörünün, hafif bir kola dokunuşuyla zenginleşen pürüzsüz birlikteliği.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Bold', tr: 'Yoğun' },
      { en: 'Coffee Flavored', tr: 'Kahve Aromalı' }
    ],
    ingredients: [
      { en: 'Vodka', tr: 'Votka' },
      { en: 'Kahlua', tr: 'Kahlua' },
      { en: 'Coke', tr: 'Kola' }
    ],
    alcoholByVolume: '20.0%',
    calories: 150
  },
  {
    id: 'd-cocktail-white-russian',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'White Russian', tr: 'White Russian' },
    description: {
      en: 'A luscious, velvety blend of crisp vodka and Kahlúa coffee liqueur topped with fresh, creamy cold milk.',
      tr: 'Sek votka ve Kahlúa kahve likörünün, taze ve soğuk sütle taçlandırıldığı kadifemsi, kremsi lezzet.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Creamy', tr: 'Kremsi' },
      { en: 'Coffee Flavored', tr: 'Kahve Aromalı' }
    ],
    ingredients: [
      { en: 'Vodka', tr: 'Votka' },
      { en: 'Kahlua', tr: 'Kahlua' },
      { en: 'Milk', tr: 'Süt' }
    ],
    alcoholByVolume: '15.0%',
    calories: 190
  },
  {
    id: 'd-cocktail-strawberry-daiquiri',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Strawberry Daiquiri', tr: 'Çilekli Daiquiri' },
    description: {
      en: 'A sweet, vibrant red frozen cocktail made with premium white rum, fresh sun-ripened strawberries, and a touch of sweet syrup.',
      tr: 'Premium beyaz rom, taze tatlı çilekler ve hafif şurup ile hazırlanan buz gibi, canlandırıcı kırmızı kokteyl.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Frozen', tr: 'Buzlu/Frozen' },
      { en: 'Fruity', tr: 'Meyveli' }
    ],
    ingredients: [
      { en: 'White Rum', tr: 'Beyaz Rom' },
      { en: 'Strawberry', tr: 'Çilek' },
      { en: 'Sugar', tr: 'Şeker' }
    ],
    alcoholByVolume: '12.0%',
    calories: 180
  },
  {
    id: 'd-cocktail-whiskey-sour',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Whiskey Sour', tr: 'Whiskey Sour' },
    description: {
      en: 'A perfect balance of smooth oak-aged whiskey, sweet fresh orange juice, tart lime juice, and a splash of sparkling soda.',
      tr: 'Yıllanmış pürüzsüz viski, taze portakal suyu, mayhoş limon suyu ve hafif sodanın kusursuz uyumu.'
    },
    price: 500,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Classic', tr: 'Klasik' },
      { en: 'Citrusy', tr: 'Narenciyeli' }
    ],
    ingredients: [
      { en: 'Whiskey', tr: 'Viski' },
      { en: 'Fresh Orange Juice', tr: 'Taze Portakal Suyu' },
      { en: 'Lime Juice', tr: 'Misket Limonu Suyu' },
      { en: 'Soda', tr: 'Soda' }
    ],
    alcoholByVolume: '14.0%',
    calories: 150
  },
  {
    id: 'd-cocktail-sangria',
    category: 'cocktail_list',
    type: 'drink',
    name: { en: 'Sangria', tr: 'Sangria' },
    description: {
      en: 'A vibrant Spanish punch of red house wine, warming brandy, orange liqueur, sparkling Sprite, and fresh apple and orange cuts.',
      tr: 'Seçkin kırmızı ev şarabı, konyak, portakal likörü, tazeleyici Sprite ile taze elma ve portakal dilimlerinin harika İspanyol kokteyli uyumu.'
    },
    price: 600,
    currency: 'TL',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80',
    tags: [
      { en: 'Sharing Style', tr: 'Paylaşımlı Tarz' },
      { en: 'Wine Based', tr: 'Şarap Tabanlı' }
    ],
    ingredients: [
      { en: 'Wine', tr: 'Şarap' },
      { en: 'Brandy', tr: 'Konyak' },
      { en: 'Orange Liqueur', tr: 'Portakal Likörü' },
      { en: 'Sprite', tr: 'Sprite' },
      { en: 'Apple', tr: 'Elma' },
      { en: 'Orange', tr: 'Portakal' }
    ],
    alcoholByVolume: '11.5%',
    calories: 210
  }
];

export const initialReviews: Review[] = [
  {
    id: 'rev1',
    name: 'Eleanor Vance',
    rating: 5,
    comment: {
      en: 'Absolutely magical atmosphere and tastes! The bar selection is exquisite, and the service is exceptionally polite and professional.',
      tr: 'Kesinlikle büyüleyici bir atmosfer ve lezzetler! Bar seçkisi harika ve servis son derece nazik ve profesyonel.'
    },
    date: '2026-06-15',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev2',
    name: 'Caner Özkan',
    rating: 5,
    comment: {
      en: 'The best bar and garden lounge in the city! Celebrating our anniversary under the warm lights and colourful tulips with amazing drinks was unforgettable.',
      tr: 'Şehirdeki en iyi bar ve bahçe lounge alanı! Sıcak ışıklar ve rengarenk laleler altında harika içecekler eşliğinde yıldönümümüzü kutlamak unutulmazdı.'
    },
    date: '2026-06-20',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev3',
    name: 'Sophia Lorenzi',
    rating: 5,
    comment: {
      en: 'The craft mixology here is legendary. The pistachio baklava with Maraş ice cream is a dream!',
      tr: 'Buradaki kokteyl sanatı efsanevi düzeyde. Maraş dondurmalı fıstıklı baklava ise rüya gibi!'
    },
    date: '2026-06-22',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80'
  }
];
