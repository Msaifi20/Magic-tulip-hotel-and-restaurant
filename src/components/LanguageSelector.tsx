import { Language } from '../types';

interface LanguageSelectorProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  darkBg?: boolean;
}

export default function LanguageSelector({ currentLang, onLanguageChange, darkBg = false }: LanguageSelectorProps) {
  return (
    <div className="flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-full text-xs font-medium">
      <button
        id="btn-lang-en"
        onClick={() => onLanguageChange('en')}
        className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
          currentLang === 'en'
            ? 'bg-amber-600 text-white shadow-sm font-semibold'
            : darkBg 
              ? 'text-gray-300 hover:text-white hover:bg-white/10' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        id="btn-lang-tr"
        onClick={() => onLanguageChange('tr')}
        className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
          currentLang === 'tr'
            ? 'bg-amber-600 text-white shadow-sm font-semibold'
            : darkBg 
              ? 'text-gray-300 hover:text-white hover:bg-white/10' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        TR
      </button>
    </div>
  );
}
