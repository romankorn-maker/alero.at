// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for product categories.
// Verified against the live alero.at catalog (Drupal Commerce product_collections).
// Used by: /produkte, /produkte/[slug], and the homepage ProductGrid.
// ─────────────────────────────────────────────────────────────────────────

export interface Category {
  slug: string;
  number: string; // display number on the card (01–08)
  name: string;
  short: string; // one-line teaser for the card
  description: string; // longer intro for the category page
  icon: 'snow' | 'can' | 'oil' | 'fire' | 'alu' | 'box' | 'bag' | 'hygiene';
  iconBg: string; // tailwind gradient classes for the icon tile
  highlight?: boolean; // visually emphasized card (e.g. Eigenmarke)
  badge?: string; // small ribbon label
  examples: string[]; // sample products shown on the category page
  benefits: string[]; // "what's included" bullet points
}

// FAQ shared across all category pages (B2B + SEO)
export const categoryFaq: { q: string; a: string }[] = [
  {
    q: 'Wie bestelle ich Produkte aus dieser Kategorie?',
    a: 'Alle Bestellungen erfolgen über die Alero App für iOS oder Android. Nach der Registrierung als Geschäftskunde haben Sie Zugang zum vollständigen Katalog mit aktuellen Preisen und Verfügbarkeiten.',
  },
  {
    q: 'Wie schnell wird geliefert?',
    a: 'In der Regel innerhalb von 24 Stunden nach Bestellung. Wir konfektionieren im eigenen Zentrallager in 1220 Wien und liefern in Wien und Umgebung.',
  },
  {
    q: 'Beliefern Sie auch Privatkunden?',
    a: 'Nein, wir arbeiten ausschließlich mit gewerblichen Kunden: Restaurants, Catering-Betriebe, Hotels, Imbisse und Einzelhändler.',
  },
  {
    q: 'Gibt es Mindestbestellmengen?',
    a: 'Die Konditionen besprechen wir individuell. Nehmen Sie kurz Kontakt mit uns auf — wir finden die passende Lösung für Ihren Betrieb.',
  },
];

export const categories: Category[] = [
  {
    slug: 'tiefkuehlprodukte',
    number: '01',
    name: 'Tiefkühlprodukte',
    short: 'McCain Pommes, Nuggets, Wedges, Mozzarella Sticks — friteusenfertige Klassiker.',
    description:
      'Fleisch, Gemüse und Fertiggerichte aus der Tiefkühlung — breites Sortiment mit stabiler Verfügbarkeit. Tiefkühl-Klassiker namhafter Marken sowie panierte Snacks für Imbiss und Gastronomie.',
    icon: 'snow',
    iconBg: 'from-[#dbecfb] to-[#c8e0f5]',
    examples: ['McCain SureCrisp Pommes', 'Chicken Nuggets', 'Wedges', 'Onion Rings', 'Breaded Mozzarella Sticks'],
    benefits: ['Durchgehende Kühlkette vom Lager bis zur Lieferung', 'Markenware und Eigenmarken in Profimengen', 'Stabile Verfügbarkeit, saisonunabhängig'],
  },
  {
    slug: 'lebensmittel',
    number: '02',
    name: 'Lebensmittel',
    short: 'Konserven, Saucen, Gewürze und Trockenwaren für Profiküchen.',
    description:
      'Trockenwaren, Konserven und Gewürze für den täglichen Küchenbedarf. Vom Ajvar über Gewürze bis zu Spezialitäten — verlässlich in Profimengen.',
    icon: 'can',
    iconBg: 'from-[#eaf3de] to-[#d8e8c4]',
    examples: ['Ajvar mild', 'Basilikum gerebelt', 'Gewürze', 'Konserven', 'Trockenwaren'],
    benefits: ['Konserven, Saucen und Gewürze in Großgebinden', 'Lange Haltbarkeit, planbare Vorratshaltung', 'Spezialitäten auf Anfrage'],
  },
  {
    slug: 'oel',
    number: '03',
    name: 'Sonnenblumenöl & Olivenöl',
    short: 'Eigenmarke alero — in 1 L, 5 L und 10 L Gebinden für Küche und Handel.',
    description:
      'Sonnenblumenöl unter unserer eigenen Marke alero sowie Olivenöl — in verschiedenen Gebindegrössen für Profiküchen und Einzelhandel.',
    icon: 'oil',
    iconBg: 'from-cream to-[#f3dcb5]',
    highlight: true,
    badge: 'Eigenmarke',
    examples: ['alero Sonnenblumenöl 1 L', 'alero Sonnenblumenöl 5 L', 'alero Sonnenblumenöl 10 L', 'Olivenöl'],
    benefits: ['Eigenmarke alero — gleichbleibende Qualität', 'Gebinde von 1 L bis 10 L', 'Für Friteuse, Küche und Wiederverkauf'],
  },
  {
    slug: 'grillen',
    number: '04',
    name: 'Grillen',
    short: 'Brennholz, Holzkohle und Zubehör — saisonal und ganzjährig.',
    description:
      'Brennholz, Holzkohle und Grillzubehör für Gastronomie und Handel. Restaurant-Holzkohle und Buchen-Brennholz, ganzjährig verfügbar.',
    icon: 'fire',
    iconBg: 'from-[#faece7] to-[#f3d4c8]',
    examples: ['Brennholz Buche 33 cm', 'Restaurant-Holzkohle', 'Grillzubehör'],
    benefits: ['Restaurant-Holzkohle und Buchen-Brennholz', 'Ganzjährige Verfügbarkeit', 'Zubehör für den Grillbetrieb'],
  },
  {
    slug: 'aluminium-verpackung',
    number: '05',
    name: 'Aluminium Verpackung',
    short: 'Aluschalen, Servierplatten und Alufolie in vielen Formaten.',
    description:
      'Schalen, Deckel, Servierplatten und Folie aus Aluminium — in zahlreichen Formaten für Gastronomie, Catering und Take-away.',
    icon: 'alu',
    iconBg: 'from-[#e8e8e8] to-[#cfcfcf]',
    examples: ['Aluschalen R15 – R98', 'Alu Servierplatten', 'Aluminiumfolie 30 / 45 cm'],
    benefits: ['Aluschalen in über einem Dutzend Formaten', 'Servierplatten und Folie', 'Passende Deckel zu allen Schalen'],
  },
  {
    slug: 'verpackung',
    number: '06',
    name: 'Verpackung',
    short: 'Boxen, Folien, Einwegbehälter und Müllbeutel für Küche und Ausgabe.',
    description:
      'Folien, Boxen, Einwegbehälter und Beutel für Küche und Ausgabe. Vom Take-away-Behälter bis zum BIO-Müllbeutel — alles für den laufenden Betrieb.',
    icon: 'box',
    iconBg: 'from-[#eeedfe] to-[#dbd9f5]',
    examples: ['Take-away Boxen', 'BIO Beutel 45 / 60 / 70 L', 'Blockbodenbeutel', 'Frischhaltefolie'],
    benefits: ['Take-away-Behälter und Einwegverpackung', 'BIO-Müllbeutel in mehreren Größen', 'Folien und Beutel für Küche und Ausgabe'],
  },
  {
    slug: 'tragetaschen',
    number: '07',
    name: 'Tragetaschen & Papiertaschen',
    short: 'Standard und mit individuellem Logo auf Anfrage.',
    description:
      'Tragetaschen und Papiertragetaschen für den Verkauf und das Take-away-Geschäft — als Standardware oder individuell mit Ihrem Logo.',
    icon: 'bag',
    iconBg: 'from-cream to-[#f3dcb5]',
    examples: ['Papiertragetaschen', 'Kunststoff-Tragetaschen', 'Individueller Logodruck'],
    benefits: ['Papier- und Kunststoff-Tragetaschen', 'Individueller Logodruck auf Anfrage', 'Standardware ab Lager verfügbar'],
  },
  {
    slug: 'hygiene-reinigung',
    number: '08',
    name: 'Hygiene & Reinigung',
    short: 'Reinigungsmittel und Hygieneartikel für Küche, Sanitär und Gastraum.',
    description:
      'Reinigungsmittel und Hygieneartikel für Küche, Sanitär und Gastraum — vom Bodenreiniger bis zur Einweg-Kopfbedeckung.',
    icon: 'hygiene',
    iconBg: 'from-[#e1f5ee] to-[#c8ead9]',
    examples: ['Abwaschmittel Citrus Power 10 L', 'Bodenreiniger 10 L', 'Baretthauben', 'Hygieneartikel'],
    benefits: ['Reiniger für Küche, Boden und Sanitär', 'Hygieneartikel für den Gastraum', 'Großgebinde für den Dauerbedarf'],
  },
];

export const getCategory = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
