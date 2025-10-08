import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, Translations, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectLanguageByLocation = async (): Promise<Language> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code?.toLowerCase();
    
    const languageMap: Record<string, Language> = {
      'ru': 'ru',
      'pl': 'pl',
      'ca': 'en-ca',
      'gb': 'en',
      'us': 'en',
      'ua': 'uk',
      'in': 'hi',
      'ir': 'fa',
      'jp': 'ja',
      'au': 'en-au',
    };
    
    return languageMap[countryCode] || 'en';
  } catch (error) {
    return 'en';
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initLanguage = async () => {
      const saved = localStorage.getItem('language') as Language;
      
      if (saved && translations[saved]) {
        setLanguageState(saved);
      } else {
        const detected = await detectLanguageByLocation();
        setLanguageState(detected);
      }
      
      setIsInitialized(true);
    };
    
    initLanguage();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    }
  }, [language, isInitialized]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  if (!isInitialized) {
    return null;
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};