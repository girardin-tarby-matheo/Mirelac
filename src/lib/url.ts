/** Construit un lien interne en tenant compte du `base` d'Astro (utile pour GitHub Pages). */
export function lien(chemin = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (/^(https?:|mailto:|#)/.test(chemin)) return chemin;
  const propre = chemin.startsWith("/") ? chemin : `/${chemin}`;
  return `${base}${propre}` || "/";
}

/** Compare le chemin courant à un lien interne, sans tenir compte des barres obliques finales. */
export function estActif(courant: string, chemin: string): boolean {
  const norm = (p: string) => p.replace(/\/+$/, "") || "/";
  return norm(courant) === norm(lien(chemin));
}
