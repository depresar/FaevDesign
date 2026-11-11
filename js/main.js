/* =========================================================
   Faev Design — скрипты сайта
   ========================================================= */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

// ---------- Плавный скролл колёсиком мыши (библиотека Lenis) ----------
// На телефонах остаётся родной скролл — он и так плавный.
const lenis = (!reduceMotion && window.Lenis) ? new Lenis({ lerp: 0.09, wheelMultiplier: 1 }) : null;

if (lenis) {
    (function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    })(performance.now());

    // Ссылки меню (#about, #works…) тоже прокручиваем плавно, с отступом под шапку
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target, { offset: link.getAttribute('href') === '#top' ? 0 : -110, duration: 1.4 });
        });
    });
}

// ---------- Прелоадер и появление главного экрана ----------
// Показывается при каждом заходе. Счётчик идёт 0→100% примерно за 2,2 с и не закончится,
// пока не загрузятся шрифты и главное фото (на медленном интернете — максимум 4 с).
const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
const heroImg = document.querySelector('.hero__person img');
const heroImgReady = heroImg && heroImg.decode ? heroImg.decode().catch(() => {}) : Promise.resolve();
const revealHero = () => requestAnimationFrame(() => document.body.classList.add('is-loaded'));

(function runPreloader() {
    const preloader = document.getElementById('preloader');

    // После переключения языка страница перезагружается — прелоадер второй раз не показываем
    let skip = false;
    try {
        skip = sessionStorage.getItem('faev-skip-preloader') === '1';
        sessionStorage.removeItem('faev-skip-preloader');
    } catch (e) { /* хранилище недоступно */ }

    if (!preloader || reduceMotion || skip) {
        if (preloader) preloader.remove();
        fontsReady.then(revealHero);
        return;
    }

    document.documentElement.classList.add('is-preloading');
    if (lenis) lenis.stop();

    const count = document.getElementById('preCount');
    const bar = document.getElementById('preBar');
    const minTime = 2200;
    const start = performance.now();
    let ready = false;
    Promise.all([fontsReady, heroImgReady]).then(() => { ready = true; });
    setTimeout(() => { ready = true; }, 4000);

    const tick = (now) => {
        const t = clamp((now - start) / minTime, 0, 1);
        // Плавный разгон и торможение, чтобы счётчик не пролетал первые проценты
        let progress = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        if (!ready) progress = Math.min(progress, 0.9);
        count.textContent = Math.round(progress * 100);
        bar.style.transform = `scaleX(${progress})`;

        if (progress < 1) {
            requestAnimationFrame(tick);
            return;
        }
        setTimeout(() => {
            preloader.classList.add('is-done');
            document.documentElement.classList.remove('is-preloading');
            if (lenis) lenis.start();
            setTimeout(revealHero, 250);
            setTimeout(() => preloader.remove(), 1400);
        }, 150);
    };
    requestAnimationFrame(tick);
})();

// ---------- Появление элементов при скролле ----------
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

// ---------- Текст «из дымки» ----------
// Каждое слово оборачивается в <span class="hw">, а при скролле
// слова по очереди проявляются из размытия.
const hazeBlocks = [...document.querySelectorAll('[data-haze]')].map((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w) => `<span class="hw">${w}</span>`).join(' ');
    return { el, words: [...el.querySelectorAll('.hw')] };
});

function updateHaze() {
    const vh = window.innerHeight;
    hazeBlocks.forEach(({ el, words }) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > vh + 100) return;

        // 0 — блок только появился снизу, 1 — дошёл до середины экрана
        const progress = clamp((vh * 0.9 - rect.top) / (vh * 0.45 + rect.height * 0.6), 0, 1);
        const spread = 6;
        const total = words.length + spread;

        words.forEach((word, i) => {
            const t = clamp((progress * total - i) / spread, 0, 1);
            word.style.opacity = 0.12 + t * 0.88;
            word.style.filter = t >= 1 ? 'none' : `blur(${(1 - t) * 10}px)`;
        });
    });
}

// ---------- Счётчики ----------
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = +el.dataset.target;
        const duration = 2200;
        const start = performance.now();

        const tick = (now) => {
            const p = clamp((now - start) / duration, 0, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = Math.round(target * eased);
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.6 });

document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));

// ---------- Параллакс главного экрана, фото и бегущая строка ----------
const header = document.getElementById('header');
const heroBottom = document.querySelector('.hero__bottom');
const speedEls = document.querySelectorAll('[data-speed]');
const toTop = document.getElementById('toTop');

toTop.addEventListener('click', () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});
const parallaxImgs = document.querySelectorAll('[data-parallax]');
const marquees = [...document.querySelectorAll('[data-marquee]')].map((row) => {
    row.innerHTML += row.innerHTML; // дублируем содержимое для бесконечной прокрутки
    return { row, dir: +row.dataset.marquee };
});

let marqueeOffset = 0;
let lastScroll = window.scrollY;
let velocity = 0;

function onFrame() {
    const y = window.scrollY;
    const vh = window.innerHeight;

    // Шапка: как только начинаем листать, у неё появляется тёмный фон
    header.classList.toggle('is-compact', y > 40);

    // Кнопка «наверх»: видна после первого экрана, кольцо = доля пролистанной страницы
    const maxScroll = document.documentElement.scrollHeight - vh;
    toTop.classList.toggle('is-visible', y > vh * 0.8);
    toTop.style.setProperty('--progress', maxScroll > 0 ? clamp(y / maxScroll, 0, 1).toFixed(4) : 0);

    if (!reduceMotion) {
        // Главный экран: подписи внизу растворяются, слои с data-speed отстают от скролла.
        // Бейдж крутится сам по себе (CSS-анимация), от скролла не зависит.
        const p = clamp(y / vh, 0, 1);
        if (p < 1) {
            heroBottom.style.opacity = 1 - p * 1.6;
            speedEls.forEach((el) => {
                el.style.transform = `translateY(${y * el.dataset.speed}px)`;
            });
        }

        // Фото «Обо мне» двигается медленнее страницы
        parallaxImgs.forEach((img) => {
            const rect = img.parentElement.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > vh) return;
            const progress = (vh - rect.top) / (vh + rect.height);
            img.style.transform = `translateY(${-progress * 15}%)`;
        });

        // Бегущая строка ускоряется от скорости скролла
        velocity += ((y - lastScroll) - velocity) * 0.1;
        marqueeOffset += 0.6 + Math.abs(velocity) * 0.3;
        marquees.forEach(({ row, dir }) => {
            const half = row.scrollWidth / 2;
            const x = (marqueeOffset % half);
            row.style.transform = `translateX(${dir > 0 ? -x : x - half}px)`;
        });

        updateHaze();
    }

    lastScroll = y;
    requestAnimationFrame(onFrame);
}

if (reduceMotion) {
    hazeBlocks.forEach(({ words }) => words.forEach((w) => { w.style.opacity = 1; w.style.filter = 'none'; }));
}
requestAnimationFrame(onFrame);

// ---------- Меню ----------
const navPill = document.getElementById('navPill');
const burger = document.getElementById('burger');

function toggleMenu(force) {
    const open = typeof force === 'boolean' ? force : !navPill.classList.contains('is-open');
    navPill.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
}

burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

navPill.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));

document.addEventListener('click', (e) => {
    if (!navPill.contains(e.target)) toggleMenu(false);
});

// ---------- Курсор-подсказка на кейсах ----------
const cursorTag = document.getElementById('cursorTag');
let cursorX = 0, cursorY = 0, tagX = 0, tagY = 0;

if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.case').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            // Кейс со ссылкой открывает сайт, без ссылки — просто листается
            cursorTag.textContent = card.tagName === 'A' ? tr('Открыть\nсайт ↗') : tr('Листаем ↓');
            cursorTag.classList.add('is-visible');
        });
        card.addEventListener('mouseleave', () => cursorTag.classList.remove('is-visible'));
    });

    window.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });

    (function moveTag() {
        tagX += (cursorX - tagX) * 0.18;
        tagY += (cursorY - tagY) * 0.18;
        cursorTag.style.left = `${tagX}px`;
        cursorTag.style.top = `${tagY}px`;
        requestAnimationFrame(moveTag);
    })();
} else {
    document.querySelectorAll('.case').forEach((card) => { card.style.cursor = 'auto'; });
}

// ---------- FAQ ----------
document.querySelectorAll('.faq__q').forEach((btn) => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const wasOpen = item.classList.contains('is-open');
        document.querySelectorAll('.faq__item').forEach((el) => el.classList.remove('is-open'));
        if (!wasOpen) item.classList.add('is-open');
    });
});

// ---------- Окно заявки ----------
const modal = document.getElementById('modal');
const formView = document.getElementById('formView');
const successView = document.getElementById('successView');
const leadForm = document.getElementById('leadForm');
const submitBtn = document.getElementById('submitBtn');

function openForm() {
    toggleMenu(false);
    formView.hidden = false;
    successView.hidden = true;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    if (lenis) lenis.stop();
}

function closeForm() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lenis) lenis.start();
}

document.querySelectorAll('[data-open-form]').forEach((btn) => btn.addEventListener('click', openForm));
document.querySelectorAll('[data-close-form]').forEach((btn) => btn.addEventListener('click', closeForm));
modal.addEventListener('click', (e) => { if (e.target === modal) closeForm(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeForm(); });

// Отправка заявки: форма шлёт данные в Cloudflare Worker (код — worker/telegram-lead.js),
// а он пересылает их в Telegram. Токен бота хранится только в настройках воркера.
// Сюда вписывается адрес воркера вида https://faev-leads.ИМЯ.workers.dev
const LEAD_ENDPOINT = 'https://faev-leads.faev98.workers.dev';

async function sendLead(data) {
    if (!LEAD_ENDPOINT) throw new Error('Адрес приёма заявок не указан');
    const response = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Заявка не отправлена: ${response.status}`);
}

leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const originalText = submitBtn.textContent;
    submitBtn.textContent = tr('Отправка...');
    submitBtn.disabled = true;

    try {
        await sendLead(Object.fromEntries(new FormData(leadForm)));
        formView.hidden = true;
        successView.hidden = false;
        leadForm.reset();
        setTimeout(closeForm, 4000);
    } catch (error) {
        alert(tr('Не удалось отправить заявку. Пожалуйста, напишите мне напрямую в Telegram: @iwebdsgn'));
        console.error(error);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
