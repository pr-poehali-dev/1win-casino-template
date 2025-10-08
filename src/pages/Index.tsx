import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { slots } from '@/data/slots';

const Index = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Главная');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentJackpot, setCurrentJackpot] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'support', text: 'Здравствуйте! Чем могу помочь?' },
  ]);
  const [messageInput, setMessageInput] = useState('');

  const navItems = ['Главная', 'Казино', 'Слоты', 'Live', 'Спорт', 'Промо'];
  const displaySlots = slots.slice(0, 12);

  const promos = [
    { title: 'Бонус на первый депозит', bonus: '200%', amount: 'до 100 000 ₽' },
    { title: 'Фриспины каждый день', bonus: '50', amount: 'бесплатных вращений' },
    { title: 'Кэшбэк по пятницам', bonus: '10%', amount: 'от проигрышей' },
  ];

  const jackpots = [
    { id: 1, name: 'Mega Moolah', amount: 12547893, emoji: '💰' },
    { id: 2, name: 'Divine Fortune', amount: 3245678, emoji: '👑' },
    { id: 3, name: 'Hall of Gods', amount: 5678234, emoji: '⚡' },
    { id: 4, name: 'Arabian Nights', amount: 2345123, emoji: '🧞' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJackpot((prev) => (prev + 1) % jackpots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const formatJackpot = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    const newMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      text: messageInput,
    };
    setChatMessages([...chatMessages, newMessage]);
    setMessageInput('');
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'support',
          text: 'Спасибо за ваш вопрос! Наш специалист ответит в течение минуты.',
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#1F2937]">
      <header className="bg-[#111827] border-b border-[#374151] sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent">
                1WIN
              </h1>
              <nav className="hidden md:flex gap-6">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`text-sm font-medium transition-colors hover:text-[#F59E0B] ${
                      activeSection === item ? 'text-[#F59E0B]' : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setIsLoginOpen(true)}
                className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black"
              >
                Вход
              </Button>
              <Button
                onClick={() => setIsRegisterOpen(true)}
                className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] hover:opacity-90 text-black font-semibold"
              >
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#374151] py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM3NDE1MSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Ваш шанс на{' '}
                <span className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent">
                  большой выигрыш
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in">
                Казино и ставки на спорт • Более 10 000 игр • Быстрый вывод средств
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                <Button
                  onClick={() => setIsRegisterOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] hover:opacity-90 text-black font-bold text-lg px-8 py-6 animate-glow"
                >
                  Получить бонус 200%
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-black font-semibold text-lg px-8 py-6"
                >
                  <Icon name="PlayCircle" className="mr-2" size={20} />
                  Демо-режим
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-2">10K+</div>
                  <div className="text-sm text-gray-400">Игр</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Поддержка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F59E0B] mb-2">1 мин</div>
                  <div className="text-sm text-gray-400">Вывод</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#111827] border-y border-[#374151] overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">🎰</span>
                Джекпоты сейчас
              </h3>
            </div>
            <div className="relative h-24 overflow-hidden">
              {jackpots.map((jackpot, index) => (
                <div
                  key={jackpot.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    currentJackpot === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Card className="bg-gradient-to-r from-[#F59E0B] via-[#EF4444] to-[#F59E0B] border-0 p-6 animate-glow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl">{jackpot.emoji}</span>
                        <div>
                          <h4 className="text-xl font-bold text-black">{jackpot.name}</h4>
                          <p className="text-sm text-black/80">Прогрессивный джекпот</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-black tabular-nums">
                          {formatJackpot(jackpot.amount)}
                        </div>
                        <Button
                          size="sm"
                          className="mt-2 bg-black hover:bg-black/80 text-[#F59E0B] font-semibold"
                        >
                          Играть сейчас
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {jackpots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentJackpot(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentJackpot === index ? 'bg-[#F59E0B] w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#1F2937]">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">🎁</span>
              Акции и бонусы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {promos.map((promo, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#374151] to-[#1F2937] border-[#F59E0B] border-2 p-6 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="text-5xl font-bold text-[#F59E0B] mb-2">{promo.bonus}</div>
                  <h4 className="text-xl font-semibold mb-2">{promo.title}</h4>
                  <p className="text-gray-400 mb-4">{promo.amount}</p>
                  <Button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold">
                    Получить
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#111827]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">🎰</span>
                Популярные игры
              </h3>
              <div className="flex gap-2">
                {['Все', 'Слоты', 'Live', 'Спорт'].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className="border-[#374151] hover:bg-[#F59E0B] hover:text-black"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {displaySlots.map((slot) => (
                <Card
                  key={slot.id}
                  onClick={() => navigate(`/slot/${slot.id}`)}
                  className="bg-[#1F2937] border-[#374151] hover:border-[#F59E0B] transition-all group cursor-pointer overflow-hidden"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#374151] to-[#1F2937] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                    {slot.emoji}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1 truncate">{slot.title}</h4>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm text-gray-400">{slot.provider}</p>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                        <span className="text-sm">{slot.rating}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold">
                      Играть
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-400 mb-4">Показано 12 из {slots.length} игр</p>
              <Button
                variant="outline"
                className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black px-8"
              >
                Показать все слоты
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#1F2937]">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">⚡</span>
              Преимущества 1WIN
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: 'Shield', title: 'Безопасность', desc: 'Лицензия Кюрасао' },
                { icon: 'Zap', title: 'Быстрый вывод', desc: 'От 15 минут' },
                { icon: 'Gift', title: 'Щедрые бонусы', desc: 'До 200% на депозит' },
                { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи' },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-[#111827] border-[#374151] p-6 text-center hover:border-[#F59E0B] transition-colors"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#EF4444] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-black" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center animate-glow"
      >
        <Icon name="MessageCircle" size={28} className="text-black" />
      </button>

      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="bg-[#1F2937] border-[#374151] max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#F59E0B] flex items-center gap-2">
              <Icon name="Headphones" size={24} />
              Поддержка 24/7
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="h-80 overflow-y-auto space-y-3 p-4 bg-[#111827] rounded-lg">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-black'
                        : 'bg-[#374151] text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Textarea
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Напишите ваш вопрос..."
                className="bg-[#111827] border-[#374151] resize-none"
                rows={2}
              />
              <Button
                onClick={sendMessage}
                className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] hover:opacity-90 text-black font-semibold"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              Онлайн • Обычно отвечаем за 1 минуту
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center animate-glow"
      >
        <Icon name="MessageCircle" size={28} className="text-black" />
      </button>

      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="bg-[#1F2937] border-[#374151] max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#F59E0B] flex items-center gap-2">
              <Icon name="Headphones" size={24} />
              Поддержка 24/7
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="h-80 overflow-y-auto space-y-3 p-4 bg-[#111827] rounded-lg">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-black'
                        : 'bg-[#374151] text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Textarea
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Напишите ваш вопрос..."
                className="bg-[#111827] border-[#374151] resize-none"
                rows={2}
              />
              <Button
                onClick={sendMessage}
                className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] hover:opacity-90 text-black font-semibold"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              Онлайн • Обычно отвечаем за 1 минуту
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="bg-[#111827] border-t border-[#374151] py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">© 2025 1WIN Casino. Все права защищены.</p>
          <p className="text-sm">18+ | Играйте ответственно</p>
        </div>
      </footer>

      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="bg-[#1F2937] border-[#374151]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#F59E0B]">Вход</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="login-email">Email</Label>
              <Input id="login-email" type="email" className="bg-[#111827] border-[#374151]" />
            </div>
            <div>
              <Label htmlFor="login-password">Пароль</Label>
              <Input id="login-password" type="password" className="bg-[#111827] border-[#374151]" />
            </div>
            <Button className="w-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] hover:opacity-90 text-black font-semibold">
              Войти
            </Button>
            <p className="text-center text-sm text-gray-400">
              Нет аккаунта?{' '}
              <button
                onClick={() => {
                  setIsLoginOpen(false);
                  setIsRegisterOpen(true);
                }}
                className="text-[#F59E0B] hover:underline"
              >
                Зарегистрироваться
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
        <DialogContent className="bg-[#1F2937] border-[#374151]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#F59E0B]">Регистрация</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="register-email">Email</Label>
              <Input id="register-email" type="email" className="bg-[#111827] border-[#374151]" />
            </div>
            <div>
              <Label htmlFor="register-password">Пароль</Label>
              <Input id="register-password" type="password" className="bg-[#111827] border-[#374151]" />
            </div>
            <div>
              <Label htmlFor="register-promo">Промокод (необязательно)</Label>
              <Input id="register-promo" className="bg-[#111827] border-[#374151]" placeholder="WIN200" />
            </div>
            <Button className="w-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] hover:opacity-90 text-black font-semibold">
              Создать аккаунт
            </Button>
            <p className="text-center text-sm text-gray-400">
              Уже есть аккаунт?{' '}
              <button
                onClick={() => {
                  setIsRegisterOpen(false);
                  setIsLoginOpen(true);
                }}
                className="text-[#F59E0B] hover:underline"
              >
                Войти
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;