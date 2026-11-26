/* =========================================================
   Перевод сайта на английский.

   Русский текст живёт в index.html, а здесь — словарь «русский → английский».
   Если меняете русскую фразу в index.html, поменяйте её и здесь (левая часть),
   иначе на английской версии останется русский текст.

   Язык выбирается так: ?lang=en в адресе → сохранённый выбор → русский.
   ========================================================= */

const EN = {
    // Заголовок вкладки и описание для поисковиков
    'Faev Design — интернет-магазины и лендинги под ключ | Иван Фаев': 'Faev Design — online stores and landing pages, turnkey | Ivan Faev',
    'Иван Фаев — веб-дизайнер. Делаю интернет-магазины и лендинги под ключ: дизайн и разработка сразу в коде с Claude Code, сайты на Tilda (Zero Block) и других платформах, макеты в Figma — по запросу.': 'Ivan Faev — web designer. I build online stores and landing pages, turnkey: design and development straight in code with Claude Code, websites on Tilda (Zero Block) and other platforms, Figma mockups on request.',

    // Прелоадер и шапка
    'Веб-дизайн и разработка сайтов': 'Web design & development',
    'Открыть меню': 'Open menu',
    'Кейсы': 'Work',
    'Обо мне': 'About',
    'Стоимость': 'Pricing',
    'Вопросы': 'FAQ',
    'Обсудить проект': 'Start a project',
    'Работы': 'Work',
    'Услуги': 'Services',
    'Контакты': 'Contact',

    // Главный экран
    'Делаю интернет‑магазины': 'I build online stores',
    'и лендинги под ключ': 'and landing pages',
    'Иван Фаев': 'Ivan Faev',
    'веб-дизайн • tilda zero block • figma • claude code • frontend •': 'web design • tilda zero block • figma • claude code • frontend •',
    'Автор': 'Author',
    'Веб-дизайн, Tilda и frontend': 'Web design, Tilda & frontend',
    'Принцип': 'Principle',
    'Сначала смысл, потом форма': 'Meaning first, then form',
    'Открыт для проектов на 2026 год': 'Open for projects in 2026',

    // Манифест и цифры
    'Беру проект целиком: от структуры и дизайна до готового сайта. Чаще всего делаю дизайн сразу в коде — вы видите живой сайт, а не картинку. Не нужно искать отдельно дизайнера и разработчика — всё делаю сам.': 'I take the whole project: from structure and design to a finished website. Most often I design straight in code — you see a live site, not a picture. No need to look for a separate designer and developer — I do it all myself.',
    'Понятный процесс: бриф, структура, дизайн, вёрстка и запуск. На каждом этапе вы видите результат и можете внести правки.': 'A clear process: brief, structure, design, build and launch. At every stage you see the result and can request changes.',
    'Дизайн и вёрстка в одних руках': 'Design and build in one pair of hands',
    'Дизайн делаю сразу в коде, опираясь на опыт и насмотренность. Если нужно сначала согласовать макет — отрисую его в Figma.': 'I design straight in code, relying on experience and a trained eye. If you need to approve a mockup first, I’ll draw it in Figma.',
    'лет в веб-дизайне': 'years in web design',
    'От лендинга до магазина': 'From landing page to online store',
    'Лендинг для рекламы или услуги, интернет-магазин с каталогом, корзиной и оплатой, корпоративный сайт компании.': 'A landing page for ads or a service, an online store with a catalogue, cart and payment, a corporate website.',
    'проектов запущено': 'projects launched',

    // В работе
    'В работе': 'In progress',
    '(В работе)': '(In progress)',
    'Что я делаю прямо\u00a0сейчас': 'What I’m working on\u00a0right now',
    'Проекты, которые сейчас в разработке. Их уже можно открыть и посмотреть, на каком они этапе, — сайты обновляются по ходу работы.':
        'Projects currently in development. You can already open them and see what stage they’re at — the sites update as the work goes on.',
    'В разработке': 'In development',
    'Этап:': 'Stage:',
    'Дизайн': 'Design',
    'Вёрстка': 'Build',
    'Наполнение': 'Content',
    'Запуск': 'Launch',
    'Смотреть, что уже готово': 'See what’s ready',
    'бренд фарфоровых украшений': 'porcelain jewellery brand',
    'Арт текстиль Ирины Уткиной': 'Irina Utkina Art Textile',
    'магазин шёлковых платков': 'silk scarves store',
    'фарфоровая посуда с росписью': 'hand-painted porcelain tableware',
    'креативное ателье из Дубая': 'creative atelier from Dubai',
    'CASAVISION — креативное ателье из Дубая': 'CASAVISION — creative atelier from Dubai',
    'mulifeyn — бренд фарфоровых украшений': 'mulifeyn — porcelain jewellery brand',
    'Арт текстиль Ирины Уткиной — магазин шёлковых платков': 'Irina Utkina Art Textile — silk scarves store',
    'Mugs & Kisses — фарфоровая посуда с росписью': 'Mugs & Kisses — hand-painted porcelain tableware',

    // Кейсы
    'Последние проекты': 'Recent projects',
    'Интернет-магазины, лендинги и корпоративные сайты. Наведите на проект, чтобы пролистать его первые экраны, и нажмите, чтобы открыть сайт.': 'Online stores, landing pages and corporate websites. Hover over a project to scroll through its first screens, and click to open the site.',
    'Каждый сайт делаю под задачу бизнеса: чтобы клиенту было удобно найти товар, понять предложение и оставить заявку.': 'Every site is built around the business goal: so that customers can easily find a product, understand the offer and get in touch.',
    'Год': 'Year',
    'ПРО.Дизайн Бюро': 'PRO.Design Bureau',
    '(студия дизайна интерьера)': '(interior design studio)',
    '(магазин морепродуктов)': '(seafood store)',
    'ВДох': 'VDOH',
    '(керамика ручной работы)': '(handmade ceramics)',
    '(фарфоровая посуда)': '(porcelain tableware)',
    'Анастасия Кравченко': 'Anastasia Kravchenko',
    '(психолог)': '(psychologist)',
    '(бренд авторской керамики)': '(artisan ceramics brand)',
    '(кавер-группа)': '(cover band)',
    '(магазин керамики)': '(ceramics store)',
    'Юр. группа «ЛЬВЫ»': 'LIONS Legal Group',
    '(юридическое агентство)': '(law firm)',
    'Золото жизни': 'Zoloto Zhizni',
    '(магазин сыродавленных масел)': '(cold-pressed oils store)',
    'ООО «Дистрклин»': 'Distrclean',
    '(профессиональная химия)': '(professional cleaning chemicals)',
    'Юлия Гранкина': 'Julia Grankina',
    '(художник, интерьерные картины)': '(artist, interior paintings)',

    // Подписи к картинкам кейсов (для незрячих и поисковиков)
    'ПРО.Дизайн Бюро — студия дизайна интерьера': 'PRO.Design Bureau — interior design studio',
    'Rakovar64 — магазин морепродуктов': 'Rakovar64 — seafood store',
    'ВДох — керамика ручной работы': 'VDOH — handmade ceramics',
    'Mugs & Kisses — фарфоровая посуда': 'Mugs & Kisses — porcelain tableware',
    'Анастасия Кравченко — психолог': 'Anastasia Kravchenko — psychologist',
    'Shapes by Gaia — бренд авторской керамики': 'Shapes by Gaia — artisan ceramics brand',
    'AVENUE BAND — кавер-группа': 'AVENUE BAND — cover band',
    'Myflo Ceramics — магазин керамики': 'Myflo Ceramics — ceramics store',
    'Юр. группа «ЛЬВЫ» — юридическое агентство': 'LIONS Legal Group — law firm',
    'Золото жизни — магазин сыродавленных масел': 'Zoloto Zhizni — cold-pressed oils store',
    'ООО «Дистрклин» — профессиональная химия': 'Distrclean — professional cleaning chemicals',
    'Юлия Гранкина — художник, интерьерные картины': 'Julia Grankina — artist, interior paintings',

    // Бегущая строка и теги
    'Веб-дизайн': 'Web design',
    'Анимации': 'Animation',
    'Лендинги': 'Landing pages',
    'Корпоративные сайты': 'Corporate websites',
    'Интернет-магазины': 'Online stores',
    'Адаптив': 'Responsive',

    // Обо мне
    '(Обо мне)': '(About)',
    'Привет, я Иван Фаев': 'Hi, I’m Ivan Faev',
    'Я веб-дизайнер: делаю дизайн и вёрстку интернет-магазинов, лендингов и корпоративных сайтов.': 'I’m a web designer: I design and build online stores, landing pages and corporate websites.',
    'Собираю нестандартные проекты на Tilda, включая сложные анимации в Zero Block, CSS и JS, и разрабатываю сайты с помощью кода. Работаю и в Figma: если проекту нужен отдельный макет, отрисую его по запросу.': 'I build non-standard projects on Tilda, including complex animations in Zero Block, CSS and JS, and develop websites in code. I also work in Figma: if a project needs a separate mockup, I’ll design it on request.',
    'Основной инструмент — Claude Code, AI-ассистент для программирования. Собираю дизайн сразу в коде: ставлю задачу, а опыт и насмотренность помогают быстро прийти к нужному результату. Сайт с анимациями и интеграциями готов быстрее, а правки видны сразу на живой странице.': 'My main tool is Claude Code, an AI coding assistant. I build the design straight in code: I set the task, and experience and a trained eye help me get to the right result fast. A site with animations and integrations is ready sooner, and changes show up right on the live page.',
    'Работаю удалённо, на связи в Telegram и WhatsApp.': 'I work remotely and I’m available on Telegram and WhatsApp.',

    // Услуги
    '(Форматы работы)': '(Services)',
    'Что я могу для вас сделать': 'What I can do for you',
    'UI/UX дизайн': 'UI/UX design',
    'Проектирование логики': 'User flows and logic',
    'Дизайн сразу в коде или в Figma': 'Design straight in code or in Figma',
    'Десктоп и мобильная версии': 'Desktop and mobile versions',
    'Макет в Figma — по запросу': 'Figma mockup on request',
    'Вёрстка на Tilda / кодинг': 'Tilda build / coding',
    'Перенос дизайна на платформу': 'Moving the design to the platform',
    'Сложная анимация (Zero Block)': 'Complex animation (Zero Block)',
    'Интеграция кастомного кода': 'Custom code integration',
    'Адаптация под все устройства': 'Optimised for every device',
    'Сайт под ключ': 'Turnkey website',
    'Анализ и структура (UX)': 'Research and structure (UX)',
    'Уникальный дизайн интерфейса': 'Unique interface design',
    'Frontend-разработка / Tilda': 'Frontend development / Tilda',
    'Подключение домена и сервисов': 'Domain and services setup',
    'от $200': 'from $200',
    'от $350': 'from $350',
    'от $550': 'from $550',

    // Вопросы
    '(Вопросы)': '(FAQ)',
    'Частые вопросы': 'Frequently asked questions',
    'Как происходит оплата?': 'How does payment work?',
    'Работа делится на этапы. Обычно это предоплата 50% перед началом работы и оставшиеся 50% после согласования дизайна или при сдаче готового проекта.': 'The work is split into stages. Usually it’s a 50% prepayment before the work starts and the remaining 50% once the design is approved or when the finished project is delivered.',
    'Будет ли макет в Figma?': 'Will there be a Figma mockup?',
    'По запросу — да. Обычно я делаю дизайн сразу в коде: вы смотрите живой сайт в браузере и на телефоне и даёте правки. Если нужно сначала утвердить картинку или передать макет другой команде, отрисую дизайн в Figma.':
        'Yes, on request. Usually I design straight in code: you look at the live site in a browser and on your phone and give feedback. If you need to approve a picture first or hand a mockup to another team, I’ll design it in Figma.',
    'Сколько времени занимает разработка?': 'How long does development take?',
    'Всё зависит от сложности задачи. Лендинг в среднем занимает от 7 до 14 дней. Многостраничный корпоративный сайт — от 3 до 5 недель с учётом всех согласований.':
        'It depends on the complexity. A landing page usually takes 7 to 14 days. A multi-page corporate website takes 3 to 5 weeks, including all approvals.',
    'Смогу ли я сам редактировать сайт?': 'Will I be able to edit the site myself?',
    'Да. Если сайт собирается на Tilda, я записываю подробную видеоинструкцию о том, как менять тексты, картинки и добавлять новые блоки самостоятельно, без знания кода.':
        'Yes. If the site is built on Tilda, I record a detailed video guide on how to change texts and images and add new blocks yourself — no coding required.',

    // Контакты и подвал
    '(Контакты)': '(Contact)',
    'Готовы обсудить проект?': 'Ready to discuss your project?',
    'Оставить заявку': 'Send a request',
    '© 2026 Иван Фаев': '© 2026 Ivan Faev',
    'Политика конфиденциальности': 'Privacy policy',
    'Согласие на обработку персональных данных': 'Personal data consent',
    'Дизайн и код — с любовью к деталям': 'Design and code — with love for details',

    // Окно заявки
    'Закрыть': 'Close',
    'Наверх': 'Back to top',
    'Ответьте на пару вопросов, чтобы я мог сориентировать вас по срокам и стоимости.':
        'Answer a couple of questions so I can estimate the timing and cost for you.',
    'Ваше имя': 'Your name',
    'Telegram / WhatsApp': 'Telegram / WhatsApp / email',
    'Кратко о задаче: какой сайт нужен?': 'Briefly about the task: what kind of website do you need?',
    'Я даю': 'I give my',
    'согласие на обработку персональных данных': 'consent to the processing of personal data',
    'и принимаю': 'and accept the',
    'политику конфиденциальности': 'privacy policy',
    'Отправить заявку': 'Send request',
    'Заявка отправлена!': 'Request sent!',
    'Спасибо! Я скоро с вами свяжусь.': 'Thank you! I’ll get back to you soon.',

    // Тексты, которые подставляет js/main.js
    'Отправка...': 'Sending…',
    'Не удалось отправить заявку. Пожалуйста, напишите мне напрямую в Telegram: @iwebdsgn':
        'Couldn’t send the request. Please message me directly on Telegram: @iwebdsgn',
    'Открыть\nсайт ↗': 'Open\nsite ↗',
    'Листаем ↓': 'Scroll ↓',
    'Открыть сайт ↗': 'Open site ↗',
};

const LANG = (() => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl === 'en' || fromUrl === 'ru') return fromUrl;
    try {
        const saved = localStorage.getItem('faev-lang');
        if (saved === 'en' || saved === 'ru') return saved;
    } catch (e) { /* хранилище недоступно */ }
    return 'ru';
})();

// Перевод одной фразы — используется и в js/main.js
const tr = (text) => (LANG === 'en' && EN[text]) || text;

(function applyLanguage() {
    document.querySelectorAll('[data-lang]').forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.lang === LANG);
        btn.addEventListener('click', () => {
            if (btn.dataset.lang === LANG) return;
            try {
                localStorage.setItem('faev-lang', btn.dataset.lang);
                sessionStorage.setItem('faev-skip-preloader', '1');
            } catch (e) { /* хранилище недоступно */ }
            const url = new URL(location.href);
            url.searchParams.set('lang', btn.dataset.lang);
            location.href = url.toString();
        });
    });

    if (LANG !== 'en') return;

    document.documentElement.lang = 'en';
    document.title = tr(document.title);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = tr(description.content);

    // Все текстовые узлы страницы: заменяем, сохраняя пробелы по краям
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        const key = node.nodeValue.trim();
        if (key && EN[key]) {
            const [lead] = node.nodeValue.match(/^\s*/);
            const [trail] = node.nodeValue.match(/\s*$/);
            node.nodeValue = lead + EN[key] + trail;
        }
    }

    ['placeholder', 'alt', 'aria-label'].forEach((attr) => {
        document.querySelectorAll(`[${attr}]`).forEach((el) => {
            el.setAttribute(attr, tr(el.getAttribute(attr)));
        });
    });
})();
