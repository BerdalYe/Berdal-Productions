const NF = {
  en:{ title:"This page doesn't exist.", body:"The link is broken or the page has moved. Head back to the homepage.", cta:"Back to home" },
  no:{ title:"Denne siden finnes ikke.", body:"Lenken er ødelagt eller siden er flyttet. Gå tilbake til forsiden.", cta:"Tilbake til forsiden" }
};
let lang = null;
try { lang = localStorage.getItem('bp-lang'); } catch(e){}
if (!lang) {
  const b = (navigator.language || 'en').toLowerCase();
  lang = (b.startsWith('no')||b.startsWith('nb')||b.startsWith('nn')) ? 'no' : 'en';
}
document.documentElement.lang = lang === 'no' ? 'no' : 'en';
document.querySelectorAll('[data-nf]').forEach(el => {
  const k = el.getAttribute('data-nf');
  if (NF[lang] && NF[lang][k]) el.textContent = NF[lang][k];
});
document.title = (lang === 'no' ? 'Side ikke funnet' : 'Page Not Found') + ' — Berdal Productions';
