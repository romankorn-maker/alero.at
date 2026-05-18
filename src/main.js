import './styles.css';

const products = [
  {
    title: 'Tiefkühlprodukte',
    text: 'Gefrorene Lebensmittel für Gastronomie, Catering und Grosskunden.',
    image: '/assets/frozen-products-small.jpg',
    tone: 'bg-sky-50',
  },
  {
    title: 'Lebensmittel',
    text: 'Trockenwaren, Konserven und Zutaten für professionelle Küchen.',
    image: '/assets/bag-small.avif',
    tone: 'bg-lime-50',
  },
  {
    title: 'Sonnenblumenöl & Olivenöl',
    text: 'Speiseöle in praktischen Gebindegrössen für den täglichen Bedarf.',
    image: '/assets/paper-flat-small.avif',
    tone: 'bg-amber-50',
  },
  {
    title: 'Grillen',
    text: 'Brennholz, Holzkohle und saisonales Zubehör für Gastronomie.',
    image: '/assets/flat-bag-small.avif',
    tone: 'bg-orange-50',
  },
  {
    title: 'Aluminium Verpackung',
    text: 'Schalen, Deckel und Formate für Küche, Lieferung und Ausgabe.',
    image: '/assets/konditorei-small.avif',
    tone: 'bg-violet-50',
  },
  {
    title: 'Verpackung',
    text: 'Folien, Boxen und Einwegbehälter für reibungslose Abläufe.',
    image: '/assets/obst-bag-small.avif',
    tone: 'bg-emerald-50',
  },
  {
    title: 'Tragetaschen & Papiertaschen',
    text: 'Standardtaschen und individuelle Lösungen mit Logo auf Anfrage.',
    image: '/assets/paper-kordel-small.avif',
    tone: 'bg-stone-50',
  },
  {
    title: 'Hygiene & Reinigung',
    text: 'Reinigungsmittel für Küche, Sanitär, Lager und Gastraum.',
    image: '/assets/paper-obst-small.avif',
    tone: 'bg-cyan-50',
  },
];

const news = [
  {
    type: 'Aktion',
    date: 'Mai 2026',
    title: 'Tiefkühlprodukte bis -20%: Aktionspreise für Gastronomie',
    image: '/assets/frozen-products-small.jpg',
  },
  {
    type: 'Sortiment',
    date: 'April 2026',
    title: 'Neue Verpackungslösungen für Take-away und Lieferung',
    image: '/assets/bag-small.avif',
  },
  {
    type: 'Tipps',
    date: 'März 2026',
    title: 'So bleibt der Einkauf planbar: Bestellen mit der Alero App',
    image: '/assets/konditorei-small.avif',
  },
];

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-alero-paper text-alero-ink">
    <div class="bg-alero-cream text-xs text-alero-muted">
      <div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a class="top-link" href="tel:+4317489520">+43 1 7489520</a>
          <a class="top-link" href="mailto:office@alero.at">office@alero.at</a>
          <span>Dassanowskyweg 16a, 1220 Wien</span>
        </div>
        <div>Mo-Do 8:00-17:00 · Fr 8:00-16:00</div>
      </div>
    </div>

    <header class="sticky top-0 z-30 border-b border-white/10 bg-alero-dark/95 backdrop-blur">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8" aria-label="Hauptnavigation">
        <a href="/" class="flex items-center gap-3" aria-label="Alero Startseite">
          <img class="h-10 w-auto" src="/assets/alero-logo-white.png" alt="Alero" />
        </a>
        <div class="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
          <a class="nav-link active" href="/">Startseite</a>
          <a class="nav-link" href="/ueber-uns.html">Über uns</a>
          <a class="nav-link" href="/produkte.html">Produkte</a>
          <a class="nav-link" href="/aktuelles.html">Aktionen</a>
          <a class="nav-link" href="/kontakt.html">Kontakt</a>
        </div>
        <a class="hidden rounded-md bg-alero-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-alero-gold-dark sm:inline-flex" href="#app">
          App ansehen
        </a>
      </nav>
    </header>

    <main>
      <section class="relative isolate overflow-hidden bg-alero-dark">
        <div class="absolute inset-0 opacity-35">
          <img class="h-full w-full object-cover" src="/assets/frozen-products-small.jpg" alt="" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-alero-dark via-alero-dark/92 to-alero-dark/45"></div>
        <div class="absolute right-6 top-10 hidden font-display text-[10rem] font-bold leading-none text-alero-gold/10 lg:block">-20%</div>

        <div class="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div class="max-w-2xl">
            <div class="mb-6 flex gap-2" aria-label="Aktuelle Slider Position">
              <span class="h-1 w-16 rounded-full bg-alero-gold"></span>
              <span class="h-1 w-10 rounded-full bg-white/20"></span>
              <span class="h-1 w-10 rounded-full bg-white/20"></span>
            </div>
            <p class="mb-5 inline-flex rounded bg-alero-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Frühlingsangebot · nur für kurze Zeit
            </p>
            <h1 class="font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Tiefkühlprodukte bis -20% günstiger
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Alero beliefert Restaurants, Catering-Betriebe und Händler in Wien mit Lebensmitteln, Verpackung und Hygieneartikeln. Bestellungen laufen schnell und übersichtlich über die Alero App.
            </p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a class="btn-primary" href="#app">Jetzt in der App ansehen</a>
              <a class="btn-secondary" href="#sortiment">Sortiment entdecken</a>
            </div>
          </div>

          <div class="relative hidden items-end justify-center lg:flex">
            <div class="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <img class="h-[420px] w-[440px] rounded-xl object-cover" src="/assets/frozen-products-small.jpg" alt="Tiefkühlprodukte von Alero" />
            </div>
          </div>
        </div>
      </section>

      <section id="sortiment" class="section bg-white">
        <div class="section-heading">
          <p class="eyebrow">Produkte</p>
          <h2 class="section-title">Unser Sortiment</h2>
          <p class="section-subtitle">Der vollständige Katalog mit Preisen und Bestellfunktion liegt in der Alero App. Die Website zeigt die wichtigsten Produktbereiche.</p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          ${products
            .map(
              (product) => `
                <article class="group overflow-hidden rounded-lg border border-alero-line bg-white transition hover:-translate-y-1 hover:border-alero-gold/50 hover:shadow-xl">
                  <div class="${product.tone} relative h-36 overflow-hidden">
                    <img class="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105" src="${product.image}" alt="${product.title}" />
                  </div>
                  <div class="p-5">
                    <h3 class="font-display text-xl font-bold leading-tight text-alero-dark">${product.title}</h3>
                    <p class="mt-3 text-sm leading-6 text-alero-muted">${product.text}</p>
                    <a class="mt-4 inline-flex text-sm font-semibold text-alero-gold" href="/produkte.html">Mehr erfahren</a>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section bg-alero-cream">
        <div class="grid items-center gap-10 lg:grid-cols-2">
          <div class="relative overflow-hidden rounded-lg">
            <img class="h-[360px] w-full object-cover" src="/assets/paper-kordel-small.avif" alt="Alero Verpackung und Tragetaschen" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-alero-dark/80 to-transparent p-6 text-white">
              <p class="text-sm font-semibold">Lebensmittel, Verpackung und Lieferung aus einer Hand</p>
            </div>
          </div>
          <div>
            <p class="eyebrow">Über Alero · Wien seit 2005</p>
            <h2 class="section-title text-left">Ihr zuverlässiger Partner für Lebensmittel & Verpackung</h2>
            <p class="mt-5 text-base leading-8 text-alero-muted">
              Alero Handels GmbH beliefert seit über 20 Jahren Restaurants, Catering-Betriebe und Einzelhändler in Wien. Eigenes Lager, schnelle Lieferung und persönliche Ansprechpartner machen den Einkauf planbar.
            </p>
            <div class="mt-7 space-y-4">
              <div class="feature-row"><span></span><p><strong>Eigenes Zentrallager</strong> am Dassanowskyweg 16a, 1220 Wien</p></div>
              <div class="feature-row"><span></span><p><strong>Lieferung innerhalb 24h</strong> nach Bestellung in der App</p></div>
              <div class="feature-row"><span></span><p><strong>B2B-Fokus</strong> für Restaurants, Hotels, Catering und Handel</p></div>
            </div>
            <div class="mt-8 grid grid-cols-3 gap-4 border-t border-alero-line pt-6">
              <div><strong class="stat">20+</strong><span>Jahre Erfahrung</span></div>
              <div><strong class="stat">200+</strong><span>Kunden in Wien</span></div>
              <div><strong class="stat">8</strong><span>Produktbereiche</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="border-y border-alero-line bg-white py-8">
        <div class="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:flex-row sm:items-center lg:px-8">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-alero-muted">Unsere Partner</p>
          <div class="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-5">
            ${['Metro', 'Gastro', 'Foodservice', 'Packaging', 'Logistik']
              .map((name) => `<div class="rounded-md border border-dashed border-alero-line bg-alero-paper px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-alero-muted">${name}</div>`)
              .join('')}
          </div>
        </div>
      </section>

      <section class="section bg-alero-dark text-white">
        <div class="section-heading">
          <p class="eyebrow text-alero-gold">Referenzen</p>
          <h2 class="section-title text-white">Was unsere Kunden sagen</h2>
          <p class="section-subtitle text-white/55">Stimmen von Gastronomie- und Catering-Kunden aus Wien.</p>
        </div>
        <div class="grid gap-5 lg:grid-cols-2">
          <article class="review-card">
            <div class="text-alero-gold">★★★★★</div>
            <p>"Wir arbeiten seit Jahren mit Alero. Zuverlässige Lieferungen, klare Kommunikation und die App macht das Bestellen wirklich einfach."</p>
            <div><strong>Michael K.</strong><span>Restaurant Zur Linde, Wien</span></div>
          </article>
          <article class="review-card">
            <div class="text-alero-gold">★★★★★</div>
            <p>"Kein Stress, kein Hin und Her. Wir bestellen in der App, am nächsten Tag ist alles da. Genau so muss B2B-Einkauf funktionieren."</p>
            <div><strong>Anna S.</strong><span>Catering Service Wien GmbH</span></div>
          </article>
        </div>
      </section>

      <section class="section bg-white">
        <div class="section-heading">
          <p class="eyebrow">Team</p>
          <h2 class="section-title">Ihre Ansprechpartner</h2>
          <p class="section-subtitle">Kurze Wege, klare Zuständigkeiten und persönliche Betreuung.</p>
        </div>
        <div class="grid gap-5 md:grid-cols-3">
          ${[
            ['MH', 'Michael H.', 'Geschäftsführer'],
            ['AK', 'Anna K.', 'Kundenbetreuung'],
            ['TW', 'Thomas W.', 'Logistik & Lager'],
          ]
            .map(
              ([initials, name, role]) => `
                <article class="rounded-lg border border-alero-line bg-white p-6 text-center">
                  <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-alero-cream font-display text-xl font-bold text-alero-gold">${initials}</div>
                  <h3 class="mt-4 font-semibold text-alero-dark">${name}</h3>
                  <p class="mt-1 text-sm text-alero-muted">${role}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section bg-alero-cream">
        <div class="section-heading">
          <p class="eyebrow">Aktuelles</p>
          <h2 class="section-title">Aktionen & Neuigkeiten</h2>
          <p class="section-subtitle">Sonderangebote, neue Produkte und nützliche Hinweise für Ihren Betrieb.</p>
        </div>
        <div class="grid gap-5 md:grid-cols-3">
          ${news
            .map(
              (item) => `
                <article class="overflow-hidden rounded-lg border border-alero-line bg-white">
                  <div class="relative h-44 overflow-hidden bg-white">
                    <img class="h-full w-full object-cover" src="${item.image}" alt="${item.title}" />
                    <span class="absolute left-3 top-3 rounded bg-alero-gold px-2.5 py-1 text-xs font-semibold uppercase text-white">${item.type}</span>
                  </div>
                  <div class="p-5">
                    <p class="text-xs font-medium uppercase tracking-wide text-alero-muted">${item.date}</p>
                    <h3 class="mt-2 font-display text-xl font-bold leading-tight text-alero-dark">${item.title}</h3>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section id="app" class="bg-alero-gold">
        <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Alero Mobile App</p>
            <h2 class="mt-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">Bestellen Sie in wenigen Klicks</h2>
            <p class="mt-5 max-w-2xl text-base leading-8 text-white/80">Vollständiger Katalog, Bestellhistorie und direkte Nachbestellung. Die Website bringt neue Kunden zur App, die App übernimmt den Alltag.</p>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row">
              <a class="app-button" href="#">App Store</a>
              <a class="app-button" href="#">Google Play</a>
            </div>
          </div>
          <div class="flex justify-center gap-4">
            <div class="phone rotate-[-5deg] opacity-70"><span>ALERO</span></div>
            <div class="phone rotate-[3deg]"><span>APP</span></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#111] text-white">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <img class="h-10 w-auto" src="/assets/alero-logo-white.png" alt="Alero" />
          <p class="mt-5 text-sm leading-7 text-white/55">
            Alero Handels GmbH<br />
            Dassanowskyweg 16a, 1220 Wien<br />
            <a class="text-alero-gold" href="tel:+4317489520">+43 1 7489520</a><br />
            <a class="text-alero-gold" href="mailto:office@alero.at">office@alero.at</a>
          </p>
        </div>
        <div>
          <h3 class="font-semibold">Navigation</h3>
          <ul class="mt-4 space-y-2 text-sm text-white/50">
            <li><a href="/">Startseite</a></li>
            <li><a href="/ueber-uns.html">Über uns</a></li>
            <li><a href="/produkte.html">Produkte</a></li>
            <li><a href="/aktuelles.html">Aktionen</a></li>
            <li><a href="/kontakt.html">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold">App herunterladen</h3>
          <div class="mt-4 space-y-2">
            <a class="footer-store" href="#">App Store (iOS)</a>
            <a class="footer-store" href="#">Google Play (Android)</a>
          </div>
        </div>
      </div>
      <div class="border-t border-white/10 px-4 py-4">
        <div class="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span class="font-display text-base font-bold text-alero-gold">ALERO</span>
          <span>© 2026 Alero Handels GmbH · Impressum · Datenschutzerklärung</span>
        </div>
      </div>
    </footer>
  </div>
`;
