// Language is chosen by URL: / is English, /no/ is Norwegian (both are static HTML).
const LANG = document.documentElement.lang === "nb" ? "nb" : "en";
const MSG = {
  "en": {
    "sending": "Sending…",
    "success": "Message sent. I'll be in touch soon.",
    "error": "Something went wrong. Try again or email me directly."
  },
  "nb": {
    "sending": "Sender…",
    "success": "Melding sendt. Jeg tar kontakt snart.",
    "error": "Noe gikk galt. Prøv igjen eller send e-post direkte."
  }
};

// remember an explicit choice of English so the server-side Norwegian redirect stops applying
document.querySelectorAll(".lang-toggle").forEach(a => a.addEventListener("click", () => {
  const toEn = a.getAttribute("hreflang") === "en";
  document.cookie = "bp_en=" + (toEn ? "1; max-age=31536000" : "; max-age=0") + "; path=/; SameSite=Lax";
}));

document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu
const burger = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu");
function setMenu(open){
  burger.classList.toggle("active", open);
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
}
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); burger.focus(); }
});

// retire the old service worker and its caches for returning visitors
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then(rs => rs.forEach(r => r.unregister())).catch(() => {});
  if (window.caches) caches.keys().then(ks => ks.forEach(k => caches.delete(k))).catch(() => {});
}

// contact form (AJAX submit to the server, keeps user on page)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const submit = document.getElementById("contactSubmit");
if (form){
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const msg = MSG[LANG];
    submit.disabled = true;
    status.className = "form-status sending";
    status.textContent = msg.sending;
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
        signal: ctrl.signal
      });
      if (!res.ok) throw new Error(res.status);
      status.className = "form-status ok";
      status.textContent = msg.success;
      form.reset();
      setTimeout(() => { status.textContent = ""; status.className = "form-status"; }, 8000);
    } catch (err) {
      status.className = "form-status err";
      status.textContent = msg.error;
    } finally {
      clearTimeout(t);
      submit.disabled = false;
    }
  });
}
