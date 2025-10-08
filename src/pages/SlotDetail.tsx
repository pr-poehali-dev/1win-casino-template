import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { slots } from '@/data/slots';
import { getDemoUrl, hasDemo } from '@/utils/getDemoUrl';
import { casinos, Casino } from '@/data/casinos';

const SlotDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const slot = slots.find((s) => s.id === Number(id));
  const [playMode, setPlayMode] = useState<'demo' | 'real'>('demo');
  const [selectedCasino, setSelectedCasino] = useState<Casino | null>(null);

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
              <div className="relative bg-gradient-to-br from-[#374151] to-[#1F2937] min-h-[500px] p-8">
                {playMode === 'demo' ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                    <div className="text-9xl animate-scale-in">{slot.emoji}</div>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-4">Играть в демо</h3>
                      <p className="text-gray-400 mb-6 max-w-md">
                        {hasDemo(slot)
                          ? 'Демо-режим откроется в новой вкладке. Играйте бесплатно!'
                          : 'Демо-режим для этого слота пока недоступен. Попробуйте реальную игру!'}
                      </p>
                      <div className="flex gap-3 justify-center">
                        {hasDemo(slot) ? (
                          <Button
                            size="lg"
                            onClick={() => window.open(getDemoUrl(slot)!, '_blank')}
                            className="bg-[#10B981] hover:bg-[#059669] text-white font-bold px-8 py-4 text-lg"
                          >
                            <Icon name="Play" size={24} className="mr-2" />
                            Запустить демо
                          </Button>
                        ) : null}
                        <Button
                          size="lg"
                          onClick={() => setPlayMode('real')}
                          className={hasDemo(slot) ? 'bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-8 py-4 text-lg' : 'bg-[#10B981] hover:bg-[#059669] text-white font-bold px-8 py-4 text-lg'}
                        >
                          <Icon name="DollarSign" size={24} className="mr-2" />
                          Играть на деньги
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : playMode === 'real' && !selectedCasino ? (
                  <div className="w-full max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                      <div className="text-6xl mb-4">{slot.emoji}</div>
                      <h3 className="text-3xl font-bold mb-2">Выберите казино</h3>
                      <p className="text-gray-400">
                        Получите эксклюзивные бонусы и начните выигрывать!
                      </p>
                    </div>

                    <div className="grid gap-4">
                      {casinos.map((casino) => (
                        <Card
                          key={casino.id}
                          className="bg-[#1F2937] border-[#374151] hover:border-[#F59E0B] transition-all cursor-pointer"
                          onClick={() => setSelectedCasino(casino)}
                        >
                          <div className="flex items-center gap-6 p-6">
                            <div className="text-6xl">{casino.logo}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h4 className="text-2xl font-bold mb-1">{casino.name}</h4>
                                  <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <Icon
                                          key={i}
                                          name="Star"
                                          size={16}
                                          className={i < Math.floor(casino.rating) ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-600'}
                                        />
                                      ))}
                                    </div>
                                    <span className="text-sm text-gray-400">({casino.rating})</span>
                                  </div>
                                </div>
                                <Badge className="bg-[#10B981] text-black font-bold text-lg px-4 py-2">
                                  {casino.bonuses.welcome}
                                </Badge>
                              </div>

                              <div className="bg-[#111827] rounded-lg p-4 mb-4">
                                <div className="flex items-start gap-3">
                                  <span className="text-3xl">🎁</span>
                                  <div className="flex-1">
                                    <div className="font-bold text-[#F59E0B] mb-1">{casino.bonuses.freespins}</div>
                                    <div className="text-sm text-gray-400">{casino.bonuses.description}</div>
                                    {casino.promoCode && (
                                      <div className="mt-2">
                                        <Badge className="bg-[#374151] text-[#F59E0B] border border-[#F59E0B]">
                                          🎫 {casino.promoCode}
                                        </Badge>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex gap-6 text-sm text-gray-400">
                                  <span>Мин: <span className="text-white font-semibold">{casino.minDeposit}₽</span></span>
                                  <span>Вывод: <span className="text-[#10B981] font-semibold">{casino.withdrawalTime}</span></span>
                                </div>
                                <Button
                                  className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedCasino(casino);
                                  }}
                                >
                                  Выбрать
                                  <Icon name="ChevronRight" size={16} className="ml-1" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <div className="text-center mt-6">
                      <Button
                        variant="outline"
                        onClick={() => setPlayMode('demo')}
                        className="border-[#374151] hover:bg-[#374151]"
                      >
                        <Icon name="ArrowLeft" size={20} className="mr-2" />
                        Вернуться к демо
                      </Button>
                    </div>
                  </div>
                ) : selectedCasino ? (
                  <div className="w-full max-w-3xl mx-auto text-center">
                    <div className="text-8xl mb-6">{selectedCasino.logo}</div>
                    <h3 className="text-4xl font-bold mb-3">{selectedCasino.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-8">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={24}
                            className={i < Math.floor(selectedCasino.rating) ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-600'}
                          />
                        ))}
                      </div>
                      <span className="text-xl text-gray-400">({selectedCasino.rating})</span>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#F59E0B] to-[#EF4444] rounded-2xl p-8 mb-8 shadow-2xl">
                      <div className="text-white font-bold text-2xl mb-3">🎁 ЭКСКЛЮЗИВНЫЙ БОНУС</div>
                      <div className="text-5xl font-black mb-3 text-white">{selectedCasino.bonuses.welcome}</div>
                      <div className="text-4xl font-bold mb-4 text-[#111827]">+ {selectedCasino.bonuses.freespins}</div>
                      <p className="text-lg text-white/90 mb-6">{selectedCasino.bonuses.description}</p>
                      {selectedCasino.promoCode && (
                        <div className="bg-white/20 backdrop-blur rounded-xl p-4 border-2 border-dashed border-white/50">
                          <div className="text-sm text-white/80 mb-1">Промокод для активации:</div>
                          <div className="text-3xl font-black text-white">{selectedCasino.promoCode}</div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-[#1F2937] rounded-xl p-4 border border-[#374151]">
                        <div className="text-gray-400 text-sm mb-2">Мин. депозит</div>
                        <div className="text-2xl font-bold">{selectedCasino.minDeposit}₽</div>
                      </div>
                      <div className="bg-[#1F2937] rounded-xl p-4 border border-[#374151]">
                        <div className="text-gray-400 text-sm mb-2">Вывод</div>
                        <div className="text-2xl font-bold text-[#10B981]">{selectedCasino.withdrawalTime}</div>
                      </div>
                      <div className="bg-[#1F2937] rounded-xl p-4 border border-[#374151]">
                        <div className="text-gray-400 text-sm mb-2">Лицензия</div>
                        <div className="text-lg font-bold">{selectedCasino.license}</div>
                      </div>
                    </div>

                    <div className="bg-[#1F2937] rounded-xl p-6 mb-8 border border-[#374151]">
                      <h4 className="text-xl font-bold mb-4">Преимущества</h4>
                      <div className="grid grid-cols-2 gap-3 text-left">
                        {selectedCasino.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Icon name="CheckCircle" size={20} className="text-[#10B981] flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={() => window.open(`${selectedCasino.url}?promo=${selectedCasino.promoCode || ''}&game=${slot.title}`, '_blank')}
                        size="lg"
                        className="bg-[#10B981] hover:bg-[#059669] text-white font-bold px-10 py-6 text-xl"
                      >
                        <Icon name="ExternalLink" size={24} className="mr-2" />
                        Играть в {selectedCasino.name}
                      </Button>
                      <Button
                        onClick={() => setSelectedCasino(null)}
                        variant="outline"
                        size="lg"
                        className="border-[#374151] hover:bg-[#374151] px-10 py-6 text-xl"
                      >
                        <Icon name="ArrowLeft" size={24} className="mr-2" />
                        Назад
                      </Button>
                    </div>
                  </div>
                ) : null}
                
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
              
              <div className="bg-[#1F2937] p-3 rounded-lg mb-4 flex gap-2">
                <Button
                  onClick={() => setPlayMode('demo')}
                  className={`flex-1 ${
                    playMode === 'demo'
                      ? 'bg-[#F59E0B] hover:bg-[#D97706] text-black'
                      : 'bg-transparent hover:bg-[#374151] text-gray-300'
                  }`}
                  size="sm"
                >
                  <Icon name="Gamepad2" size={16} className="mr-1" />
                  Демо
                </Button>
                <Button
                  onClick={() => setPlayMode('real')}
                  className={`flex-1 ${
                    playMode === 'real'
                      ? 'bg-[#10B981] hover:bg-[#059669] text-white'
                      : 'bg-transparent hover:bg-[#374151] text-gray-300'
                  }`}
                  size="sm"
                >
                  <Icon name="DollarSign" size={16} className="mr-1" />
                  Реальные
                </Button>
              </div>

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
