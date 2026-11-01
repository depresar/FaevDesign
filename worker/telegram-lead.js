/* =========================================================
   Cloudflare Worker: принимает заявку с сайта и пересылает её в Telegram.

   Токен бота и chat id здесь НЕ пишутся — они задаются в настройках
   воркера на Cloudflare (Settings → Variables and Secrets):
     BOT_TOKEN — токен бота от @BotFather (тип Secret)
     CHAT_ID   — ваш Telegram ID (тип Text или Secret)
   ========================================================= */

// С каких сайтов разрешено отправлять заявки
const ALLOWED_ORIGINS = [
    'https://faevdsgn.space',
    'https://www.faevdsgn.space',
    'https://depresar.github.io',
];

const MAX_LENGTH = 1000;

function cors(origin) {
    return {
        'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Vary': 'Origin',
    };
}

function reply(status, body, origin) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json', ...cors(origin) },
    });
}

const clean = (value) => String(value || '').trim().slice(0, MAX_LENGTH);

export default {
    async fetch(request, env) {
        const origin = request.headers.get('Origin') || '';

        if (request.method === 'OPTIONS') return new Response(null, { headers: cors(origin) });
        if (request.method !== 'POST') return reply(405, { ok: false }, origin);
        if (!ALLOWED_ORIGINS.includes(origin)) return reply(403, { ok: false }, origin);

        let data;
        try {
            data = await request.json();
        } catch {
            return reply(400, { ok: false }, origin);
        }

        // Скрытое поле-ловушка: люди его не видят, а спам-боты заполняют
        if (data.website) return reply(200, { ok: true }, origin);

        const name = clean(data.name);
        const contact = clean(data.contact);
        const task = clean(data.task);
        if (!name || !contact || !task) return reply(400, { ok: false }, origin);

        const text = `🔥 Новая заявка с сайта\n\n👤 Имя: ${name}\n💬 Связь: ${contact}\n📋 Задача: ${task}`;

        const tg = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: env.CHAT_ID, text }),
        });

        return reply(tg.ok ? 200 : 502, { ok: tg.ok }, origin);
    },
};
