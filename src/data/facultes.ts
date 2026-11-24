export type Symbole = "miroir" | "etoile" | "ecu" | "prisme";
export type CleFaculte = "viviane" | "merlin" | "lancelot";

export interface Faculte {
  cle: CleFaculte;
  slug: string;
  nom: string;
  domaine: string;
  figure: string;
  reflet: string;
  symbole: Symbole;
  accroche: string;
  resume: string;
  introduction: string;
  doyen: { titre: string; nom: string; portrait: string };
  qualites: [string, string][];
  domaines: [string, string][];
  parcours: string[];
  programme: [string, string][];
  debouches: string;
  debouchesCourts: string;
  portrait: { titre: string; nom: string; citation: string };
}

const PRISME: [string, string] = [
  "1<sup>re</sup> année",
  "L’Année du Prisme, commune à tous les étudiants : sortilèges fondamentaux, histoire de la magie bretonne, botanique, créatures, éthique du secret magique.",
];

export const facultes: Faculte[] = [
  {
    cle: "viviane",
    slug: "faculte-viviane",
    nom: "Faculté de Viviane",
    domaine: "Enchantements et Illusions",
    figure: "La Dame du Lac",
    reflet: "bleu lagon",
    symbole: "miroir",
    accroche: "Apprenez à cacher un château sous un lac.",
    resume: "L’art de cacher ce qui doit l’être. On y apprend l’enchantement même qui protège Mirelac.",
    introduction:
      "Depuis que Merlin enseigna à la Dame du Lac l’art de dissimuler son domaine, cette faculté transmet l’enchantement même qui protège Mirelac. On y apprend à tromper le regard, à protéger les lieux et à faire d’un simple reflet une porte.",
    doyen: {
      titre: "Doyen",
      nom: "Professeur Xavier Sénenchant",
      portrait: "Ses cours commencent souvent sans qu’on le voie entrer, et finissent parfois sans qu’il soit vraiment là.",
    },
    qualites: [
      ["Discrétion", "savoir se faire oublier"],
      ["Patience", "un enchantement durable se tisse lentement"],
      ["Sens du détail", "une illusion se trahit par un rien"],
    ],
    domaines: [
      ["Illusions", "tromper la vue, l’ouïe et l’odorat"],
      ["Protection", "sceller un lieu ou un objet"],
      ["Miroirs et surfaces", "faire d’un reflet une porte"],
    ],
    parcours: ["Illusions et dissimulation", "Enchantements protecteurs", "Magie des miroirs et des surfaces"],
    programme: [
      PRISME,
      ["2<sup>e</sup> année", "Illusions simples (couleurs, sons, odeurs) ; enchantements de protection d’un objet ; premières surfaces réfléchissantes avec le professeur Makhoule."],
      ["3<sup>e</sup> année (Licence)", "Dissimulation d’un bâtiment ; illusions durables ; Épreuve du Miroir devant jury."],
      ["Master 1", "Choix du parcours : Illusions et dissimulation, Enchantements protecteurs ou Magie des miroirs et des surfaces."],
      ["Master 2", "Projet de fin d’études : protéger un lieu magique réel pendant six mois, en lien avec le Conservatoire des Lieux Enchantés."],
    ],
    debouches: "gardien de lieux magiques, architecte d’illusions, conservateur d’artefacts, langue de plomb, enchanteur pour le ministère de la Magie.",
    debouchesCourts: "gardien de lieux magiques, architecte d’illusions, conservateur d’artefacts, langue de plomb.",
    portrait: {
      titre: "Portrait d’ancienne élève",
      nom: "Maëlle Corlay, promotion 2014",
      citation:
        "Aujourd’hui, je cache des bâtiments entiers aux yeux des Moldus, du Mont-Saint-Michel aux carrières de Paris. Mon premier vrai sortilège de dissimulation, je l’ai lancé sur ma chambre du palais, pour échapper au couvre-feu. Il a tenu trois jours.",
    },
  },
  {
    cle: "merlin",
    slug: "faculte-merlin",
    nom: "Faculté de Merlin",
    domaine: "Arts divinatoires et Savoirs anciens",
    figure: "Merlin",
    reflet: "rouge amanite",
    symbole: "etoile",
    accroche: "Lisez ce qui fut, devinez ce qui sera.",
    resume:
      "L’étude de ce qui fut et de ce qui sera. Grimoires, prophéties, métamorphoses : la faculté la plus exigeante, et la plus mystérieuse sur ses taux de réussite.",
    introduction:
      "Merlin connaissait le passé et prédisait l’avenir. Sa faculté forme celles et ceux qui déchiffrent les grimoires, interprètent les signes et maîtrisent l’art délicat de la métamorphose. C’est la plus exigeante de Mirelac.",
    doyen: {
      titre: "Doyen",
      nom: "Professeur Sébastien Augure",
      portrait: "Il répond aux questions avant qu’on les pose, ce qui agace prodigieusement ses collègues.",
    },
    qualites: [
      ["Curiosité", "vouloir comprendre ce que les autres ignorent"],
      ["Intuition", "voir avant de savoir"],
      ["Rigueur", "un mot mal traduit change une prophétie"],
    ],
    domaines: [
      ["Divination", "lire les signes et prédire"],
      ["Grimoires et runes", "déchiffrer les savoirs anciens"],
      ["Métamorphose", "changer la forme des choses et des êtres"],
    ],
    parcours: ["Prophétie et lecture des signes", "Langues et grimoires anciens", "Métamorphose"],
    programme: [
      PRISME,
      ["2<sup>e</sup> année", "Lecture des signes (vol des oiseaux, eaux de l’étang, étoiles) ; runes et histoire de la magie bretonne avec le professeur Prachtenn ; métamorphose d’objets."],
      ["3<sup>e</sup> année (Licence)", "Prophétie encadrée ; traduction d’un grimoire ancien ; métamorphose d’êtres vivants simples."],
      ["Master 1", "Choix du parcours : Prophétie et lecture des signes, Langues et grimoires anciens ou Métamorphose."],
      ["Master 2", "Mémoire de recherche, souvent mené avec la Bibliothèque des Grimoires de Carnac."],
    ],
    debouches: "chercheur, archiviste, traducteur de runes, conseiller divinatoire, enseignant.",
    debouchesCourts: "chercheur, archiviste, traducteur de runes, conseiller divinatoire.",
    portrait: {
      titre: "Portrait d’ancien élève",
      nom: "Riwal Le Meur, promotion 2009",
      citation:
        "Je traduis des grimoires que personne n’avait ouverts depuis huit siècles. Le professeur Augure m’avait prédit ce métier dès ma première semaine. J’avais trouvé ça prétentieux. Il avait raison, évidemment.",
    },
  },
  {
    cle: "lancelot",
    slug: "faculte-lancelot",
    nom: "Faculté de Lancelot",
    domaine: "Chevalerie et Défense",
    figure: "Lancelot du Lac",
    reflet: "or soleil",
    symbole: "ecu",
    accroche: "Le courage s’apprend, la loyauté se prouve.",
    resume:
      "Courage, loyauté, maîtrise de soi. Duels encadrés, défense, et une spécialité unique en France : la protection du secret magique.",
    introduction:
      "Élevé par la Dame du Lac, Lancelot devint le plus grand chevalier de son temps. Sa faculté forme les défenseurs du monde magique et, spécialité unique en France, les gardiens du secret qui le sépare des Moldus.",
    doyen: {
      titre: "Doyenne",
      nom: "Professeure Myriam Nicolagan",
      portrait: "Elle exige qu’on la salue avant chaque duel, et qu’on la remercie après chaque défaite.",
    },
    qualites: [
      ["Courage", "faire face quand d’autres reculent"],
      ["Loyauté", "protéger les siens et le monde magique"],
      ["Sang-froid", "garder la maîtrise sous la pression"],
    ],
    domaines: [
      ["Défense contre le mal", "neutraliser maléfices et créatures hostiles"],
      ["Duel et stratégie", "anticiper, parer, riposter"],
      ["Secret magique", "vivre parmi les Moldus sans se trahir"],
    ],
    parcours: [
      "Défense contre les maléfices",
      "Duel et stratégie",
      "Protection du secret magique (formation des futurs agents de liaison avec le monde moldu)",
    ],
    programme: [
      PRISME,
      ["2<sup>e</sup> année", "Défense contre le mal ; sortilèges et contre-sorts avec le professeur Malsort ; premiers duels encadrés."],
      ["3<sup>e</sup> année (Licence)", "Stratégie et duel avancé ; neutralisation de maléfices ; immersion d’un mois dans une ville moldue."],
      ["Master 1", "Choix du parcours : Défense contre les maléfices, Duel et stratégie ou Protection du secret magique."],
      ["Master 2", "Stage de six mois au ministère de la Magie ou dans un service de sécurité magique."],
    ],
    debouches: "auror, garde de sécurité magique, agent de liaison avec les Moldus, instructeur de duel.",
    debouchesCourts: "auror, garde de sécurité magique, agent de liaison avec les Moldus.",
    portrait: {
      titre: "Portrait d’ancien élève",
      nom: "Kevin Tanguy, promotion 2017",
      citation:
        "Je suis agent de liaison à Rennes. Mon travail consiste à expliquer aux Moldus qu’ils n’ont rien vu. La professeure Nicolagan disait qu’un bon défenseur gagne ses combats avant qu’ils commencent. Je n’ai jamais eu à sortir ma baguette en public.",
    },
  },
];
