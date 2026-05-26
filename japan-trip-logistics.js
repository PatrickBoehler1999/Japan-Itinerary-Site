/**
 * JAPAN 2027 TRIP — LOGISTICS
 * ============================
 * Owns: flights, accommodation, transport, money tips, connectivity,
 *       documents, health, booking timeline, critical dates, group rules,
 *       and emergency numbers.
 *
 * Last Updated: 2026-05-25
 *
 * DATA OWNERSHIP
 * ─────────────────────────────────────────────────────────────────
 * This file owns all operations/logistics data.
 *
 * DO NOT store here:
 *   - Person budget totals → japan-trip-config.js SITE_CONFIG.budget.personBudgets
 *   - FX rate             → japan-trip-config.js SITE_CONFIG.budget.fxRate
 *   - City data           → japan-trip-config.js SITE_CONFIG.cities
 *   - Crew identity       → japan-trip-config.js SITE_CONFIG.crew
 *
 * Other files:
 *   Full crew profiles    → japan-trip-crew-data.js
 *   Activity objects      → japan-trip-activities-data.js
 *   Day-by-day schedule   → japan-trip-itinerary-data.js
 * ─────────────────────────────────────────────────────────────────
 */

const LOGISTICS = {
  "flights": {
    "strategy": "Cheapest option under 24 hours total travel time",
    "bookingWindow": "Aug–Sep 2026",
    "origin": {
      "city": "Charlotte",
      "iata": "CLT"
    },
    "outbound": {
      "destination": "Tokyo",
      "preferredAirport": {
        "iata": "HND",
        "name": "Haneda",
        "transitToCenter": "~30 min via Keikyu Line or Tokyo Monorail"
      },
      "alternateAirport": {
        "iata": "NRT",
        "name": "Narita",
        "transitToCenter": "60–90 min"
      },
      "date": "2027-01-09",
      "notes": "HND strongly preferred. Day 1 logistics much smoother from Haneda."
    },
    "return": {
      "origin": "Osaka",
      "airport": {
        "iata": "KIX",
        "name": "Kansai International",
        "transitFromOsaka": "~50 min via Haruka Express"
      },
      "date": "2027-01-24"
    },
    "layovers": "Acceptable if it saves money",
    "estimatedCostPerPerson": {
      "currency": "USD",
      "range": "900–1,400",
      "note": "Estimate only — varies significantly by booking date and routing"
    }
  },
  "accommodation": {
    "type": "Airbnb (3 separate bookings)",
    "requirement": "Each must accommodate 5 people + storage for 5 large suitcases",
    "groupSize": 5,
    "bookingWindow": "Sep–Oct 2026",
    "responsible": "Patrick",
    "cities": [
      {
        "city": "Tokyo",
        "checkIn": "2027-01-09",
        "checkOut": "2027-01-15",
        "nights": 6,
        "preferredAreas": [
          "Shinjuku",
          "Shibuya",
          "Akihabara-adjacent"
        ],
        "notes": "Central location minimizes transit time across 7 activity days"
      },
      {
        "city": "Kyoto",
        "checkIn": "2027-01-15",
        "checkOut": "2027-01-20",
        "nights": 5,
        "preferredAreas": [
          "Central Kyoto",
          "Gion-adjacent"
        ],
        "notes": "Central helps with bus access to Fushimi, Arashiyama, and Higashiyama"
      },
      {
        "city": "Osaka",
        "checkIn": "2027-01-20",
        "checkOut": "2027-01-23",
        "nights": 3,
        "preferredAreas": [
          "Namba",
          "Shinsaibashi",
          "Dotonbori-adjacent"
        ],
        "notes": "Proximity to nightlife key for Steve and Boros"
      }
    ],
    "cityTransitions": [
      {
        "leg": "Tokyo → Kyoto",
        "date": "2027-01-15",
        "method": "Shinkansen (Tokaido Shinkansen, ~2h 15min)",
        "luggageNote": "Send bags via Yamato Transport the night before — arrives at Kyoto Airbnb next morning"
      },
      {
        "leg": "Kyoto → Osaka",
        "date": "2027-01-20",
        "method": "Shinkansen or JR Kyoto Line (~15–30 min)",
        "luggageNote": "Short hop — luggage forwarding optional"
      }
    ]
  },
  "transport": {
    "withinCities": [
      {
        "city": "Tokyo",
        "method": "Suica IC Card",
        "setup": "Top up at HND airport machines before leaving on Day 1 — highest priority",
        "notes": "Covers trains, buses, some convenience store purchases. Reload at any station or convenience store."
      },
      {
        "city": "Kyoto",
        "method": "City Bus + Walking",
        "notes": "One-day and multi-day bus passes available. Most major sites accessible by bus or on foot. IC card also works."
      },
      {
        "city": "Osaka",
        "method": "Osaka Metro",
        "notes": "IC card transfers from Tokyo. Very walkable in Namba/Dotonbori area."
      }
    ],
    "intercityRail": {
      "operator": "JR",
      "service": "Shinkansen (Bullet Train)",
      "bookingApp": "SmartEX",
      "setupNote": "Register SmartEX account in advance — requires a foreign credit card. Do not wait until booking window to register.",
      "bookingWindow": "Oct–Nov 2026",
      "routes": [
        {
          "from": "Tokyo",
          "to": "Kyoto",
          "line": "Tokaido Shinkansen",
          "duration": "~2h 15min",
          "estimatedCostPerPerson": "~¥14,000 (~$93)",
          "note": "Cost is an estimate — varies by train type and seat class"
        },
        {
          "from": "Kyoto",
          "to": "Osaka",
          "line": "Tokaido Shinkansen or JR Kyoto Line",
          "duration": "15–30 min",
          "estimatedCostPerPerson": "~¥1,420 (~$9)"
        }
      ]
    },
    "luggageForwarding": {
      "service": "Yamato Transport (TA-Q-BIN)",
      "use": "Tokyo Airbnb → Kyoto Airbnb on transit day",
      "leadTime": "Send luggage the night before — arrives next morning",
      "estimatedCost": "~¥2,000–3,000 per bag",
      "actionRequired": "Patrick to research exact pickup/dropoff procedures before trip"
    },
    "airportTransit": {
      "arrivalHND": {
        "route": "Keikyu Line or Tokyo Monorail → Yamanote Line",
        "time": "~30 min to Shinjuku or Shibuya"
      },
      "departureKIX": {
        "route": "Haruka Express from Osaka Tennoji or Shin-Osaka → KIX",
        "time": "~50 min from Osaka. Allow 3+ hours before international departure."
      }
    }
  },
  "money": {
    "primaryMethod": "Cash (Japan remains heavily cash-based outside major tourist areas)",
    "atmAccess": {
      "recommended": "7-Eleven ATMs — accepts most foreign cards, English interface",
      "alsoAvailable": "Japan Post ATMs at post offices",
      "day1Priority": "Withdraw at airport ATM before leaving HND"
    },
    "cards": {
      "accepted": "Major hotels, department stores, chain restaurants, some convenience stores",
      "notAccepted": "Many small restaurants, temples, local shops, markets",
      "recommendation": "Always carry ¥5,000–10,000 cash per person per day as baseline"
    },
    "tipping": "NOT customary in Japan — do not tip. It can cause confusion or offense.",
    "groupExpenses": {
      "splittingApp": "Venmo or Splitwise — agree on method before arrival",
      "philosophy": "Shared expenses split evenly 5 ways. No single person bears the burden.",
      "tracker": "Patrick likely designates as keeper, but all members verify"
    },
    "_budgetRef": "Person budgets and FX rate live in japan-trip-config.js → SITE_CONFIG.budget"
  },
  "connectivity": {
    "recommendation": "Individual eSIMs — one per person",
    "purchaseWindow": "Oct–Nov 2026",
    "activationNote": "Activate before departure from Charlotte",
    "suggestedProviders": [
      "Airalo",
      "Holafly"
    ],
    "providerNote": "Compare rates at booking time — market changes",
    "wifiCoverage": "Good in Tokyo, Kyoto, Osaka. Free WiFi at major train stations and convenience stores.",
    "socialMedia": "Intermittent posts planned — not constant. Strong WiFi not critical.",
    "navigationApps": [
      {
        "app": "Google Maps",
        "notes": "Works well in Japan for transit and walking"
      },
      {
        "app": "Navitime",
        "notes": "Japan-specific, excellent for complex transit routing"
      }
    ],
    "navigators": {
      "primary": "Patrick — experienced in Japan transit",
      "secondary": "Jake — capable map reader"
    }
  },
  "documents": {
    "passports": "All 5 members confirmed valid — no concerns",
    "visas": "Not required for US citizens visiting Japan (up to 90 days)",
    "travelInsurance": "Recommended — research and book alongside flights",
    "emergencyContacts": "TBD — compile and share with group before departure"
  },
  "health": {
    "foodAllergies": "None",
    "dietaryRestrictions": "None (Steve is picky but has no actual restrictions)",
    "medications": "None required",
    "smoking": "Occasional cigarettes after drinking — no consistent smokers. Not a factor for accommodation.",
    "fitnessNotes": {
      "highWalkingDays": [
        "Day 2 — Asakusa/Akihabara (~6.2 mi)",
        "Day 3 — Harajuku/Shibuya (~5.5 mi)",
        "Day 11 — Arashiyama (~6.2 mi)"
      ],
      "lowFitnessMembers": [
        "jake",
        "boros"
      ],
      "mitigation": "Use rail or bus to break up high-walking days. Build in rest time."
    }
  },
  "bookingTimeline": [
    {
      "phase": 1,
      "label": "Flights",
      "window": "Aug–Sep 2026",
      "priority": "critical",
      "tasks": [
        {
          "task": "Book flights CLT → HND (preferred) or NRT",
          "responsible": "All — each person books their own",
          "notes": "Coordinate for same-day arrival if possible. Under 24hr total travel time."
        }
      ]
    },
    {
      "phase": 2,
      "label": "Accommodation",
      "window": "Sep–Oct 2026",
      "priority": "high",
      "tasks": [
        {
          "task": "Book Tokyo Airbnb (Jan 9–15, 6 nights)",
          "responsible": "Patrick",
          "notes": "Confirm suitcase storage. Central location."
        },
        {
          "task": "Book Kyoto Airbnb (Jan 15–20, 5 nights)",
          "responsible": "Patrick",
          "notes": "Bus access to Fushimi, Arashiyama, Higashiyama."
        },
        {
          "task": "Book Osaka Airbnb (Jan 20–23, 3 nights)",
          "responsible": "Patrick",
          "notes": "Namba/Dotonbori area preferred."
        }
      ]
    },
    {
      "phase": 3,
      "label": "Pre-Bookable Attractions",
      "window": "Sep–Nov 2026",
      "priority": "high",
      "tasks": [
        {
          "task": "Book Ghibli Museum tickets",
          "responsible": "Patrick",
          "notes": "Opens Dec 10 JST for January — see criticalDates."
        },
        {
          "task": "Book Kirby Cafe reservation",
          "responsible": "Patrick",
          "notes": "Opens Dec 10 JST — separate site from Ghibli. See criticalDates."
        },
        {
          "task": "Book Snoopy Museum tickets",
          "responsible": "Steve",
          "notes": "Tickets open several months ahead."
        },
        {
          "task": "Book Eorzea Cafe Akihabara",
          "responsible": "Patrick",
          "notes": "Book ~1 month ahead via official site. English not guaranteed — use Translate."
        },
        {
          "task": "Book Eorzea Cafe Dotonbori (Osaka)",
          "responsible": "Patrick",
          "notes": "Same booking process as Akihabara location."
        },
        {
          "task": "Register SmartEX app (Shinkansen)",
          "responsible": "All",
          "notes": "Foreign credit card required. Register NOW — do not wait until booking window."
        }
      ]
    },
    {
      "phase": 4,
      "label": "Activities & Transport",
      "window": "Oct–Nov 2026",
      "priority": "medium",
      "tasks": [
        {
          "task": "Book Shinkansen tickets via SmartEX",
          "responsible": "Patrick",
          "notes": "Tokyo → Kyoto and Kyoto → Osaka. Book together."
        },
        {
          "task": "Book Sumo Tournament tickets",
          "responsible": "Patrick",
          "notes": "Japan Sumo Association website. Jan 10–24 at Ryogoku Kokugikan."
        },
        {
          "task": "Book The Tokyo Matrix — specific room",
          "responsible": "Patrick",
          "notes": "Fills up. Book 2–4 weeks ahead online."
        },
        {
          "task": "Book Tokyo Mystery Circus — specific room",
          "responsible": "Patrick",
          "notes": "English options available for some rooms."
        },
        {
          "task": "Book TeamLab Borderless (if doing Day 5)",
          "responsible": "Patrick",
          "notes": "Sells out weeks ahead — book as soon as January slots open."
        },
        {
          "task": "Book Dragon Quest Island (Awaji Island)",
          "responsible": "Patrick",
          "notes": "Only if group chooses Day 15 Option A. Nijigen no Mori website."
        },
        {
          "task": "Purchase individual eSIMs",
          "responsible": "Each person",
          "notes": "Activate before departure. Research Airalo or Holafly."
        },
        {
          "task": "Research Yamato Transport logistics",
          "responsible": "Patrick",
          "notes": "Luggage forwarding Tokyo → Kyoto. Confirm pickup/dropoff process."
        }
      ]
    },
    {
      "phase": 5,
      "label": "Final Prep",
      "window": "Dec 2026 – Jan 2027",
      "priority": "medium",
      "tasks": [
        {
          "task": "Confirm all tickets and reservations",
          "responsible": "Patrick",
          "notes": "Cross-reference this list. Share confirmations in group chat."
        },
        {
          "task": "Set up group expense tracker (Splitwise/Venmo)",
          "responsible": "All",
          "notes": "Agree on method before arrival."
        },
        {
          "task": "Download offline maps for all three cities",
          "responsible": "Patrick, Jake",
          "notes": "Google Maps offline maps. Download before departing."
        },
        {
          "task": "Jake drives to Charlotte for departure",
          "responsible": "Jake",
          "notes": "Coordinate parking and meeting logistics."
        },
        {
          "task": "Prepare cash / confirm card access",
          "responsible": "Each person",
          "notes": "Airport ATM on arrival is fine. Optional to bring some USD to exchange."
        }
      ]
    }
  ],
  "criticalDates": [
    {
      "date": "2026-08-01",
      "label": "Flight Booking Window Opens",
      "urgency": "high",
      "description": "Target Aug–Sep 2026 for best flight prices CLT → HND.",
      "responsible": "All",
      "alarmRequired": false
    },
    {
      "date": "2026-12-10",
      "timeJST": "10:00",
      "label": "⭐ Ghibli Museum Tickets Open",
      "urgency": "critical",
      "description": "January visit tickets go live at 10:00 AM JST via Lawson Tickets (l-tike.com). Sells out in minutes. Site must already be loaded. Set alarm.",
      "responsible": "Patrick",
      "url": "https://l-tike.com",
      "alarmRequired": true
    },
    {
      "date": "2026-12-10",
      "timeJST": "18:00",
      "label": "⭐ Kirby Cafe Reservations Open",
      "urgency": "critical",
      "description": "January seatings open at 6:00 PM JST. Completely separate site from Ghibli. Set a second alarm — also sells out in seconds.",
      "responsible": "Patrick",
      "alarmRequired": true
    },
    {
      "date": "2027-01-09",
      "label": "Departure Day",
      "urgency": "high",
      "description": "Depart Charlotte (CLT). Arrive Tokyo Jan 9 local time. Top up Suica at HND immediately.",
      "responsible": "All"
    },
    {
      "date": "2027-01-14",
      "label": "Night Before Tokyo → Kyoto",
      "urgency": "medium",
      "description": "Send luggage via Yamato Transport the evening before transit day. Luggage arrives at Kyoto Airbnb next morning.",
      "responsible": "All"
    },
    {
      "date": "2027-01-15",
      "label": "Tokyo → Kyoto Transit Day",
      "urgency": "medium",
      "description": "Check out Tokyo Airbnb. Shinkansen to Kyoto (~2h 15min). Travel light — bags already forwarded.",
      "responsible": "All"
    },
    {
      "date": "2027-01-20",
      "label": "Kyoto → Osaka Transit Day",
      "urgency": "medium",
      "description": "Check out Kyoto Airbnb. Shinkansen or JR Kyoto Line to Osaka (~15–30 min).",
      "responsible": "All"
    },
    {
      "date": "2027-01-24",
      "label": "Departure from Osaka (KIX)",
      "urgency": "high",
      "description": "Final day. Haruka Express from Tennoji → KIX (~50 min). Allow 3+ hours before international departure. Tax refund counter: bring all receipts and original packaging.",
      "responsible": "All"
    }
  ],
  "groupRules": {
    "drunkPass": "Steve gets ONE 'annoyingly drunk' pass for the entire trip. After that, group can intervene.",
    "navigation": "Patrick leads navigation. Jake backs up. Others follow.",
    "decisions": "Democratic — Patrick and Jake break deadlocks.",
    "splitting": "Group expected and encouraged to split when interests diverge. No pressure to stay together.",
    "sharedExpenses": "Shared costs split evenly 5 ways. Track via Venmo or Splitwise."
  },
  "emergencyNumbers": {
    "policeJapan": "110",
    "fireAndAmbulance": "119",
    "japanTourismHotline": "050-3816-2787",
    "usEmbassyTokyo": "+81-3-3224-5000",
    "note": "Screenshot and save these before departing. Keep offline in case of no signal."
  }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = LOGISTICS; }
if (typeof window !== 'undefined') { window.LOGISTICS = LOGISTICS; }
