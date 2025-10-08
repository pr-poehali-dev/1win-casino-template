import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages } from '@/i18n/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="border-[#374151] hover:bg-[#374151] flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.nativeName}</span>
        <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} size={16} />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute right-0 top-full mt-2 z-50 bg-[#111827] border-[#374151] p-2 min-w-[200px] max-h-[400px] overflow-y-auto">
            <div className="space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    language === lang.code
                      ? 'bg-[#F59E0B] text-black font-semibold'
                      : 'hover:bg-[#374151] text-gray-300'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="text-left">
                    <div className="text-sm font-medium">{lang.nativeName}</div>
                    <div className="text-xs opacity-70">{lang.name}</div>
                  </div>
                  {language === lang.code && (
                    <Icon name="Check" size={16} className="ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
