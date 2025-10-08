import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Главная');

  const navItems = ['Главная', 'Казино', 'Слоты', 'Live', 'Спорт', 'Промо'];

  const games = [
    { id: 1, title: 'Book of Ra', category: 'Слоты', image: '🎰' },
    { id: 2, title: 'Lucky Lady', category: 'Слоты', image: '💎' },
    { id: 3, title: 'Blackjack', category: 'Live', image: '🃏' },
    { id: 4, title: 'Roulette', category: 'Live', image: '🎡' },
    { id: 5, title: 'Mega Fortune', category: 'Казино', image: '💰' },
    { id: 6, title: 'Starburst', category: 'Слоты', image: '⭐' },
    { id: 7, title: 'Football Bets', category: 'Спорт', image: '⚽' },
    { id: 8, title: 'Basketball', category: 'Спорт', image: '🏀' },
  ];

  const promos = [
    { title: 'Бонус на первый депозит', bonus: '200%', amount: 'до 100 000 ₽' },
    { title: 'Фриспины каждый день', bonus: '50', amount: 'бесплатных вращений' },
    { title: 'Кэшбэк по пятницам', bonus: '10%', amount: 'от проигрышей' },
  ];

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
              {games.map((game) => (
                <Card
                  key={game.id}
                  className="bg-[#1F2937] border-[#374151] hover:border-[#F59E0B] transition-all group cursor-pointer overflow-hidden"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#374151] to-[#1F2937] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                    {game.image}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">{game.title}</h4>
                    <p className="text-sm text-gray-400 mb-3">{game.category}</p>
                    <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold">
                      Играть
                    </Button>
                  </div>
                </Card>
              ))}
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
