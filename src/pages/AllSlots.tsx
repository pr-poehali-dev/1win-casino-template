import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { slots } from '@/data/slots';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const AllSlots = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVolatility, setSelectedVolatility] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const providers = ['all', ...Array.from(new Set(slots.map((s) => s.provider)))];
  const categories = ['all', ...Array.from(new Set(slots.map((s) => s.category)))];
  const volatilities = ['all', 'Низкая', 'Средняя', 'Высокая'];

  let filteredSlots = slots.filter((slot) => {
    const matchesSearch =
      slot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slot.provider.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProvider = selectedProvider === 'all' || slot.provider === selectedProvider;
    const matchesCategory = selectedCategory === 'all' || slot.category === selectedCategory;
    const matchesVolatility =
      selectedVolatility === 'all' || slot.volatility === selectedVolatility;

    return matchesSearch && matchesProvider && matchesCategory && matchesVolatility;
  });

  if (sortBy === 'popularity') {
    filteredSlots = filteredSlots.sort((a, b) => b.plays - a.plays);
  } else if (sortBy === 'rating') {
    filteredSlots = filteredSlots.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'rtp') {
    filteredSlots = filteredSlots.sort((a, b) => b.rtp - a.rtp);
  } else if (sortBy === 'maxWin') {
    filteredSlots = filteredSlots.sort((a, b) => b.maxWin - a.maxWin);
  }

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedProvider('all');
    setSelectedCategory('all');
    setSelectedVolatility('all');
    setSortBy('popularity');
  };

  return (
    <div className="min-h-screen bg-[#1F2937]">
      <header className="bg-[#111827] border-b border-[#374151] sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="text-3xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent"
            >
              1WIN
            </button>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="border-[#374151] hover:bg-[#374151]"
              >
                <Icon name="Home" size={20} className="mr-2" />
                {t.header.main}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <span className="text-5xl">🎰</span>
            Все слоты казино
          </h1>
          <p className="text-gray-400">
            Найдено {filteredSlots.length} из {slots.length} игр
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="lg:col-span-4 bg-[#111827] border-[#374151] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="lg:col-span-2">
                <label className="text-sm text-gray-400 mb-2 block">Поиск</label>
                <div className="relative">
                  <Icon
                    name="Search"
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Название или провайдер..."
                    className="bg-[#1F2937] border-[#374151] pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Провайдер</label>
                <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                  <SelectTrigger className="bg-[#1F2937] border-[#374151]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1F2937] border-[#374151]">
                    {providers.map((provider) => (
                      <SelectItem key={provider} value={provider}>
                        {provider === 'all' ? 'Все провайдеры' : provider}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Категория</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-[#1F2937] border-[#374151]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1F2937] border-[#374151]">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'Все категории' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Волатильность</label>
                <Select value={selectedVolatility} onValueChange={setSelectedVolatility}>
                  <SelectTrigger className="bg-[#1F2937] border-[#374151]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1F2937] border-[#374151]">
                    {volatilities.map((volatility) => (
                      <SelectItem key={volatility} value={volatility}>
                        {volatility === 'all' ? 'Любая' : volatility}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Сортировка</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-[#1F2937] border-[#374151]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1F2937] border-[#374151]">
                    <SelectItem value="popularity">По популярности</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="rtp">По RTP</SelectItem>
                    <SelectItem value="maxWin">По макс. выигрышу</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Button
                onClick={resetFilters}
                variant="outline"
                size="sm"
                className="border-[#374151] hover:bg-[#374151]"
              >
                <Icon name="X" size={16} className="mr-2" />
                Сбросить фильтры
              </Button>
              {(selectedProvider !== 'all' ||
                selectedCategory !== 'all' ||
                selectedVolatility !== 'all' ||
                searchQuery) && (
                <div className="flex gap-2 flex-wrap">
                  {searchQuery && (
                    <Badge variant="outline" className="border-[#F59E0B] text-[#F59E0B]">
                      Поиск: {searchQuery}
                    </Badge>
                  )}
                  {selectedProvider !== 'all' && (
                    <Badge variant="outline" className="border-[#F59E0B] text-[#F59E0B]">
                      {selectedProvider}
                    </Badge>
                  )}
                  {selectedCategory !== 'all' && (
                    <Badge variant="outline" className="border-[#F59E0B] text-[#F59E0B]">
                      {selectedCategory}
                    </Badge>
                  )}
                  {selectedVolatility !== 'all' && (
                    <Badge variant="outline" className="border-[#F59E0B] text-[#F59E0B]">
                      {selectedVolatility}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </Card>
        </div>

        {filteredSlots.length === 0 ? (
          <Card className="bg-[#111827] border-[#374151] p-12 text-center">
            <Icon name="SearchX" size={64} className="mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-2">Ничего не найдено</h2>
            <p className="text-gray-400 mb-4">
              Попробуйте изменить параметры поиска или сбросить фильтры
            </p>
            <Button
              onClick={resetFilters}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-black"
            >
              Сбросить фильтры
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredSlots.map((slot) => (
              <Card
                key={slot.id}
                onClick={() => navigate(`/slot/${slot.id}`)}
                className="bg-[#111827] border-[#374151] hover:border-[#F59E0B] transition-all group cursor-pointer overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-[#374151] to-[#1F2937] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                    {slot.emoji}
                  </div>
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <Badge className="bg-[#F59E0B] text-black font-semibold text-xs">
                      {slot.rtp}%
                    </Badge>
                    <Badge
                      className={`font-semibold text-xs ${
                        slot.volatility === 'Высокая'
                          ? 'bg-[#EF4444]'
                          : slot.volatility === 'Средняя'
                          ? 'bg-[#F59E0B]'
                          : 'bg-[#10B981]'
                      } text-black`}
                    >
                      {slot.volatility[0]}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1 truncate">{slot.title}</h4>
                  <p className="text-xs text-gray-400 mb-2">{slot.provider}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-sm font-semibold">{slot.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {slot.plays >= 1000000
                        ? `${(slot.plays / 1000000).toFixed(1)}M`
                        : `${(slot.plays / 1000).toFixed(0)}K`}
                    </span>
                  </div>
                  <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-sm">
                    Играть
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-[#111827] border-t border-[#374151] py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">© 2025 1WIN Casino. Все права защищены.</p>
          <p className="text-sm">18+ | Играйте ответственно</p>
        </div>
      </footer>
    </div>
  );
};

export default AllSlots;