export interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonuses: {
    welcome: string;
    freespins: string;
    description: string;
  };
  features: string[];
  paymentMethods: string[];
  minDeposit: number;
  withdrawalTime: string;
  license: string;
  url: string;
  promoCode?: string;
}

export const casinos: Casino[] = [
  {
    id: 'vavada',
    name: 'Vavada',
    logo: '🎰',
    rating: 4.8,
    bonuses: {
      welcome: '100% до 50 000₽',
      freespins: '100 фриспинов',
      description: 'Бонус на первый депозит + фриспины на популярные слоты'
    },
    features: [
      'Мгновенный вывод средств',
      'Кешбэк до 10%',
      'VIP программа',
      'Турниры с призовым фондом'
    ],
    paymentMethods: ['Карты', 'СБП', 'Криптовалюта', 'Электронные кошельки'],
    minDeposit: 100,
    withdrawalTime: '15 минут',
    license: 'Кюрасао',
    url: 'https://vavada.com',
    promoCode: 'SLOTS100'
  },
  {
    id: '1win',
    name: '1WIN',
    logo: '🎲',
    rating: 4.7,
    bonuses: {
      welcome: '500% до 200 000₽',
      freespins: '70 фриспинов',
      description: 'Бонус на первые 4 депозита + фриспины каждый день'
    },
    features: [
      'Огромный приветственный бонус',
      'Ежедневные фриспины',
      'Кешбэк 30%',
      'Эксклюзивные слоты',
      'Живые дилеры'
    ],
    paymentMethods: ['Карты', 'СБП', 'Криптовалюта', 'Мобильные платежи'],
    minDeposit: 100,
    withdrawalTime: '15 минут',
    license: 'Кюрасао',
    url: 'https://1win.com',
    promoCode: 'MEGABONUS'
  },
  {
    id: 'catcasino',
    name: 'Cat Casino',
    logo: '🐱',
    rating: 4.9,
    bonuses: {
      welcome: '150% до 75 000₽',
      freespins: '200 фриспинов',
      description: 'Щедрый бонус + максимум фриспинов на Book of Ra'
    },
    features: [
      'Самый высокий рейтинг',
      'Моментальная регистрация',
      'Кешбэк до 15%',
      'Быстрые выплаты',
      'Программа лояльности'
    ],
    paymentMethods: ['Карты', 'СБП', 'Криптовалюта', 'Qiwi', 'ЮMoney'],
    minDeposit: 50,
    withdrawalTime: '10 минут',
    license: 'Кюрасао',
    url: 'https://catcasino.com',
    promoCode: 'CAT200'
  }
];

export const getCasinoById = (id: string): Casino | undefined => {
  return casinos.find(casino => casino.id === id);
};

export const getTopCasinos = (limit: number = 3): Casino[] => {
  return [...casinos].sort((a, b) => b.rating - a.rating).slice(0, limit);
};
