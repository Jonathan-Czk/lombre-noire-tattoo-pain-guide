export type ZoneId =
  | 'tete' | 'cou' | 'epaule'
  | 'bras_ext' | 'bras_int'
  | 'avantbras_ext' | 'avantbras_int'
  | 'main' | 'doigts'
  | 'poitrine' | 'sternum' | 'cotes' | 'ventre'
  | 'dos' | 'colonne' | 'lombaires'
  | 'hanches' | 'fesses'
  | 'cuisse_ext' | 'cuisse_int'
  | 'genou' | 'mollet' | 'tibia'
  | 'cheville' | 'pied';

export interface ZoneInfo {
  nom: string;
  douleur: number;
  duree: string;
  description: string;
  lien?: string;
  lienLabel?: string;
}

export const ZONES: Record<ZoneId, ZoneInfo> = {
  tete: {
    nom: 'Tête',
    douleur: 6,
    duree: '2–4 heures',
    description: 'Zone modérément douloureuse. La peau du crâne est fine et proche de l\'os. Le front et les tempes sont particulièrement sensibles aux vibrations de l\'aiguille.',
  },
  cou: {
    nom: 'Cou',
    douleur: 7,
    duree: '1–3 heures',
    description: 'Zone sensible traversée de nombreuses terminaisons nerveuses. La face antérieure est plus éprouvante que la nuque. Le mouvement doit être précis et maîtrisé.',
    lien: '/tatouage-cou',
    lienLabel: 'Tatouage cou',
  },
  epaule: {
    nom: 'Épaule',
    douleur: 5,
    duree: '2–5 heures',
    description: 'Zone relativement accessible, bien adaptée aux grands formats. Le muscle deltoïde offre une surface généreuse qui absorbe bien les vibrations.',
    lien: '/tatouage-bras',
    lienLabel: 'Tatouage bras',
  },
  bras_ext: {
    nom: 'Bras extérieur',
    douleur: 3,
    duree: '2–4 heures',
    description: 'L\'une des zones les plus accessibles pour débuter. La chair musclée du biceps et du triceps offre une excellente prise pour le travail en noir et gris réaliste.',
    lien: '/tatouage-bras',
    lienLabel: 'Tatouage bras',
  },
  bras_int: {
    nom: 'Bras intérieur',
    douleur: 7,
    duree: '2–4 heures',
    description: 'La face interne du bras présente une peau fine et très sensible, proche des veines et des nerfs. Cette zone exige une grande concentration de la part de l\'artiste.',
    lien: '/tatouage-bras',
    lienLabel: 'Tatouage bras',
  },
  avantbras_ext: {
    nom: 'Avant-bras extérieur',
    douleur: 3,
    duree: '2–4 heures',
    description: 'Zone idéale pour les grandes compositions réalistes. La peau de l\'avant-bras extérieur est robuste, bien tendue et parfaitement adaptée au travail en nuances de gris.',
    lien: '/tatouage-avant-bras',
    lienLabel: 'Tatouage avant-bras',
  },
  avantbras_int: {
    nom: 'Avant-bras intérieur',
    douleur: 6,
    duree: '2–4 heures',
    description: 'Zone plus sensible que la face externe. La peau fine laisse transparaître les veines et les tendons. Visuellement saisissante, mais plus éprouvante à l\'encrage.',
    lien: '/tatouage-avant-bras',
    lienLabel: 'Tatouage avant-bras',
  },
  main: {
    nom: 'Main',
    douleur: 8,
    duree: '3–5 heures',
    description: 'Zone hautement sensible. Nombreux os, tendons et terminaisons nerveuses affleurent la surface. L\'encre peut également s\'estomper plus rapidement dans cette zone exposée.',
    lien: '/tatouage-main',
    lienLabel: 'Tatouage main',
  },
  doigts: {
    nom: 'Doigts',
    douleur: 9,
    duree: '1–2 heures',
    description: 'Parmi les zones les plus éprouvantes. Peau extrêmement fine directement posée sur les os et les articulations. Des retouches sont souvent nécessaires dans les premières années.',
    lien: '/tatouage-main',
    lienLabel: 'Tatouage main',
  },
  poitrine: {
    nom: 'Poitrine',
    douleur: 6,
    duree: '3–6 heures',
    description: 'Zone de douleur variable selon la morphologie. Les parties charnues restent accessibles, mais la proximité du sternum et des côtes amplifie nettement la sensation.',
    lien: '/tatouage-poitrine',
    lienLabel: 'Tatouage poitrine',
  },
  sternum: {
    nom: 'Sternum',
    douleur: 9,
    duree: '2–4 heures',
    description: 'Zone d\'une intensité extrême. L\'os du sternum conduit les vibrations directement dans la cage thoracique. Réservée aux personnes expérimentées et déterminées.',
    lien: '/tatouage-poitrine',
    lienLabel: 'Tatouage poitrine',
  },
  cotes: {
    nom: 'Côtes',
    douleur: 9,
    duree: '3–6 heures',
    description: 'Zone réputée pour son intensité. La peau fine tendue sur les os des côtes, combinée au mouvement permanent de la respiration, rend chaque séance particulièrement éprouvante.',
    lien: '/tatouage-cotes',
    lienLabel: 'Tatouage côtes',
  },
  ventre: {
    nom: 'Ventre',
    douleur: 7,
    duree: '3–5 heures',
    description: 'Zone de douleur modérée à élevée. La peau abdominale est sensible et se déplace avec la respiration. Le bas-ventre et le contour du nombril sont particulièrement délicats.',
  },
  dos: {
    nom: 'Dos',
    douleur: 4,
    duree: '4–8 heures',
    description: 'L\'une des zones les plus confortables pour les grandes pièces. La vaste surface musculaire permet de longues séances soutenues avec une douleur généralement bien maîtrisée.',
    lien: '/tatouage-dos',
    lienLabel: 'Tatouage dos',
  },
  colonne: {
    nom: 'Colonne vertébrale',
    douleur: 9,
    duree: '3–6 heures',
    description: 'Sensibilité extrême. L\'aiguille travaille directement sur les apophyses des vertèbres, générant une douleur profonde et irradiante. Uniquement pour les pratiquants aguerris.',
    lien: '/tatouage-dos',
    lienLabel: 'Tatouage dos',
  },
  lombaires: {
    nom: 'Lombaires',
    douleur: 7,
    duree: '2–4 heures',
    description: 'Le bas du dos est traversé par les nerfs lombaires — chaque passage de l\'aiguille se répercute dans le bas du corps. Zone demandant une grande endurance.',
    lien: '/tatouage-dos',
    lienLabel: 'Tatouage dos',
  },
  hanches: {
    nom: 'Hanches',
    douleur: 6,
    duree: '2–4 heures',
    description: 'Douleur variable selon l\'emplacement précis. La crête iliaque est particulièrement sensible. Le galbe naturel de la hanche offre de belles perspectives pour les compositions courbes.',
  },
  fesses: {
    nom: 'Fesses',
    douleur: 3,
    duree: '3–5 heures',
    description: 'Contrairement aux idées reçues, cette zone est relativement confortable. La masse musculaire et adipeuse amortit considérablement les vibrations de l\'aiguille.',
  },
  cuisse_ext: {
    nom: 'Cuisse extérieure',
    douleur: 4,
    duree: '3–5 heures',
    description: 'Zone bien tolérée par la majorité des porteurs. La vaste surface musculaire est idéale pour les grands formats réalistes en noir et gris avec de nombreux niveaux de détail.',
    lien: '/tatouage-cuisse',
    lienLabel: 'Tatouage cuisse',
  },
  cuisse_int: {
    nom: 'Cuisse intérieure',
    douleur: 8,
    duree: '3–5 heures',
    description: 'Zone très sensible. La peau fine de la face interne et la proximité des vaisseaux sanguins et des nerfs en font une zone redoutée, même des pratiquants expérimentés.',
    lien: '/tatouage-cuisse',
    lienLabel: 'Tatouage cuisse',
  },
  genou: {
    nom: 'Genou',
    douleur: 8,
    duree: '2–4 heures',
    description: 'Zone fortement déconseillée aux néophytes. La rotule, les ligaments et le creux poplité génèrent une douleur intense et difficile à anticiper. La cicatrisation demande une attention particulière.',
    lien: '/tatouage-jambe',
    lienLabel: 'Tatouage jambe',
  },
  mollet: {
    nom: 'Mollet',
    douleur: 5,
    duree: '2–4 heures',
    description: 'Zone de douleur modérée, appréciée pour les manchettes et les compositions verticales. Le muscle bien développé du mollet aide à supporter la durée de la séance.',
    lien: '/tatouage-jambe',
    lienLabel: 'Tatouage jambe',
  },
  tibia: {
    nom: 'Tibia',
    douleur: 8,
    duree: '2–4 heures',
    description: 'Zone particulièrement intense. L\'os du tibia, immédiatement sous la peau, conduit chaque vibration sans aucun amorti musculaire. L\'une des zones les plus redoutées du corps.',
    lien: '/tatouage-jambe',
    lienLabel: 'Tatouage jambe',
  },
  cheville: {
    nom: 'Cheville',
    douleur: 8,
    duree: '1–3 heures',
    description: 'Zone dense en os et en tendons, avec une peau particulièrement fine. La malléole est sujette à un gonflement post-séance. La cicatrisation requiert des soins attentifs.',
    lien: '/tatouage-pied',
    lienLabel: 'Tatouage pied',
  },
  pied: {
    nom: 'Pied',
    douleur: 8,
    duree: '2–4 heures',
    description: 'Zone complexe et sensible. La multitude de petits os, les tendons affleurant et la peau fine en font un terrain exigeant. L\'encre s\'estompe généralement plus rapidement dans cette zone.',
    lien: '/tatouage-pied',
    lienLabel: 'Tatouage pied',
  },
};

export const PATH_TO_ZONE: Record<string, ZoneId> = {
  tete: 'tete',
  cou: 'cou',
  epaule_g: 'epaule',
  epaule_d: 'epaule',
  poitrine_g: 'poitrine',
  poitrine_d: 'poitrine',
  sternum: 'sternum',
  cotes_g: 'cotes',
  cotes_d: 'cotes',
  ventre: 'ventre',
  dos_g: 'dos',
  dos_d: 'dos',
  colonne: 'colonne',
  lombaires: 'lombaires',
  hanches_g: 'hanches',
  hanches_d: 'hanches',
  fesses_g: 'fesses',
  fesses_d: 'fesses',
  bras_ext_g: 'bras_ext',
  bras_ext_d: 'bras_ext',
  bras_int_g: 'bras_int',
  bras_int_d: 'bras_int',
  avantbras_ext_g: 'avantbras_ext',
  avantbras_ext_d: 'avantbras_ext',
  avantbras_int_g: 'avantbras_int',
  avantbras_int_d: 'avantbras_int',
  main_g: 'main',
  main_d: 'main',
  doigts_g: 'doigts',
  doigts_d: 'doigts',
  cuisse_ext_g: 'cuisse_ext',
  cuisse_ext_d: 'cuisse_ext',
  cuisse_int_g: 'cuisse_int',
  cuisse_int_d: 'cuisse_int',
  genou_g: 'genou',
  genou_d: 'genou',
  mollet_g: 'mollet',
  mollet_d: 'mollet',
  tibia_g: 'tibia',
  tibia_d: 'tibia',
  cheville_g: 'cheville',
  cheville_d: 'cheville',
  pied_g: 'pied',
  pied_d: 'pied',
};

export function getPainColors(level: number, hovered: boolean) {
  if (level <= 3) {
    return {
      fill: hovered ? '#a8d4de' : '#bee4ec',
      stroke: hovered ? '#3a8a9a' : '#5aaabb',
      strokeWidth: hovered ? 1.5 : 0.8,
      hatchId: null,
    };
  }
  if (level <= 6) {
    return {
      fill: hovered ? '#3a8a9a' : '#4e9dac',
      stroke: hovered ? '#1a6a7a' : '#2a7a8a',
      strokeWidth: hovered ? 1.5 : 0.8,
      hatchId: 'hatch-med',
    };
  }
  if (level <= 8) {
    return {
      fill: hovered ? '#145060' : '#1e6070',
      stroke: hovered ? '#0a3040' : '#124050',
      strokeWidth: hovered ? 1.8 : 1.0,
      hatchId: 'hatch-dark',
    };
  }
  return {
    fill: hovered ? '#081820' : '#0e2830',
    stroke: hovered ? '#040c10' : '#081418',
    strokeWidth: hovered ? 2.0 : 1.2,
    hatchId: 'hatch-xdark',
  };
}

export const PAIN_LABELS: Record<number, string> = {
  1: 'Très faible', 2: 'Très faible', 3: 'Faible',
  4: 'Modérée', 5: 'Modérée', 6: 'Modérée',
  7: 'Élevée', 8: 'Élevée',
  9: 'Très élevée', 10: 'Extrême',
};
