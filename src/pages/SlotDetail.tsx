import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { slots } from '@/data/slots';

const SlotDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const slot = slots.find((s) => s.id === Number(id));

  if (!slot) {
    return (
      <div className="min-h-screen bg-[#1F2937] flex items-center justify-center">
        <Card className="bg-[#111827] border-[#374151] p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Слот не найден</h2>
          <Button onClick={() => navigate('/')} className="bg-[#F59E0B] hover:bg-[#D97706] text-black">
            На главную
          </Button>
        </Card>
      </div>
    );
  }

  const relatedSlots = slots
    .filter((s) => s.provider === slot.provider && s.id !== slot.id)
    .slice(0, 4);

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
              <Button
                onClick={() => navigate('/slots')}
                variant="outline"
                className="border-[#374151] hover:bg-[#374151]"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Все слоты
              </Button>
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="border-[#374151] hover:bg-[#374151]"
              >
                <Icon name="Home" size={20} className="mr-2" />
                Главная
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-[#111827] border-[#374151] overflow-hidden">
              <div className="relative bg-gradient-to-br from-[#374151] to-[#1F2937] h-96 flex items-center justify-center">
                <div className="text-9xl animate-scale-in">{slot.emoji}</div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className="bg-[#F59E0B] text-black font-semibold">
                    RTP {slot.rtp}%
                  </Badge>
                  <Badge
                    className={`font-semibold ${
                      slot.volatility === 'Высокая'
                        ? 'bg-[#EF4444]'
                        : slot.volatility === 'Средняя'
                        ? 'bg-[#F59E0B]'
                        : 'bg-[#10B981]'
                    } text-black`}
                  >
                    {slot.volatility}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{slot.title}</h1>
                    <p className="text-gray-400">Провайдер: {slot.provider}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      <Icon name="Star" size={20} className="text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-2xl font-bold">{slot.rating}</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      {(slot.plays / 1000000).toFixed(1)}M игр
                    </p>
                  </div>
                </div>

                <p className="text-lg mb-6">{slot.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#1F2937] p-4 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Минимальная ставка</p>
                    <p className="text-2xl font-bold text-[#10B981]">{slot.minBet} ₽</p>
                  </div>
                  <div className="bg-[#1F2937] p-4 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Максимальная ставка</p>
                    <p className="text-2xl font-bold text-[#EF4444]">
                      {slot.maxBet.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <div className="bg-[#1F2937] p-4 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Макс. выигрыш</p>
                    <p className="text-2xl font-bold text-[#F59E0B]">
                      {slot.maxWin >= 1000000
                        ? `${(slot.maxWin / 1000000).toFixed(1)}M`
                        : `${(slot.maxWin / 1000).toFixed(0)}K`}{' '}
                      ₽
                    </p>
                  </div>
                  <div className="bg-[#1F2937] p-4 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Линии выплат</p>
                    <p className="text-2xl font-bold">
                      {slot.paylines === 0 ? 'Cluster Pays' : slot.paylines}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Icon name="Sparkles" size={24} className="text-[#F59E0B]" />
                    Особенности
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {slot.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-[#F59E0B] text-[#F59E0B] text-sm px-3 py-1"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1F2937] p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Icon name="Users" size={16} />
                    <span>Популярность</span>
                  </div>
                  <Progress
                    value={Math.min(100, Math.floor((slot.plays / 50000) * 100))}
                    className="h-2 mb-2"
                  />
                  <p className="text-xs text-gray-500">
                    {slot.plays.toLocaleString('ru-RU')} игроков
                  </p>
                </div>

                <Button
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-lg py-6"
                  size="lg"
                >
                  <Icon name="Play" size={24} className="mr-2" />
                  Играть сейчас
                </Button>
              </div>
            </Card>

            <Card className="bg-[#111827] border-[#374151] p-6 mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Info" size={24} className="text-[#F59E0B]" />
                Как играть
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex gap-3">
                  <div className="bg-[#F59E0B] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Выберите ставку</p>
                    <p className="text-sm text-gray-400">
                      Установите размер ставки от {slot.minBet} ₽ до {slot.maxBet.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-[#F59E0B] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Запустите барабаны</p>
                    <p className="text-sm text-gray-400">
                      Нажмите кнопку "Крутить" или используйте автоигру
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-[#F59E0B] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Выигрывайте!</p>
                    <p className="text-sm text-gray-400">
                      Собирайте выигрышные комбинации и активируйте бонусные функции
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {relatedSlots.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Похожие игры от {slot.provider}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {relatedSlots.map((relatedSlot) => (
                    <Card
                      key={relatedSlot.id}
                      onClick={() => navigate(`/slot/${relatedSlot.id}`)}
                      className="bg-[#111827] border-[#374151] hover:border-[#F59E0B] transition-all cursor-pointer overflow-hidden group"
                    >
                      <div className="aspect-square bg-gradient-to-br from-[#374151] to-[#1F2937] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                        {relatedSlot.emoji}
                      </div>
                      <div className="p-3">
                        <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                          {relatedSlot.title}
                        </h4>
                        <div className="flex items-center gap-1 mb-2">
                          <Icon
                            name="Star"
                            size={14}
                            className="text-[#F59E0B] fill-[#F59E0B]"
                          />
                          <span className="text-sm font-semibold">{relatedSlot.rating}</span>
                        </div>
                        <Badge className="bg-[#8B5CF6]/20 text-[#8B5CF6] text-xs">
                          RTP {relatedSlot.rtp}%
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-[#111827] border-[#374151] p-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Начать игру</h3>
              <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg py-6 mb-3">
                <Icon name="Play" size={20} className="mr-2" />
                Играть на деньги
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black font-semibold py-6 mb-6"
              >
                <Icon name="Gamepad2" size={20} className="mr-2" />
                Демо-режим
              </Button>

              <div className="border-t border-[#374151] pt-4 mb-6 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">RTP</span>
                  <span className="font-semibold text-[#10B981]">{slot.rtp}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Волатильность</span>
                  <span className="font-semibold">{slot.volatility}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Макс. выигрыш</span>
                  <span className="font-semibold text-[#F59E0B]">
                    {(slot.maxWin * 100).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Провайдер</span>
                  <span className="font-semibold">{slot.provider}</span>
                </div>
              </div>

              <div className="bg-[#1F2937] p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Icon name="TrendingUp" size={18} className="text-[#10B981]" />
                  Преимущества
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-[#10B981] mt-0.5" />
                    <span>Лицензированный слот</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-[#10B981] mt-0.5" />
                    <span>Честная игра (RTP {slot.rtp}%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-[#10B981] mt-0.5" />
                    <span>Мгновенный вывод</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-[#10B981] mt-0.5" />
                    <span>Бонусы для новых игроков</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#374151] to-[#1F2937] p-4 rounded-lg border-2 border-[#F59E0B]">
                <h4 className="font-bold mb-2 text-[#F59E0B]">🎁 Бонус для новых</h4>
                <p className="text-2xl font-bold mb-1">200%</p>
                <p className="text-sm text-gray-400 mb-3">до 100 000 ₽</p>
                <Button
                  size="sm"
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold"
                >
                  Получить бонус
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SlotDetail;