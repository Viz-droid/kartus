'use strict';

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const I = {
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"/><rect x="6" y="18" width="12" height="4"/><path d="M6 9a6 6 0 0 0 12 0"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    headphones: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    xcirc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    fire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    arrowL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
    arrowR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    pause: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
    stop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.41"/></svg>`,
    edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"/><path d="M5 3L5.8 5.2L8 6L5.8 6.8L5 9L4.2 6.8L2 6L4.2 5.2L5 3Z"/><path d="M19 15L19.5 16.5L21 17L19.5 17.5L19 19L18.5 17.5L17 17L18.5 16.5L19 15Z"/></svg>`,
    rain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>`,
    coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2 12c.5-3 2.5-5 5-5s4.5 2 5 5 2.5 5 5 5 4.5-2 5-5"/></svg>`,
    robot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="12" cy="5" r="2"/><line x1="8" y1="15" x2="8" y2="15"/><line x1="16" y1="15" x2="16" y2="15"/><path d="M8 19h8"/></svg>`,
    video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    hash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
};

// ─── CONFIG & STATE ────────────────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Kinetica Design Token
const GOLD = '#C9A84C';
const PURPLE = '#9B7FD4';

const ROOMS = [
    { id:'quiet',     name:'Silent Zone',   desc:'Library-grade focus. Zero tolerance for distraction.',      icon:'book',       color:'text-[#C9A84C]',   bg:'bg-[#C9A84C]/10'  },
    { id:'deep-work', name:'Deep Work',     desc:'The hardest problems deserve unbroken attention.',           icon:'cpu',        color:'text-[#9B7FD4]',   bg:'bg-[#9B7FD4]/10'  },
    { id:'exam-blitz',name:'Exam Blitz',    desc:'High-intensity MCQ grind. Competitive exam mode.',           icon:'target',     color:'text-red-400',     bg:'bg-red-500/10'    },
    { id:'revision',  name:'Revision Room', desc:'Reinforce what you know. Spaced repetition friendly.',       icon:'refresh',    color:'text-emerald-400', bg:'bg-emerald-500/10'},
    { id:'code-lab',  name:'Code Lab',      desc:'For programmers, DSA grinders and CS students.',             icon:'cpu',        color:'text-amber-400',   bg:'bg-amber-500/10'  },
    { id:'chill',     name:'Chill & Study', desc:'Light material, podcasts, reading. Low pressure mode.',     icon:'headphones', color:'text-purple-400',  bg:'bg-purple-500/10' },
];

const INTEREST_TAGS = ['Mathematics','Physics','Chemistry','Biology','History','Geography','Economics','Literature','Computer Science','Law','Medicine','Engineering','UPSC','JEE','NEET','GATE','Languages','Business'];

const S = {
    screen: 'landing',
    activeNav: 'rooms',
    user: null,
    sessions: [],
    leaderboard: [],

    setupStep: 0,
    setupData: { name: '', examType: '', studyStyle: '' },

    selectedRoom: null,
    goal: '',
    timer: 25 * 60,
    timerRunning: false,
    pomPhase: 'work',
    pomCount: 0,
    sessionStart: null,
    customTime: 25,
    timerMode: 'pomodoro',

    joinRoomFilter: '',
    showCreateModal: false,
    createRoomData: { name: '', topic: '', interest: '' },
    activeJoinRoom: null,

    proof: '',
    aiResult: null,
    ambient: null,
    notification: null,
};

let timerIv = null;
let notifTO = null;
let landingScrollTween = null;

// ─── LIQUID PARTICLE CURSOR (Gold Edition) ───────────────────────────────────
function initLiquidCursor() {
    const container = document.getElementById('cursor-container');
    const numTrails = 12;
    const trails = [];

    for (let i = 0; i < numTrails; i++) {
        const div = document.createElement('div');
        div.className = 'cursor-trail';
        const size = 28 - (i * 1.8);
        div.style.width  = `${Math.max(size, 4)}px`;
        div.style.height = `${Math.max(size, 4)}px`;
        div.style.opacity = (1 - (i / numTrails)) * 0.85;
        container.appendChild(div);
        trails.push(div);
    }

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let pos = Array.from({ length: numTrails }, () => ({ x: mouse.x, y: mouse.y }));

    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    gsap.ticker.add(() => {
        pos[0].x += (mouse.x - pos[0].x) * 0.4;
        pos[0].y += (mouse.y - pos[0].y) * 0.4;
        gsap.set(trails[0], { x: pos[0].x, y: pos[0].y });
        for (let i = 1; i < numTrails; i++) {
            pos[i].x += (pos[i - 1].x - pos[i].x) * 0.35;
            pos[i].y += (pos[i - 1].y - pos[i].y) * 0.35;
            gsap.set(trails[i], { x: pos[i].x, y: pos[i].y });
        }
    });
}
initLiquidCursor();

// ─── AUDIO SYSTEM ─────────────────────────────────────────────────────────────
let audioCtx = null, gainNode = null, sourceNode = null;
function ensureAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioCtx.createGain();
        gainNode.connect(audioCtx.destination);
        gainNode.gain.value = 0.4;
    }
}
function stopAudio() {
    if (sourceNode) { try { sourceNode.stop(); } catch(e){} sourceNode = null; }
}
function startAudio(type) {
    ensureAudio(); stopAudio();
    const buf = audioCtx.createBuffer(1, audioCtx.sampleRate * 3, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
        if (type === 'rain') data[i] = (Math.random()*2-1) * 0.6 * (Math.random() > 0.98 ? 3 : 1);
        else if (type === 'cafe') data[i] = (Math.random()*2-1) * 0.3 + Math.sin(i*0.001)*0.05;
        else data[i] = (Math.random()*2-1) * 0.5;
    }
    sourceNode = audioCtx.createBufferSource();
    sourceNode.buffer = buf; sourceNode.loop = true;
    sourceNode.connect(gainNode); sourceNode.start();
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const lsGet = k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const fmt = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
const getJoinRooms = () => (lsGet('ch_join_rooms') || []).filter(r => Date.now() - r.createdAt < 4*60*60*1000);

function showNotif(msg) {
    S.notification = msg;
    clearTimeout(notifTO);
    let el = document.getElementById('notif-el');
    if (!el) {
        el = document.createElement('div');
        el.id = 'notif-el';
        el.className = 'fixed top-6 right-6 bg-[#0D0D0D] border border-[#C9A84C]/30 rounded-xl px-5 py-3 text-sm shadow-[0_0_24px_rgba(201,168,76,0.12)] z-[10000] flex items-center gap-3 transition-all duration-300 translate-x-0 opacity-100';
        document.body.appendChild(el);
    }
    el.innerHTML = `<span class="text-[#C9A84C] w-4 h-4 shrink-0">${I.bolt}</span><span class="text-[#FAFAF5]/90">${msg}</span>`;
    notifTO = setTimeout(() => {
        if (el) { el.classList.add('opacity-0', 'translate-x-4'); setTimeout(() => el.remove(), 300); }
    }, 4000);
}

// ─── RENDER DISPATCH ──────────────────────────────────────────────────────────
const app = document.getElementById('app');
function render() {
    if (S.screen === 'landing')       renderLanding();
    else if (S.screen === 'setup')    renderSetup();
    else if (S.screen === 'session')  renderSession();
    else if (S.screen === 'accountability') renderAccountability();
    else renderAppShell();
}

// ─── VIEW: LANDING — KINETICA HORIZONTAL ──────────────────────────────────────
function renderLanding() {
    app.innerHTML = `
    <!-- ─── Kinetica Nav ─── -->
    <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-5 bg-[#080808]/85 backdrop-blur-md border-b border-[#C9A84C]/10">
        <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-[#C9A84C] text-[#080808] flex items-center justify-center">${I.bolt}</div>
            <span class="font-bold text-lg tracking-[0.08em] text-[#FAFAF5]">CORTEX HUB</span>
        </div>
        <ul class="hidden md:flex gap-8 font-medium uppercase text-xs tracking-[0.3em] text-[#FAFAF5]/40">
            <li><a href="#" class="nav-link transition-colors hover:text-[#C9A84C]" data-index="0">Focus</a></li>
            <li><a href="#" class="nav-link transition-colors hover:text-[#C9A84C]" data-index="1">Prove It</a></li>
            <li><a href="#" class="nav-link transition-colors hover:text-[#C9A84C]" data-index="2">Live Rooms</a></li>
            <li><a href="#" class="nav-link transition-colors hover:text-[#C9A84C]" data-index="3">Join</a></li>
        </ul>
        <ul class="flex items-center gap-1">
          <li><button data-auth-trigger="login" class="border border-[#C9A84C] text-[#C9A84C] px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#C9A84C] hover:text-[#080808] transition-all duration-300">Log in</button></li>
          <li><button data-auth-trigger="signup" class="ml-4 bg-[#C9A84C] text-[#080808] px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FAFAF5] hover:text-[#080808] transition-all duration-300">Sign up</button></li>
        </ul>
    </nav>


    <!-- ─── Horizontal Panels ─── -->
    <section id="horizontal" class="h-screen overflow-hidden bg-[#080808]">
        <div id="scroll-container" class="flex h-screen w-max">

            <!-- Panel 01: FOCUS -->
            <div class="panel w-screen h-screen shrink-0 bg-[#080808] text-[#FAFAF5] flex flex-col items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.07),transparent_60%)]"></div>
                <div class="panel-vline left-[12%]"></div>
                <div class="panel-vline right-[12%]"></div>
                <div class="panel-hline top-[15%]"></div>
                <div class="panel-hline bottom-[15%]"></div>
                <span class="text-[#C9A84C]/50 text-[10px] tracking-[0.5em] uppercase font-medium mb-8 relative z-10">01 — Focus</span>
                <h1 class="text-[13vw] font-display leading-none tracking-tight relative z-10">FOCUS.</h1>
                <div class="w-12 h-[1px] bg-[#C9A84C] mt-8 mb-8 relative z-10"></div>
                <p class="text-lg text-[#FAFAF5]/40 font-light max-w-xl text-center px-6 leading-relaxed relative z-10">The study platform that actually holds you accountable. No shortcuts, no excuses.</p>
            </div>

            <!-- Panel 02: PROVE IT -->
            <div class="panel w-screen h-screen shrink-0 bg-[#0A0A0A] text-[#FAFAF5] flex flex-col items-center justify-center border-l border-[#C9A84C]/10 relative overflow-hidden">
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(155,127,212,0.05),transparent_60%)]"></div>
                <span class="text-[#C9A84C]/50 text-[10px] tracking-[0.5em] uppercase font-medium mb-8 relative z-10">02 — Prove</span>
                <h1 class="text-[13vw] font-display leading-none tracking-tight relative z-10">PROVE IT.</h1>
                <div class="w-12 h-[1px] bg-[#C9A84C] mt-8 mb-10 relative z-10"></div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl px-6 relative z-10">
                    <div class="glass-panel p-8 text-center">
                        <div class="text-[#C9A84C] mb-4 flex justify-center w-8 h-8 mx-auto">${I.robot}</div>
                        <h3 class="font-bold text-lg mb-2 tracking-wide">AI Accountability</h3>
                        <p class="text-[#FAFAF5]/40 text-sm">Every session graded by AI.</p>
                    </div>
                    <div class="glass-panel p-8 text-center">
                        <div class="text-[#9B7FD4] mb-4 flex justify-center w-8 h-8 mx-auto">${I.clock}</div>
                        <h3 class="font-bold text-lg mb-2 tracking-wide">Pomodoro Native</h3>
                        <p class="text-[#FAFAF5]/40 text-sm">Built-in 25+5 focus cycles.</p>
                    </div>
                    <div class="glass-panel p-8 text-center">
                        <div class="text-emerald-400 mb-4 flex justify-center w-8 h-8 mx-auto">${I.trophy}</div>
                        <h3 class="font-bold text-lg mb-2 tracking-wide">Live Leaderboard</h3>
                        <p class="text-[#FAFAF5]/40 text-sm">Compete globally.</p>
                    </div>
                </div>
            </div>

            <!-- Panel 03: LIVE ROOMS -->
            <div class="panel w-screen h-screen shrink-0 bg-[#0C0C0C] text-[#FAFAF5] flex flex-col items-center justify-center border-l border-[#C9A84C]/10 relative overflow-hidden">
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(201,168,76,0.04),transparent_50%)]"></div>
                <div class="panel-vline left-[12%]"></div>
                <div class="panel-vline right-[12%]"></div>
                <span class="text-[#C9A84C]/50 text-[10px] tracking-[0.5em] uppercase font-medium mb-8 relative z-10">03 — Rooms</span>
                <h1 class="text-[13vw] font-display leading-none tracking-tight relative z-10">LIVE ROOMS</h1>
                <div class="w-12 h-[1px] bg-[#C9A84C] mt-8 mb-8 relative z-10"></div>
                <p class="text-lg text-[#FAFAF5]/40 relative z-10">Study live with peers. JEE, NEET, UPSC, & More.</p>
            </div>

            <!-- Panel 04: GROW -->
            <div class="panel w-screen h-screen shrink-0 bg-[#080808] text-[#FAFAF5] flex flex-col items-center justify-center border-l border-[#C9A84C]/10 relative overflow-hidden">
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_55%)]"></div>
                <div class="panel-hline top-[15%]"></div>
                <div class="panel-hline bottom-[15%]"></div>
                <span class="text-[#C9A84C]/50 text-[10px] tracking-[0.5em] uppercase font-medium mb-8 relative z-10">04 — Grow</span>
                <h1 class="text-[13vw] font-display leading-none tracking-tight relative z-10">GROW.</h1>
                <div class="w-12 h-[1px] bg-[#C9A84C] mt-8 mb-10 relative z-10"></div>
                <a href="hubpremier.html" class="bg-[#C9A84C] text-[#080808] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 flex items-center gap-3 relative z-10">
                    Launch Cortex Hub <span class="w-5 h-5">${I.arrowR}</span>
                </a>
            </div>

        </div>
    </section>
    
    <div id="auth-overlay" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 invisible opacity-0" aria-hidden="true"></div>

<div id="auth-panel" class="fixed top-0 right-0 h-full w-full max-w-md bg-[#080808] shadow-2xl z-50 translate-x-full flex flex-col border-l border-gray-800">
  
  <div class="flex justify-end p-6">
    <button id="close-auth" class="text-gray-500 hover:text-[#C9A84C] transition-colors p-2" aria-label="Close">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <div class="px-10 pb-10 overflow-y-auto flex-grow">
    
    <div class="flex gap-8 border-b border-gray-800 mb-8">
      <button id="tab-login" class="pb-3 font-bold uppercase tracking-widest text-xs transition-all border-b-2 border-[#C9A84C] text-[#C9A84C]">Log in</button>
      <button id="tab-signup" class="pb-3 font-bold uppercase tracking-widest text-xs transition-all border-b-2 border-transparent text-gray-500 hover:text-[#FAFAF5]">Sign up</button>
    </div>

    <form id="view-login" class="flex flex-col gap-5">
      <div>
        <label class="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email address</label>
        <input type="email" class="w-full bg-transparent border border-gray-700 text-[#FAFAF5] px-4 py-3 rounded-md focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-600" placeholder="you@example.com">
      </div>
      <div>
        <div class="flex justify-between items-center mb-2">
           <label class="block text-xs font-bold uppercase tracking-widest text-gray-400">Password</label>
           <a href="#" class="text-[10px] text-gray-500 hover:text-[#C9A84C] uppercase tracking-wider transition-colors">Forgot?</a>
        </div>
        <input type="password" class="w-full bg-transparent border border-gray-700 text-[#FAFAF5] px-4 py-3 rounded-md focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-600" placeholder="••••••••">
      </div>
      <a href="hubpremier.html" class="w-full mt-4 bg-[#C9A84C] text-[#080808] px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FAFAF5] transition-all duration-300">Access Account</a>
    </form>

    <form id="view-signup" class="flex flex-col gap-5 hidden">
      <div>
        <label class="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
        <input type="text" class="w-full bg-transparent border border-gray-700 text-[#FAFAF5] px-4 py-3 rounded-md focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-600" placeholder="John Doe">
      </div>
      <div>
        <label class="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email address</label>
        <input type="email" class="w-full bg-transparent border border-gray-700 text-[#FAFAF5] px-4 py-3 rounded-md focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-600" placeholder="you@example.com">
      </div>
      <div>
        <label class="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Password</label>
        <input type="password" class="w-full bg-transparent border border-gray-700 text-[#FAFAF5] px-4 py-3 rounded-md focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-gray-600" placeholder="Create a password">
      </div>
      <a href="hubpremier.html" class="w-full mt-4 bg-[#C9A84C] text-[#080808] px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FAFAF5] transition-all duration-300">Create Account</a>
    </form>

  </div>
</div>

    `;

    // ── GSAP Horizontal Scroll ──
    const container = document.querySelector('#scroll-container');
    const panels    = gsap.utils.toArray('.panel');
    const navLinks  = gsap.utils.toArray('.nav-link');

    ScrollTrigger.getAll().forEach(t => t.kill());

    landingScrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '#horizontal',
            pin: true,
            scrub: 1,
            end: () => '+=' + (container.offsetWidth - window.innerWidth),
            onUpdate(self) {
                const idx = Math.round(self.progress * (panels.length - 1));
                navLinks.forEach((l, i) => {
                    i === idx ? l.classList.add('active') : l.classList.remove('active');
                });
            }
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const index = parseInt(link.getAttribute('data-index'));
            const totalScroll = container.offsetWidth - window.innerWidth;
            const targetPos = landingScrollTween.scrollTrigger.start + (index / (panels.length - 1)) * totalScroll;
            gsap.to(window, { duration: 1, scrollTo: targetPos, ease: 'power2.inOut' });
        });
    });
}

// ─── VIEW: SETUP ──────────────────────────────────────────────────────────────
function renderSetup() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    window.scrollTo(0, 0);

    const d = S.setupData;
    const step = S.setupStep;

    const examOpts = ['JEE','UPSC','NEET','College','GATE','Custom'];
    const styleOpts = [
        { id:'visual',   icon: I.eye,     title:'Visual Learner',  desc:'Diagrams & structured notes' },
        { id:'revision', icon: I.refresh, title:'Revision Mode',   desc:'Repeat & reinforce concepts' },
        { id:'problem',  icon: I.target,  title:'Problem Solver',  desc:'Practice questions & mocks' }
    ];

    const steps = [
        {
            title: "What's your name?",
            ok: d.name.trim().length > 1,
            body: `<input id="inp-name" value="${d.name}" placeholder="Enter your name…"
                class="w-full bg-[#FAFAF5]/5 border border-[#C9A84C]/20 rounded-xl px-5 py-4 text-lg focus:border-[#C9A84C] focus:shadow-[0_0_0_1px_rgba(201,168,76,0.25)] outline-none transition-all text-[#FAFAF5] placeholder-[#FAFAF5]/30">`
        },
        {
            title: 'What are you preparing for?',
            ok: !!d.examType,
            body: `<div class="grid grid-cols-2 gap-3">
                ${examOpts.map(e => `
                <button class="p-4 rounded-xl border text-sm font-semibold tracking-wide transition-all ${d.examType===e
                    ? 'bg-[#C9A84C]/15 border-[#C9A84C] text-[#C9A84C] shadow-[0_0_12px_rgba(201,168,76,0.15)]'
                    : 'bg-[#FAFAF5]/5 border-[#FAFAF5]/10 text-[#FAFAF5]/60 hover:bg-[#FAFAF5]/8 hover:text-[#FAFAF5]'}"
                    data-action="exam" data-val="${e}">${e}</button>`).join('')}
            </div>`
        },
        {
            title: 'How do you study best?',
            ok: !!d.studyStyle,
            body: `<div class="flex flex-col gap-3">
                ${styleOpts.map(s => `
                <button class="flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${d.studyStyle===s.id
                    ? 'bg-[#C9A84C]/12 border-[#C9A84C] shadow-[0_0_12px_rgba(201,168,76,0.12)]'
                    : 'bg-[#FAFAF5]/5 border-[#FAFAF5]/10 hover:bg-[#FAFAF5]/8'}"
                    data-action="style" data-val="${s.id}">
                    <div class="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${d.studyStyle===s.id
                        ? 'bg-[#C9A84C]/25 text-[#C9A84C]'
                        : 'bg-[#FAFAF5]/8 text-[#FAFAF5]/40'}">${s.icon}</div>
                    <div>
                        <div class="font-bold text-lg text-[#FAFAF5]">${s.title}</div>
                        <div class="text-sm text-[#FAFAF5]/40 mt-0.5">${s.desc}</div>
                    </div>
                </button>`).join('')}
            </div>`
        }
    ];

    const cur = steps[step];

    app.innerHTML = `
    <div class="min-h-screen bg-[#080808] flex items-center justify-center p-6 relative">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(201,168,76,0.04),transparent_60%)]"></div>
        <div class="w-full max-w-md relative z-10" style="animation: fadeIn 0.5s ease">
            <div class="flex items-center gap-3 mb-10">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#9B7FD4] flex items-center justify-center text-[#080808]">${I.bolt}</div>
                <span class="font-display text-2xl tracking-[0.08em] text-[#FAFAF5]">CORTEX HUB</span>
            </div>

            <!-- Progress -->
            <div class="flex gap-2 mb-10">
                ${steps.map((_, i) => `
                <div class="flex-1 h-[2px] rounded-full ${i <= step
                    ? 'bg-gradient-to-r from-[#C9A84C] to-[#9B7FD4]'
                    : 'bg-[#FAFAF5]/10'}"></div>`).join('')}
            </div>

            <div class="mb-2">
                <span class="text-[#C9A84C]/60 text-[10px] tracking-[0.4em] uppercase">Step ${step + 1} of ${steps.length}</span>
            </div>
            <h2 class="font-display text-5xl mb-8 text-[#FAFAF5]">${cur.title}</h2>

            ${cur.body}

            <button id="setup-next" data-action="setup-next" ${cur.ok ? '' : 'disabled'}
                class="w-full mt-8 p-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all tracking-wide ${cur.ok
                    ? 'bg-[#C9A84C] text-[#080808] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]'
                    : 'bg-[#FAFAF5]/8 text-[#FAFAF5]/25 cursor-not-allowed'}">
                ${step < steps.length - 1 ? `Continue <span class="w-5 h-5">${I.arrowR}</span>` : `<span class="w-5 h-5">${I.bolt}</span> Enter Cortex Hub`}
            </button>

            ${step > 0 ? `<button data-action="setup-back" class="w-full mt-4 p-3 text-sm text-[#FAFAF5]/40 hover:text-[#FAFAF5] flex justify-center items-center gap-2 transition-colors">
                <span class="w-5 h-5">${I.arrowL}</span> Back
            </button>` : ''}
        </div>
    </div>`;

    const nameInp = document.getElementById('inp-name');
    if (nameInp) {
        nameInp.addEventListener('input', e => {
            S.setupData.name = e.target.value;
            const ok = S.setupData.name.trim().length > 1;
            const btn = document.getElementById('setup-next');
            btn.disabled = !ok;
            btn.className = `w-full mt-8 p-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all tracking-wide ${ok
                ? 'bg-[#C9A84C] text-[#080808] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]'
                : 'bg-[#FAFAF5]/8 text-[#FAFAF5]/25 cursor-not-allowed'}`;
        });
        nameInp.focus();
    }
}

// ─── VIEW: APP SHELL ──────────────────────────────────────────────────────────
function renderAppShell() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const navItems = [
        { id:'rooms',     icon: I.grid,  label:'Rooms'     },
        { id:'join-room', icon: I.video, label:'Join Room'  },
        { id:'dashboard', icon: I.chart, label:'Dashboard'  },
    ];

    let content = '';
    if (S.activeNav === 'rooms'    && !S.selectedRoom) content = renderRooms();
    if (S.activeNav === 'goalset'  &&  S.selectedRoom) content = renderGoalSet();
    if (S.activeNav === 'join-room')                   content = renderJoinRoom();
    if (S.activeNav === 'dashboard')                   content = renderDashboard();

    app.innerHTML = `
    <div class="flex h-screen bg-[#080808] text-[#FAFAF5] overflow-hidden">

        <!-- Sidebar -->
        <nav class="w-20 md:w-64 border-r border-[#C9A84C]/10 flex flex-col p-4 bg-[#080808] z-20 shrink-0 relative">
            <!-- Subtle vertical gold accent -->
            <div class="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#C9A84C]/15 to-transparent pointer-events-none"></div>

            <div class="flex items-center gap-3 mb-10 md:px-2">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#9B7FD4] flex items-center justify-center shrink-0 shadow-[0_0_18px_rgba(201,168,76,0.35)]">${I.bolt}</div>
                <div class="hidden md:block">
                    <div class="font-display text-2xl leading-none text-[#FAFAF5]">CORTEX</div>
                    <div class="text-[9px] tracking-[0.35em] text-[#C9A84C]/60 uppercase mt-0.5">Hub</div>
                </div>
            </div>

            <div class="flex flex-col gap-1">
                ${navItems.map(n => `
                <button class="flex items-center gap-4 p-3 md:px-4 rounded-xl transition-all text-sm font-semibold ${
                    S.activeNav === n.id || (S.activeNav === 'goalset' && n.id === 'rooms')
                        ? 'bg-[#C9A84C]/12 text-[#C9A84C] border border-[#C9A84C]/20'
                        : 'text-[#FAFAF5]/50 hover:bg-[#FAFAF5]/5 hover:text-[#FAFAF5] border border-transparent'
                }" data-action="nav" data-nav="${n.id}">
                    <div class="w-5 h-5 shrink-0">${n.icon}</div>
                    <span class="hidden md:block">${n.label}</span>
                </button>`).join('')}
            </div>

            <!-- User avatar -->
            <div class="mt-auto pt-4 border-t border-[#C9A84C]/10 md:px-2 flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#9B7FD4] to-purple-700 flex items-center justify-center font-bold shrink-0 border border-[#9B7FD4]/30 text-[#FAFAF5]">
                    ${(S.user?.name?.[0] || 'U').toUpperCase()}
                </div>
                <div class="hidden md:block">
                    <div class="text-sm font-semibold text-[#FAFAF5] truncate">${S.user?.name || 'User'}</div>
                    <div class="text-[10px] text-[#C9A84C]/60 tracking-widest uppercase">${S.user?.examType || 'Scholar'}</div>
                </div>
            </div>
        </nav>

        <!-- Main content -->
        <main class="flex-1 overflow-y-auto relative bg-[#080808]" id="mc">
            <div class="max-w-5xl mx-auto p-6 md:p-12 pb-24" style="animation: fadeIn 0.3s ease">
                ${content}
            </div>
        </main>
    </div>
    ${S.showCreateModal ? renderCreateRoomModal() : ''}`;

    const filterInp = document.getElementById('jr-filter');
    if (filterInp) filterInp.addEventListener('input', e => { S.joinRoomFilter = e.target.value; renderAppShell(); });
    const rnInput = document.getElementById('cr-name');
    if (rnInput) rnInput.addEventListener('input', e => { S.createRoomData.name = e.target.value; });
}

// ─── PARTIAL: ROOMS ───────────────────────────────────────────────────────────
function renderRooms() {
    return `
    <div class="mb-12">
        <span class="text-[#C9A84C]/60 text-[10px] tracking-[0.5em] uppercase font-medium block mb-3">Choose your arena</span>
        <h2 class="font-display text-6xl mb-2 text-[#FAFAF5]">FOCUS ARENAS</h2>
        <p class="text-[#FAFAF5]/40 text-sm">Choose an environment that matches your cognitive load.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${ROOMS.map(room => `
        <button class="glass-panel p-6 text-left hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 group ${room.bg} relative overflow-hidden" data-action="select-room" data-room="${room.id}">
            <!-- Corner accent -->
            <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${room.bg} opacity-60 rounded-bl-full pointer-events-none"></div>
            <div class="w-12 h-12 rounded-xl bg-[#FAFAF5]/8 flex items-center justify-center mb-5 ${room.color}">${I[room.icon]}</div>
            <h3 class="font-bold text-lg text-[#FAFAF5] mb-2 tracking-wide">${room.name}</h3>
            <p class="text-sm text-[#FAFAF5]/50 mb-6 leading-relaxed">${room.desc}</p>
            <div class="flex items-center gap-2 text-xs text-[#FAFAF5]/35 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse"></span>
                ${Math.floor(Math.random()*20)+5} studying now
            </div>
        </button>`).join('')}
    </div>`;
}

// ─── PARTIAL: GOAL SET ────────────────────────────────────────────────────────
function renderGoalSet() {
    const room = S.selectedRoom;
    return `
    <div class="max-w-2xl mx-auto">
        <button class="text-[#FAFAF5]/40 hover:text-[#C9A84C] flex items-center gap-2 mb-10 text-sm transition-colors font-medium" data-action="back-rooms">
            <span class="w-5 h-5">${I.arrowL}</span> Back to Arenas
        </button>

        <!-- Room identity card -->
        <div class="glass-panel p-6 mb-6 ${room.bg} flex items-center gap-5">
            <div class="w-14 h-14 rounded-xl bg-[#FAFAF5]/8 flex items-center justify-center ${room.color} shrink-0">${I[room.icon]}</div>
            <div>
                <div class="text-[#C9A84C]/60 text-[9px] tracking-[0.45em] uppercase font-medium mb-1">Selected Arena</div>
                <h2 class="font-display text-2xl text-[#FAFAF5]">${room.name}</h2>
                <p class="text-xs text-[#FAFAF5]/40 mt-0.5">${room.desc}</p>
            </div>
        </div>

        <!-- Intent -->
        <div class="glass-panel p-8 mb-5">
            <div class="flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] text-[#C9A84C]/60 uppercase mb-4">
                <span class="w-4 h-4">${I.target}</span> Set Intent
            </div>
            <textarea id="goal-inp" rows="3" class="w-full bg-black/40 border border-[#C9A84C]/15 rounded-xl p-4 text-[#FAFAF5] focus:border-[#C9A84C] focus:shadow-[0_0_0_1px_rgba(201,168,76,0.15)] outline-none resize-none placeholder-[#FAFAF5]/25 transition-all"
                placeholder="What exactly will you accomplish in this session?"></textarea>
        </div>

        <!-- Timer mode -->
        <div class="glass-panel p-8 mb-8">
            <div class="flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] text-[#C9A84C]/60 uppercase mb-5">
                <span class="w-4 h-4">${I.clock}</span> Timer Mode
            </div>
            <div class="flex gap-4">
                <button class="flex-1 py-3 rounded-xl border flex justify-center items-center gap-2 transition-all text-sm font-semibold ${S.timerMode==='pomodoro'
                    ? 'bg-[#C9A84C]/12 border-[#C9A84C] text-[#C9A84C]'
                    : 'bg-[#FAFAF5]/5 border-[#FAFAF5]/10 text-[#FAFAF5]/50 hover:bg-[#FAFAF5]/8'}"
                    data-action="timer-mode" data-val="pomodoro">
                    <span class="w-4 h-4">${I.clock}</span> Pomodoro (25m)
                </button>
                <button class="flex-1 py-3 rounded-xl border flex justify-center items-center gap-2 transition-all text-sm font-semibold ${S.timerMode==='custom'
                    ? 'bg-[#C9A84C]/12 border-[#C9A84C] text-[#C9A84C]'
                    : 'bg-[#FAFAF5]/5 border-[#FAFAF5]/10 text-[#FAFAF5]/50 hover:bg-[#FAFAF5]/8'}"
                    data-action="timer-mode" data-val="custom">
                    <span class="w-4 h-4">${I.edit}</span> Custom
                </button>
            </div>
            ${S.timerMode === 'custom' ? `
            <div class="mt-5 flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-[#C9A84C]/15 w-max">
                <input type="number" id="custom-time" value="${S.customTime}" min="1" max="180"
                    class="w-16 bg-transparent text-2xl font-bold text-center text-[#C9A84C] focus:outline-none">
                <span class="text-[#FAFAF5]/40 text-sm">minutes</span>
            </div>` : ''}
        </div>

        <button id="start-btn" data-action="start-session"
            class="w-full py-4 rounded-xl bg-[#C9A84C] text-[#080808] font-bold text-lg flex justify-center items-center gap-3 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(201,168,76,0.35)] transition-all duration-300 tracking-wide">
            <span class="w-5 h-5">${I.play}</span> Start Deep Work
        </button>
    </div>`;
}

// ─── VIEW: SESSION (TIMER) ────────────────────────────────────────────────────
function renderSession() {
    const isWork = S.pomPhase === 'work';
    const phaseColor = isWork ? 'text-[#C9A84C]' : 'text-emerald-400';

    app.innerHTML = `
    <div class="h-screen w-full flex flex-col items-center justify-center relative p-6 bg-[#080808]">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_60%)]"></div>

        <div class="w-full max-w-xl relative z-10" style="animation: fadeIn 0.5s ease">
            <!-- Header -->
            <div class="flex justify-between items-center mb-12">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-[#FAFAF5]/6 flex items-center justify-center ${S.selectedRoom?.color || 'text-[#C9A84C]'}">${I[S.selectedRoom?.icon || 'grid']}</div>
                    <div>
                        <h2 class="font-bold text-lg text-[#FAFAF5]">${S.selectedRoom?.name || 'Focus'}</h2>
                        <div class="text-xs font-medium tracking-widest uppercase flex gap-2 mt-0.5">
                            <span id="ph" class="${phaseColor}">${isWork ? 'Deep Work' : 'Rest'}</span>
                            ${S.pomCount > 0 ? `<span class="text-[#FAFAF5]/30">· ${S.pomCount} done</span>` : ''}
                        </div>
                    </div>
                </div>
                <button data-action="end-session" class="px-4 py-2 rounded-lg bg-red-500/8 text-red-400 border border-red-500/25 hover:bg-red-500/16 transition-colors flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                    <span class="w-4 h-4">${I.stop}</span> End
                </button>
            </div>

            <!-- Timer ring -->
            <div class="flex justify-center mb-12 relative">
                <svg class="timer-svg" width="280" height="280" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="5"/>
                    <circle id="tc" cx="100" cy="100" r="88" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"
                        class="${phaseColor} transition-all duration-1000 ease-linear"/>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div id="td" class="font-display text-7xl tracking-wider ${phaseColor} drop-shadow-[0_0_18px_currentColor]">${fmt(S.timer)}</div>
                    <div class="text-[#FAFAF5]/30 text-xs tracking-[0.35em] uppercase">${isWork ? 'Focus' : 'Rest'}</div>
                </div>
            </div>

            <!-- Play/Pause -->
            <div class="flex justify-center mb-10">
                <button id="play-pause" data-action="toggle-timer"
                    class="px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-3 transition-all duration-300 ${S.timerRunning
                        ? 'bg-[#FAFAF5]/8 text-[#FAFAF5] hover:bg-[#FAFAF5]/12 border border-[#FAFAF5]/15'
                        : 'bg-[#C9A84C] text-[#080808] hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]'}">
                    <span class="w-5 h-5">${S.timerRunning ? I.pause : I.play}</span>
                    ${S.timerRunning ? 'Pause' : 'Resume'}
                </button>
            </div>

            <!-- Goal & Controls row -->
            <div class="glass-panel p-5 mb-5">
                <div class="text-[10px] font-bold tracking-[0.4em] text-[#C9A84C]/50 uppercase mb-2 flex items-center gap-2">
                    <span class="w-4 h-4">${I.target}</span> Current Goal
                </div>
                <div class="text-[#FAFAF5]/80 font-medium text-sm">${S.goal}</div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <!-- Ambient -->
                <div class="glass-panel p-5">
                    <div class="text-[10px] font-bold tracking-[0.4em] text-[#C9A84C]/50 uppercase mb-4 flex items-center gap-2">
                        <span class="w-4 h-4">${I.headphones}</span> Ambient
                    </div>
                    <div class="flex flex-col gap-1">
                        ${[['rain','Rain',I.rain],['cafe','Cafe',I.coffee],['white','White Noise',I.wave]].map(([id,l,icon]) => `
                        <button class="ambient-btn flex items-center gap-3 p-2 rounded-lg text-xs text-left transition-colors ${S.ambient===id
                            ? 'bg-[#C9A84C]/12 text-[#C9A84C] border border-[#C9A84C]/20'
                            : 'text-[#FAFAF5]/50 hover:bg-[#FAFAF5]/5'}"
                            data-action="ambient" data-val="${id}">
                            <div class="w-4 h-4">${icon}</div> ${l} ${S.ambient===id ? '●' : ''}
                        </button>`).join('')}
                    </div>
                </div>
                <!-- Peers -->
                <div class="glass-panel p-5">
                    <div class="text-[10px] font-bold tracking-[0.4em] text-[#C9A84C]/50 uppercase mb-4 flex items-center gap-2">
                        <span class="w-4 h-4">${I.users}</span> Peers
                    </div>
                    <div class="flex -space-x-2 mb-3">
                        ${['A','R','K'].map((l,i) => `
                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 border-[#080808] text-[#FAFAF5]"
                            style="background:hsl(${i*70+200},40%,35%)">${l}</div>`).join('')}
                    </div>
                    <div class="text-xs text-[#FAFAF5]/35">+8 others focusing</div>
                </div>
            </div>
        </div>
    </div>`;

    updateTimerDOM();
}

function startTimer() {
    clearInterval(timerIv);
    timerIv = setInterval(() => {
        if (!S.timerRunning) return;
        S.timer--;
        updateTimerDOM();
        if (S.timer <= 0) {
            if (S.timerMode === 'pomodoro') {
                S.pomPhase = S.pomPhase === 'work' ? 'break' : 'work';
                if (S.pomPhase === 'break') S.pomCount++;
                S.timer = S.pomPhase === 'work' ? 25*60 : 5*60;
                showNotif(S.pomPhase === 'break' ? '🎉 Pomodoro done! Break time.' : '💪 Break over! Focus.');
                renderSession();
            } else {
                S.timerRunning = false;
                showNotif('⏰ Session complete!');
                S.timer = 0;
            }
        }
    }, 1000);
}

function updateTimerDOM() {
    const td = document.getElementById('td');
    const tc = document.getElementById('tc');
    if (td) td.textContent = fmt(S.timer);
    if (tc) {
        const total = S.timerMode === 'pomodoro'
            ? (S.pomPhase === 'work' ? 25*60 : 5*60)
            : S.customTime * 60;
        const prog = Math.min((total - S.timer) / total, 1);
        tc.style.strokeDasharray = 2 * Math.PI * 88;
        tc.style.strokeDashoffset = (2 * Math.PI * 88) * (1 - prog);
    }
}

// ─── VIEW: ACCOUNTABILITY ─────────────────────────────────────────────────────
function renderAccountability() {
    const dur = S.sessionStart ? Math.round((Date.now() - S.sessionStart) / 60000) : S.customTime;

    app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center p-6 bg-[#080808] relative">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05),transparent_60%)]"></div>
        <div class="w-full max-w-2xl relative z-10" style="animation: fadeIn 0.5s ease">

            <div class="text-center mb-12">
                <span class="text-[#C9A84C]/60 text-[10px] tracking-[0.5em] uppercase font-medium block mb-5">Session Complete</span>
                <h1 class="font-display text-7xl mb-4 text-[#FAFAF5]">PROVE YOUR WORK</h1>
                <p class="text-[#FAFAF5]/50 text-lg">You studied for <span class="text-[#C9A84C] font-bold">${dur} minutes</span>. What did you accomplish?</p>
            </div>

            <!-- Stated goal -->
            <div class="glass-panel p-6 mb-5">
                <div class="text-[10px] font-bold tracking-[0.4em] text-[#C9A84C]/50 uppercase mb-3">Stated Goal</div>
                <div class="p-4 bg-[#C9A84C]/8 border-l-4 border-[#C9A84C] rounded-r-xl font-medium text-[#FAFAF5]/90">${S.goal}</div>
            </div>

            <!-- Proof input -->
            <div class="glass-panel p-8 mb-8">
                <div class="text-[10px] font-bold tracking-[0.4em] text-[#C9A84C]/50 uppercase mb-4 flex items-center gap-2">
                    <span class="w-4 h-4">${I.edit}</span> Execution Proof
                </div>
                <textarea id="proof-inp" rows="5"
                    class="w-full bg-black/40 border border-[#C9A84C]/15 rounded-xl p-5 text-[#FAFAF5] focus:border-[#C9A84C] focus:shadow-[0_0_0_1px_rgba(201,168,76,0.12)] outline-none resize-none placeholder-[#FAFAF5]/25 transition-all"
                    placeholder="Be honest. AI will evaluate this. e.g., 'Completed 20 physics problems from HC Verma…'"></textarea>
            </div>

            <button id="submit-btn" data-action="submit-proof"
                class="w-full py-5 rounded-xl bg-[#C9A84C] text-[#080808] font-bold text-lg flex justify-center items-center gap-3 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(201,168,76,0.35)] transition-all duration-300 tracking-wide">
                <span class="w-5 h-5">${I.robot}</span> Submit for AI Review
            </button>
        </div>
    </div>`;
}

// ─── VIEW: DASHBOARD ──────────────────────────────────────────────────────────
function renderDashboard() {
    const sDone = S.sessions.filter(s => s.status === 'completed');
    const hrs   = Math.round(sDone.reduce((a, c) => a + (c.duration || 0), 0) / 60 * 10) / 10;

    return `
    <div class="mb-12">
        <span class="text-[#C9A84C]/60 text-[10px] tracking-[0.5em] uppercase font-medium block mb-3">Your Progress</span>
        <h2 class="font-display text-6xl mb-3 text-[#FAFAF5]">DASHBOARD</h2>
        <div class="flex items-center gap-3">
            <span class="px-3 py-1 bg-[#C9A84C]/12 text-[#C9A84C] rounded-md text-xs font-bold border border-[#C9A84C]/25 tracking-wide">🔥 ${S.user?.streak || 1} Day Streak</span>
            <span class="text-[#FAFAF5]/35 text-xs tracking-wide">Cortex Scholar Rank</span>
        </div>
    </div>

    <!-- Stat cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div class="glass-panel p-6 border border-[#C9A84C]/20">
            <div class="w-10 h-10 rounded-lg bg-[#C9A84C]/15 text-[#C9A84C] flex items-center justify-center mb-5 w-5 h-5">${I.clock}</div>
            <div class="font-display text-4xl text-[#C9A84C] mb-1">${hrs} hr</div>
            <div class="text-xs text-[#FAFAF5]/40 font-bold uppercase tracking-[0.3em]">Total Focus</div>
        </div>
        <div class="glass-panel p-6 border border-emerald-500/20">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-5 w-5 h-5">${I.check}</div>
            <div class="font-display text-4xl text-emerald-400 mb-1">${sDone.length}</div>
            <div class="text-xs text-[#FAFAF5]/40 font-bold uppercase tracking-[0.3em]">Sessions</div>
        </div>
        <div class="glass-panel p-6 border border-[#9B7FD4]/20">
            <div class="w-10 h-10 rounded-lg bg-[#9B7FD4]/15 text-[#9B7FD4] flex items-center justify-center mb-5 w-5 h-5">${I.robot}</div>
            <div class="font-display text-4xl text-[#9B7FD4] mb-1">92%</div>
            <div class="text-xs text-[#FAFAF5]/40 font-bold uppercase tracking-[0.3em]">AI Avg Score</div>
        </div>
    </div>

    <!-- Recent sessions -->
    <div class="glass-panel p-8">
        <div class="text-[10px] font-bold tracking-[0.4em] text-[#C9A84C]/50 uppercase mb-6 flex items-center gap-2">
            <span class="w-4 h-4">${I.edit}</span> Recent Sessions
        </div>
        <div class="flex flex-col gap-3">
            ${S.sessions.length === 0
                ? '<p class="text-[#FAFAF5]/25 text-center py-10 font-medium">No sessions yet. Start your first focus arena.</p>'
                : S.sessions.slice(0, 5).map(s => `
                <div class="flex items-center gap-4 p-4 rounded-xl bg-[#FAFAF5]/3 hover:bg-[#FAFAF5]/5 transition-colors border border-transparent hover:border-[#C9A84C]/10">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${s.status === 'completed'
                        ? 'bg-emerald-500/15 text-emerald-400'
                        : 'bg-red-500/15 text-red-400'}">
                        <span class="w-5 h-5">${s.status === 'completed' ? I.check : I.xcirc}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="font-bold text-sm text-[#FAFAF5] truncate">${s.goal}</div>
                        <div class="text-xs text-[#FAFAF5]/35 mt-1">${s.room} · ${s.duration}m</div>
                    </div>
                    <div class="text-xs text-[#FAFAF5]/25">${new Date().toLocaleDateString()}</div>
                </div>`).join('')}
        </div>
    </div>`;
}

// ─── VIEW: JOIN ROOM ──────────────────────────────────────────────────────────
function renderJoinRoom() {
    const all      = getJoinRooms();
    const filter   = S.joinRoomFilter.toLowerCase();
    const filtered = filter ? all.filter(r => r.name.toLowerCase().includes(filter) || r.interest.toLowerCase().includes(filter)) : all;

    return `
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
            <span class="text-[#C9A84C]/60 text-[10px] tracking-[0.5em] uppercase font-medium block mb-3">Collaborative Focus</span>
            <h2 class="font-display text-6xl text-[#FAFAF5]">LIVE ROOMS</h2>
            <p class="text-[#FAFAF5]/40 text-sm mt-2">Study live with peers via ZegoCloud.</p>
        </div>
        <button data-action="create-room"
            class="bg-[#C9A84C] text-[#080808] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.35)] transition-all duration-300 text-sm tracking-wide shrink-0">
            <span class="w-4 h-4">${I.plus}</span> Create Room
        </button>
    </div>

    <!-- Search -->
    <div class="relative mb-5">
        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-[#FAFAF5]/30 w-4 h-4">${I.hash}</div>
        <input id="jr-filter" value="${S.joinRoomFilter}" placeholder="Search topics or interests…"
            class="w-full bg-[#FAFAF5]/4 border border-[#C9A84C]/15 rounded-xl py-4 pl-11 pr-4 text-[#FAFAF5] placeholder-[#FAFAF5]/25 focus:border-[#C9A84C] outline-none transition-all text-sm">
    </div>

    <!-- Filter chips -->
    <div class="flex flex-wrap gap-2 mb-8">
        <button class="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${S.joinRoomFilter === ''
            ? 'bg-[#C9A84C]/15 border-[#C9A84C] text-[#C9A84C]'
            : 'bg-transparent border-[#FAFAF5]/15 text-[#FAFAF5]/45 hover:border-[#FAFAF5]/35'}"
            data-action="jr-filter" data-val="">All</button>
        ${INTEREST_TAGS.map(t => `
        <button class="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${S.joinRoomFilter === t
            ? 'bg-[#C9A84C]/15 border-[#C9A84C] text-[#C9A84C]'
            : 'bg-transparent border-[#FAFAF5]/15 text-[#FAFAF5]/45 hover:border-[#FAFAF5]/35'}"
            data-action="jr-filter" data-val="${t}">${t}</button>`).join('')}
    </div>

    <!-- Room grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${filtered.length === 0
            ? `<div class="col-span-full text-center py-20 text-[#FAFAF5]/25 font-display text-3xl tracking-widest">No rooms active.<br><span class="text-[#C9A84C]/40 text-lg">Create one above.</span></div>`
            : filtered.map(r => `
            <div class="glass-panel p-6 flex flex-col relative overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#C9A84C]/8 to-transparent rounded-bl-full pointer-events-none"></div>
                <div class="inline-block px-3 py-1 bg-[#C9A84C]/10 rounded-full text-[10px] font-bold w-max mb-4 border border-[#C9A84C]/20 text-[#C9A84C] tracking-widest uppercase">${r.interest}</div>
                <h3 class="font-bold text-lg mb-1 text-[#FAFAF5]">${r.name}</h3>
                <p class="text-xs text-[#FAFAF5]/40 mb-6 flex-1">${r.topic || 'General study'}</p>
                <div class="flex items-center justify-between mb-5">
                    <div class="flex -space-x-2">
                        <div class="w-8 h-8 rounded-full bg-[#C9A84C]/30 border-2 border-[#080808] flex items-center justify-center text-xs font-bold text-[#C9A84C]">A</div>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-emerald-400 font-bold tracking-widest uppercase">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live
                    </div>
                </div>
                <button class="w-full py-3 rounded-xl bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/25 font-bold flex justify-center items-center gap-2 hover:bg-[#C9A84C]/18 transition-colors text-sm" data-action="join-room">
                    <span class="w-4 h-4">${I.video}</span> Join Call
                </button>
            </div>`).join('')}
    </div>`;
}

function renderCreateRoomModal() {
    return `
    <div class="fixed inset-0 bg-black/85 backdrop-blur-sm z-[5000] flex items-center justify-center p-4" style="animation: fadeIn 0.2s ease">
        <div class="glass-panel w-full max-w-md p-8 bg-[#0D0D0D]/95 border-[#C9A84C]/20 relative">
            <button data-action="close-modal" class="absolute top-5 right-5 text-[#FAFAF5]/40 hover:text-[#FAFAF5] p-2 transition-colors">
                <span class="w-4 h-4">${I.x}</span>
            </button>

            <span class="text-[#C9A84C]/60 text-[10px] tracking-[0.45em] uppercase font-medium block mb-3">New Collaboration</span>
            <h2 class="font-display text-4xl mb-7 text-[#FAFAF5]">Create Arena</h2>

            <div class="mb-6">
                <label class="text-[10px] font-bold tracking-[0.4em] text-[#FAFAF5]/40 uppercase block mb-3">Room Name</label>
                <input id="cr-name" class="w-full bg-black/50 border border-[#C9A84C]/15 rounded-xl p-4 text-[#FAFAF5] focus:border-[#C9A84C] outline-none placeholder-[#FAFAF5]/25 text-sm transition-all" placeholder="e.g. Physics Grind">
            </div>

            <div class="mb-8">
                <label class="text-[10px] font-bold tracking-[0.4em] text-[#FAFAF5]/40 uppercase block mb-3">Interest Tag</label>
                <div class="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
                    ${INTEREST_TAGS.map(t => `
                    <button class="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${S.createRoomData.interest === t
                        ? 'bg-[#C9A84C]/15 border-[#C9A84C] text-[#C9A84C]'
                        : 'border-[#FAFAF5]/12 text-[#FAFAF5]/45 hover:border-[#C9A84C]/30'}"
                        data-action="cr-interest" data-val="${t}">${t}</button>`).join('')}
                </div>
            </div>

            <button data-action="confirm-create-room"
                class="w-full py-4 rounded-xl bg-[#C9A84C] text-[#080808] font-bold flex justify-center items-center gap-2 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(201,168,76,0.35)] transition-all duration-300 tracking-wide">
                <span class="w-5 h-5">${I.plus}</span> Launch Room
            </button>
        </div>
    </div>`;
}

// ─── EVENTS & INTERACTIVITY ───────────────────────────────────────────────────
document.addEventListener('click', async e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const action = el.dataset.action;

    if (action === 'start') {
        const u = lsGet('ch_user');
        if (u) { S.user = u; S.screen = 'app'; S.activeNav = 'rooms'; render(); }
        else    { S.screen = 'setup'; render(); }
    }
    else if (action === 'exam')  { S.setupData.examType  = el.dataset.val; renderSetup(); }
    else if (action === 'style') { S.setupData.studyStyle = el.dataset.val; renderSetup(); }
    else if (action === 'setup-back') { if (S.setupStep > 0) { S.setupStep--; renderSetup(); } }
    else if (action === 'setup-next') {
        if (S.setupStep < 2) { S.setupStep++; renderSetup(); }
        else {
            S.user = { ...S.setupData, _id: Date.now(), streak: 1 };
            lsSet('ch_user', S.user);
            S.screen = 'app'; S.activeNav = 'rooms'; render();
        }
    }
    else if (action === 'nav')        { S.activeNav = el.dataset.nav; S.selectedRoom = null; renderAppShell(); }
    else if (action === 'select-room'){ S.selectedRoom = ROOMS.find(r => r.id === el.dataset.room); S.activeNav = 'goalset'; renderAppShell(); }
    else if (action === 'back-rooms') { S.selectedRoom = null; S.activeNav = 'rooms'; renderAppShell(); }
    else if (action === 'timer-mode') { S.timerMode = el.dataset.val; renderAppShell(); }
    else if (action === 'start-session') {
        const g = document.getElementById('goal-inp');
        if (g) S.goal = g.value;
        if (!S.goal) { showNotif('Please set an intent first.'); return; }
        if (S.timerMode === 'custom') S.customTime = parseInt(document.getElementById('custom-time')?.value) || 25;
        S.sessionStart = Date.now();
        S.timer = S.timerMode === 'pomodoro' ? 25*60 : S.customTime*60;
        S.timerRunning = true; S.pomPhase = 'work'; S.pomCount = 0;
        S.screen = 'session'; render(); startTimer();
    }
    else if (action === 'toggle-timer') {
        S.timerRunning = !S.timerRunning;
        renderSession();
        S.timerRunning ? startTimer() : clearInterval(timerIv);
    }
    else if (action === 'ambient') {
        const t = el.dataset.val;
        if (S.ambient === t) { stopAudio(); S.ambient = null; }
        else { startAudio(t); S.ambient = t; }
        renderSession();
    }
    else if (action === 'end-session') {
        clearInterval(timerIv); S.timerRunning = false; stopAudio(); S.ambient = null;
        S.screen = 'accountability'; render();
    }
    else if (action === 'submit-proof') {
        const p = document.getElementById('proof-inp');
        if (p) S.proof = p.value;
        if (!S.proof) { showNotif('Provide proof of your work.'); return; }
        const btn = document.getElementById('submit-btn');
        btn.innerHTML = '<span class="animate-pulse">Analyzing with AI…</span>';
        btn.disabled = true;
        setTimeout(() => {
            const passed = S.proof.length > 20;
            S.sessions.unshift({
                room:      S.selectedRoom?.name || 'Focus',
                goal:      S.goal,
                duration:  S.sessionStart ? Math.round((Date.now()-S.sessionStart)/60000) : S.customTime,
                status:    passed ? 'completed' : 'failed',
                createdAt: Date.now()
            });
            S.goal = ''; S.proof = ''; S.selectedRoom = null;
            S.screen = 'app'; S.activeNav = 'dashboard'; render();
            showNotif(passed ? 'Session verified and logged! 🏆' : 'Session recorded — proof insufficient.');
        }, 1500);
    }
    else if (action === 'create-room')  { S.showCreateModal = true;  renderAppShell(); }
    else if (action === 'close-modal')  { S.showCreateModal = false; renderAppShell(); }
    else if (action === 'cr-interest')  { S.createRoomData.interest = el.dataset.val; renderAppShell(); }
    else if (action === 'confirm-create-room') {
        const rn = document.getElementById('cr-name')?.value;
        if (!rn || !S.createRoomData.interest) { showNotif('Fill in all fields.'); return; }
        const r = getJoinRooms();
        r.unshift({ roomId: Date.now(), name: rn, interest: S.createRoomData.interest, createdAt: Date.now() });
        lsSet('ch_join_rooms', r);
        S.showCreateModal = false; renderAppShell();
        showNotif('Room created successfully!');
    }
    else if (action === 'join-room') {
        showNotif('ZegoCloud integration required to join call.');
    }
    else if (action === 'jr-filter') {
        S.joinRoomFilter = el.dataset.val; renderAppShell();
    }
});

// ─── Boot ─────────────────────────────────────────────────────────────────────
render();


// DOM Elements
const overlay = document.getElementById('auth-overlay');
const panel = document.getElementById('auth-panel');
const closeBtn = document.getElementById('close-auth');

// Views & Tabs
const viewLogin = document.getElementById('view-login');
const viewSignup = document.getElementById('view-signup');
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');

// GSAP Timeline setup
const tl = gsap.timeline({ paused: true });
tl.to(overlay, { autoAlpha: 1, duration: 0.4 })
  .to(panel, { x: 0, duration: 0.5, ease: 'power4.out' }, '<');

// Reusable classes for active/inactive tabs based on the new aesthetic
const activeTabClasses = ['border-[#C9A84C]', 'text-[#C9A84C]'];
const inactiveTabClasses = ['border-transparent', 'text-gray-500', 'hover:text-[#FAFAF5]'];

function setAuthView(view) {
  if (view === 'login') {
    // Show Login, Hide Signup
    viewLogin.classList.remove('hidden');
    viewSignup.classList.add('hidden');
    
    // Style Login Tab as Active
    tabLogin.classList.add(...activeTabClasses);
    tabLogin.classList.remove(...inactiveTabClasses);
    
    // Style Signup Tab as Inactive
    tabSignup.classList.remove(...activeTabClasses);
    tabSignup.classList.add(...inactiveTabClasses);
    
  } else if (view === 'signup') {
    // Show Signup, Hide Login
    viewSignup.classList.remove('hidden');
    viewLogin.classList.add('hidden');
    
    // Style Signup Tab as Active
    tabSignup.classList.add(...activeTabClasses);
    tabSignup.classList.remove(...inactiveTabClasses);
    
    // Style Login Tab as Inactive
    tabLogin.classList.remove(...activeTabClasses);
    tabLogin.classList.add(...inactiveTabClasses);
  }
}

// 1. Listen for clicks on the trigger buttons
document.querySelectorAll('[data-auth-trigger]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Determine which button was clicked ('login' or 'signup')
    const requestedView = e.currentTarget.dataset.authTrigger;
    
    // Set the correct view BEFORE animating in
    setAuthView(requestedView);
    
    // Play the GSAP animation
    tl.play();
  });
});

// 2. Listen for clicks on the tabs inside the offcanvas
tabLogin.addEventListener('click', () => setAuthView('login'));
tabSignup.addEventListener('click', () => setAuthView('signup'));

// 3. Close mechanics
closeBtn.addEventListener('click', () => tl.reverse());
overlay.addEventListener('click', () => tl.reverse());