import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-dark-brown via-background to-fantasy-brown">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <img 
          src="/img/7e9567fd-28d8-4a15-8fcd-bfbd6ff0ec88.jpg" 
          alt="Шашлычная У Джинна"
          className="absolute inset-0 w-full h-screen object-cover"
        />
        
        <div className="relative z-20 container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="fantasy-title text-6xl md:text-8xl text-fantasy-gold animate-glow mb-8">
              ВЕЛИКОЕ МЯСНОЕ <br />
              РАССЛЕДОВАНИЕ
            </h1>
            
            <div className="fantasy-header text-2xl md:text-3xl text-fantasy-gold/90 mb-6 animate-fade-in">
              Иванград • Год Первый Правления Темного Владыки
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 animate-fade-in">
              Там, где тень цивилизации падает на дикие земли, а потом спотыкается и роняет все документы...
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('story')}
                className="fantasy-header text-lg px-8 py-6 bg-fantasy-gold hover:bg-fantasy-gold/90 text-fantasy-dark-brown border-2 border-fantasy-gold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-fantasy-gold/25"
              >
                <Icon name="Scroll" className="mr-2" />
                Читать Историю
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('mission')}
                className="fantasy-header text-lg px-8 py-6 border-2 border-fantasy-gold text-fantasy-gold hover:bg-fantasy-gold hover:text-fantasy-dark-brown hover:scale-105 transition-all duration-300"
              >
                <Icon name="Target" className="mr-2" />
                К Миссии
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${scrollY > 100 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-card/90 backdrop-blur rounded-lg border border-fantasy-gold/30 p-2">
          <div className="flex flex-col gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => scrollToSection('intro')}
              className={`text-sm ${activeSection === 'intro' ? 'bg-fantasy-gold text-fantasy-dark-brown' : 'text-fantasy-gold hover:bg-fantasy-gold/20'}`}
            >
              Начало
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => scrollToSection('story')}
              className={`text-sm ${activeSection === 'story' ? 'bg-fantasy-gold text-fantasy-dark-brown' : 'text-fantasy-gold hover:bg-fantasy-gold/20'}`}
            >
              История
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => scrollToSection('mission')}
              className={`text-sm ${activeSection === 'mission' ? 'bg-fantasy-gold text-fantasy-dark-brown' : 'text-fantasy-gold hover:bg-fantasy-gold/20'}`}
            >
              Миссия
            </Button>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div id="story" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="parchment p-8 mx-auto animate-fade-in relative">
            {/* Восковые печати */}
            <div className="wax-seal wax-seal-1"></div>
            <div className="wax-seal wax-seal-2"></div>
            
            {/* Древние символы */}
            <div className="ancient-symbol symbol-1">☩</div>
            <div className="ancient-symbol symbol-2">⚜</div>
            <div className="ancient-symbol symbol-3">🗡</div>
          
            <div className="space-y-8 parchment-text">
              <div className="text-center mb-8">
                <h2 className="fantasy-title text-4xl text-fantasy-brown mb-2">Полгода Спустя</h2>
                <div className="w-32 h-1 bg-fantasy-brown mx-auto opacity-60"></div>
              </div>
              
              <p className="text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                Полгода. Именно столько прошло с тех пор, как по воле Темного Владыки Ивана IV Хаотического 
                между холмом Калькуары и извилистой рекой начал расти <strong>Иванград</strong>. 
                Город, где ровные улицы уже есть, а канализация — пока нет. Где пахнет надеждой, свежей щепой 
                и слегка подгоревшим троллем.
              </p>

              <div className="border-t border-fantasy-brown/30 pt-6">
                <h3 className="fantasy-header text-2xl text-fantasy-brown mb-4 text-center">Агенты Торквина</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Вы — не герои и не последняя надежда. Вы — несчастные сотрудники (или «активные активы», 
                  как модно называть) тайной службы Торквина. Ваш босс, как и вы, недавно сбежал из захваченного 
                  светлыми Кемнаро и теперь с упорством, достойным лучшего применения, пытается перенести сюда 
                  агентурную сеть.
                </p>
                <div className="bg-fantasy-brown/10 rounded p-4 border-l-4 border-fantasy-brown italic text-fantasy-brown/80">
                  Пока что главные враги государства — это хроническое отсутствие кофе и криво подключенный 
                  магический факс, который вместо донесений печатает смущающие портреты Владыки.
                </div>
              </div>

              <div className="border-t border-fantasy-brown/30 pt-6">
                <h3 className="fantasy-header text-2xl text-fantasy-brown mb-4 text-center">Шашлычная «У Джинна»</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Последние недели вы пытались освоиться. И даже добились некоторого успеха: нашли единственную 
                  шашлычную <strong>«У Джинна»</strong>, где подают шашлык такой силы, 
                  что после него хочется прощать врагов, ибо враги уже не важны.
                </p>
                <div className="bg-fantasy-brown/20 rounded p-4 border border-fantasy-brown/40 text-center">
                  <p className="font-medium italic">
                    Важны только этот божественный вкус и чтобы никто не трогал.
                  </p>
                </div>
              </div>

              <div className="border-t border-red-800/50 pt-6">
                <h3 className="fantasy-header text-3xl text-red-800 mb-4 text-center">НЕМЫСЛИМОЕ ПРОИЗОШЛО</h3>
                <p className="text-lg leading-relaxed mb-4 text-center">
                  Трагедия, перед которой меркнут угрозы вторжения светлых.
                </p>
                <h4 className="fantasy-header text-xl text-red-800 mb-3 text-center">Из шашлычной пропало мясо. ВСЁ МЯСО!</h4>
                <ul className="space-y-2 text-lg text-red-900 text-center">
                  <li>❌ Отборная вырезка с тролля-марафонца</li>
                  <li>❌ Нежные антрекоты василиска</li>
                  <li className="font-bold">❌ Последний окорок эфирного кабана</li>
                </ul>
              </div>

              <div className="border-t border-fantasy-brown/30 pt-6">
                <h3 className="fantasy-header text-2xl text-fantasy-brown mb-4 text-center">Речь Торквина</h3>

                <div className="bg-fantasy-brown/10 rounded p-6 border-l-4 border-fantasy-brown">
                  <p className="text-lg leading-relaxed mb-4 italic text-center">
                    «ЭТОГО не может быть! — его голос дрожал от неподдельного ужаса. — У Джинна пусто! 
                    Холодильники сиротливо пустуют! На кухне царит атмосфера, сравнимая с концом света! 
                    Без этого шашлыка я... мы... все мы не сможем думать! Работать! Жить!»
                  </p>
                  <p className="text-lg leading-relaxed mb-4 text-center">
                    Он тяжко вздохнул, глядя на вас, как на свою последнюю, крайне ненадежную соломинку.
                  </p>
                  <div className="bg-fantasy-brown/20 rounded p-4 border border-fantasy-brown/40">
                    <p className="text-lg leading-relaxed font-medium text-center">
                      «Найдите это мясо. Верните его. Не ради славы, не ради Владыки... а ради всех нас. 
                      Ради того, чтобы в этом юном городе оставался хоть один лучик гастрономического счастья!»
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <Card id="mission" className="bg-fantasy-gold/10 backdrop-blur border-fantasy-gold animate-fade-in">
            <CardContent className="p-8 text-center">
              <Icon name="Target" className="mx-auto mb-4 text-fantasy-gold" size={48} />
              <h2 className="fantasy-header text-3xl text-fantasy-gold mb-6">МИССИЯ</h2>
              <p className="text-xl leading-relaxed mb-8">
                Срочность — «вчера». Армия Уру-Буки бесполезна — они сожрали бы находку на месте. 
                Стража Гуго бесполезна вдвойне — они даже понюхать не могут!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="group">
                  <Button 
                    size="lg" 
                    className="fantasy-header text-lg bg-fantasy-gold hover:bg-fantasy-gold/90 text-fantasy-dark-brown hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-fantasy-gold/50 group-hover:animate-pulse"
                  >
                    <Icon name="Search" className="mr-2" />
                    Найти Мясо
                    <Badge className="ml-2 bg-destructive text-white animate-bounce">СРОЧНО</Badge>
                  </Button>
                </div>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="fantasy-header text-lg border-fantasy-gold text-fantasy-gold hover:bg-fantasy-gold hover:text-fantasy-dark-brown hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Icon name="Users" className="mr-2" />
                  Собрать Команду
                </Button>
              </div>
              
              <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-fantasy-gold/30">
                <p className="text-sm text-muted-foreground italic">
                  P.S. Пока вы там, прихватите мне парочку люля-кебабов. 🍗
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}