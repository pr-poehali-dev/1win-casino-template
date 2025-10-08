export type Language = 'ru' | 'pl' | 'en-ca' | 'en' | 'uk' | 'hi' | 'fa' | 'ja' | 'en-au';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'en-ca', name: 'English (Canada)', nativeName: 'English (CA)', flag: '🇨🇦' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'en-au', name: 'English (Australia)', nativeName: 'English (AU)', flag: '🇦🇺' },
];

export interface Translations {
  common: {
    home: string;
    slots: string;
    play: string;
    playNow: string;
    demo: string;
    real: string;
    close: string;
    back: string;
    choose: string;
    bonus: string;
    features: string;
    rating: string;
  };
  nav: {
    main: string;
    casino: string;
    slots: string;
    live: string;
    sport: string;
    promo: string;
  };
  auth: {
    login: string;
    register: string;
  };
  chat: {
    greeting: string;
  };
  header: {
    allSlots: string;
    main: string;
  };
  hero: {
    title: string;
    subtitle: string;
    playButton: string;
    learnMore: string;
  };
  slots: {
    topSlots: string;
    popularSlots: string;
    categories: string;
    all: string;
    popular: string;
    new: string;
    jackpot: string;
    megaways: string;
    filter: string;
    minBet: string;
    maxWin: string;
    plays: string;
  };
  slotDetail: {
    playDemo: string;
    playForMoney: string;
    demoAvailable: string;
    demoUnavailable: string;
    chooseCasino: string;
    casinoSubtitle: string;
    exclusiveBonus: string;
    promoCode: string;
    minDeposit: string;
    withdrawal: string;
    license: string;
    advantages: string;
    playIn: string;
    provider: string;
    volatility: string;
    maxWinAmount: string;
    paylines: string;
    specialFeatures: string;
    popularity: string;
    players: string;
    howToPlay: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    similarGames: string;
    startGame: string;
    playFree: string;
    bonusForNew: string;
    getBonus: string;
    licensedSlot: string;
    fairGame: string;
    instantWithdrawal: string;
    bonusesForNew: string;
    closeDemoButton: string;
  };
  casino: {
    min: string;
    withdrawalTime: string;
    freespins: string;
  };
  categories: {
    all: string;
    popular: string;
    new: string;
    jackpot: string;
    megaways: string;
    classic: string;
    video: string;
    fruit: string;
  };
  volatility: {
    low: string;
    medium: string;
    high: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    common: {
      home: 'Главная',
      slots: 'Слоты',
      play: 'Играть',
      playNow: 'Играть сейчас',
      demo: 'Демо',
      real: 'Реальные',
      close: 'Закрыть',
      back: 'Назад',
      choose: 'Выбрать',
      bonus: 'Бонус',
      features: 'Особенности',
      rating: 'Рейтинг',
    },
    nav: {
      main: 'Главная',
      casino: 'Казино',
      slots: 'Слоты',
      live: 'Live',
      sport: 'Спорт',
      promo: 'Промо',
    },
    auth: {
      login: 'Вход',
      register: 'Регистрация',
    },
    chat: {
      greeting: 'Здравствуйте! Чем могу помочь?',
    },
    header: {
      allSlots: 'Все слоты',
      main: 'Главная',
    },
    hero: {
      title: 'Лучшие онлайн слоты 2025',
      subtitle: 'Играйте в топовые слоты от ведущих провайдеров',
      playButton: 'Начать играть',
      learnMore: 'Узнать больше',
    },
    slots: {
      topSlots: 'Топ слотов',
      popularSlots: 'Популярные слоты',
      categories: 'Категории',
      all: 'Все',
      popular: 'Популярные',
      new: 'Новые',
      jackpot: 'Джекпот',
      megaways: 'Megaways',
      filter: 'Фильтр',
      minBet: 'Мин. ставка',
      maxWin: 'Макс. выигрыш',
      plays: 'игр',
    },
    slotDetail: {
      playDemo: 'Играть в демо',
      playForMoney: 'Играть на деньги',
      demoAvailable: 'Демо-режим откроется в новой вкладке. Играйте бесплатно!',
      demoUnavailable: 'Демо-режим для этого слота пока недоступен. Попробуйте реальную игру!',
      chooseCasino: 'Выберите казино',
      casinoSubtitle: 'Получите эксклюзивные бонусы и начните выигрывать!',
      exclusiveBonus: 'ЭКСКЛЮЗИВНЫЙ БОНУС',
      promoCode: 'Промокод для активации:',
      minDeposit: 'Мин. депозит',
      withdrawal: 'Вывод',
      license: 'Лицензия',
      advantages: 'Преимущества',
      playIn: 'Играть в',
      provider: 'Провайдер',
      volatility: 'Волатильность',
      maxWinAmount: 'Макс. выигрыш',
      paylines: 'Линии выплат',
      specialFeatures: 'Особенности',
      popularity: 'Популярность',
      players: 'игроков',
      howToPlay: 'Как играть',
      step1Title: 'Выберите ставку',
      step1Desc: 'Установите размер ставки от',
      step2Title: 'Запустите барабаны',
      step2Desc: 'Нажмите кнопку "Крутить" или используйте автоигру',
      step3Title: 'Выигрывайте!',
      step3Desc: 'Собирайте выигрышные комбинации и активируйте бонусные функции',
      similarGames: 'Похожие игры от',
      startGame: 'Начать игру',
      playFree: 'Играть бесплатно',
      bonusForNew: 'Бонус для новых',
      getBonus: 'Получить бонус',
      licensedSlot: 'Лицензированный слот',
      fairGame: 'Честная игра',
      instantWithdrawal: 'Мгновенный вывод',
      bonusesForNew: 'Бонусы для новых игроков',
      closeDemoButton: 'Закрыть демо',
    },
    casino: {
      min: 'Мин',
      withdrawalTime: 'Вывод',
      freespins: 'фриспинов',
    },
    categories: {
      all: 'Все',
      popular: 'Популярные',
      new: 'Новые',
      jackpot: 'Джекпот',
      megaways: 'Megaways',
      classic: 'Классические',
      video: 'Видео слоты',
      fruit: 'Фруктовые',
    },
    volatility: {
      low: 'Низкая',
      medium: 'Средняя',
      high: 'Высокая',
    },
  },
  pl: {
    common: {
      home: 'Strona główna',
      slots: 'Sloty',
      play: 'Graj',
      playNow: 'Zagraj teraz',
      demo: 'Demo',
      real: 'Prawdziwe',
      close: 'Zamknij',
      back: 'Wstecz',
      choose: 'Wybierz',
      bonus: 'Bonus',
      features: 'Cechy',
      rating: 'Ocena',
    },
    nav: {
      main: 'Strona główna',
      casino: 'Kasyno',
      slots: 'Sloty',
      live: 'Live',
      sport: 'Sport',
      promo: 'Promocje',
    },
    auth: {
      login: 'Zaloguj się',
      register: 'Rejestracja',
    },
    chat: {
      greeting: 'Witaj! W czym mogę pomóc?',
    },
    header: {
      allSlots: 'Wszystkie sloty',
      main: 'Strona główna',
    },
    hero: {
      title: 'Najlepsze sloty online 2025',
      subtitle: 'Graj w najlepsze sloty od czołowych dostawców',
      playButton: 'Rozpocznij grę',
      learnMore: 'Dowiedz się więcej',
    },
    slots: {
      topSlots: 'Top slotów',
      popularSlots: 'Popularne sloty',
      categories: 'Kategorie',
      all: 'Wszystkie',
      popular: 'Popularne',
      new: 'Nowe',
      jackpot: 'Jackpot',
      megaways: 'Megaways',
      filter: 'Filtr',
      minBet: 'Min. zakład',
      maxWin: 'Maks. wygrana',
      plays: 'gier',
    },
    slotDetail: {
      playDemo: 'Graj w demo',
      playForMoney: 'Graj za pieniądze',
      demoAvailable: 'Tryb demo otworzy się w nowej karcie. Graj za darmo!',
      demoUnavailable: 'Tryb demo dla tego slotu jest niedostępny. Spróbuj gry na prawdziwe pieniądze!',
      chooseCasino: 'Wybierz kasyno',
      casinoSubtitle: 'Otrzymaj ekskluzywne bonusy i zacznij wygrywać!',
      exclusiveBonus: 'EKSKLUZYWNY BONUS',
      promoCode: 'Kod promocyjny do aktywacji:',
      minDeposit: 'Min. depozyt',
      withdrawal: 'Wypłata',
      license: 'Licencja',
      advantages: 'Zalety',
      playIn: 'Graj w',
      provider: 'Dostawca',
      volatility: 'Zmienność',
      maxWinAmount: 'Maks. wygrana',
      paylines: 'Linie wypłat',
      specialFeatures: 'Cechy specjalne',
      popularity: 'Popularność',
      players: 'graczy',
      howToPlay: 'Jak grać',
      step1Title: 'Wybierz zakład',
      step1Desc: 'Ustaw kwotę zakładu od',
      step2Title: 'Uruchom bębny',
      step2Desc: 'Naciśnij przycisk "Spin" lub użyj autoplay',
      step3Title: 'Wygraj!',
      step3Desc: 'Zbieraj wygrywające kombinacje i aktywuj funkcje bonusowe',
      similarGames: 'Podobne gry od',
      startGame: 'Rozpocznij grę',
      playFree: 'Graj za darmo',
      bonusForNew: 'Bonus dla nowych',
      getBonus: 'Odbierz bonus',
      licensedSlot: 'Licencjonowany slot',
      fairGame: 'Uczciwa gra',
      instantWithdrawal: 'Natychmiastowa wypłata',
      bonusesForNew: 'Bonusy dla nowych graczy',
      closeDemoButton: 'Zamknij demo',
    },
    casino: {
      min: 'Min',
      withdrawalTime: 'Wypłata',
      freespins: 'darmowych spinów',
    },
    categories: {
      all: 'Wszystkie',
      popular: 'Popularne',
      new: 'Nowe',
      jackpot: 'Jackpot',
      megaways: 'Megaways',
      classic: 'Klasyczne',
      video: 'Sloty wideo',
      fruit: 'Owocowe',
    },
    volatility: {
      low: 'Niska',
      medium: 'Średnia',
      high: 'Wysoka',
    },
  },
  'en-ca': {
    common: {
      home: 'Home',
      slots: 'Slots',
      play: 'Play',
      playNow: 'Play Now',
      demo: 'Demo',
      real: 'Real',
      close: 'Close',
      back: 'Back',
      choose: 'Choose',
      bonus: 'Bonus',
      features: 'Features',
      rating: 'Rating',
    },
    nav: {
      main: 'Home',
      casino: 'Casino',
      slots: 'Slots',
      live: 'Live',
      sport: 'Sports',
      promo: 'Promos',
    },
    auth: {
      login: 'Login',
      register: 'Register',
    },
    chat: {
      greeting: 'Hello! How can I help you?',
    },
    header: {
      allSlots: 'All Slots',
      main: 'Home',
    },
    hero: {
      title: 'Best Online Slots 2025',
      subtitle: 'Play top slots from leading providers',
      playButton: 'Start Playing',
      learnMore: 'Learn More',
    },
    slots: {
      topSlots: 'Top Slots',
      popularSlots: 'Popular Slots',
      categories: 'Categories',
      all: 'All',
      popular: 'Popular',
      new: 'New',
      jackpot: 'Jackpot',
      megaways: 'Megaways',
      filter: 'Filter',
      minBet: 'Min. Bet',
      maxWin: 'Max Win',
      plays: 'plays',
    },
    slotDetail: {
      playDemo: 'Play Demo',
      playForMoney: 'Play for Money',
      demoAvailable: 'Demo mode will open in new tab. Play for free!',
      demoUnavailable: 'Demo mode for this slot is unavailable. Try real money game!',
      chooseCasino: 'Choose Casino',
      casinoSubtitle: 'Get exclusive bonuses and start winning!',
      exclusiveBonus: 'EXCLUSIVE BONUS',
      promoCode: 'Promo code to activate:',
      minDeposit: 'Min. Deposit',
      withdrawal: 'Withdrawal',
      license: 'License',
      advantages: 'Advantages',
      playIn: 'Play at',
      provider: 'Provider',
      volatility: 'Volatility',
      maxWinAmount: 'Max Win',
      paylines: 'Paylines',
      specialFeatures: 'Special Features',
      popularity: 'Popularity',
      players: 'players',
      howToPlay: 'How to Play',
      step1Title: 'Choose Bet',
      step1Desc: 'Set bet amount from',
      step2Title: 'Spin Reels',
      step2Desc: 'Press "Spin" button or use autoplay',
      step3Title: 'Win!',
      step3Desc: 'Collect winning combinations and trigger bonus features',
      similarGames: 'Similar games from',
      startGame: 'Start Game',
      playFree: 'Play Free',
      bonusForNew: 'Bonus for New',
      getBonus: 'Get Bonus',
      licensedSlot: 'Licensed Slot',
      fairGame: 'Fair Game',
      instantWithdrawal: 'Instant Withdrawal',
      bonusesForNew: 'Bonuses for New Players',
      closeDemoButton: 'Close Demo',
    },
    casino: {
      min: 'Min',
      withdrawalTime: 'Withdrawal',
      freespins: 'free spins',
    },
    categories: {
      all: 'All',
      popular: 'Popular',
      new: 'New',
      jackpot: 'Jackpot',
      megaways: 'Megaways',
      classic: 'Classic',
      video: 'Video Slots',
      fruit: 'Fruit',
    },
    volatility: {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
    },
  },
  en: {
    common: {
      home: 'Home',
      slots: 'Slots',
      play: 'Play',
      playNow: 'Play Now',
      demo: 'Demo',
      real: 'Real',
      close: 'Close',
      back: 'Back',
      choose: 'Choose',
      bonus: 'Bonus',
      features: 'Features',
      rating: 'Rating',
    },
    nav: {
      main: 'Home',
      casino: 'Casino',
      slots: 'Slots',
      live: 'Live',
      sport: 'Sports',
      promo: 'Promos',
    },
    auth: {
      login: 'Login',
      register: 'Register',
    },
    chat: {
      greeting: 'Hello! How can I help you?',
    },
    header: {
      allSlots: 'All Slots',
      main: 'Home',
    },
    hero: {
      title: 'Best Online Slots 2025',
      subtitle: 'Play top slots from leading providers',
      playButton: 'Start Playing',
      learnMore: 'Learn More',
    },
    slots: {
      topSlots: 'Top Slots',
      popularSlots: 'Popular Slots',
      categories: 'Categories',
      all: 'All',
      popular: 'Popular',
      new: 'New',
      jackpot: 'Jackpot',
      megaways: 'Megaways',
      filter: 'Filter',
      minBet: 'Min. Bet',
      maxWin: 'Max Win',
      plays: 'plays',
    },
    slotDetail: {
      playDemo: 'Play Demo',
      playForMoney: 'Play for Money',
      demoAvailable: 'Demo mode will open in new tab. Play for free!',
      demoUnavailable: 'Demo mode for this slot is unavailable. Try real money game!',
      chooseCasino: 'Choose Casino',
      casinoSubtitle: 'Get exclusive bonuses and start winning!',
      exclusiveBonus: 'EXCLUSIVE BONUS',
      promoCode: 'Promo code to activate:',
      minDeposit: 'Min. Deposit',
      withdrawal: 'Withdrawal',
      license: 'License',
      advantages: 'Advantages',
      playIn: 'Play at',
      provider: 'Provider',
      volatility: 'Volatility',
      maxWinAmount: 'Max Win',
      paylines: 'Paylines',
      specialFeatures: 'Special Features',
      popularity: 'Popularity',
      players: 'players',
      howToPlay: 'How to Play',
      step1Title: 'Choose Bet',
      step1Desc: 'Set bet amount from',
      step2Title: 'Spin Reels',
      step2Desc: 'Press "Spin" button or use autoplay',
      step3Title: 'Win!',
      step3Desc: 'Collect winning combinations and trigger bonus features',
      similarGames: 'Similar games from',
      startGame: 'Start Game',
      playFree: 'Play Free',
      bonusForNew: 'Bonus for New',
      getBonus: 'Get Bonus',
      licensedSlot: 'Licensed Slot',
      fairGame: 'Fair Game',
      instantWithdrawal: 'Instant Withdrawal',
      bonusesForNew: 'Bonuses for New Players',
      closeDemoButton: 'Close Demo',
    },
    casino: {
      min: 'Min',
      withdrawalTime: 'Withdrawal',
      freespins: 'free spins',
    },
    categories: {
      all: 'All',
      popular: 'Popular',
      new: 'New',
      jackpot: 'Jackpot',
      megaways: 'Megaways',
      classic: 'Classic',
      video: 'Video Slots',
      fruit: 'Fruit',
    },
    volatility: {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
    },
  },
  uk: {
    common: {
      home: 'Головна',
      slots: 'Слоти',
      play: 'Грати',
      playNow: 'Грати зараз',
      demo: 'Демо',
      real: 'Реальні',
      close: 'Закрити',
      back: 'Назад',
      choose: 'Вибрати',
      bonus: 'Бонус',
      features: 'Особливості',
      rating: 'Рейтинг',
    },
    nav: {
      main: 'Головна',
      casino: 'Казино',
      slots: 'Слоти',
      live: 'Live',
      sport: 'Спорт',
      promo: 'Промо',
    },
    auth: {
      login: 'Вхід',
      register: 'Реєстрація',
    },
    chat: {
      greeting: 'Вітаю! Чим можу допомогти?',
    },
    header: {
      allSlots: 'Всі слоти',
      main: 'Головна',
    },
    hero: {
      title: 'Кращі онлайн слоти 2025',
      subtitle: 'Грайте в топові слоти від провідних провайдерів',
      playButton: 'Почати гру',
      learnMore: 'Дізнатися більше',
    },
    slots: {
      topSlots: 'Топ слотів',
      popularSlots: 'Популярні слоти',
      categories: 'Категорії',
      all: 'Всі',
      popular: 'Популярні',
      new: 'Нові',
      jackpot: 'Джекпот',
      megaways: 'Megaways',
      filter: 'Фільтр',
      minBet: 'Мін. ставка',
      maxWin: 'Макс. виграш',
      plays: 'ігор',
    },
    slotDetail: {
      playDemo: 'Грати в демо',
      playForMoney: 'Грати на гроші',
      demoAvailable: 'Демо-режим відкриється в новій вкладці. Грайте безкоштовно!',
      demoUnavailable: 'Демо-режим для цього слота поки недоступний. Спробуйте реальну гру!',
      chooseCasino: 'Виберіть казино',
      casinoSubtitle: 'Отримайте ексклюзивні бонуси та почніть вигравати!',
      exclusiveBonus: 'ЕКСКЛЮЗИВНИЙ БОНУС',
      promoCode: 'Промокод для активації:',
      minDeposit: 'Мін. депозит',
      withdrawal: 'Виведення',
      license: 'Ліцензія',
      advantages: 'Переваги',
      playIn: 'Грати в',
      provider: 'Провайдер',
      volatility: 'Волатильність',
      maxWinAmount: 'Макс. виграш',
      paylines: 'Лінії виплат',
      specialFeatures: 'Особливості',
      popularity: 'Популярність',
      players: 'гравців',
      howToPlay: 'Як грати',
      step1Title: 'Виберіть ставку',
      step1Desc: 'Встановіть розмір ставки від',
      step2Title: 'Запустіть барабани',
      step2Desc: 'Натисніть кнопку "Крутити" або використовуйте автогру',
      step3Title: 'Вигравайте!',
      step3Desc: 'Збирайте виграшні комбінації та активуйте бонусні функції',
      similarGames: 'Схожі ігри від',
      startGame: 'Почати гру',
      playFree: 'Грати безкоштовно',
      bonusForNew: 'Бонус для нових',
      getBonus: 'Отримати бонус',
      licensedSlot: 'Ліцензований слот',
      fairGame: 'Чесна гра',
      instantWithdrawal: 'Миттєве виведення',
      bonusesForNew: 'Бонуси для нових гравців',
      closeDemoButton: 'Закрити демо',
    },
    casino: {
      min: 'Мін',
      withdrawalTime: 'Виведення',
      freespins: 'фріспінів',
    },
    categories: {
      all: 'Всі',
      popular: 'Популярні',
      new: 'Нові',
      jackpot: 'Джекпот',
      megaways: 'Megaways',
      classic: 'Класичні',
      video: 'Відео слоти',
      fruit: 'Фруктові',
    },
    volatility: {
      low: 'Низька',
      medium: 'Середня',
      high: 'Висока',
    },
  },
  hi: {
    common: {
      home: 'होम',
      slots: 'स्लॉट्स',
      play: 'खेलें',
      playNow: 'अभी खेलें',
      demo: 'डेमो',
      real: 'असली',
      close: 'बंद करें',
      back: 'वापस',
      choose: 'चुनें',
      bonus: 'बोनस',
      features: 'विशेषताएं',
      rating: 'रेटिंग',
    },
    nav: {
      main: 'होम',
      casino: 'कैसीनो',
      slots: 'स्लॉट्स',
      live: 'लाइव',
      sport: 'स्पोर्ट्स',
      promo: 'प्रोमो',
    },
    auth: {
      login: 'लॉगिन',
      register: 'रजिस्टर',
    },
    chat: {
      greeting: 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूं?',
    },
    header: {
      allSlots: 'सभी स्लॉट्स',
      main: 'होम',
    },
    hero: {
      title: 'सर्वश्रेष्ठ ऑनलाइन स्लॉट्स 2025',
      subtitle: 'प्रमुख प्रदाताओं से शीर्ष स्लॉट खेलें',
      playButton: 'खेलना शुरू करें',
      learnMore: 'और जानें',
    },
    slots: {
      topSlots: 'शीर्ष स्लॉट्स',
      popularSlots: 'लोकप्रिय स्लॉट्स',
      categories: 'श्रेणियां',
      all: 'सभी',
      popular: 'लोकप्रिय',
      new: 'नया',
      jackpot: 'जैकपॉट',
      megaways: 'मेगावेज़',
      filter: 'फ़िल्टर',
      minBet: 'न्यूनतम दांव',
      maxWin: 'अधिकतम जीत',
      plays: 'खेल',
    },
    slotDetail: {
      playDemo: 'डेमो खेलें',
      playForMoney: 'पैसे के लिए खेलें',
      demoAvailable: 'डेमो मोड नए टैब में खुलेगा। मुफ्त में खेलें!',
      demoUnavailable: 'इस स्लॉट के लिए डेमो मोड अनुपलब्ध है। असली पैसे का गेम आज़माएं!',
      chooseCasino: 'कैसीनो चुनें',
      casinoSubtitle: 'विशेष बोनस प्राप्त करें और जीतना शुरू करें!',
      exclusiveBonus: 'विशेष बोनस',
      promoCode: 'सक्रिय करने के लिए प्रोमो कोड:',
      minDeposit: 'न्यूनतम जमा',
      withdrawal: 'निकासी',
      license: 'लाइसेंस',
      advantages: 'लाभ',
      playIn: 'में खेलें',
      provider: 'प्रदाता',
      volatility: 'अस्थिरता',
      maxWinAmount: 'अधिकतम जीत',
      paylines: 'पेलाइन्स',
      specialFeatures: 'विशेष सुविधाएं',
      popularity: 'लोकप्रियता',
      players: 'खिलाड़ी',
      howToPlay: 'कैसे खेलें',
      step1Title: 'दांव चुनें',
      step1Desc: 'दांव राशि सेट करें',
      step2Title: 'रील्स घुमाएं',
      step2Desc: '"स्पिन" बटन दबाएं या ऑटोप्ले का उपयोग करें',
      step3Title: 'जीतें!',
      step3Desc: 'जीतने वाले संयोजन इकट्ठा करें और बोनस सुविधाओं को ट्रिगर करें',
      similarGames: 'से समान गेम',
      startGame: 'खेल शुरू करें',
      playFree: 'मुफ्त खेलें',
      bonusForNew: 'नए के लिए बोनस',
      getBonus: 'बोनस प्राप्त करें',
      licensedSlot: 'लाइसेंस प्राप्त स्लॉट',
      fairGame: 'निष्पक्ष खेल',
      instantWithdrawal: 'तत्काल निकासी',
      bonusesForNew: 'नए खिलाड़ियों के लिए बोनस',
      closeDemoButton: 'डेमो बंद करें',
    },
    casino: {
      min: 'न्यूनतम',
      withdrawalTime: 'निकासी',
      freespins: 'मुफ्त स्पिन',
    },
    categories: {
      all: 'सभी',
      popular: 'लोकप्रिय',
      new: 'नया',
      jackpot: 'जैकपॉट',
      megaways: 'मेगावेज़',
      classic: 'क्लासिक',
      video: 'वीडियो स्लॉट्स',
      fruit: 'फ्रूट',
    },
    volatility: {
      low: 'कम',
      medium: 'मध्यम',
      high: 'उच्च',
    },
  },
  fa: {
    common: {
      home: 'خانه',
      slots: 'اسلات‌ها',
      play: 'بازی',
      playNow: 'اکنون بازی کنید',
      demo: 'دمو',
      real: 'واقعی',
      close: 'بستن',
      back: 'بازگشت',
      choose: 'انتخاب',
      bonus: 'پاداش',
      features: 'ویژگی‌ها',
      rating: 'امتیاز',
    },
    nav: {
      main: 'خانه',
      casino: 'کازینو',
      slots: 'اسلات‌ها',
      live: 'زنده',
      sport: 'ورزش',
      promo: 'پیشنهادات',
    },
    auth: {
      login: 'ورود',
      register: 'ثبت‌نام',
    },
    chat: {
      greeting: 'سلام! چطور می‌توانم کمک کنم?',
    },
    header: {
      allSlots: 'همه اسلات‌ها',
      main: 'خانه',
    },
    hero: {
      title: 'بهترین اسلات‌های آنلاین 2025',
      subtitle: 'اسلات‌های برتر را از ارائه‌دهندگان پیشرو بازی کنید',
      playButton: 'شروع بازی',
      learnMore: 'بیشتر بدانید',
    },
    slots: {
      topSlots: 'اسلات‌های برتر',
      popularSlots: 'اسلات‌های محبوب',
      categories: 'دسته‌بندی‌ها',
      all: 'همه',
      popular: 'محبوب',
      new: 'جدید',
      jackpot: 'جکپات',
      megaways: 'مگاویز',
      filter: 'فیلتر',
      minBet: 'حداقل شرط',
      maxWin: 'حداکثر برد',
      plays: 'بازی',
    },
    slotDetail: {
      playDemo: 'بازی دمو',
      playForMoney: 'بازی با پول',
      demoAvailable: 'حالت دمو در تب جدید باز می‌شود. رایگان بازی کنید!',
      demoUnavailable: 'حالت دمو برای این اسلات در دسترس نیست. بازی با پول واقعی را امتحان کنید!',
      chooseCasino: 'کازینو را انتخاب کنید',
      casinoSubtitle: 'پاداش‌های انحصاری دریافت کنید و برنده شوید!',
      exclusiveBonus: 'پاداش انحصاری',
      promoCode: 'کد تبلیغاتی برای فعال‌سازی:',
      minDeposit: 'حداقل واریز',
      withdrawal: 'برداشت',
      license: 'مجوز',
      advantages: 'مزایا',
      playIn: 'بازی در',
      provider: 'ارائه‌دهنده',
      volatility: 'نوسان',
      maxWinAmount: 'حداکثر برد',
      paylines: 'خطوط پرداخت',
      specialFeatures: 'ویژگی‌های ویژه',
      popularity: 'محبوبیت',
      players: 'بازیکن',
      howToPlay: 'نحوه بازی',
      step1Title: 'شرط را انتخاب کنید',
      step1Desc: 'مقدار شرط را تنظیم کنید از',
      step2Title: 'چرخش شروع کنید',
      step2Desc: 'دکمه "چرخش" را فشار دهید یا از پخش خودکار استفاده کنید',
      step3Title: 'برنده شوید!',
      step3Desc: 'ترکیب‌های برنده را جمع‌آوری کنید و ویژگی‌های پاداش را فعال کنید',
      similarGames: 'بازی‌های مشابه از',
      startGame: 'شروع بازی',
      playFree: 'بازی رایگان',
      bonusForNew: 'پاداش برای جدیدها',
      getBonus: 'دریافت پاداش',
      licensedSlot: 'اسلات دارای مجوز',
      fairGame: 'بازی منصفانه',
      instantWithdrawal: 'برداشت فوری',
      bonusesForNew: 'پاداش‌ها برای بازیکنان جدید',
      closeDemoButton: 'بستن دمو',
    },
    casino: {
      min: 'حداقل',
      withdrawalTime: 'برداشت',
      freespins: 'چرخش رایگان',
    },
    categories: {
      all: 'همه',
      popular: 'محبوب',
      new: 'جدید',
      jackpot: 'جکپات',
      megaways: 'مگاویز',
      classic: 'کلاسیک',
      video: 'اسلات‌های ویدیویی',
      fruit: 'میوه‌ای',
    },
    volatility: {
      low: 'کم',
      medium: 'متوسط',
      high: 'زیاد',
    },
  },
  ja: {
    common: {
      home: 'ホーム',
      slots: 'スロット',
      play: 'プレイ',
      playNow: '今すぐプレイ',
      demo: 'デモ',
      real: 'リアル',
      close: '閉じる',
      back: '戻る',
      choose: '選択',
      bonus: 'ボーナス',
      features: '特徴',
      rating: '評価',
    },
    nav: {
      main: 'ホーム',
      casino: 'カジノ',
      slots: 'スロット',
      live: 'ライブ',
      sport: 'スポーツ',
      promo: 'プロモ',
    },
    auth: {
      login: 'ログイン',
      register: '登録',
    },
    chat: {
      greeting: 'こんにちは！どうお手伝いできますか？',
    },
    header: {
      allSlots: '全てのスロット',
      main: 'ホーム',
    },
    hero: {
      title: 'ベストオンラインスロット2025',
      subtitle: '一流プロバイダーのトップスロットをプレイ',
      playButton: 'プレイ開始',
      learnMore: '詳細を見る',
    },
    slots: {
      topSlots: 'トップスロット',
      popularSlots: '人気スロット',
      categories: 'カテゴリー',
      all: '全て',
      popular: '人気',
      new: '新作',
      jackpot: 'ジャックポット',
      megaways: 'メガウェイズ',
      filter: 'フィルター',
      minBet: '最小ベット',
      maxWin: '最大配当',
      plays: 'プレイ',
    },
    slotDetail: {
      playDemo: 'デモプレイ',
      playForMoney: 'リアルマネーでプレイ',
      demoAvailable: 'デモモードは新しいタブで開きます。無料でプレイ！',
      demoUnavailable: 'このスロットのデモモードは利用できません。リアルマネーゲームをお試しください！',
      chooseCasino: 'カジノを選択',
      casinoSubtitle: '限定ボーナスを獲得して勝利を始めましょう！',
      exclusiveBonus: '限定ボーナス',
      promoCode: '有効化プロモコード:',
      minDeposit: '最小入金',
      withdrawal: '出金',
      license: 'ライセンス',
      advantages: 'メリット',
      playIn: 'プレイする',
      provider: 'プロバイダー',
      volatility: 'ボラティリティ',
      maxWinAmount: '最大配当',
      paylines: 'ペイライン',
      specialFeatures: '特殊機能',
      popularity: '人気度',
      players: 'プレイヤー',
      howToPlay: '遊び方',
      step1Title: 'ベットを選択',
      step1Desc: 'ベット額を設定',
      step2Title: 'リールを回す',
      step2Desc: '「スピン」ボタンを押すかオートプレイを使用',
      step3Title: '勝利！',
      step3Desc: '勝利の組み合わせを集めてボーナス機能をトリガー',
      similarGames: '類似ゲーム',
      startGame: 'ゲーム開始',
      playFree: '無料プレイ',
      bonusForNew: '新規ボーナス',
      getBonus: 'ボーナス獲得',
      licensedSlot: 'ライセンス取得スロット',
      fairGame: 'フェアゲーム',
      instantWithdrawal: '即時出金',
      bonusesForNew: '新規プレイヤーボーナス',
      closeDemoButton: 'デモを閉じる',
    },
    casino: {
      min: '最小',
      withdrawalTime: '出金',
      freespins: 'フリースピン',
    },
    categories: {
      all: '全て',
      popular: '人気',
      new: '新作',
      jackpot: 'ジャックポット',
      megaways: 'メガウェイズ',
      classic: 'クラシック',
      video: 'ビデオスロット',
      fruit: 'フルーツ',
    },
    volatility: {
      low: '低',
      medium: '中',
      high: '高',
    },
  },
  'en-au': {
    common: {
      home: 'Home',
      slots: 'Pokies',
      play: 'Play',
      playNow: 'Play Now',
      demo: 'Demo',
      real: 'Real',
      close: 'Close',
      back: 'Back',
      choose: 'Choose',
      bonus: 'Bonus',
      features: 'Features',
      rating: 'Rating',
    },
    nav: {
      main: 'Home',
      casino: 'Casino',
      slots: 'Slots',
      live: 'Live',
      sport: 'Sports',
      promo: 'Promos',
    },
    auth: {
      login: 'Login',
      register: 'Register',
    },
    chat: {
      greeting: 'G\'day! How can I help you?',
    },
    header: {
      allSlots: 'All Pokies',
      main: 'Home',
    },
    hero: {
      title: 'Best Online Pokies 2025',
      subtitle: 'Play top pokies from leading providers',
      playButton: 'Start Playing',
      learnMore: 'Learn More',
    },
    slots: {
      topSlots: 'Top Pokies',
      popularSlots: 'Popular Pokies',
      categories: 'Categories',
      all: 'All',
      popular: 'Popular',
      new: 'New',
      jackpot: 'Jackpot',
      megaways: 'Megaways',
      filter: 'Filter',
      minBet: 'Min. Bet',
      maxWin: 'Max Win',
      plays: 'plays',
    },
    slotDetail: {
      playDemo: 'Play Demo',
      playForMoney: 'Play for Money',
      demoAvailable: 'Demo mode will open in new tab. Play for free!',
      demoUnavailable: 'Demo mode for this pokie is unavailable. Try real money game!',
      chooseCasino: 'Choose Casino',
      casinoSubtitle: 'Get exclusive bonuses and start winning!',
      exclusiveBonus: 'EXCLUSIVE BONUS',
      promoCode: 'Promo code to activate:',
      minDeposit: 'Min. Deposit',
      withdrawal: 'Withdrawal',
      license: 'License',
      advantages: 'Advantages',
      playIn: 'Play at',
      provider: 'Provider',
      volatility: 'Volatility',
      maxWinAmount: 'Max Win',
      paylines: 'Paylines',
      specialFeatures: 'Special Features',
      popularity: 'Popularity',
      players: 'players',
      howToPlay: 'How to Play',
      step1Title: 'Choose Bet',
      step1Desc: 'Set bet amount from',
      step2Title: 'Spin Reels',
      step2Desc: 'Press "Spin" button or use autoplay',
      step3Title: 'Win!',
      step3Desc: 'Collect winning combinations and trigger bonus features',
      similarGames: 'Similar games from',
      startGame: 'Start Game',
      playFree: 'Play Free',
      bonusForNew: 'Bonus for New',
      getBonus: 'Get Bonus',
      licensedSlot: 'Licensed Pokie',
      fairGame: 'Fair Game',
      instantWithdrawal: 'Instant Withdrawal',
      bonusesForNew: 'Bonuses for New Players',
      closeDemoButton: 'Close Demo',
    },
    casino: {
      min: 'Min',
      withdrawalTime: 'Withdrawal',
      freespins: 'free spins',
    },
    categories: {
      all: 'All',
      popular: 'Popular',
      new: 'New',
      jackpot: 'Jackpot',
      megaways: 'Megaways',
      classic: 'Classic',
      video: 'Video Pokies',
      fruit: 'Fruit',
    },
    volatility: {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
    },
  },
};