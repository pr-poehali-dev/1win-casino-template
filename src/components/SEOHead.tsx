import { useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const SEOHead = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t.seo.metaTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.seo.metaDescription);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t.seo.keywords);
    } else {
      const newKeywords = document.createElement('meta');
      newKeywords.name = 'keywords';
      newKeywords.content = t.seo.keywords;
      document.head.appendChild(newKeywords);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t.seo.metaTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t.seo.metaDescription);
    }
    
    document.documentElement.lang = language;
  }, [t, language]);

  return null;
};

export default SEOHead;
