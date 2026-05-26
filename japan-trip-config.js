/**
 * JAPAN 2027 TRIP — CONFIG
 * ========================
 * Single source of truth for:
 *   - Trip metadata (dates, duration, airports)
 *   - City definitions (names, colors, days, transport, weather)
 *   - Crew identity (id, name, kanji, color, role, activity counts)
 *   - Budget totals and FX rate
 *   - Theme (colors, fonts)
 *   - Site settings (tabs, features, localStorage keys)
 *   - External links
 *
 * Last Updated: 2026-05-25
 * Version: 1.0
 * HTML File: japan-trip-2027-tabs.html
 *
 * DATA OWNERSHIP
 * ─────────────────────────────────────────────────────────────────
 * This file owns EVERYTHING below.
 * Other files MUST NOT redeclare city data, crew identity/colors,
 * budget totals, or FX rate. Reference SITE_CONFIG directly.
 *
 * Full crew profiles (bios, fitness, interests):  japan-trip-crew-data.js
 * Activity objects:                               japan-trip-activities-data.js
 * Day-by-day schedule:                            japan-trip-itinerary-data.js
 * Logistics ops (flights, booking timeline):      japan-trip-logistics.js
 * ─────────────────────────────────────────────────────────────────
 */

const SITE_CONFIG = {

  // ============================================================
  // TRIP METADATA
  // ============================================================
  trip: {
    title:    'Japan 2027',
    subtitle: '東京 · 京都 · 大阪',
    tagline:  'January 2027 · Group Trip',
    dates: {
      departure:    '2027-01-09',
      return:       '2027-01-24',
      durationDays: 16,
      year:         2027,
      month:        'January'
    },
    origin: {
      city:  'Charlotte',
      state: 'NC',
      iata:  'CLT'
    },
    airports: {
      arrivalPreferred: { iata: 'HND', name: 'Haneda',               transitToCenter: '~30 min' },
      arrivalAlternate: { iata: 'NRT', name: 'Narita',               transitToCenter: '60–90 min' },
      departure:        { iata: 'KIX', name: 'Kansai International', transitFromOsaka: '~50 min' }
    }
  },

  // ============================================================
  // CITIES — single source of truth for all city data
  // ============================================================
  // Used by: activities-data.js, crew-data.js, itinerary-data.js, logistics.js
  // DO NOT redeclare city properties in other files — look up via SITE_CONFIG.getCityById()
  cities: [
    {
      id:          'tokyo',
      name:        'Tokyo',
      kanji:       '東京',
      days:        7,
      nights:      7,
      dayRange:    'Days 1–7',
      dates:       'Jan 9–15',
      startDate:   '2027-01-09',
      endDate:     '2027-01-15',
      color:       '#c41e3a',
      transport:   'Suica IC Card',
      emoji:       '🗼',
      region:      'Kantō',
      coordinates: { lat: 35.6762, lng: 139.6503 },
      weather:     { tempC: '5–10', tempF: '41–50', notes: 'Dry and sunny most days, occasional overcast' },
      keyAreas:    ['Shinjuku', 'Harajuku', 'Akihabara', 'Shibuya', 'Shimokitazawa', 'Asakusa', 'Ueno']
    },
    {
      id:          'kyoto',
      name:        'Kyoto',
      kanji:       '京都',
      days:        5,
      nights:      5,
      dayRange:    'Days 8–12',
      dates:       'Jan 16–20',
      startDate:   '2027-01-16',
      endDate:     '2027-01-20',
      color:       '#d4af37',
      transport:   'City Bus + Walking',
      emoji:       '⛩️',
      region:      'Kansai',
      coordinates: { lat: 35.0116, lng: 135.7681 },
      weather:     { tempC: '3–9', tempF: '37–48', notes: 'Coldest city on the trip, occasional frost at dawn' },
      keyAreas:    ['Fushimi', 'Arashiyama', 'Higashiyama', 'Central', 'Gion', 'Northern Kyoto']
    },
    {
      id:          'osaka',
      name:        'Osaka',
      kanji:       '大阪',
      days:        3,
      nights:      3,
      dayRange:    'Days 13–15',
      dates:       'Jan 21–23',
      startDate:   '2027-01-21',
      endDate:     '2027-01-23',
      color:       '#ea8b37',
      transport:   'Osaka Metro',
      emoji:       '🏮',
      region:      'Kansai',
      coordinates: { lat: 34.6937, lng: 135.5023 },
      weather:     { tempC: '5–11', tempF: '41–52', notes: 'Slightly warmer than Kyoto, mix of sun and cloud' },
      keyAreas:    ['Dotonbori', 'Namba', 'Shinsekai', 'Umeda', 'Shinsaibashi']
    }
  ],

  // ============================================================
  // CREW — identity only (colors, roles, counts)
  // ============================================================
  // Full profiles (bios, interests, fitness, etc.) live in japan-trip-crew-data.js
  // DO NOT redeclare id/name/kanji/color/colorName in other files.
  // Reference via SITE_CONFIG.getCrewById() or SITE_CONFIG.crewColors
  crew: [
    {
      id:          'patrick',
      name:        'Patrick',
      kanji:       'パトリック',
      emoji:       '🎮',
      color:       '#c41e3a',
      colorName:   'deep red',
      role:        'Trip Organizer',
      japanExp:    'Veteran (3rd visit)',
      activityCount: { total: 25, tokyo: 19, kyoto: 0,  osaka: 5, flex: 1 },
      tags:        ['Organizer', 'Japan Vet', 'Anime', 'Gaming', 'Early Riser']
    },
    {
      id:          'jake',
      name:        'Jake',
      kanji:       'ジェイク',
      emoji:       '🍜',
      color:       '#3730a3',
      colorName:   'indigo',
      role:        'Main Vlogger & Foodie',
      japanExp:    'First timer',
      activityCount: { total: 21, tokyo: 5,  kyoto: 14, osaka: 2, flex: 0 },
      tags:        ['Vlogger', 'Foodie', 'Temples', 'Collecting', 'Early Riser']
    },
    {
      id:          'steve',
      name:        'Steve',
      kanji:       'スティーブ',
      emoji:       '🌙',
      color:       '#b45309',
      colorName:   'amber',
      role:        'Nightlife Lead',
      japanExp:    'First timer',
      activityCount: { total: 1,  tokyo: 1,  kyoto: 0,  osaka: 0, flex: 0 },
      tags:        ['Nightlife', 'Bars', 'Night Owl', 'Konbini']
    },
    {
      id:          'conner',
      name:        'Conner',
      kanji:       'コナー',
      emoji:       '☕',
      color:       '#2d6a4f',
      colorName:   'forest green',
      role:        'Culinary Scout',
      japanExp:    'First timer',
      activityCount: { total: 1,  tokyo: 1,  kyoto: 0,  osaka: 0, flex: 0 },
      tags:        ['Culinary', 'Coffee', 'Local Food', 'Whiskey', 'Jazz']
    },
    {
      id:          'boros',
      name:        'Boros',
      kanji:       'ボロス',
      emoji:       '🍺',
      color:       '#0e7490',
      colorName:   'slate teal',
      role:        'Good Vibes',
      japanExp:    'First timer',
      activityCount: { total: 0,  tokyo: 0,  kyoto: 0,  osaka: 0, flex: 0 },
      tags:        ['Bars', 'Nightlife', 'Vibes', 'Night Owl']
    }
  ],

  // ============================================================
  // BUDGET — single source of truth for all financial config
  // ============================================================
  // DO NOT redeclare personBudgets or fxRate in logistics.js or crew-data.js
  budget: {
    fxRate:     150,
    fxRateNote: '¥150 = $1 USD (working estimate)',
    currency:   { local: 'JPY', home: 'USD' },
    personBudgets: {
      patrick:    6000,
      jake:       5000,
      steve:      4000,
      conner:     4000,
      boros:      5000,
      groupTotal: 24000
    },
    categories: [
      { id: 'flights',       label: 'Flights',          color: '#6366f1' },
      { id: 'accommodation', label: 'Accommodation',    color: '#3b82f6' },
      { id: 'food',          label: 'Food & Drink',     color: '#f59e0b' },
      { id: 'transport',     label: 'Transport',        color: '#14b8a6' },
      { id: 'activities',    label: 'Activities',       color: '#ec4899' },
      { id: 'shopping',      label: 'Shopping',         color: '#8b5cf6' },
      { id: 'nightlife',     label: 'Bars & Nightlife', color: '#ef4444' },
      { id: 'misc',          label: 'Misc & Buffer',    color: '#94a3b8' }
    ]
  },

  // ============================================================
  // THEME
  // ============================================================
  theme: {
    fonts: {
      serif:     'Shippori Mincho',
      sansSerif: 'system-ui, sans-serif'
    },
    colors: {
      ink:   '#0a0a0a',
      white: '#ffffff',
      paper: '#f9f7f4',
      light: '#e8e4df',
      muted: '#8a8680',
      red:   '#c41e3a',
      gold:  '#d4af37',
      amber: '#ea8b37'
    },
    // Derived convenience maps — built from cities[] and crew[] above
    // Use these in the HTML rather than hardcoding hex values
    get cityColors() {
      return Object.fromEntries(SITE_CONFIG.cities.map(c => [c.id, c.color]));
    },
    get crewColors() {
      return Object.fromEntries(SITE_CONFIG.crew.map(m => [m.id, m.color]));
    }
  },

  // ============================================================
  // SITE SETTINGS
  // ============================================================
  site: {
    tabs:       ['overview', 'itinerary', 'cities', 'activities', 'map', 'budget', 'logistics'],
    defaultTab: 'overview',
    features: {
      countdown:        true,
      budgetSliders:    true,
      votingSystem:     true,
      packingChecklist: true,
      interactiveMap:   true,
      markerClustering: true
    },
    localStorage: {
      packingChecklist: 'packing-checklist',
      voterIdentity:    'voter-identity',
      votePrefix:       'vote:'
    },
    map: {
      provider:          'Leaflet + OpenStreetMap',
      clusteringLibrary: 'Leaflet.markercluster',
      get defaultCenter() { return SITE_CONFIG.cities[0].coordinates; }, // Tokyo
      defaultZoom:       12
    }
  },

  // ============================================================
  // EXTERNAL LINKS
  // ============================================================
  // Central registry — update URLs here, not scattered in other files
  links: {
    ghibliTickets: 'https://l-tike.com',
    ghibliMuseum:  'https://www.ghibli-museum.jp/en/',
    eorzea:        'https://www.pasela.co.jp/paselabo_shop/ff_eorzea/',
    smartEX:       'https://smart-ex.jp/en/',
    japanSumo:     'https://www.sumo.or.jp/En/',
    yamato:        'https://www.kuronekoyamato.co.jp/ytc/eng/',
    teamLab:       'https://www.teamlab.art/e/borderless-azabudai/',
    airalo:        'https://www.airalo.com',
    holafly:       'https://esim.holafly.com',
    googleMaps:    'https://maps.google.com',
    navitime:      'https://www.navitime.co.jp/map/en/'
  },

  // ============================================================
  // HELPER METHODS
  // ============================================================

  getCityById(id) {
    return this.cities.find(c => c.id === id) || null;
  },

  getCrewById(id) {
    return this.crew.find(m => m.id === id) || null;
  },

  getCrewColor(id) {
    const member = this.getCrewById(id);
    return member ? member.color : '#0a0a0a';
  },

  getCityColor(id) {
    const city = this.getCityById(id);
    return city ? city.color : '#0a0a0a';
  },

  getTotalBudget() {
    return this.budget.personBudgets.groupTotal;
  },

  toYen(usd) {
    return Math.round(usd * this.budget.fxRate);
  },

  toUSD(yen) {
    return Math.round(yen / this.budget.fxRate);
  }

}; // end SITE_CONFIG

if (typeof module !== 'undefined' && module.exports) { module.exports = SITE_CONFIG; }
if (typeof window !== 'undefined') { window.SITE_CONFIG = SITE_CONFIG; }
