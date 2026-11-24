# Mirelac

Site de l’**Université de Magie de Mirelac**, l’université sous le lac de Comper, en forêt de Brocéliande.
Projet fictif réalisé dans un cadre pédagogique.

Construit avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com) v4.

## Démarrer

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # site statique dans dist/
npm run preview  # prévisualiser le build
```

## Structure

```
src/
  layouts/Base.astro       gabarit commun (polices, en-tête, pied, transitions)
  components/              en-tête, pied, blason, médaillons, frise, tableaux…
  data/                    navigation et contenus des trois facultés
  pages/                   une page par rubrique ; [faculte].astro génère les 3 facultés
  scripts/main.ts          menu, effets d’eau, compteurs, formulaire de contact
  styles/global.css        thème Tailwind (charte) et composants Art nouveau
public/monogramme.svg      logo simplifié / favicon
```

## Charte

| Rôle | Couleur | Classe Tailwind |
| --- | --- | --- |
| Principale | Bleu lagon `#253F66` | `lagon` |
| Secondaire | Rouge amanite `#E54D1F` | `amanite` |
| Accent | Or soleil `#D6C16F` | `soleil` |
| Accent précieux | Blanc cristal `#F9EFE1` | `cristal` |

Typographies : Jana Thork (Adobe Fonts, `font-titre`), Marcellus (`font-sous`), Alegreya (`font-texte`), Alegreya SC (`font-sc`).

## Transitions de page

Les pages s’enchaînent avec le `ClientRouter` d’Astro (View Transitions), dans l’esprit de l’effet d’eau du site Springs :
la page quittée s’enfonce et se trouble, des cercles d’eau partent du point cliqué, et la nouvelle page s’ouvre en onde circulaire
puis remonte avec une courbe à ressort (`--ease-ressort`). Les animations sont désactivées si le système demande moins de mouvement.

## Publier sur GitHub Pages

Dans `astro.config.mjs`, renseigner `site: "https://<compte>.github.io"` et `base: "/Mirelac"`. Tous les liens passent par `lien()` (`src/lib/url.ts`) et suivent donc ce changement.
