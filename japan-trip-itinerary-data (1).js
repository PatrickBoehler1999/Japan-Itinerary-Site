/**
 * JAPAN 2027 TRIP - ITINERARY DATA FILE
 * ======================================
 * Day-by-day breakdown of the entire trip with schedules, costs,
 * activities, and planning notes.
 * 
 * Last Updated: 2026-05-25
 * Trip Dates: January 9-24, 2027 (16 days)
 */

/**
 * DATA OWNERSHIP NOTE
 * ─────────────────────────────────────────────────────────────────
 * This file owns: the day-by-day schedule (days array), regional
 *   breakdown, trip summary stats, and notable group splits.
 *
 * For booking timeline and critical dates (Ghibli, Kirby, etc.):
 *   → logistics.json  ← bookingChecklist here is a quick-ref stub only
 * For full crew profiles:
 *   → japan-trip-crew-data.js
 * For site theme, colors, city metadata:
 *   → config.json
 * For activity objects:
 *   → japan-trip-activities-data.js
 * ─────────────────────────────────────────────────────────────────
 */
const ITINERARY_DATA = {

  // ==========================================
  // TRIP METADATA
  // ==========================================
  tripInfo: {
    dates: {
      start: 'January 9, 2027',
      end: 'January 24, 2027',
      duration: 16
    },
    crew: ['Patrick', 'Jake', 'Steve', 'Conner', 'Boros'],
    crewCount: 5,
    departure: {
      city: 'Charlotte, NC',
      airport: 'CLT'
    },
    arrival: {
      preferred: 'HND (Haneda)',
      alternative: 'NRT (Narita)',
      returnFrom: 'KIX (Kansai International)'
    },
    // exchangeRate removed — single source of truth: SITE_CONFIG.budget.fxRate
    // Usage: SITE_CONFIG.toYen(usd), SITE_CONFIG.toUSD(yen)
  },

  // ==========================================
  // REGIONAL BREAKDOWN
  // ==========================================
  // Removed — single source of truth is japan-trip-config.js → SITE_CONFIG.cities
  // Usage: SITE_CONFIG.getCityById(id) returns id, name, days, dates, nightCount, color, colorHex
  // regions: { ... }  ← DO NOT re-add here

  // ==========================================
  // DAILY ITINERARY
  // ==========================================
  days: [

    // ========== TOKYO ==========
    {
      dayNumber: 1,
      date: 'January 9, 2027',
      city: 'tokyo',
      theme: 'Land & Settle',
      estimatedCostPerPerson: { yen: 3150, usd: 21 },
      walking: { miles: 1.2, steps: 2600 },
      
      schedule: [
        { time: 'arrival', emoji: '✈', activity: 'Long haul from CLT — arrive Jan 9 local time', who: 'all' },
        { time: 'arrival', emoji: '🚃', activity: 'HND preferred (30min to central Tokyo) vs NRT (60–90min)', who: 'all' },
        { time: 'arrival', emoji: '💳', activity: 'Top up Suica cards at airport machines before heading in', who: 'all' },
        { time: 'afternoon', emoji: '🏠', activity: 'Train to Airbnb, drop bags', who: 'all' },
        { time: 'evening', emoji: '🏪', activity: 'First convenience store run — 7-Eleven or FamilyMart (drinks, snacks, konbini dinner)', who: 'all' },
        { time: 'evening', emoji: '🍜', activity: 'Low-key dinner: ramen, conveyor belt sushi, or local izakaya. Keep it short.', who: 'all' }
      ],
      
      optional: [
        { activity: 'Don Quijote Shinjuku', details: '24hr, great chaotic first impression of Tokyo', who: 'all' }
      ],
      
      notes: 'Jetlag will hit. Don\'t overplan. Everything starts Day 2. Book flights Aug–Sep 2026.',
      
      activityRefs: [], // No specific activity IDs from activities data
      
      groupSplits: null
    },

    {
      dayNumber: 2,
      date: 'January 10, 2027',
      city: 'tokyo',
      theme: 'Old Tokyo + Anime/Gaming District',
      estimatedCostPerPerson: { yen: 9900, usd: 66 },
      walking: { miles: 6.2, steps: 13000 },
      
      schedule: [
        { time: '🌅 Early AM', emoji: '🐟', activity: 'Tsukiji Outer Market — before 9am. Oysters, uni, tuna on rice, tamagoyaki. Budget ¥1,500–2,500 grazing.', who: ['patrick', 'jake'] },
        { time: '☀️ Morning', emoji: '🛕', activity: 'Sensoji Temple, Asakusa — Tokyo\'s oldest temple. Walk Nakamise-dori for snacks and souvenirs. 1.5–2hrs.', who: 'all' },
        { time: '🌤 Afternoon', emoji: '🗼', activity: 'Tokyo Skytree — ¥2,100–3,400. January skies = best views. Then Solamachi at the base.', who: 'all' },
        { time: '🌤 Afternoon', emoji: '📋', activity: 'Kirby Cafe is here if pre-booked (book 1+ month ahead via official site)', who: ['patrick'] },
        { time: '🌆 Late PM', emoji: '🎮', activity: 'Character Street, Tokyo Station B1 — Pokémon, Ghibli, Sanrio flagships with Tokyo-exclusive stock.', who: ['patrick', 'jake'] },
        { time: '🌃 Evening', emoji: '🕹', activity: 'Akihabara — electronics, games, arcades, retro shops. Dinner here (ramen/karaage).', who: 'all' }
      ],
      
      optional: [
        { activity: 'Super Potato', details: '5 floors retro consoles above a pachinko parlour', who: ['patrick', 'jake'] },
        { activity: 'Grand Sumo Tournament', details: 'Begins today at Ryogoku Kokugikan — top bouts 4–6pm, ¥3,800–14,000 (easy add-on from Asakusa)', who: 'all' }
      ],
      
      notes: null,
      
      activityRefs: ['tsukiji-market', 'sensoji-temple', 'tokyo-skytree', 'kirby-cafe', 'character-street-tokyo-station'],
      
      groupSplits: null
    },

    {
      dayNumber: 3,
      date: 'January 11, 2027',
      city: 'tokyo',
      theme: 'National Holiday · Escape Room · Nightlife',
      estimatedCostPerPerson: { yen: 13200, usd: 88 },
      walking: { miles: 3.7, steps: 7800 },
      
      schedule: [
        { time: '🌸 Morning', emoji: '⛩️', activity: 'Meiji Shrine, Harajuku — Coming of Age ceremonies, traditional dress everywhere.', who: 'all' },
        { time: '🌤 Afternoon', emoji: '🎯', activity: 'The Tokyo Matrix (Shinjuku) — group physical escape room in Kabukicho Tower. Teams of 2–3, 40–60min, fully English. Book ahead online — fills up', who: ['patrick', 'jake', 'steve', 'conner'] },
        { time: '🌃 Evening', emoji: '🍺', activity: 'Golden Gai — 200 tiny 6-seat bars in Shinjuku alleys, each with a personality. Cover ¥500–1,000.', who: 'all' },
        { time: '🌃 Evening', emoji: '🍖', activity: 'Omoide Yokocho (Memory Lane) — yakitori smoke, plastic stools, cold beer.', who: 'all' },
        { time: '🌙 Late Night', emoji: '🎤', activity: 'Karaoke Kan (Shinjuku/Shibuya) — private room, open until early morning. Optional for whoever has energy.', who: ['patrick', 'jake', 'steve', 'conner'] }
      ],
      
      optional: [],
      
      notes: 'Coming of Age Day (成人の日) — national holiday. Young adults in kimono and furisode all over Shinjuku. Great vlog material.',
      
      activityRefs: ['the-tokyo-matrix', 'golden-gai', 'karaoke-kan-shibuya'],
      
      groupSplits: {
        splitOption: 'Steve + Boros extend late in Shinjuku after group karaoke wraps.'
      }
    },

    {
      dayNumber: 4,
      date: 'January 12, 2027',
      city: 'tokyo',
      theme: 'Ghibli + Vinyl + Group Escape Room',
      estimatedCostPerPerson: { yen: 9400, usd: 63 },
      walking: { miles: 4.3, steps: 9100 },
      
      schedule: [
        { time: '☀️ Morning', emoji: '🎬', activity: 'Ghibli Museum, Mitaka (25min from Shinjuku on Chuo Line) — ¥1,000/person. Timed entry 10am or noon. Rooftop Totoro, Saturn\'s Theatre short film. 2–2.5hrs. No photos inside.', who: ['patrick', 'jake'] },
        { time: '🌤 Afternoon', emoji: '🎵', activity: 'Shibuya — Tower Records Shibuya (8 floors, Japan\'s largest, excellent J-pop/city-pop/vinyl). Shibuya Crossing + 109 for everyone.', who: ['patrick'] },
        { time: '🌆 Late PM', emoji: '🎭', activity: 'Tokyo Mystery Circus (Shinjuku) — multi-floor escape room complex, group capacity.', who: ['patrick', 'jake', 'steve', 'conner'] },
        { time: '🌃 Evening', emoji: '🌮', activity: 'Tacos 3Hermanos — Jake\'s pick, Shinjuku area. Quick dinner before/after Mystery Circus.', who: 'all' }
      ],
      
      optional: [
        { activity: 'Wiggle Wiggle', details: 'Korean lifestyle/stationery store in Shibuya if time allows', who: ['patrick'] }
      ],
      
      notes: '⚠️ Tickets sell out Dec 10 at 10:00 AM JST via Lawson or online. Do NOT miss this window.',
      
      activityRefs: ['ghibli-museum', 'tower-records-shibuya', 'tokyo-mystery-circus', 'tacos-3hermanos', 'wiggle-wiggle'],
      
      groupSplits: {
        splitOption: 'Steve + Boros skip Ghibli, do their own Shinjuku morning, rejoin for escape room.',
        naturalSplit: 'Patrick + Jake at Ghibli; Steve + Boros elsewhere'
      }
    },

    {
      dayNumber: 5,
      date: 'January 13, 2027',
      city: 'tokyo',
      theme: 'Anime/Gaming District Full Day',
      estimatedCostPerPerson: { yen: 9200, usd: 61 },
      walking: { miles: 3.1, steps: 6500 },
      
      schedule: [
        { time: '☀️ Morning', emoji: '🍱', activity: 'Slow start, konbini breakfast. Head to Akihabara by mid-morning.', who: 'all' },
        { time: '☀️ Morning', emoji: '🥩', activity: 'Gyukatsu Motomura — crispy breaded beef cutlet, Akihabara location, worth the queue', who: ['jake'] },
        { time: '🌤 Midday', emoji: '🎮', activity: 'Eorzea Cafe Akihabara — FFXIV-themed cafe, 90-min timed seating. Reserve well in advance — popular, limited seats, Japanese booking site (use Google Translate)', who: ['patrick', 'jake'] },
        { time: '🌤 Midday', emoji: '🎮', activity: 'Steve + Conner: Free afternoon in Akihabara — electronics, arcades, whatever they find', who: ['steve', 'conner'] },
        { time: '🌆 Afternoon', emoji: '🕹', activity: 'GamePanic Akihabara — large modern arcade, crane games, rhythm games, fighting games.', who: ['patrick'] },
        { time: '🌆 Afternoon', emoji: '🎭', activity: 'Mandarake and/or Nakano Broadway — definitive anime figure and collectibles shops', who: ['patrick', 'jake'] },
        { time: '🌃 Evening', emoji: '🍺', activity: 'Hoppy Street, Kuramae — post-WWII standing bar alley, ¥200–500/drink. Authentic dive bar experience. OR Steve leads a different bar crawl.', who: ['patrick', 'jake'] }
      ],
      
      optional: [],
      
      notes: 'Natural Split Day: This is the clearest day to formally split. Patrick + Jake are deep in Akihabara. Steve + Boros + Conner can do whatever they want.',
      
      activityRefs: ['gyukatsu-motomura', 'eorzea-cafe-akihabara', 'gamepanic-akihabara'],
      
      groupSplits: {
        splitA: { who: ['patrick', 'jake'], plan: 'Eorzea Cafe + GamePanic' },
        splitB: { who: ['steve', 'boros', 'conner'], plan: 'Free Akihabara afternoon' }
      }
    },

    {
      dayNumber: 6,
      date: 'January 14, 2027',
      city: 'tokyo',
      theme: 'Records + Immersive Art + Nightlife',
      estimatedCostPerPerson: { yen: 8200, usd: 55 },
      walking: { miles: 4.3, steps: 9100 },
      
      schedule: [
        { time: '☀️ Morning', emoji: '🎵', activity: 'Shimokitazawa (15min from Shinjuku on Odakyu line) — Tokyo\'s bohemian neighbourhood. Vintage records, secondhand fashion, indie cafes, live music. Doesn\'t fully open until 11am. 2–3hrs minimum.', who: ['patrick', 'jake'] },
        { time: '☀️ Morning', emoji: '💿', activity: 'Disk Union Shimokitazawa — multiple floors jazz, city-pop, used vinyl', who: ['patrick'] },
        { time: '🌤 Afternoon', emoji: '☕', activity: 'Glitch Coffee (Jinbocho) — Top-tier third-wave coffee roastery. Slow bar, single origins. ¥700–1,200/cup.', who: ['conner'] },
        { time: '🌆 Evening', emoji: '🎨', activity: 'TeamLab Borderless (Azabudai Hills) — immersive digital art museum. Book in advance, 90min minimum. ¥4,800.', who: 'all' },
        { time: '🌃 Late Night', emoji: '🍻', activity: 'Roppongi nightlife — clubs, international bars, late-night energy. Steve\'s territory.', who: ['steve', 'boros', 'conner'] }
      ],
      
      optional: [],
      
      notes: 'TeamLab Borderless: Sells out weeks ahead. Book ASAP once Jan 14 slots open.',
      
      activityRefs: ['shimokitazawa-thrifting', 'glitch-coffee'],
      
      groupSplits: {
        splitOption: 'Patrick + Jake: rest/pack for Kyoto; Steve + Boros + Conner: Roppongi nightlife'
      }
    },

    {
      dayNumber: 7,
      date: 'January 15, 2027',
      city: 'tokyo',
      theme: 'Day Trip Options + Tokyo Finale',
      estimatedCostPerPerson: { yen: 12000, usd: 80 },
      walking: { miles: 8.5, steps: 17800 },
      
      schedule: [
        { time: 'All Day', emoji: '🏔️', activity: 'OPTION A: Mt. Fuji + Kawaguchiko — 2.5hrs from Shinjuku. Lake views, Chureito Pagoda (400 steps), ropeway, onsen. Full day trip.', who: 'all' },
        { time: 'All Day', emoji: '🎮', activity: 'OPTION B: Pokémon Park Kanto — Theme park experience', who: ['patrick'] },
        { time: 'All Day', emoji: '🏞️', activity: 'OPTION C: Yokohama day trip — 30min from Tokyo. Chinatown, harbor, Cup Noodles Museum', who: 'all' },
        { time: '🌃 Evening', emoji: '📦', activity: 'Pack bags. Yamato luggage forwarding to Kyoto Airbnb — drop off tonight or early tomorrow.', who: 'all' }
      ],
      
      optional: [],
      
      notes: 'Last night in Tokyo. Shinkansen to Kyoto tomorrow morning. Choose one day trip option as a group.',
      
      activityRefs: ['mount-fuji-kawaguchiko', 'chureito-pagoda', 'pokemon-park-kanto', 'yokohama'],
      
      groupSplits: null
    },

    // ========== KYOTO ==========
    {
      dayNumber: 8,
      date: 'January 16, 2027',
      city: 'kyoto',
      theme: 'Shinkansen + Golden Pavilion + Nishiki Market',
      estimatedCostPerPerson: { yen: 20270, usd: 135 },
      walking: { miles: 4.3, steps: 9100 },
      
      schedule: [
        { time: '🌅 Morning', emoji: '🚅', activity: 'Shinkansen Tokyo → Kyoto — Nozomi 2hr15min, ¥14,170. Reserve seats online or at station.', who: 'all' },
        { time: '☀️ Late Morning', emoji: '🏠', activity: 'Drop bags at Kyoto Airbnb or coin lockers at Kyoto Station', who: 'all' },
        { time: '🌤 Afternoon', emoji: '⛩️', activity: 'Kinkaku-ji (Golden Pavilion) — Iconic gold-covered Zen temple. ¥500. Very crowded — go early if possible.', who: ['jake'] },
        { time: '🌤 Afternoon', emoji: '🪨', activity: 'Ryoan-ji — Famous Zen rock garden temple. ¥500. Near Kinkaku-ji - can visit same day.', who: ['jake'] },
        { time: '🌆 Evening', emoji: '🍱', activity: 'Nishiki Market — Traditional covered food market, "Kyoto\'s Kitchen". 1-2hrs. Good for snacks and local ingredients.', who: ['jake'] },
        { time: '🌃 Night', emoji: '🍶', activity: 'Pontocho Alley — Narrow alley lined with traditional restaurants and bars. Beautiful at night - many riverside dining options.', who: ['jake'] }
      ],
      
      optional: [],
      
      notes: 'First day in Kyoto. Shinkansen is the major expense today.',
      transitNotes: 'Nozomi Shinkansen Tokyo → Kyoto ~2h 15min. ¥14,000/person. Book via SmartEX in advance. Bags already at Kyoto Airbnb via Yamato — collect coin-locker essentials on Day 7.',
      
      activityRefs: ['kinkaku-ji', 'ryoan-ji', 'nishiki-market', 'pontocho-alley'],
      
      groupSplits: null
    },

    {
      dayNumber: 9,
      date: 'January 17, 2027',
      city: 'kyoto',
      theme: 'Fushimi Inari + Sake District',
      estimatedCostPerPerson: { yen: 5800, usd: 39 },
      walking: { miles: 5.6, steps: 11700 },
      
      schedule: [
        { time: '🌅 Early Morning', emoji: '⛩️', activity: 'Fushimi Inari — Iconic shrine with thousands of orange torii gates. Free. 2-3 hour hike to summit - go early to avoid crowds', who: ['jake'] },
        { time: '🌤 Afternoon', emoji: '🍶', activity: 'Fushimi Sake District — Historic sake brewing district with breweries and tastings. ¥2,000. Can combine with Fushimi Inari visit.', who: ['jake'] },
        { time: '🌆 Evening', emoji: '🏯', activity: 'Nijo Castle — Historic flatland castle with "nightingale floors". ¥800. Great gardens and historical significance.', who: ['jake'] },
        { time: '🌃 Night', emoji: '🍜', activity: 'Dinner in central Kyoto - group choice', who: 'all' }
      ],
      
      optional: [
        { activity: 'Shinsen-en Water Garden', details: 'Historic garden with sacred pond. Free. Often overlooked - peaceful spot.', who: ['jake'] }
      ],
      
      notes: 'Fushimi Inari is the big draw today. Start early for best experience.',
      
      activityRefs: ['fushimi-inari', 'fushimi-sake-district', 'nijo-castle', 'shinsen-en-water-garden'],
      
      groupSplits: null
    },

    {
      dayNumber: 10,
      date: 'January 18, 2027',
      city: 'kyoto',
      theme: 'Bamboo Forest + Temples',
      estimatedCostPerPerson: { yen: 4200, usd: 28 },
      walking: { miles: 5.0, steps: 10400 },
      
      schedule: [
        { time: '🌅 Early Morning', emoji: '🎋', activity: 'Arashiyama Bamboo Forest — Iconic towering bamboo grove. Free. Very crowded midday - go early morning', who: ['jake'] },
        { time: '☀️ Morning', emoji: '⛩️', activity: 'Tenryu-ji — Zen temple with beautiful garden in Arashiyama. ¥600. Near bamboo forest - visit together', who: ['jake'] },
        { time: '🌤 Afternoon', emoji: '🗿', activity: 'Otagi Nenbutsu-ji — Temple with 1,200 unique stone statues. ¥300. Far from main Arashiyama - requires bus or taxi', who: ['jake'] },
        { time: '🌆 Evening', emoji: '🍜', activity: 'Return to central Kyoto for dinner', who: 'all' }
      ],
      
      optional: [],
      
      notes: 'Arashiyama is best experienced early before tour groups arrive.',
      
      activityRefs: ['arashiyama-bamboo-forest', 'tenryu-ji', 'otagi-nenbutsu-ji'],
      
      groupSplits: {
        splitOption: 'Patrick + Jake: bamboo + temples early; Steve + Boros: sleep in, meet for evening'
      }
    },

    {
      dayNumber: 11,
      date: 'January 19, 2027',
      city: 'kyoto',
      theme: 'Flex Day / Rest Day',
      estimatedCostPerPerson: { yen: 6000, usd: 40 },
      walking: { miles: 3.0, steps: 6300 },
      
      schedule: [
        { time: '☀️ Morning', emoji: '😴', activity: 'Sleep in, slow start. Konbini breakfast.', who: 'all' },
        { time: '🌤 Afternoon', emoji: '🎯', activity: 'FLEX: Individual exploration or group activities as decided', who: 'all' },
        { time: '🌃 Evening', emoji: '🍜', activity: 'Group dinner in Kyoto', who: 'all' }
      ],
      
      optional: [
        { activity: 'Local coffee shops', details: 'Conner explores Kyoto coffee scene', who: ['conner'] },
        { activity: 'Shopping districts', details: 'Teramachi/Shinkyogoku covered arcades', who: 'all' },
        { activity: 'Additional temples', details: 'Any temples not yet visited', who: ['jake'] }
      ],
      
      notes: 'Built-in flex day. No hard schedule. Rest or explore as desired.',
      
      activityRefs: [],
      
      groupSplits: null
    },

    {
      dayNumber: 12,
      date: 'January 20, 2027',
      city: 'kyoto',
      theme: 'Historic District + Kimono Day',
      estimatedCostPerPerson: { yen: 11500, usd: 77 },
      walking: { miles: 5.6, steps: 11700 },
      
      schedule: [
        { time: '☀️ Morning', emoji: '👘', activity: 'Kimono rental near Gojo or Higashiyama Station — ¥3,000–5,000 including styling. Wear it all day. Great vlog content and the authentic Kyoto look. Most rental shops no booking needed before 10am.', who: 'all' },
        { time: '🌤 All Day', emoji: '🏘️', activity: 'Higashiyama District — Ninenzaka and Sannenzaka stone-paved slopes, tea houses, traditional craft shops.', who: ['jake', 'conner'] },
        { time: '🌤 All Day', emoji: '⛩️', activity: 'Yasaka Pagoda — iconic 5-storey pagoda. Photograph from surrounding streets. Free.', who: ['jake'] },
        { time: '🌆 Afternoon', emoji: '⛩️', activity: 'Kiyomizudera Temple — ¥400, wooden stage with panoramic Kyoto views. Final stretch of the walk.', who: ['jake'] },
        { time: '🌃 Evening', emoji: '👘', activity: 'Return kimonos. Final Kyoto dinner — kaiseki or quality izakaya in Gion. Take your time.', who: 'all' },
        { time: '🌙 Night', emoji: '📦', activity: 'Pack bags. Yamato luggage forwarding to Osaka Airbnb — drop off tonight/tomorrow morning.', who: 'all' }
      ],
      
      optional: [
        { activity: 'Kodai-ji Temple', details: '¥600 — beautiful Zen garden, far less crowded than Kiyomizudera', who: ['jake', 'conner'] }
      ],
      
      notes: 'Last night in Kyoto. Shinkansen to Osaka tomorrow.',
      
      activityRefs: ['higashiyama-district', 'yasaka-pagoda', 'kiyomizudera-temple'],
      
      groupSplits: null
    },

    // ========== OSAKA ==========
    {
      dayNumber: 13,
      date: 'January 21, 2027',
      city: 'osaka',
      theme: 'Arrival + Street Food + Pinball',
      estimatedCostPerPerson: { yen: 8300, usd: 55 },
      walking: { miles: 3.1, steps: 6500 },
      
      schedule: [
        { time: '☀️ Morning', emoji: '🚅', activity: 'Check out of Kyoto Airbnb. Local JR Kyoto → Osaka (~30min, ¥580) or Shinkansen (~15min, ¥1,490). Coin lockers at Osaka/Namba if checking in early.', who: 'all' },
        { time: '🌤 Afternoon', emoji: '🦑', activity: 'Dotonbori Street — first Osaka immersion. Neon signs, Glico Man, giant mechanical crab. Street food everywhere: takoyaki, okonomiyaki, kushikatsu. Budget ¥1,500–2,500 just grazing.', who: 'all' },
        { time: '🌆 Evening', emoji: '🕹', activity: 'Silver Ball Planet — Amerika-mura, Shinsaibashi BIGSTEP 3F. 100+ pinball machines from 1970s–today, ¥100/game, free entry. Patrick could spend 3hrs here.', who: ['patrick'] },
        { time: '🌃 Late Night', emoji: '🍻', activity: 'Shinsekai Izakaya Crawl — Osaka\'s rowdiest neighbourhood. Tiny standing izakayas, kushikatsu, red lanterns. ¥2,000–4,000/person for a proper crawl.', who: ['steve', 'boros'] }
      ],
      
      optional: [
        { activity: 'Hozenji Yokocho', details: 'Stone-paved alley behind Dotonbori, moss-covered Fudo statue, old-school restaurants', who: ['conner'] }
      ],
      
      notes: '⚠️ Izakaya Toyo is CLOSED Thursdays — Jan 21 is a Thursday. Do not attempt today.',
      transitNotes: 'JR Kyoto Line Kyoto → Osaka: ~30 min, ¥580. Shinkansen option: ~15 min, ¥1,490. Luggage forwarding optional for short hop.',
      
      activityRefs: ['dotonbori-street', 'silver-ball-planet'],
      
      groupSplits: {
        splitOption: 'Steve/Boros: Amerika-mura has excellent bars nearby while Patrick is in the pinball cave.'
      }
    },

    {
      dayNumber: 14,
      date: 'January 22, 2027',
      city: 'osaka',
      theme: 'Market + Anime/Gaming + FFXIV Cafe',
      estimatedCostPerPerson: { yen: 9600, usd: 64 },
      walking: { miles: 4.3, steps: 9100 },
      
      schedule: [
        { time: '☀️ Morning', emoji: '🦞', activity: 'Kuromon Ichiba Market — Osaka\'s premier market, open from 9am. 190+ stalls: fresh uni, wagyu skewers, whole king crab. Grazing breakfast/brunch, ¥2,000–3,000/person.', who: ['jake', 'conner', 'patrick'] },
        { time: '🌤 Afternoon', emoji: '🏯', activity: 'Osaka Castle Park — 15min from Kuromon, ¥600 for the keep museum. Good group morning visit.', who: 'all' },
        { time: '🌤 Afternoon', emoji: '🎮', activity: 'Den Den Town (Nipponbashi) — Osaka\'s Akihabara, 10min from Namba. Super Potato and Mandarake both have Osaka branches.', who: ['patrick', 'jake'] },
        { time: '🌤 Afternoon', emoji: '♨️', activity: 'Spa World — massive multi-floor onsen complex near Shinsekai, ¥1,000–2,000. Natural split while Patrick/Jake shop.', who: ['steve', 'conner'] },
        { time: '🌃 Evening', emoji: '🎮', activity: 'Eorzea Cafe Dotonbori — 90-min timed seating. Reserve well in advance — popular, limited seats', who: ['patrick', 'jake'] },
        { time: '🌃 Evening', emoji: '🍻', activity: 'Steve + Conner: Their own Dotonbori/Namba evening. Reconvene after for Namba nightlife.', who: ['steve', 'conner'] }
      ],
      
      optional: [],
      
      notes: 'Natural Split Day: One of the cleanest group splits of the trip. Patrick/Jake do Den Den Town + Eorzea. Steve/Conner/Boros do Spa World + Osaka bars. Reconvene at night.',
      
      activityRefs: ['eorzea-cafe-dotonbori'],
      
      groupSplits: {
        splitA: { who: ['patrick', 'jake'], plan: 'Den Den Town + Eorzea' },
        splitB: { who: ['steve', 'conner', 'boros'], plan: 'Spa World + own dinner' }
      }
    },

    {
      dayNumber: 15,
      date: 'January 23, 2027',
      city: 'osaka',
      theme: 'Flex Day · Last Full Day · Group Dinner',
      estimatedCostPerPerson: { yen: 9200, usd: 61 },
      walking: { miles: 5.0, steps: 10400 },
      
      schedule: [
        { time: '🌤 All Day', emoji: '🎯', activity: 'OPTION A: Dragon Quest Island — Awaji Island, ~1hr by highway bus. Nijigen no Mori outdoor RPG, ¥3,500–4,500. Full day — return by 6pm. Book ahead.', who: ['patrick', 'jake', 'steve'] },
        { time: '🌤 All Day', emoji: '☕', activity: 'OPTION B: The Münch (Yao) — Jake\'s pick, ~30min from central Osaka. Barrel-aged specialty coffee, cash only. + Nara day trip — 45min from Osaka. Hundreds of free-roaming sika deer, Todai-ji Temple.', who: ['jake', 'conner'] },
        { time: '🌤 All Day', emoji: '🎯', activity: 'OPTION C: Flex Osaka Day — Shinsaibashi shopping, Umeda Sky Building rooftop at sunset, Osaka Aquarium. Everyone sets their own pace, regroups for dinner.', who: 'all' },
        { time: '🌃 Evening', emoji: '🔥', activity: '⚠️ Izakaya Toyo — Kyobashi. The Netflix Street Food Asia izakaya. Toyo-san grills tuna, uni, and salmon roe tableside with a blowtorch. Queue 30–45min before opening. No reservations. Jan 23 is Saturday — OPEN. This is the one not to miss. Queue early.', who: 'all' }
      ],
      
      optional: [],
      
      notes: 'Choose one day trip option as a group. All must reconvene at Izakaya Toyo for dinner.',
      
      activityRefs: ['dragon-quest-island', 'kobe', 'the-munch', 'izakaya-toyo'],
      
      groupSplits: {
        note: 'Multiple options — group votes closer to trip. All reconvene at Izakaya Toyo'
      }
    },

    // ========== DEPARTURE ==========
    {
      dayNumber: 16,
      date: 'January 24, 2027',
      city: 'departure',
      theme: 'Final Morning · KIX · Fly Home',
      estimatedCostPerPerson: { yen: 3700, usd: 25 },
      walking: { miles: 0.6, steps: 1300 },
      
      schedule: [
        { time: '☀️ Morning', emoji: '🛒', activity: 'Final konbini run. Stock up for the flight.', who: 'all' },
        { time: '🌤 Morning', emoji: '🚄', activity: 'Haruka Express Osaka/Tennoji → KIX (Kansai International) — 50min, ¥1,690. Allow 3hrs+ before international departure.', who: 'all' },
        { time: '🌆 Afternoon', emoji: '🛫', activity: 'KIX: Excellent duty-free, large departures area. Tax refund counter — bring all receipts and original packaging. Last chance for airport ramen or conveyor sushi.', who: 'all' }
      ],
      
      optional: [],
      
      notes: 'If routing back through Tokyo, Nozomi Shinkansen KIX → Tokyo in 2.5hrs, then HND or NRT for international departure.',
      transitNotes: 'Haruka Express from Tennoji or Shin-Osaka → KIX: ~50 min, ¥1,690. Allow 3+ hours before international departure. Tax refund counter in departures — bring all receipts and original packaging.',
      
      activityRefs: [],
      
      groupSplits: null
    }

  ], // end days

  // ==========================================
  // TRIP SUMMARY STATISTICS
  // ==========================================
  summary: {
    totalDays: 16,
    tokyoDays: 7,
    tokyoDates: 'Jan 9–15',
    kyotoDays: 5,
    kyotoDates: 'Jan 16–20',
    osakaDays: 3,
    osakaDates: 'Jan 21–23',
    totalEstimatedWalking: { miles: 65, note: 'over 16 days' },
    lightestDay: { day: 16, miles: 0.6 },
    heaviestDays: [
      { day: 7, miles: 8.5, note: 'Day trip options' },
      { day: 11, miles: 6.2, note: 'Arashiyama' }
    ],
    avgDailyCost: { 
      yenLow: 8000, 
      yenHigh: 10000, 
      usdLow: 53, 
      usdHigh: 67,
      note: 'per person, not including Shinkansen'
    },
    shinkansen: {
      tokyoToKyoto: { yen: 14000, usd: 93, route: 'Tokyo → Kyoto', note: 'Estimate — varies by train type' },
      kyotoToOsaka: { yenLow: 580, yenHigh: 1490, usdLow: 4, usdHigh: 10, route: 'Kyoto → Osaka' }
    }
  },

  // ==========================================
  // PRE-TRIP BOOKING CHECKLIST
  // ==========================================
  // ⚠ DATA MOVED: Full booking timeline with phases, deadlines, responsible
  // parties, and critical dates (including Dec 10 Ghibli/Kirby alarms)
  // lives in logistics.json → bookingTimeline and criticalDates.
  // Reference logistics.json directly — do not duplicate here.
  bookingChecklist: {
    _ref: 'See logistics.json bookingTimeline and criticalDates for full booking schedule',
    quickRef: [
      { item: 'Flights (CLT → HND)',       deadline: 'Aug–Sep 2026',          notes: 'See logistics.json phase 1' },
      { item: 'Ghibli Museum tickets',      deadline: 'Dec 10, 2026 10:00 JST', notes: '⭐ CRITICAL — l-tike.com. See logistics.json criticalDates' },
      { item: 'Kirby Cafe reservation',     deadline: 'Dec 10, 2026 18:00 JST', notes: '⭐ CRITICAL — separate site. See logistics.json criticalDates' },
      { item: 'TeamLab Borderless',         deadline: 'ASAP once Jan slots open', notes: 'Sells out weeks ahead. See logistics.json phase 4' },
      { item: 'Eorzea Cafe (Akihabara)',    deadline: '~1 month ahead',         notes: 'See logistics.json phase 3' },
      { item: 'Eorzea Cafe (Osaka)',        deadline: '~1 month ahead',         notes: 'See logistics.json phase 3' },
      { item: 'The Tokyo Matrix',           deadline: '2–4 weeks ahead',        notes: 'See logistics.json phase 4' },
      { item: 'Dragon Quest Island',        deadline: 'If Day 15 Option A chosen', notes: 'See logistics.json phase 4' }
    ]
  },

  // ==========================================
  // NOTABLE GROUP SPLITS
  // ==========================================
  notableSplits: [
    { day: 5, name: 'Akihabara', splitA: 'Patrick + Jake: Eorzea Cafe + GamePanic', splitB: 'Steve + Boros + Conner: free Akihabara afternoon' },
    { day: 6, name: 'Evening', splitA: 'Patrick + Jake: rest/pack for Kyoto', splitB: 'Steve + Boros + Conner: Roppongi nightlife' },
    { day: 11, name: 'Arashiyama', splitA: 'Patrick + Jake: bamboo + temples early', splitB: 'Steve + Boros: sleep in, meet for evening' },
    { day: 14, name: 'Osaka', splitA: 'Patrick + Jake: Den Den Town + Eorzea', splitB: 'Steve + Conner + Boros: Spa World + own dinner' },
    { day: 15, name: 'Flex', splitA: 'Multiple options — group votes closer to trip', splitB: 'All reconvene at Izakaya Toyo' }
  ],

  // ==========================================
  // HELPER FUNCTIONS
  // ==========================================
  
  getDay: function(dayNumber) {
    return this.days.find(d => d.dayNumber === dayNumber);
  },

  getDaysByCity: function(cityId) {
    return this.days.filter(d => d.city === cityId);
  },

  getDayByDate: function(dateString) {
    return this.days.find(d => d.date === dateString);
  },

  getTotalCost: function() {
    return this.days.reduce((sum, day) => {
      return sum + (day.estimatedCostPerPerson ? day.estimatedCostPerPerson.yen : 0);
    }, 0);
  },

  getTotalWalking: function() {
    return this.days.reduce((sum, day) => {
      return sum + (day.walking ? day.walking.miles : 0);
    }, 0);
  },

  getDaysWithSplits: function() {
    return this.days.filter(d => d.groupSplits !== null);
  },

  getBookingDeadlines: function() {
    return this.bookingChecklist.sort((a, b) => {
      // Simple sort - earlier deadlines first
      if (a.deadline < b.deadline) return -1;
      if (a.deadline > b.deadline) return 1;
      return 0;
    });
  }

}; // end ITINERARY_DATA

// Make available globally and for Node.js exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ITINERARY_DATA;
}
if (typeof window !== 'undefined') {
  window.ITINERARY_DATA = ITINERARY_DATA;
}
