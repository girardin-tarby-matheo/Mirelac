/* ==========================================================================
   Mirelac — scripts communs
   Compatible avec le ClientRouter d'Astro : tout ce qui touche au contenu
   de la page est (ré)initialisé à chaque `astro:page-load`.
   ========================================================================== */

const reduit = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --------------------------------------------------------------------------
   Transition à ressort : on mémorise le point de clic (centre de l'onde)
   et on lance des cercles d'eau qui se propagent pendant la transition.
   -------------------------------------------------------------------------- */
function lancerOndes(x: number, y: number) {
  const racine = document.documentElement;
  racine.style.setProperty("--vt-x", `${x}px`);
  racine.style.setProperty("--vt-y", `${y}px`);
  if (reduit()) return;
  const calque = document.querySelector<HTMLElement>(".ondes");
  if (!calque) return;
  const portee = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) * 2;
  [0, 140, 300].forEach((delai, i) => {
    const cercle = document.createElement("span");
    cercle.style.left = `${x}px`;
    cercle.style.top = `${y}px`;
    cercle.style.animationDelay = `${delai}ms`;
    cercle.style.setProperty("--d", `${Math.round(portee * (1 - i * 0.18))}px`);
    calque.appendChild(cercle);
    setTimeout(() => cercle.remove(), 1700 + delai);
  });
}

document.addEventListener(
  "click",
  (e) => {
    const a = (e.target as Element).closest?.("a");
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || a.target === "_blank" || a.hasAttribute("download")) return;
    if (url.pathname === location.pathname) return;
    lancerOndes(e.clientX, e.clientY);
  },
  { capture: true },
);

// Le ClientRouter remplace les attributs de <html> : on remet le drapeau JS.
document.addEventListener("astro:after-swap", () => document.documentElement.classList.add("js"));

/* --------------------------------------------------------------------------
   Ondulation des boutons : le rond part du curseur
   -------------------------------------------------------------------------- */
document.addEventListener("pointerover", (e) => {
  const btn = (e.target as Element).closest?.<HTMLElement>(".btn");
  if (!btn) return;
  const r = btn.getBoundingClientRect();
  btn.style.setProperty("--x", `${e.clientX - r.left}px`);
  btn.style.setProperty("--y", `${e.clientY - r.top}px`);
});

/* --------------------------------------------------------------------------
   Ondulation au survol des visuels (.onde) : la surface se trouble puis se calme
   -------------------------------------------------------------------------- */
let animationOnde = 0;
function troubler(el: HTMLElement | SVGElement) {
  const bruit = document.getElementById("onde-bruit");
  if (reduit() || !bruit) return;
  cancelAnimationFrame(animationOnde);
  el.style.filter = "url(#onde-survol)";
  const debut = performance.now();
  const pas = (t: number) => {
    const p = Math.min((t - debut) / 1100, 1);
    const force = (1 - p) * (1 - p);
    bruit.setAttribute("baseFrequency", `${(0.004 + 0.02 * force).toFixed(4)} ${(0.02 + 0.09 * force).toFixed(4)}`);
    if (p < 1) animationOnde = requestAnimationFrame(pas);
    else el.style.filter = "";
  };
  animationOnde = requestAnimationFrame(pas);
}
document.addEventListener("pointerover", (e) => {
  const el = (e.target as Element).closest?.<HTMLElement>(".onde");
  const depuis = (e.relatedTarget as Element | null)?.closest?.(".onde");
  if (el && depuis !== el) troubler(el);
});

/* --------------------------------------------------------------------------
   Menu : sous-menus et version mobile
   -------------------------------------------------------------------------- */
function fermerSousMenus() {
  document.querySelectorAll(".nav__item.ouvert").forEach((el) => {
    el.classList.remove("ouvert");
    el.querySelector(".nav__bouton")?.setAttribute("aria-expanded", "false");
  });
}

document.addEventListener("click", (e) => {
  const cible = e.target as Element;
  const burger = cible.closest?.(".burger");
  if (burger) {
    const nav = document.getElementById("nav-principale");
    const ouvert = !!nav?.classList.toggle("ouvert");
    burger.setAttribute("aria-expanded", String(ouvert));
    burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    return;
  }
  const bouton = cible.closest?.(".nav__bouton");
  if (bouton) {
    const item = bouton.parentElement!;
    const ouvrir = !item.classList.contains("ouvert");
    fermerSousMenus();
    item.classList.toggle("ouvert", ouvrir);
    bouton.setAttribute("aria-expanded", String(ouvrir));
    return;
  }
  if (!cible.closest?.(".nav__item")) fermerSousMenus();
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  fermerSousMenus();
  const nav = document.getElementById("nav-principale");
  if (nav?.classList.contains("ouvert")) document.querySelector<HTMLElement>(".burger")?.click();
});

/* --------------------------------------------------------------------------
   Initialisation propre à chaque page
   -------------------------------------------------------------------------- */
function compter(el: HTMLElement) {
  const cible = Number(el.dataset.cible);
  if (!cible || reduit()) return;
  const debut = performance.now();
  const pas = (t: number) => {
    const p = Math.min((t - debut) / 1600, 1);
    el.textContent = Math.round(cible * (1 - Math.pow(1 - p, 3))).toLocaleString("fr-FR");
    if (p < 1) requestAnimationFrame(pas);
  };
  requestAnimationFrame(pas);
}

function initApparitions() {
  const elements = document.querySelectorAll<HTMLElement>(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entrees) => {
      entrees.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("visible");
        en.target.querySelectorAll<HTMLElement>("[data-cible]").forEach(compter);
        obs.unobserve(en.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  elements.forEach((el) => obs.observe(el));
}

function initCristal() {
  const etat = document.querySelector<HTMLElement>("[data-cristal]");
  if (!etat) return;
  const d = new Date();
  let jour = d.getDay();
  let h = d.getHours() + d.getMinutes() / 60;
  if (h < 7) { h += 24; jour = (jour + 6) % 7; } // la nuit appartient à la veille
  const weekend = jour === 5 || jour === 6;       // vendredi et samedi soir
  const retour = weekend ? 24 : 22;
  const extinction = weekend ? 24.5 : 23;
  let couleur: string, texte: string;
  if (h < retour) { couleur = "#9ec3e6"; texte = "bleu clair : c’est la journée, les ailes sont ouvertes."; }
  else if (h < extinction) { couleur = "#1b2f57"; texte = "bleu nuit : le couvre-feu a sonné, regagnez votre aile."; }
  else { couleur = "#05070c"; texte = "noir : extinction des lumières. Les portes des ailes sont closes."; }
  etat.querySelector<HTMLElement>(".cristal-etat__pastille")?.style.setProperty("--c", couleur);
  const t = etat.querySelector("[data-cristal-texte]");
  if (t) t.textContent = texte;
}

function initFormulaire() {
  const form = document.getElementById("form-contact") as HTMLFormElement | null;
  const msg = document.getElementById("form-message");
  if (!form || !msg) return;
  const MESSAGES = {
    ok: "Merci, votre message a bien traversé l’étang. Nous vous répondrons sous cinq jours ouvrés.",
    manque: "Il manque quelques mots à votre message. Vérifiez les champs signalés en rouge.",
    email: "Cette adresse semble enchantée. Merci d’en saisir une valide.",
    envoi: "Le reflet s’est troublé et votre message n’est pas parti. Réessayez dans quelques instants.",
  };
  const afficher = (type: "ok" | "erreur", cle: keyof typeof MESSAGES) => {
    msg.textContent = MESSAGES[cle];
    msg.className = `form-message visible form-message--${type}`;
    msg.focus();
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let manque = false;
    form.querySelectorAll<HTMLInputElement>("[required]").forEach((champ) => {
      const vide = champ.type === "checkbox" ? !champ.checked : !champ.value.trim();
      champ.closest(".champ, .consentement")?.classList.toggle("champ--erreur", vide);
      champ.setAttribute("aria-invalid", String(vide));
      if (vide) manque = true;
    });
    if (manque) return afficher("erreur", "manque");

    const email = form.elements.namedItem("email") as HTMLInputElement;
    const valide = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
    email.closest(".champ")?.classList.toggle("champ--erreur", !valide);
    email.setAttribute("aria-invalid", String(!valide));
    if (!valide) return afficher("erreur", "email");

    // Aucun serveur n'est branché : l'envoi est simulé.
    try {
      form.reset();
      afficher("ok", "ok");
    } catch {
      afficher("erreur", "envoi");
    }
  });
}

document.addEventListener("astro:page-load", () => {
  initApparitions();
  initCristal();
  initFormulaire();
  const auj = new Date();
  document.body.classList.toggle("samain", auj.getMonth() === 9 && auj.getDate() === 31);
});
