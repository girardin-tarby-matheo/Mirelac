export type LienNav = { label: string; href: string };
export type EntreeNav = { label: string; href?: string; enfants?: LienNav[] };

/** Arborescence du site */
export const navigation: EntreeNav[] = [
  {
    label: "L’université",
    enfants: [
      { label: "Notre histoire", href: "/histoire" },
      { label: "Le campus et ses lieux légendaires", href: "/campus" },
      { label: "Identité et blason", href: "/identite" },
    ],
  },
  {
    label: "Formations",
    enfants: [
      { label: "L’Année du Prisme et les facultés", href: "/formations" },
      { label: "Faculté de Viviane", href: "/faculte-viviane" },
      { label: "Faculté de Merlin", href: "/faculte-merlin" },
      { label: "Faculté de Lancelot", href: "/faculte-lancelot" },
      { label: "Diplômes et évaluation", href: "/diplomes" },
    ],
  },
  { label: "Professeurs", href: "/professeurs" },
  {
    label: "Vie étudiante",
    enfants: [
      { label: "La vie à Mirelac", href: "/vie-etudiante" },
      { label: "Logement au palais de cristal", href: "/logement" },
      { label: "Règlementation des animaux", href: "/animaux" },
    ],
  },
  { label: "Partenaires", href: "/partenaires" },
  { label: "Contact", href: "/contact" },
];
