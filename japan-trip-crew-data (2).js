/**
 * JAPAN 2027 TRIP - CREW MEMBER DATA FILE
 * ========================================
 * Central data source for all crew member information, backgrounds, 
 * preferences, and travel details.
 * 
 * Last Updated: 2026-05-25
 * Total Members: 5
 */

/**
 * DATA OWNERSHIP NOTE
 * ─────────────────────────────────────────────────────────────────
 * This file owns: full crew profiles (bios, backgrounds, interests,
 *   fitness, sleep, drinking, travel style, budgets, social dynamics).
 *
 * For crew identity only (id/name/kanji/color/role — site rendering):
 *   → config.json
 * For all logistics (flights, booking timeline, critical dates):
 *   → logistics.json  ← do NOT duplicate in preTripLogistics here
 * For activity objects:
 *   → japan-trip-activities-data.js
 * For day-by-day schedule:
 *   → japan-trip-itinerary-data.js
 * ─────────────────────────────────────────────────────────────────
 */
const CREW_DATA = {

  // ==========================================
  // TRIP OVERVIEW
  // ==========================================
  // Removed — single source of truth is japan-trip-config.js → SITE_CONFIG.trip + SITE_CONFIG.cities
  // Usage: SITE_CONFIG.trip.dates, SITE_CONFIG.getCityById(id)
  // tripMeta: { ... }  ← DO NOT re-add here
  //
  // Crew-only metadata kept here (not in config):
  tripGroupMeta: {
    confirmedMembers: 5,
    potentialMembers: 1,
    ageRange:         'mid-20s',
    note:             'Could be 6 if Silva joins'
  },

  // ==========================================
  // GROUP DYNAMICS & RULES
  // ==========================================
  groupDynamics: {
    coreWVCrew: ['patrick', 'jake', 'conner', 'steve'],
    addedInCharlotte: ['boros'],
    chickFilAHistory: 'Core WV crew worked together at Chick-fil-A in high school',
    livingArrangements: {
      theHouse: ['conner', 'steve', 'boros', 'silva'],
      theHouseNote: 'Silva took Patrick\'s old room',
      ownApartment: ['patrick'],
      westVirginia: ['jake']
    },
    groupRules: [
      'Each member gets ONE "annoyingly drunk" pass for entire trip',
      'No formal babysitting system beyond the one-pass rule'
    ],
    decisionMaking: {
      organizer: 'patrick',
      enforcer: 'jake',
      style: 'Democratic with Patrick having final say on logistics'
    },
    typicalSplits: {
      dayActivities: 'Group stays together or small splits',
      evening: 'Group together earlier',
      lateNight: 'Steve solo or with Boros (midnight-4am)',
      morning: 'Patrick or Jake usually first up'
    }
  },

  // ==========================================
  // CREW MEMBERS
  // ==========================================
  members: {
    
    patrick: {
      // Basic Info
      id: 'patrick',
      name: 'Patrick',
      kanji: 'パトリック',
      emoji: '🎮',
      colorCode: '#c41e3a',
      colorName: 'deep red',
      
      // Background
      origin: 'West Virginia',
      currentLocation: 'Charlotte, NC (own apartment)',
      previousLocation: 'Lived in the house with Conner/Steve/Boros',
      work: 'Software tester/QA',
      chickFilA: 'High school (same location as Jake, Conner, Steve)',
      
      // Trip Role
      tripRole: 'Organizer & trip initiator',
      japanExperience: 'Veteran — third visit (only member with prior Japan experience)',
      languageSkills: 'Knows enough Japanese to get the group un-lost',
      activitiesPlanned: 25,
      
      // Interests & Personality
      interests: {
        anime: true,
        animeWatchBuddy: 'jake',
        collecting: ['vinyl records', 'anime figures'],
        gaming: ['FFXIV', 'Pokémon', 'Pinball'],
        shopping: 'Will vanish into Akihabara for hours',
        vlogging: 'Will be filming, but it\'s not a personality trait'
      },
      
      fitness: {
        level: 'Most fit',
        routine: 'Regular cardio with Steve',
        walkingAbility: 'Excellent'
      },
      
      sleepSchedule: {
        type: 'Early riser',
        notes: 'Usually first up with Jake',
        canStayUpLate: true,
        morning: 'Needs caffeine (vending machine coffee is fine)'
      },
      
      // Drinking
      drinking: {
        preference: 'Beer and liquor',
        flexible: true,
        notes: 'Will drink anything'
      },
      
      // Travel Style
      travelStyle: {
        experience: 'Experienced Japan traveler',
        knowledge: [
          'IC cards',
          'Konbini strategy',
          'Shinjuku Station navigation',
          'Best konbini onigiri (strong opinions)'
        ],
        sleepPattern: 'Can stay up late but wakes early',
        aloneTime: 'Will need solo recharge time during trip'
      },
      
      // Budget — total lives in japan-trip-config.js → SITE_CONFIG.budget.personBudgets
      // Reference: SITE_CONFIG.budget.personBudgets[this.id]
      budgetNote: 'See SITE_CONFIG.budget.personBudgets for total. Includes flights and accommodation.',
      
      // Tags
      tags: ['Anime', 'FFXIV', 'Pinball', 'Vinyl', 'Hiking', 'Pokémon'],
      
      // Summary
      summary: 'Trip organizer and only member with prior Japan experience. Knows enough Japanese to navigate and help the group. Into anime, gaming, vinyl collecting, and will spend hours in Akihabara.'
    },

    jake: {
      // Basic Info
      id: 'jake',
      name: 'Jake',
      kanji: 'ジェイク',
      emoji: '🍜',
      colorCode: '#3730a3',
      colorName: 'indigo',
      
      // Background
      origin: 'West Virginia',
      currentLocation: 'Still in West Virginia',
      travelPlans: 'Driving down to Charlotte to fly with group',
      whyInWV: 'IT job based there, not ready to move yet',
      work: 'IT role',
      chickFilA: 'High school (same location as Patrick, Conner, Steve)',
      
      // Trip Role
      tripRole: 'Main vlogger, foodie, collector',
      japanExperience: 'First timer',
      languageSkills: 'Knows a little Japanese (少し)',
      activitiesPlanned: 21,
      
      // Interests & Personality
      interests: {
        anime: true,
        animeWatchBuddy: 'patrick',
        food: 'Most enthusiastic eater, has a restaurant list he will defend',
        collecting: {
          focus: ['retro games', 'anime figures'],
          style: 'Surgical precision'
        },
        planning: 'Likes having a plan and sticks to it',
        groupRole: 'Unofficial itinerary enforcer',
        vlogging: 'Primary vlogger, films everything with intent'
      },
      
      fitness: {
        level: 'Heavier side',
        walkingAbility: 'May struggle with extended walking',
        notes: 'Will manage or speak up if needed'
      },
      
      sleepSchedule: {
        type: 'Early riser',
        notes: 'Usually first up with Patrick'
      },
      
      // Drinking
      drinking: {
        preference: 'Sweeter drinks',
        flexible: true,
        notes: 'Will drink anything'
      },
      
      // Travel Style
      travelStyle: {
        planning: 'Detail-oriented planner',
        focus: 'Restaurant-focused',
        determination: 'Will fight for every item on his food list',
        experience: 'First timer but prepared',
        navigation: 'Capable map reader (backup to Patrick)'
      },
      
      // Budget — total lives in japan-trip-config.js → SITE_CONFIG.budget.personBudgets
      budgetNote: 'See SITE_CONFIG.budget.personBudgets for total. Includes flights and accommodation.',
      
      // Tags
      tags: ['Food', 'Temples', 'Collecting', 'Anime', 'Retro Games', 'Street Food'],
      
      // Restaurant List
      restaurantList: {
        exists: true,
        location: 'Reference the other project chat for Jake\'s specific restaurant list',
        priority: 'High - will defend every item'
      },
      
      // Summary
      summary: 'Primary vlogger and most enthusiastic eater. Detail-oriented planner who serves as unofficial itinerary enforcer. First timer but well-prepared. Collects retro games and anime figures with surgical precision.'
    },

    steve: {
      // Basic Info
      id: 'steve',
      name: 'Steve',
      kanji: 'スティーブ',
      emoji: '🌙',
      colorCode: '#b45309',
      colorName: 'amber',
      
      // Background
      origin: 'West Virginia',
      currentLocation: 'Charlotte, NC (the house with Conner & Boros)',
      work: 'Line chef at upscale restaurant (same as Conner)',
      chickFilA: 'High school (same location as Patrick, Jake, Conner)',
      
      // Trip Role
      tripRole: 'Nightlife lead',
      japanExperience: 'First timer',
      languageSkills: 'None (なし) - zero anxiety about it',
      activitiesPlanned: 1,
      activitiesNote: 'Nights are unstructured by design',
      
      // Interests & Personality
      interests: {
        foodIrony: 'Chef who\'s a picky eater',
        konbini: 'Considers it a legitimate dinner option',
        nightlife: {
          realItinerary: 'Midnight-4am',
          venues: ['bars', 'clubs', 'anywhere with energy']
        },
        groupRole: 'Early warning system that things are too quiet'
      },
      
      fitness: {
        level: 'Most fit',
        routine: 'Regular cardio with Patrick',
        walkingAbility: 'Excellent'
      },
      
      sleepSchedule: {
        type: 'True night owl',
        notes: 'Latest to bed, latest to rise'
      },
      
      // Drinking
      drinking: {
        preference: 'Sweeter drinks',
        flexible: true,
        notes: 'Will find drinks anywhere'
      },
      
      // Travel Style
      travelStyle: {
        motivation: 'Not specifically interested in Japan (could be anywhere)',
        goal: 'Travel, drink, have a good time',
        nightlife: 'Solo nightlife after group taps out',
        safetyConcern: 'May not be trustworthy solo after drinking',
        groupRule: 'Gets ONE "annoyingly drunk" pass'
      },
      
      // Budget — total lives in japan-trip-config.js → SITE_CONFIG.budget.personBudgets
      budgetNote: 'See SITE_CONFIG.budget.personBudgets for total. Includes flights and accommodation.',
      
      // Tags
      tags: ['Nightlife', 'Bars', 'Sightseeing', 'Konbini', 'Night Owl'],
      
      // Summary
      summary: 'Nightlife lead with a true midnight-4am itinerary. Chef who ironically is a picky eater and considers konbini a legitimate dinner option. Latest to bed, latest to rise. Here for travel and good times.'
    },

    conner: {
      // Basic Info
      id: 'conner',
      name: 'Conner',
      kanji: 'コナー',
      emoji: '☕',
      colorCode: '#2d6a4f',
      colorName: 'forest green',
      
      // Background
      origin: 'West Virginia',
      currentLocation: 'Charlotte, NC (the house with Steve & Boros)',
      work: 'Line chef at upscale restaurant (same as Steve)',
      chickFilA: 'High school (same location as Patrick, Jake, Steve)',
      
      // Trip Role
      tripRole: 'Culinary scout',
      japanExperience: 'First timer',
      languageSkills: 'None (なし)',
      activitiesPlanned: 1,
      activitiesNote: 'Interested in group activities',
      
      // Interests & Personality
      interests: {
        food: {
          focus: 'Chef\'s curiosity - wants to know regional differences',
          preference: 'Where locals actually eat, not tourist traps'
        },
        coffee: 'Coffee shop hunter, seeks out good local spots',
        temples: 'Interested but NOT more than others (overblown in current HTML)',
        personality: 'Quietest member of the group',
        nightlife: 'Jazz bars are his version',
        groupRole: 'Always finds something interesting wherever they land'
      },
      
      fitness: {
        level: 'Average',
        walkingAbility: 'Average'
      },
      
      sleepSchedule: {
        type: 'Flexible',
        notes: 'Can stay up late, wakes reasonably early'
      },
      
      // Drinking
      drinking: {
        preference: 'Whiskey',
        flexible: true,
        notes: 'Will drink anything'
      },
      
      // Travel Style
      travelStyle: {
        focus: 'Culinary explorer',
        values: 'Authenticity over tourist experiences',
        notInto: ['anime', 'collecting'],
        temples: 'Casual interest (same as everyone else)',
        development: 'Coffee shop list may develop as trip approaches'
      },
      
      // Budget — total lives in japan-trip-config.js → SITE_CONFIG.budget.personBudgets
      budgetNote: 'See SITE_CONFIG.budget.personBudgets for total. Includes flights and accommodation.',
      
      // Tags
      tags: ['Food', 'Temples', 'Jazz', 'Quiet Bars', 'Scenic Walks'],
      
      // Planning Notes
      planningNotes: [
        'As trip gets closer and he provides more info, revisit his interests',
        'Coffee shop list may develop'
      ],
      
      // Summary
      summary: 'Culinary scout with chef\'s curiosity about regional differences. Quietest member who seeks authenticity over tourist traps. Coffee shop hunter who appreciates jazz bars. Temple interest is casual, same as everyone else.'
    },

    boros: {
      // Basic Info
      id: 'boros',
      name: 'Boros',
      kanji: 'ボロス',
      emoji: '🍺',
      colorCode: '#0e7490',
      colorName: 'slate teal',
      
      // Background
      origin: 'North Carolina',
      currentLocation: 'Charlotte, NC (the house with Conner & Steve)',
      work: 'Sous chef at sister location (promoted from same restaurant as Conner/Steve)',
      chickFilA: 'High school at different NC location (not same as WV crew)',
      groupConnection: 'Joined via mutual friend after WV crew moved to Charlotte',
      
      // Trip Role
      tripRole: 'Nightlife, good vibes',
      japanExperience: 'First timer',
      languageSkills: 'None',
      activitiesPlanned: 0,
      activitiesNote: 'TBD - vibes-first approach',
      
      // Interests & Personality
      interests: {
        motivation: 'Not specifically interested in Japan (could be anywhere)',
        goal: 'Travel, drink, have a good time',
        planning: 'Vibes-first, plans-second',
        nightlife: 'Will befriend every bartender in Tokyo',
        food: 'Casual about food, NOT a picky eater (unlike Steve)',
        groupRole: 'Least in tune with the group but NOT an outsider',
        social: 'Makes friends easily, bar-focused'
      },
      
      fitness: {
        level: 'Heavier side',
        walkingAbility: 'May struggle with extended walking',
        notes: 'Will manage or speak up if needed'
      },
      
      sleepSchedule: {
        type: 'Can stay up late',
        notes: 'May join Steve\'s extended nights'
      },
      
      // Drinking
      drinking: {
        preference: 'Beer',
        flexible: true,
        notes: 'Will find drinks anywhere'
      },
      
      // Travel Style
      travelStyle: {
        planning: 'Doesn\'t need an itinerary',
        approach: 'Point him toward a bar and he\'ll figure it out',
        lateNight: 'May join Steve for late-night extensions',
        groupFit: 'Newer to the friend group but fully integrated'
      },
      
      // Budget — total lives in japan-trip-config.js → SITE_CONFIG.budget.personBudgets
      // Reference: SITE_CONFIG.budget.personBudgets[this.id]
      budgetNote: 'See SITE_CONFIG.budget.personBudgets for total. Includes flights and accommodation.',
      
      // Tags
      tags: ['Nightlife', 'Bars', 'Good Vibes'],
      
      // Summary
      summary: 'Good vibes specialist who will befriend every bartender in Tokyo. Here for travel and good times. Vibes-first, plans-second approach.'
    },

    silva: {
      // Basic Info
      id: 'silva',
      name: 'Silva',
      kanji: 'シルバ',
      emoji: '🎯',
      colorCode: null, // TBD if joins
      colorName: null,
      status: 'potential',
      
      // Background
      origin: 'North Carolina',
      currentLocation: 'Charlotte, NC (the house with Conner, Steve, Boros)',
      housingNote: 'Took Patrick\'s old room',
      work: 'TBD',
      chickFilA: 'High school at same NC location as Boros (not WV crew)',
      groupConnection: 'Boros\'s closest friend, part of general friend group',
      
      // Trip Role
      tripRole: 'TBD - potential member',
      japanExperience: 'First timer',
      languageSkills: 'Very light Japanese (anime + Duolingo)',
      activitiesPlanned: 0,
      activitiesNote: 'Would likely join Patrick/Jake activities',
      
      // Interests & Personality
      interests: {
        anime: true,
        gaming: true,
        japanCulture: 'Very into all things Japan',
        collecting: {
          focus: ['anime figures', 'One Piece', 'Dragon Quest', 'Power Rangers merch'],
          shopping: 'Would be Akihabara companion for Patrick/Jake'
        },
        friendNetwork: 'Strengthens Boros\'s connection (his closest friend)',
        overlap: 'High overlap with Patrick/Jake interests (anime, games, Japan culture, figure collecting)'
      },
      
      fitness: {
        level: 'Heaviest member',
        weight: '350 lbs',
        walkingAbility: 'Extended walking/stairs would be challenging',
        planningNote: 'Three members would need consideration for walking-heavy days if Silva joins'
      },
      
      sleepSchedule: {
        type: 'Middle range',
        notes: 'Fits well with most of group'
      },
      
      // Drinking
      drinking: {
        preference: 'Beer (mostly)',
        flexible: true,
        notes: 'Will drink anything, matches Patrick and Boros'
      },
      
      // Food
      food: {
        portions: 'Large portions - might affect restaurant budgeting',
        pickiness: 'Not picky'
      },
      
      // Travel Style
      travelStyle: {
        motivation: 'Very into Japan specifically',
        planning: 'Would defer to Patrick/Jake',
        shopping: 'High priority - figure collecting'
      },
      
      // Budget — total lives in japan-trip-config.js → SITE_CONFIG.budget.personBudgets
      budgetNote: 'See SITE_CONFIG.budget.personBudgets for total. Includes flights and accommodation.',
      
      // Tags
      tags: ['Anime', 'Gaming', 'Collecting', 'Japan Culture', 'Figures'],
      
      // Decision Factors
      decisionFactors: {
        pros: [
          'Strengthens Boros connection to group',
          'High interest overlap with Patrick/Jake',
          'Shopping companion for Akihabara',
          'Already lives with 3 members',
          'Some Japanese language skills'
        ],
        cons: [
          'Tightest budget ($3,500)',
          'Fitness challenges with walking/stairs',
          'Would make 3 members needing walking considerations',
          'Large portions could affect restaurant budgets'
        ]
      },
      
      // Summary
      summary: 'Potential 6th member. Very high interest in Japan, anime, games, and figure collecting. Would be natural Akihabara companion for Patrick/Jake.'
    }

  }, // end members

  // ==========================================
  // PRACTICAL CONSIDERATIONS
  // ==========================================
  practical: {
    
    fitnessWalking: {
      mostFit: ['patrick', 'steve'],
      average: ['conner'],
      mayStruggle: ['jake', 'boros'],
      silvaNote: 'If Silva joins: 350 lbs - extended walking/stairs would be challenging',
      planningNote: 'Don\'t plan special breaks, they\'ll manage or speak up',
      ifSilvaJoins: 'Three members would need consideration for walking-heavy days'
    },
    
    sleepSchedules: {
      earlyRisers: ['patrick', 'jake'],
      lateRiser: ['steve'],
      flexible: ['conner', 'boros']
    },
    
    budgetPhilosophy: {
      airbnbs: 'Good space and location, budget-conscious where possible',
      notSacrificing: ['comfort', 'location'],
      balance: 'Cheaper side but still quality'
    },
    
    drinkingSummary: [
      { member: 'patrick', preference: 'Beer & liquor', flexible: true },
      { member: 'jake', preference: 'Sweet drinks', flexible: true },
      { member: 'steve', preference: 'Sweet drinks', flexible: true },
      { member: 'conner', preference: 'Whiskey', flexible: true },
      { member: 'boros', preference: 'Beer', flexible: true },
      { member: 'silva', preference: 'Beer (mostly)', flexible: true, status: 'potential' }
    ],
    
    languageSkills: {
      conversational: [],
      basic: ['patrick'],
      little: ['jake'],
      veryLight: ['silva'],
      silvaNote: 'Very light Japanese (anime + Duolingo) - potential member',
      none: ['steve', 'conner', 'boros'],
      steveNote: 'Zero anxiety about having no Japanese'
    }
  },

  // ==========================================
  // MOTIVATION BREAKDOWN
  // ==========================================
  motivations: {
    japanSpecific: {
      members: ['patrick', 'jake', 'conner'],
      potentialMembers: ['silva'],
      reasons: {
        patrick: 'Return visitor, organizer',
        jake: 'Restaurant list, collecting, anime',
        conner: 'Culinary curiosity',
        silva: 'Very into anime, video games, all things Japan (potential)'
      }
    },
    travelVibes: {
      members: ['steve', 'boros'],
      reasons: {
        steve: 'Nightlife anywhere',
        boros: 'Bars and good times'
      }
    }
  },

  // ==========================================
  // HTML STATUS & UPDATES NEEDED
  // ==========================================
  htmlUpdates: {
    activityCounts: {
      patrick: 25,
      jake: 21,
      steve: 1,
      conner: 1,
      boros: 0
    },
    itemsToUpdate: [
      'Conner\'s bio: Overemphasizes temples, underemphasizes coffee shops and local restaurants',
      'Patrick\'s bio: Remove vlogger as personality trait (he\'ll vlog but it\'s not defining)',
      'Group dynamics: Clarify Jake\'s WV location and driving down',
      'Boros integration: Make clear he\'s fully in the group, just newest member',
      'Temple interest: Distribute evenly across group, not Conner-centric',
      'Steve\'s safety: Consider noting the "annoyingly drunk" rule somewhere'
    ]
  },

  // ==========================================
  // PRE-TRIP LOGISTICS
  // ==========================================
  // ⚠ DATA MOVED: Full logistics data lives in logistics.json
  // (flights, accommodation, booking timeline, critical dates, transport, money, connectivity)
  // Reference logistics.json directly — do not duplicate here.
  preTripLogistics: {
    _ref: 'See logistics.json for all flights, accommodation, booking timeline, and critical dates',
    packingNote: 'Everyone packing light — one large suitcase per person. Airbnbs need storage for 5 suitcases.',
    travelInsurance: 'Recommended — research and book alongside flights'
  },

  // ==========================================
  // HEALTH & DIETARY
  // ==========================================
  healthDietary: {
    allergies: {
      food: 'None',
      medications: 'None required'
    },
    
    dietaryRestrictions: {
      restrictions: 'None',
      note: 'Steve is picky but no actual restrictions'
    },
    
    smoking: {
      status: 'Occasional cigarettes after drinking',
      consistentSmokers: 'None',
      planningNote: 'Not a factor for accommodations, but note for bar selection'
    }
  },

  // ==========================================
  // SOCIAL DYNAMICS & CONFLICT
  // ==========================================
  socialDynamics: {
    contentCreation: {
      primaryVloggers: ['patrick', 'jake'],
      comfortLevel: 'Everyone is good being in videos',
      socialMedia: 'Intermittent posting, not constant content creation'
    },
    
    conflictResolution: {
      strategy: 'Group will split up at points to alleviate tensions',
      philosophy: 'Expected and healthy for 16-day trip with 5 people'
    },
    
    personalSpace: {
      patrick: 'Will need alone time to recharge',
      others: 'TBD but splitting up is acceptable group strategy'
    },
    
    navigationResponsibilities: {
      primary: 'patrick',
      primaryNote: 'Experienced, knows Japan',
      secondary: 'jake',
      secondaryNote: 'Also capable map reader',
      others: 'Can follow but not primary navigators'
    },
    
    moneyManagement: {
      sharedExpenses: 'Split evenly across all members',
      philosophy: 'No single person bears the burden',
      planningNote: 'Need system for tracking (Venmo/Splitwise) and settling'
    },
    
    decisionMaking: {
      primary: 'patrick',
      primaryNote: 'When group can\'t decide',
      secondary: 'jake',
      secondaryNote: 'Also makes calls',
      style: 'Democratic but Patrick/Jake break deadlocks'
    },
    
    foodTiming: {
      schedule: 'Generally normal meal times (not rigid)',
      flexibility: 'Eat when hungry acceptable',
      hangry: 'Group doesn\'t need strict meal schedules'
    },
    
    morningRoutines: {
      patrick: 'Needs caffeine (vending machine coffee is fine)',
      others: 'TBD but no major requirements noted'
    }
  },

  // ==========================================
  // HELPER FUNCTIONS
  // ==========================================
  
  getMember: function(memberId) {
    return this.members[memberId];
  },

  getAllMembers: function() {
    return Object.values(this.members);
  },

  getMembersByTag: function(tag) {
    return this.getAllMembers().filter(member => 
      member.tags && member.tags.includes(tag)
    );
  },

  getMemberColor: function(memberId) {
    const member = this.getMember(memberId);
    return member ? member.colorCode : null;
  },

  getMemberName: function(memberId) {
    const member = this.getMember(memberId);
    return member ? member.name : null;
  },

  getEarlyRisers: function() {
    return this.practical.sleepSchedules.earlyRisers.map(id => this.getMember(id));
  },

  getNightOwls: function() {
    return this.getAllMembers().filter(member => 
      member.sleepSchedule && member.sleepSchedule.type.includes('night')
    );
  },

  getFitMembers: function() {
    return this.practical.fitnessWalking.mostFit.map(id => this.getMember(id));
  },

  getJapanMotivated: function() {
    return this.motivations.japanSpecific.members.map(id => this.getMember(id));
  },

  getVibesMotivated: function() {
    return this.motivations.travelVibes.members.map(id => this.getMember(id));
  },

  getLivingArrangements: function() {
    return this.groupDynamics.livingArrangements;
  },

  getCoreWVCrew: function() {
    return this.groupDynamics.coreWVCrew.map(id => this.getMember(id));
  },

  getBudgets: function() {
    return this.getAllMembers().map(member => ({
      name: member.name,
      id: member.id,
      budget: (typeof SITE_CONFIG !== 'undefined') ? SITE_CONFIG.budget.personBudgets[id] : null,
      status: member.budget ? member.budget.status : null,
      isPotential: member.status === 'potential'
    })).sort((a, b) => (b.budget || 0) - (a.budget || 0));
  },

  getTotalBudget: function(includePotential = false) {
    return this.getAllMembers()
      .filter(m => includePotential || m.status !== 'potential')
      .reduce((sum, m) => sum + (m.budget ? m.budget.total : 0), 0);
  },

  getPotentialMembers: function() {
    return this.getAllMembers().filter(m => m.status === 'potential');
  },

  getConfirmedMembers: function() {
    return this.getAllMembers().filter(m => m.status !== 'potential');
  }

}; // end CREW_DATA

// Make available globally and for Node.js exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CREW_DATA;
}
if (typeof window !== 'undefined') {
  window.CREW_DATA = CREW_DATA;
}
