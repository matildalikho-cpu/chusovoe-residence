import logo from "@/assets/logo.png";
import broDesignLogo from "@/assets/bro-design-logo.png";
import lakeFloat from "@/assets/lake-float.jpg";
import dockMist from "@/assets/dock-mist.jpg";
import hillSunset from "@/assets/hill-sunset.jpg";
import table from "@/assets/table.jpg";
import cliff from "@/assets/cliff.jpg";
import housePorch from "@/assets/house-porch.jpg";
import houseMarigolds from "@/assets/house-marigolds.jpg";
import houseWall from "@/assets/house-wall.jpg";
import banyaDusk from "@/assets/banya-dusk.jpg";
import prints from "@/assets/prints.jpg";
import dog from "@/assets/dog.jpg";
import hostsCollage from "@/assets/hosts-collage-v23.png";
import dinnerView from "@/assets/dinner-view.jpg";
import dogRing from "@/assets/dog-ring.jpg";
import pianoYard from "@/assets/piano-yard.jpg";
import lakeReading from "@/assets/lake-reading.jpg";
import dogLeaves from "@/assets/dog-leaves.jpg";
import swingLaptop from "@/assets/swing-laptop.jpg";
import dockGroup from "@/assets/dock-group.jpg";
import lunchGirls from "@/assets/lunch-girls.jpg";
import porchSun from "@/assets/porch-sun.jpg";
import bridgeFog from "@/assets/bridge-fog.jpg";
import meadowSunrise from "@/assets/meadow-sunrise.jpg";
import spiderWeb from "@/assets/spider-web.jpg";
import bridgeDawn from "@/assets/bridge-dawn.jpg";
import phoneMeadow from "@/assets/phone-meadow.jpg";
import thistles from "@/assets/thistles.jpg";
import dockSwim from "@/assets/dock-swim.jpg";
import goats from "@/assets/goats.jpg";
import hammockPiano from "@/assets/hammock-piano.jpg";
import paintsLake from "@/assets/paints-lake.jpg";
import groupPorch from "@/assets/group-porch.jpg";
import pastaPorch from "@/assets/pasta-porch.jpg";
import yellowWall from "@/assets/yellow-wall.jpg";
import verandaSunset from "@/assets/veranda-sunset.jpg";
import tentsLake from "@/assets/tents-lake.jpg";
import mosaicHands from "@/assets/mosaic-hands.jpg";
import lunchLake from "@/assets/lunch-lake.jpg";
import barnCinema from "@/assets/barn-cinema.jpg";

const guests = [
  ["Дмитрий Ануфриев", "фотограф"],
  ["Андрей Белявский", "музыкант"],
  ["Алина Ежакова", "музыкант"],
  ["Ольга Езова-Денисова", "художник-иллюстратор"],
  ["Даша Захарова", "художник-иллюстратор"],
  ["Максим Калашник", "музыкант и саунд-дизайнер"],
  ["Лиза Конышева", "художник-иллюстратор"],
  ["Данила Матросов", "музыковед"],
  ["Анастасия Мелихова", "художник-аниматор"],
  ["Елена Мокрецова", "дизайнер"],
  ["Настя Москвина", "художник-мозаичист"],
  ["Мила Лебедева", "дизайнер"],
  ["Евгения Опалько", "художник-аниматор"],
  ["Маруся Панченко", "ХУДОЖНИК И МУЗА"],
  ["Екатерина Поединщикова", "художник"],
  ["Женя Чайка", "галерист и арт-куратор"],
  ["Наталья Чернышева", "художник-аниматор"],
  ["Оксана Шевченко", "актриса, перформер"],
];

const rooms = [
  ["Люкс", "для пары или близких друзей, двуспальная кровать Queen size"],
  ["Хостел", "камин, кружевные занавески и архив литературных журналов 80-х. поместятся не в обиде 4–5 человек"],
  ["Прохладный сингл", "с видом на реку, можно вдвоём"],
  ["Комната отдыха в бане", "спальное место на одного"],
  ["Боковая полка", "компактная, на проходе"],
  ["Поле перед домом", "для собственной палатки"],
];

const homeGallery = [
  pastaPorch, yellowWall, barnCinema, verandaSunset, lunchLake, mosaicHands,
  pianoYard, dogRing, lakeReading, dinnerView, phoneMeadow, swingLaptop,
  groupPorch, dockGroup, hammockPiano, dogLeaves, dockSwim, paintsLake,
  lunchGirls, porchSun, tentsLake,
];

const natureGallery = [
  bridgeFog, meadowSunrise, spiderWeb, bridgeDawn, thistles, goats,
];

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/60 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-baseline gap-6 md:mb-14">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {number}
          </span>
          <h2 className="text-3xl md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[92vh] w-full overflow-hidden">
          <img
            src={dockMist}
            alt="Туман над озером в Чусовом"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
          <header className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-6 md:px-12">
            <a href="https://maps.app.goo.gl/6ckLu4trXTGDAi3m7" target="_blank" rel="noopener noreferrer" className="font-serif italic text-lg text-foreground/90 underline underline-offset-4 hover:text-foreground transition-colors">Село Чусовое, Свердловская область</a>
            <nav className="hidden gap-8 font-sans text-xs uppercase tracking-[0.25em] text-foreground/80 md:flex">
              <a href="#idea" className="hover:text-foreground transition-colors">Идея</a>
              <a href="#history" className="hover:text-foreground transition-colors">История</a>
              <a href="#stay" className="hover:text-foreground transition-colors">Дом</a>
              <a href="#apply" className="hover:text-foreground transition-colors">КОНТАКТ</a>
            </nav>
          </header>
          <figure className="absolute right-6 top-24 max-w-xs md:right-12 md:top-28 md:max-w-md">
            <p className="font-serif text-lg italic leading-relaxed text-foreground/90 md:text-2xl">
              В 2026 году резиденция пройдет с 13 по 16 августа. Напишите нам, если хотите присоединиться.
            </p>
          </figure>
          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 md:px-12 md:pb-24">
            <div className="mx-auto max-w-6xl">
              <h1 className="sr-only">Чусовое — частная творческая резиденция на Урале</h1>
              <img
                src={logo}
                alt="Логотип: Чусовое — частная творческая резиденция"
                className="mb-8 w-full max-w-3xl drop-shadow-[0_2px_24px_rgba(255,255,255,0.6)] md:max-w-5xl"
              />
              <p className="max-w-xl pl-1 font-sans text-sm uppercase tracking-[0.25em] text-foreground/70">
                село Чусовое · Урал · одна неделя в году
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="idea" />
      <Section number="01" title="Идея резиденции">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <p className="font-serif text-xl leading-relaxed md:text-2xl">
            Каждому творцу нужно вдохновение — и он обычно знает, где его искать.
            Культура арт-резиденций даёт пространство для глубокого погружения в свои идеи и знакомства, которые позволяют развить практику. Наша первая резиденция в Чусовом появилась именно с такой целью.&nbsp;
          </p>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Мы хотели создать поле, богатое творческими импульсами, где через
              совместные занятия искусством и быт, в разговорах и тишине, в действии
              и бездействии происходит творческое обогащение и инновация.
            </p>
            <p>
              Но в процессе поняли — самое ценное в этом опыте не гнаться за
              немедленным результатом, а поймать свой собственный биоритм,
              переключиться на другую частоту, расслабиться и отпустить. И это
              вернётся — быстрее или медленнее — инсайтами совсем другого свойства,
              которые проявятся и в творчестве.&nbsp;
            </p>
          </div>
        </div>
      </Section>

      {/* Image break */}
      <div className="grid gap-2 px-6 md:grid-cols-3 md:px-12">
        <img src={lakeFloat} alt="Резиденты на сапе на озере в Чусовом" className="aspect-[3/4] w-full object-cover" />
        <img src={hillSunset} alt="Закат над холмами вокруг Чусового" className="aspect-[3/4] w-full object-cover" />
        <img src={cliff} alt="Скалистый берег реки Шайтанки" className="aspect-[3/4] w-full object-cover" />
      </div>
      <div id="history" />
      <Section number="02" title="История">
        <div className="grid gap-12 md:grid-cols-7 md:gap-16">
          <div className="md:col-span-4 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Резиденцию придумала в 2022 году художник-аниматор, кинорежиссёр и
              сценарист{" "}
              <a
                href="https://t.me/multfilmsandlife"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Нина Бисярина
              </a>
              . Гостями первых трёх резиденций стали Нинины друзья, коллеги и
              друзья друзей: кинематографисты, иллюстраторы, дизайнеры,
              художники, фотографы, музыканты, перформеры.
            </p>

            <p>
              Резиденция проходит одну неделю в году, летом. Местом стал дом
              друзей в селе Чусовом, где ещё в советское время Союз художников
              выделял участки для творческих дач — здесь база Свердловского
              художественного училища им. Шадра, в селе есть своя картинная галерея, а
              летом на берегах Чусовой художники устраивают пленэры.
            </p>

            <p>
              20 лет назад избу с участком в Чусовом купил фотограф{" "}
              <em className="text-foreground">Дмитрий Кунилов</em>; за эти годы
              дом преобразился. Хост резиденции —{" "}
              <em className="text-foreground">Алёна Кунилова</em>, жена и
              подруга, городской исследователь, гид и мастер гостеприимства.
            </p>
          </div>

          <div className="md:col-span-3">
            <figure>
              <img
                src={hostsCollage}
                alt="Нина, Дмитрий, Алёна — коллаж"
                className="w-full"
              />
            </figure>
          </div>
        </div>
      </Section>
      <Section number="03" title="Гости резиденции">
        <ul className="divide-y divide-border/60">
          {guests.map(([name, role]) => (
            <li key={name} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
              <span className="font-serif text-xl md:text-2xl">{name}</span>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {role}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="04" title="Что мы делаем">
        <div className="grid gap-12 md:grid-cols-2 md:items-stretch">
          <p className="font-serif text-xl leading-relaxed md:text-2xl">
            Прежде всего мы живём вместе: готовим, едим, гуляем, разговариваем,
            делимся своим искусством — кино, музыкой, иллюстрациями, фотографиями.
            Встречаем рассветы, любуемся закатами, купаемся, загораем, ходим в баню.
          </p>
          <div className="flex flex-col justify-between space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{"\n"}</p>
            <p>
              Каждый участник может провести свой мастер-класс, показ, практику,
              лекцию, перформанс, выставку, концерт или читку — по желанию. И
              принять участие в работе другого резидента. Или ничего не делать.
            </p>
            <p className="font-serif italic text-foreground">
              Нет дедлайнов и требований. Можно просто выдыхать — потому что это
              тоже искусство.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-2 md:grid-cols-3">
          <img src={prints} alt="Отпечатки и работы резидентов на столе" className="aspect-[4/3] w-full object-cover" />
          <img src={table} alt="Общий стол с ужином в доме резиденции" className="aspect-[4/3] w-full object-cover" />
          <img src={dog} alt="Пёс Бродский во дворе дома" className="aspect-[4/3] w-full object-cover" />
        </div>
      </Section>

      <div id="stay" />
      <Section number="05" title="Дом и размещение">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <div className="grid grid-cols-2 gap-2">
              <img src={housePorch} alt="Дом с верандой в Чусовом" className="aspect-[3/4] w-full object-cover" />
              <img src={houseMarigolds} alt="Дом и бархатцы у забора" className="aspect-[3/4] w-full object-cover" />
              <img src={houseWall} alt="Красная стена дома в тени листвы" className="aspect-[3/4] w-full object-cover" />
              <img src={banyaDusk} alt="Баня на берегу в сумерках" className="aspect-[3/4] w-full object-cover" />
            </div>
            <p className="mt-6 font-serif italic text-lg leading-relaxed text-foreground/85">
              Дом немного похож на Ходячий замок Хаула: он строился и
              перестраивался, в нём отразилось время, дефицит бюджета, влияние
              острова Бурано и трансформация самой семьи.
            </p>
          </div>
          <div>
            <ul className="space-y-6">
              {rooms.map(([title, desc]) => (
                <li key={title} className="border-l-2 border-primary/60 pl-5">
                  <div className="font-serif text-xl md:text-2xl">{title}</div>
                  <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</div>
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>Чистого постельного белья, подушек и одеял — в достатке.</p>
              <p>
                Комфортно в доме размещаются 8–10 человек. Кухня с горячей водой,
                холодильником, газовой плиткой и электродуховкой.
              </p>
              <p>Туалет уличный — но тоже творческий. Баня просторная, жаркая.</p>
              <p>
                Дом стоит на первой линии, с выходом к воде (река Шайтанка,
                запруда). Есть сап и резиновая лодка.&nbsp;
              </p>
              <p>Приветствуется любая помощь на участке. По желанию.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section number="06" title="Условия и планы">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 text-base leading-relaxed">
            <h3 className="font-serif text-2xl">Условия участия</h3>
            <p className="text-muted-foreground">
              Бесплатное проживание и баня. Проезд и продукты участники оплачивают
              самостоятельно.
            </p>
          </div>
          <div className="space-y-4 text-base leading-relaxed">
            <h3 className="font-serif text-2xl">Планы</h3>
            <p className="text-muted-foreground">
              В 2024 году Нина участвовала в форуме арт-резиденций ГЭС-2, по
              итогам которого Чусовое вошло в один список проектов наряду с Переделкино и другими серьёзными институциями. Стараемся держать марку! Мы
              открываем набор участников на август 2026 года и{"\u00a0"} будем рады новым творческим лицам.{"\u00a0"}
            </p>
          </div>
        </div>
      </Section>

      <Section number="07" title="Как это было">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {homeGallery.map((img, i) => (
            <img key={`home-${i}`} src={img} alt="" className="aspect-[3/4] w-full object-cover" loading="lazy" />
          ))}
          {natureGallery.map((img, i) => (
            <img key={`nature-${i}`} src={img} alt="" className="aspect-[3/4] w-full object-cover" loading="lazy" />
          ))}
        </div>
      </Section>

      <section id="apply" className="border-t border-border/60 px-6 py-24 md:px-12 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
            КОНТАКТ
          </span>
          <h2 className="mt-6 text-4xl leading-tight md:text-6xl">
            Напишите нам,&nbsp;
            <br />
            если хотите стать
            <br />
            <em>участником следующей резиденции</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground whitespace-pre-line">
            Расскажите о себе и о том, чем вы готовы поделиться{"\u00a0"}{"\n"}с другими участниками резиденции.{"\u00a0"}
          </p>
          <a
            href="https://t.me/AlyonaRocket"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 border border-foreground/80 px-10 py-4 font-sans text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Написать в Telegram
            <span aria-hidden>→</span>
          </a>
          <p className="mx-auto mt-8 max-w-xl font-serif text-lg italic leading-relaxed text-foreground">
            Или на почту{" "}
            <a href="mailto:salyona@gmail.com" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
              salyona@gmail.com
            </a>
          </p>
          <img
            src={broDesignLogo}
            alt="Made by Bro Design"
            className="mx-auto mt-10 h-64 w-auto md:h-80"
          />
          <div className="mx-auto mt-4 flex max-w-5xl flex-wrap items-center justify-center gap-6 font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span>Чусовое · частная творческая резиденция</span>
            <span>2022-2026</span>
          </div>
        </div>
      </section>
    </main>
  );
}
