import { Language, languages } from '@/i18n/translations';

export const formatCurrency = (amount: number, language: Language): string => {
  const langConfig = languages.find((l) => l.code === language);
  if (!langConfig) return `${amount}`;

  const { symbol, position, code } = langConfig.currency;

  const exchangeRates: Record<string, number> = {
    RUB: 1,
    PLN: 0.25,
    CAD: 0.014,
    GBP: 0.011,
    UAH: 0.40,
    INR: 1.10,
    IRR: 540,
    JPY: 1.90,
    AUD: 0.020,
  };

  const convertedAmount = Math.round(amount * (exchangeRates[code] || 1));
  const formattedAmount = new Intl.NumberFormat(language, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(convertedAmount);

  if (position === 'before') {
    return `${symbol}${formattedAmount}`;
  } else {
    return `${formattedAmount} ${symbol}`;
  }
};

export const getCurrencySymbol = (language: Language): string => {
  const langConfig = languages.find((l) => l.code === language);
  return langConfig?.currency.symbol || '₽';
};
