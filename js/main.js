// ===== i18n =====
const I18N = {
  en: {
    "nav.projects":"Projects","nav.about":"About","nav.services":"Services","nav.contact":"Contact",
    "hero.tagline":"Web projects and small builds.",
    "hero.subtitle":"Sites and tools — for my own ideas and for other people.",
    "hero.ctaPrimary":"See Projects","hero.ctaSecondary":"Get In Touch",
    "projects.eyebrow":"Selected Work","projects.title":"Projects","projects.intro":"What's out there, and what's on the way.",
    "projects.visit":"Visit site",
    "projects.marie.tag":"E-commerce · Brand",
    "projects.marie.desc":"A friendly storefront for handmade beaded bracelets and hobby pieces — product catalog, gallery and a simple checkout flow.",
    "projects.next.label":"your project here","projects.next.tag":"Open Slot","projects.next.title":"Next project",
    "projects.next.desc":"Got an idea you want built? The next slot in the portfolio is open.",
    "projects.next.cta":"Start a project",
    "projects.arbeidsdager.label":"on google play","projects.arbeidsdager.tag":"Mobile App · Android",
    "projects.arbeidsdager.desc":"Log workdays, plan shifts and chat with your team — quickly and easily. A mobile app for tracking work hours and coordinating teams.",
    "projects.arbeidsdager.cta":"Get it on Google Play",
    "projects.arbeidsdager.note":"Coming to the App Store soon",
    "projects.blink.label":"coming soon","projects.blink.tag":"Mobile App · Android",
    "projects.blink.desc":"A training log for pistol shooting. Log each series, pick discipline, firearm and calibre, and follow your progress — every series drawn on a target so you can see the hit pattern.",
    "projects.blink.note":"Coming soon to Google Play",
    "projects.scanmat.label":"coming soon","projects.scanmat.tag":"Mobile App · Android",
    "projects.scanmat.desc":"Photograph the food you already have — in the fridge, on the counter, in the cupboard — and get recipe suggestions from what the app recognises. Recognition runs on the device, so no photos leave your phone.",
    "projects.scanmat.note":"Coming soon to Google Play",
    "projects.game.label":"work in progress","projects.game.tag":"Personal · Game","projects.game.title":"Low-poly city simulator",
    "projects.game.desc":"A side experiment in 3D open-world game dev — characters, vehicles, and a small explorable city. A hobby project, not a service I offer.",
    "projects.game.note":"Hobby project — no public release",
    "projects.voxelia.tag":"Personal · Game",
    "projects.voxelia.desc":"A voxel sandbox that runs in the browser — survival and creative modes, procedurally generated biomes, crafting and tool tiers, and online multiplayer over a zero-dependency Node server.",
    "projects.voxelia.cta":"Play in browser",
    "projects.voxelia.note":"Free hosting — the server may take a moment to wake up",
    "projects.cars.tag":"Personal · Web","projects.cars.title":"The History of Cars",
    "projects.cars.desc":"A cinematic journey through the automobile, from the 1886 Benz Patent-Motorwagen to electric and self-driving cars — a scroll-driven era story, twelve themed brand garages, and a searchable gallery with side-by-side comparison.",
    "about.eyebrow":"About","about.title":"Just me, building things.",
    "about.lead":"Berdal Productions is the home for the web stuff I make — both my own ideas and projects for other people.",
    "about.body1":"I take projects from idea to launch: design, build, deploy, and the bits in between. Nothing fancy, nothing oversold — just sites and tools that work, look right, and stay live.",
    "about.body2":"If any of this fits, the inbox is open.",
    "about.quote":"\"Build it. Ship it. Keep it alive.\"",
    "services.eyebrow":"What I Do","services.title":"Services",
    "services.intro":"If it lives in a browser, it's probably on the table.",
    "services.web.title":"Websites & Web Apps",
    "services.web.desc":"Marketing sites, small web apps, and tools — fast, accessible, mobile-first.",
    "services.brand.title":"UI & Brand",
    "services.brand.desc":"Clean interfaces and small-brand identity — logos, colors, type, the whole feel.",
    "services.shop.title":"Small E-commerce",
    "services.shop.desc":"Simple storefronts and order flows for makers, hobbyists, and side businesses.",
    "services.deploy.title":"Deploy & Maintain",
    "services.deploy.desc":"Hosting setup, custom domains, SEO basics, and the unglamorous upkeep that keeps things alive.",
    "contact.eyebrow":"Contact","contact.title":"Let's build something.",
    "contact.intro":"Got a project, an idea, or a question? Drop a message — replies usually come within a day.",
    "contact.or":"or email directly",
    "contact.form.name":"Name","contact.form.email":"Email","contact.form.message":"Message",
    "contact.form.submit":"Send message",
    "contact.form.sending":"Sending…",
    "contact.form.success":"Message sent. I'll be in touch soon.",
    "contact.form.error":"Something went wrong. Try again or email me directly."
  },
  no: {
    "nav.projects":"Prosjekter","nav.about":"Om","nav.services":"Tjenester","nav.contact":"Kontakt",
    "hero.tagline":"Nettprosjekter og små løsninger.",
    "hero.subtitle":"Nettsider og verktøy — for egne idéer og for andre.",
    "hero.ctaPrimary":"Se prosjekter","hero.ctaSecondary":"Ta kontakt",
    "projects.eyebrow":"Utvalgte prosjekter","projects.title":"Prosjekter","projects.intro":"Det som er ute, og det som er på vei.",
    "projects.visit":"Besøk siden",
    "projects.marie.tag":"Nettbutikk · Merkevare",
    "projects.marie.desc":"En vennlig nettbutikk for håndlagde perlearmbånd og hobbyartikler — produktkatalog, galleri og enkel bestilling.",
    "projects.next.label":"ditt prosjekt her","projects.next.tag":"Ledig plass","projects.next.title":"Neste prosjekt",
    "projects.next.desc":"Har du en idé du vil ha bygget? Neste plass i porteføljen er åpen.",
    "projects.next.cta":"Start et prosjekt",
    "projects.arbeidsdager.label":"på google play","projects.arbeidsdager.tag":"Mobilapp · Android",
    "projects.arbeidsdager.desc":"Logg arbeidsdager, planlegg skift og chat med teamet — enkelt og raskt. En mobilapp for å holde styr på arbeidstimer og koordinere team.",
    "projects.arbeidsdager.cta":"Last ned på Google Play",
    "projects.arbeidsdager.note":"Kommer snart på App Store",
    "projects.blink.label":"kommer snart","projects.blink.tag":"Mobilapp · Android",
    "projects.blink.desc":"En treningslogg for pistolskyting. Logg hver serie, velg disiplin, våpen og kaliber, og følg framgangen — hver serie tegnes opp på en blink så du ser treffbildet.",
    "projects.blink.note":"Kommer snart på Google Play",
    "projects.scanmat.label":"kommer snart","projects.scanmat.tag":"Mobilapp · Android",
    "projects.scanmat.desc":"Ta bilde av maten du allerede har — i kjøleskapet, på benken eller i skapet — og få oppskriftsforslag ut fra det appen kjenner igjen. Gjenkjenningen kjører på enheten, så ingen bilder forlater telefonen.",
    "projects.scanmat.note":"Kommer snart på Google Play",
    "projects.game.label":"under utvikling","projects.game.tag":"Personlig · Spill","projects.game.title":"Low-poly city simulator",
    "projects.game.desc":"Et hobbyeksperiment innen 3D open-world spillutvikling — karakterer, kjøretøy og en liten by å utforske. Et personlig prosjekt, ikke en tjeneste jeg tilbyr.",
    "projects.game.note":"Hobbyprosjekt — ingen offentlig utgivelse",
    "projects.voxelia.tag":"Personlig · Spill",
    "projects.voxelia.desc":"En voxel-sandkasse som kjører i nettleseren — survival og kreativ modus, prosedyregenererte biomer, crafting og verktøynivåer, og flerspiller over en Node-server helt uten avhengigheter.",
    "projects.voxelia.cta":"Spill i nettleseren",
    "projects.voxelia.note":"Gratis hosting — serveren kan bruke et øyeblikk på å våkne",
    "projects.cars.tag":"Personlig · Nett","projects.cars.title":"The History of Cars",
    "projects.cars.desc":"En filmatisk reise gjennom bilens historie, fra Benz Patent-Motorwagen i 1886 til elbiler og selvkjørende biler — en scroll-drevet epokefortelling, tolv merkegarasjer og et søkbart galleri med sammenligning side ved side.",
    "about.eyebrow":"Om","about.title":"Bare meg som bygger ting.",
    "about.lead":"Berdal Productions er hjemmet for nettgreiene jeg lager — både egne idéer og prosjekter for andre.",
    "about.body1":"Jeg tar prosjekter fra idé til lansering: design, utvikling, publisering, og alt imellom. Ingenting overdrevet, ingenting oversolgt — bare sider og verktøy som virker, ser riktige ut, og forblir oppe.",
    "about.body2":"Hvis noe treffer, er innboksen åpen.",
    "about.quote":"«Bygg det. Lanser det. Hold det oppe.»",
    "services.eyebrow":"Hva jeg gjør","services.title":"Tjenester",
    "services.intro":"Skjer det i en nettleser, kan det sannsynligvis bygges.",
    "services.web.title":"Nettsider og webapper",
    "services.web.desc":"Profil­sider, små webapper og verktøy — raske, tilgjengelige og mobil­vennlige.",
    "services.brand.title":"UI og merkevare",
    "services.brand.desc":"Rene grensesnitt og enkel merkevare­bygging — logoer, farger, typografi, hele uttrykket.",
    "services.shop.title":"Liten nettbutikk",
    "services.shop.desc":"Enkle nettbutikker og bestillingsflyter for hobbyister, skapere og småbedrifter.",
    "services.deploy.title":"Lansering og drift",
    "services.deploy.desc":"Hosting, eget domene, grunnleggende SEO, og det lite glamorøse vedlikeholdet som holder ting i gang.",
    "contact.eyebrow":"Kontakt","contact.title":"La oss bygge noe.",
    "contact.intro":"Har du et prosjekt, en idé eller et spørsmål? Send en melding — svar kommer som regel innen et døgn.",
    "contact.or":"eller send e-post direkte",
    "contact.form.name":"Navn","contact.form.email":"E-post","contact.form.message":"Melding",
    "contact.form.submit":"Send melding",
    "contact.form.sending":"Sender…",
    "contact.form.success":"Melding sendt. Jeg tar kontakt snart.",
    "contact.form.error":"Noe gikk galt. Prøv igjen eller send e-post direkte."
  }
};

const META = {
  en: { title:"Berdal Productions — Web projects & small builds",
        desc:"Berdal Productions: web projects and small builds — by Berdal, for himself and for others." },
  no: { title:"Berdal Productions — Nettprosjekter og små løsninger",
        desc:"Berdal Productions: nettprosjekter og små løsninger — av Berdal, for egne idéer og for andre." }
};

function setLang(lang){
  const dict = I18N[lang]; if(!dict) return;
  document.documentElement.lang = lang === 'no' ? 'no' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.title = META[lang].title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', META[lang].desc);
  const cur = document.querySelector('.lang-current');
  const oth = document.querySelector('.lang-other');
  if (cur && oth){
    cur.textContent = lang.toUpperCase();
    oth.textContent = lang === 'no' ? 'EN' : 'NO';
  }
  try { localStorage.setItem('bp-lang', lang); } catch(e){}
}

// initial language
let saved = null;
try { saved = localStorage.getItem('bp-lang'); } catch(e){}
const browser = (navigator.language || 'en').toLowerCase();
const initial = saved || (browser.startsWith('no') || browser.startsWith('nb') || browser.startsWith('nn') ? 'no' : 'en');
setLang(initial);

document.getElementById('langToggle').addEventListener('click', () => {
  const cur = document.documentElement.lang === 'no' ? 'no' : 'en';
  setLang(cur === 'no' ? 'en' : 'no');
});

// year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu
const burger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
function setMenu(open){
  burger.classList.toggle('active', open);
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
}
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
document.querySelectorAll('#mobileMenu a').forEach(a =>
  a.addEventListener('click', () => setMenu(false))
);
// close the menu on Escape, and return focus to the toggle
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); }
});

// nav gains weight once you leave the hero (rAF-throttled)
const nav = document.querySelector('.nav');
let navTicking = false;
function onScroll(){
  if (navTicking) return;
  navTicking = true;
  requestAnimationFrame(() => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
    navTicking = false;
  });
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// reveal
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.section, .project-card, .service').forEach(el => io.observe(el));

// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// contact form (AJAX submit to Netlify, keeps user on page)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const submit = document.getElementById('contactSubmit');
if (form){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const lang = document.documentElement.lang === 'no' ? 'no' : 'en';
    const dict = I18N[lang];
    submit.disabled = true;
    status.className = 'form-status sending';
    status.textContent = dict['contact.form.sending'];
    const data = new FormData(form);
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
        signal: ctrl.signal
      });
      if (!res.ok) throw new Error(res.status);
      status.className = 'form-status ok';
      status.textContent = dict['contact.form.success'];
      form.reset();
      setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 8000);
    } catch (err) {
      status.className = 'form-status err';
      status.textContent = dict['contact.form.error'];
    } finally {
      clearTimeout(t);
      submit.disabled = false;
    }
  });
}
