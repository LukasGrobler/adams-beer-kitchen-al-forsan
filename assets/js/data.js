/* Adam's Beer Kitchen Al Forsan: everything the site shows lives here.
   Update a price or a time here and every page follows.
   Days: 0 Sunday, 1 Monday, ... 6 Saturday. Times are UAE time, 24h.
   "sample: true" marks a night we invented as an example until the team confirms the real schedule;
   those show a small "Example, to confirm" tag on the site. */

window.ABK_DATA = {
  theme: "forsan",
  key: "abk_forsan",

  venue: {
    name: "Adam's Beer Kitchen",
    branch: "Al Forsan",
    short: "Al Forsan",
    full: "Adam's Beer Kitchen Al Forsan",
    greet: "Hi Adam's Beer Kitchen Al Forsan!",
    phone: "+971547034324",
    phoneDisplay: "+971 54 703 4324",
    whatsapp: "971547034324",
    address: ["The clubhouse, Al Forsan International Sports Resort", "Al Asayil Street, Khalifa City", "Abu Dhabi"],
    addressLine: "The clubhouse, Al Forsan International Sports Resort, Al Asayil Street, Khalifa City, Abu Dhabi",
    locality: "Khalifa City, Abu Dhabi",
    whereShort: "Al Forsan International Sports Resort, Khalifa City",
    headerSub: "Al Forsan Sports Resort, Khalifa City",
    google: { rating: "4.7", count: 25 },
    maps: "https://www.google.com/maps/place/?q=place_id:ChIJO1Jp0hFHXj4RSghMOu2BPMg",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJO1Jp0hFHXj4RSghMOu2BPMg",
    instagram: "https://www.instagram.com/adamsbeerkitchen/",
    handle: "@adamsbeerkitchen",
    /* Google has no hours for this branch yet; these come from its Best Bites listing. To confirm. */
    hours: { 0: ["12:00", "03:00"], 1: ["15:00", "01:00"], 2: ["15:00", "01:00"], 3: ["15:00", "01:00"], 4: ["15:00", "01:00"], 5: ["12:00", "03:00"], 6: ["12:00", "03:00"] },
    /* SAMPLE happy hour, to confirm */
    happyHour: { 0: ["12:00", "19:00"], 1: ["15:00", "19:00"], 2: ["15:00", "19:00"], 3: ["15:00", "19:00"], 4: ["15:00", "19:00"], 5: ["12:00", "19:00"], 6: ["12:00", "19:00"] },
    hhNote: "Every day till 7PM",
    hhLine: "Happy hour every day till 7PM.",
    footerNote: "Parking at the resort",
    findLede: "In the main clubhouse at Al Forsan International Sports Resort, Khalifa City, next to the karting track and a short walk from the wakeboarding lakes.",
    parkingTitle: "Parking at the resort",
    parkingText: "Use the resort car parks just east of the clubhouse and walk over; it's a minute or two."
  },

  nav: [
    ["whats-on.html", "What's on"],
    ["make-a-day.html", "Make a day of it"],
    ["families.html", "Families", "opt"],
    ["groups.html", "Team days", "opt"],
    ["menu.html", "Menu"]
  ],
  more: [
    ["families.html", "Families", "opt"],
    ["groups.html", "Team days & groups", "opt"],
    ["race-weekend.html", "Race weekend"],
    ["offers.html", "Offers"],
    ["gallery.html", "Gallery"],
    ["reviews.html", "Reviews"],
    ["about.html", "Our story"],
    ["find-us.html", "Find us"]
  ],
  explore: [["whats-on.html", "What's on"], ["make-a-day.html", "Make a day of it"], ["families.html", "Families"], ["groups.html", "Team days & groups"], ["race-weekend.html", "Race weekend"], ["menu.html", "Menu"], ["offers.html", "Offers"], ["gallery.html", "Gallery"], ["reviews.html", "Reviews"], ["about.html", "Our story"], ["find-us.html", "Find us"]],
  footerBlurb: "The clubhouse at Al Forsan International Sports Resort. Good food, great drinks and better vibes, after the game or instead of it.",
  siblings: 'Also pouring: <a href="https://lukasgrobler.github.io/adams-beer-kitchen-al-reem/">Adam\'s Beer Kitchen Al Reem Island</a> and <a href="https://lukasgrobler.github.io/adams-beer-kitchen-jvc/">Adam\'s Beer Kitchen JVC, Dubai</a>.',
  replayLabel: "Roll the board again (replay the intro)",
  gateNo: "Come back on your 21st. Until then, bring a grown-up for the nuggets and chips.",
  gateExtra: "Families are welcome for food during the day.",
  introSlogan: ["Good food.", "Great drinks.", "Better vibes."],
  marquee: ["Good food. Great drinks. Better vibes.", "Happy hour every day till 7PM", "Kids welcome", "Team days and big groups", "Every F1 race on the big screens", "Sunday roast buffet"],

  artists: {
    "quizmaster": { name: "The quizmaster", role: "Quiz host", initials: "Q" }
  },

  /* Weekly nights. "slots" drive the scoreboard, the calendar files and the booking form. */
  events: [
    {
      slug: "burger-monday", days: [1], dayLabel: "Every Monday", sample: true,
      name: "Burger Mondays", with: "Any burger, fries and a house pint",
      cats: ["food"], img: "burger", img2: "hall",
      short: "Any burger with fries and a house pint for AED 79.",
      intro: "Monday's an easy one. Pick any burger, it comes with fries and a house pint, and it's AED 79 from 5PM.",
      facts: [["From", "5PM"], ["Deal", "Burger, fries + pint"], ["Price", "AED 79"]],
      deal: { title: "Any burger with fries and a house pint", note: "Every Monday from 5PM", price: 79 },
      slots: [{ label: "Burger Mondays", start: "17:00", end: "23:00", price: "AED 79 with a pint" }],
      week: { title: "Burger Mondays", lines: [["From 5PM", "Burger, fries + a house pint"], ["Price", "AED 79"]] }
    },
    {
      slug: "quiz-night", days: [2], dayLabel: "Every Tuesday", sample: true,
      name: "Clubhouse Quiz", with: "Teams of up to six",
      cats: ["quiz"], img: null, img2: "hall",
      short: "Teams of up to six, a sport round and a bar tab for the winners.",
      intro: "Khalifa City's brains, assemble. Teams of up to six from 7:30PM, with a sport round, a music round and a bar tab for the winning team.",
      facts: [["Quiz", "7:30PM – 9:30PM"], ["Teams", "Up to 6"], ["Prize", "A bar tab"]],
      lineup: [{ who: "quizmaster", time: "7:30PM – 9:30PM" }],
      slots: [{ label: "Clubhouse quiz", start: "19:30", end: "21:30", price: "Free to play" }],
      hallOfFame: true,
      week: { title: "Clubhouse quiz", lines: [["7:30PM", "Teams of up to 6"], ["Prize", "A bar tab for the winners"]] }
    },
    {
      slug: "ladies-night", days: [3], dayLabel: "Every Wednesday", sample: true,
      name: "Ladies Night", with: "Three drinks and Adam's signature platter",
      cats: ["drinks"], img: "bar", img2: "hall",
      short: "3 selected drinks and Adam's signature platter for AED 75.",
      intro: "Wednesday belongs to the ladies: three selected drinks and Adam's signature platter for AED 75, from 8PM.",
      facts: [["When", "8PM – 11PM"], ["Package", "3 drinks + platter"], ["Price", "AED 75"]],
      deal: { title: "3 selected drinks + Adam's signature platter", note: "Ladies, 8PM – 11PM", price: 75 },
      slots: [{ label: "Ladies night", start: "20:00", end: "23:00", price: "AED 75, 3 drinks + platter" }],
      week: { title: "Ladies night", lines: [["AED 75", "3 selected drinks + platter"], ["8PM – 11PM", "In the clubhouse"]] }
    },
    {
      slug: "curry-club", days: [4], dayLabel: "Every Thursday", sample: true,
      name: "Curry Club", with: "A curry, rice, naan and a pint",
      cats: ["food"], img: null, img2: "bar",
      short: "A curry with rice, naan and a house pint for AED 69.",
      intro: "Thursday is curry night. Pick from the curries; it comes with rice, naan and a house pint, from 6PM.",
      facts: [["From", "6PM"], ["Deal", "Curry, rice, naan + pint"], ["Price", "AED 69"]],
      deal: { title: "Curry, rice, naan and a house pint", note: "Every Thursday from 6PM", price: 69 },
      slots: [{ label: "Curry club", start: "18:00", end: "23:00", price: "AED 69 with a pint" }],
      week: { title: "Curry club", lines: [["From 6PM", "Curry, rice, naan + a pint"], ["Price", "AED 69"]] }
    },
    {
      slug: "family-friday", days: [5], dayLabel: "Every Friday", sample: true,
      name: "Family Fridays", with: "Kids eat free, and a film on the big screen",
      cats: ["family", "food"], img: "spread", img2: "hall",
      short: "Kids eat free with every adult main till 6PM, and a family film on the big screen at 4PM.",
      intro: "Fridays are for the whole family. From midday till 6PM, kids eat free from the kids' menu with every adult main, and at 4PM there's a family film on the big screen.",
      facts: [["Kids eat free", "12PM – 6PM"], ["Film", "4PM, big screen"], ["Play area", "Outside"]],
      deals: [["Kids' meal with every adult main", "Free", "12PM – 6PM, from the kids' menu"]],
      slots: [{ label: "Kids eat free", start: "12:00", end: "18:00", price: "With every adult main" }, { label: "Family film on the big screen", start: "16:00", end: "18:00", price: "Free" }],
      week: { title: "Family Fridays", lines: [["12PM – 6PM", "Kids eat free with an adult main"], ["4PM", "Family film on the big screen"]] }
    },
    {
      slug: "sport-saturday", days: [6], dayLabel: "Every Saturday", sample: true,
      name: "Sport Saturday", with: "Every kick-off on the big screens",
      cats: ["sport"], img: "hall", img2: "bar",
      short: "Every Premier League kick-off on the big screens in the hall.",
      intro: "Saturday follows the fixture list: every Premier League game on the big screens in the hall, and the motorsport too when it's on.",
      facts: [["Kick-offs", "From 3:30PM"], ["Screens", "All round the hall"], ["Groups", "Long tables"]],
      slots: [{ label: "Football on the big screens", start: "15:30", end: "23:30" }],
      week: { title: "Sport Saturday", lines: [["From 3:30PM", "Every kick-off on the big screens"], ["Groups", "Book the long tables"]] }
    },
    {
      slug: "sunday-roast", days: [0], dayLabel: "Every Sunday", sample: true,
      name: "Sunday Roast Buffet", with: "Carved meats and all the trimmings",
      cats: ["food", "family"], img: "buffet", img2: "hall",
      short: "The roast buffet with all the trimmings, from midday till 6PM.",
      intro: "Sunday means the roast buffet: carved meats, roast potatoes, vegetables and plenty of gravy, from midday till 6PM. Bring the family.",
      facts: [["Buffet", "12PM – 6PM"], ["Price", "AED 99"], ["Kids", "Half price"]],
      deals: [["Sunday roast buffet", 99], ["Kids under 12", "Half price"]],
      slots: [{ label: "Sunday roast buffet", start: "12:00", end: "18:00", price: "AED 99, kids half price" }],
      week: { title: "Sunday roast", lines: [["12PM – 6PM", "Roast buffet, AED 99"], ["Kids", "Half price"]] }
    }
  ],

  /* Tonight takeover: on each day the homepage headline becomes that day's main event. */
  takeover: {
    1: { slug: "burger-monday", lines: ["Burger", "Mondays"], sub: "Any burger with fries and a house pint for AED 79, from 5PM." },
    2: { slug: "quiz-night", lines: ["Quiz", "night"], sub: "Teams of up to six from 7:30PM, with a bar tab for the winners." },
    3: { slug: "ladies-night", lines: ["Ladies", "night"], sub: "Three selected drinks and Adam's signature platter for AED 75, from 8PM." },
    4: { slug: "curry-club", lines: ["Curry", "club"], sub: "A curry with rice, naan and a house pint for AED 69, from 6PM." },
    5: { slug: "family-friday", lines: ["Family", "Fridays"], sub: "Kids eat free with every adult main till 6PM, and a film on the big screen at 4PM." },
    6: { slug: "sport-saturday", lines: ["Sport", "Saturday"], sub: "Every kick-off on the big screens, from the early game to the late one." },
    0: { slug: "sunday-roast", lines: ["Sunday", "roast"], sub: "The roast buffet with all the trimmings, from midday till 6PM." }
  },

  offers: [
    {
      slug: "happy-hour", name: "Happy Hour", with: "Every day till 7PM", cats: ["drinks"], img: "bar", sample: true,
      dayLabel: "Every day till 7PM",
      short: "From 3PM Monday to Thursday, and from midday Friday to Sunday.",
      intro: "Come off the track, the lake or the paintball field and straight into happy hour. It runs every day till 7PM: from 3PM Monday to Thursday, and from midday Friday to Sunday.",
      facts: [["Mon – Thu", "3PM – 7PM"], ["Fri – Sun", "12PM – 7PM"], ["Where", "The whole clubhouse"]]
    }
  ],

  specials: [
    {
      slug: "abu-dhabi-grand-prix", name: "Abu Dhabi Grand Prix Weekend", short_name: "Grand Prix", with: "Every session on the big screens", sample: true,
      from: "2026-12-04", to: "2026-12-06", when: "4 – 6 December", img: "hall",
      short: "Every session on the big screens, 15 minutes from Yas Marina, with the karting track next door.",
      intro: "The season finale is about 15 minutes away at Yas Marina. Watch practice, qualifying and the race on the big screens in the hall, and if lights out gets you going, the karting track is right next door.",
      vouchers: [["Race-day table for 6 with sharing platters", "TBC"]],
      fine: "Race-weekend packages and prices to be confirmed."
    }
  ],

  /* Real Google reviews from the venue's Google profile. Names shortened. */
  reviews: [
    { name: "Tamsin H.", meta: "Google review", featured: true, text: "We celebrated our daughter’s 10th birthday at Adam’s Bar and Restaurant and it was amazing! The food was perfect nuggets and chips for the kiddies and a wide range adults menu, the staff were so friendly and attentive, and everything ran perfectly from start to finish. … The small outdoor play area for the kids was such a bonus, and putting a film on the big screen in the evening was a brilliant touch!" },
    { name: "Ali T.", meta: "Google review", text: "Absolutely love this place! Vishan and his staff are incredible - super welcoming, attentive, and they make the whole experience even better. Highly recommend!" },
    { name: "Cleo", meta: "Google review", text: "Very lovely place, amazing staff, good food highly recommended" },
    { name: "Mai T.", meta: "Google review", text: "I love this place and the food it’s so good really recommend" },
    { name: "Abdullah M.", meta: "Google review", text: "Loved the place very nice service and great atmosphere" }
  ],

  /* SAMPLE: Vishan is named in guest reviews; the rest of the roles and lines are to be confirmed with the team. */
  crew: [
    { name: "Vishan", role: "Manager", initials: "V", line: "Guests know him as Vash. One reviewer called him “a credit to the establishment”. Planning a party? Ask for Vishan." },
    { name: "The floor team", role: "Front of house", initials: "F", line: "“Super welcoming, attentive”, according to Google. They'll find you a table near the screens." },
    { name: "The kitchen", role: "Back of house", initials: "K", line: "Nuggets and chips for the kids, a wide menu for the grown-ups and the Sunday roast buffet." },
    { name: "The bar", role: "Behind the bar", initials: "B", line: "Cold beers and crafted drinks, as promised on the sign. Happy hour every day till 7PM." }
  ],

  hof: { title: "Clubhouse Quiz Honours", sub: "Tuesday's winners, painted on the board", note: "Sample names, real winners added every Tuesday", photo: null },
  /* SAMPLE quiz winners, replaced every Tuesday once live. */
  hallOfFame: [
    ["13 Oct 2026", "Kart Blanche"],
    ["6 Oct 2026", "Paint Misbehavin'"],
    ["29 Sep 2026", "The Pit Crew"],
    ["22 Sep 2026", "Wakeboard Meeting"],
    ["15 Sep 2026", "Quizzy Rascals"],
    ["8 Sep 2026", "Saddle Up"]
  ],

  /* Photos from the venue's Google profile; swap for the venue's own shots before launch. */
  gallery: [
    { img: "hall", cap: "The hall, before the crowd" },
    { img: "bar", cap: "The bar" },
    { img: "buffet", cap: "The roast buffet" },
    { img: "burger", cap: "A proper burger" },
    { img: "spread", cap: "Something for the table" }
  ],
  wallCta: "Tag {handle} on Instagram and your photo could end up on the clubhouse wall.",

  menus: { food: null, drinks: null },
  menuCopy: {
    food: ["Food menu", "The full food menu, kids' menu included, lands here as soon as the kitchen sends the latest version. Want it now? Ask on WhatsApp and we'll send it over."],
    drinks: ["Drinks menu", "Cold beers, crafted drinks and cocktails. The full list is on its way to this page; ask on WhatsApp and we'll send it straight away."]
  },
  /* Dishes mentioned by guests or seen in the venue's photos, so Adam can answer food questions. [name, details, AED or null, search words] */
  menuItems: [
    ["Kids' nuggets and chips", "A hit at birthday parties", null, "nuggets nugget kids chips"],
    ["Burgers", "With fries", null, "burger burgers cheeseburger"],
    ["Sharing platters", "Pizza, nachos, wings, sliders and fries", null, "platter platters sharing wings nachos sliders"],
    ["Pizza", "", null, "pizza margherita"],
    ["Sunday roast buffet", "Sundays from midday", 99, "roast sunday buffet carvery"],
    ["Curries", "Thursday is curry club", 69, "curry curries naan"],
    ["Salads", "", null, "salad healthy"]
  ],
  dishes: [
    ["Nuggets and chips", "From the kids' menu. One birthday party called them perfect", ""],
    ["Burgers", "With fries, and with a pint on Mondays", ""],
    ["Sharing platters", "Pizza, nachos, wings, sliders and fries for the table", ""],
    ["Sunday roast buffet", "Carved meats and all the trimmings", ""],
    ["Curry club", "Thursday's curry, rice, naan and a pint", ""],
    ["Something lighter", "Salads and bites for the healthy half of the table", ""]
  ],

  seats: ["No preference", "Inside the hall", "Outside, by the play area", "Near the big screens", "Big group area", "Kids' party"],
  filters: [["all", "Everything"], ["family", "Family"], ["quiz", "Quiz"], ["sport", "Sport"], ["food", "Food deals"], ["drinks", "Drinks deals"]],
  goodToKnow: [
    ["pin", "In the clubhouse at Al Forsan", 'Al Forsan International Sports Resort, Khalifa City. First time? <a class="link" href="find-us.html">Read the 30-second guide</a>'],
    ["car", "Parking at the resort", "Use the resort car parks just east of the clubhouse."],
    ["kid", "Kids welcome", "Family-friendly during the day, with a kids' menu and a small outdoor play area."],
    ["wa", "Book on WhatsApp", "Big groups and parties: tell us early and we'll set up."]
  ],
  packageNote: "Packages come in two levels. The team will happily talk you through what's in each.",
  defaultPhoto: "hall",
  liveLink: "whats-on.html",
  resortUrl: "https://www.alforsan.ae/",

  /* Make a day of it: the resort's activities and how long to allow, so the planner can suggest a table time. */
  activities: [
    { key: "karting", name: "Karting", short: "karting", say: "karting", mins: 60, icon: "flag", note: "Allow about an hour with the safety briefing.", match: "\\b(karting|go kart|go-kart|kart|karts)\\b" },
    { key: "wakeboarding", name: "Wakeboarding", short: "wakeboarding", say: "wakeboarding on the lakes", mins: 90, icon: "sun", note: "Allow about an hour and a half to ride and dry off.", match: "\\b(wakeboard\\w*|cable park|water ?ski\\w*)\\b" },
    { key: "paintball", name: "Paintball", short: "paintball", say: "paintball", mins: 120, icon: "target", note: "A game with the briefing takes about two hours.", match: "\\bpaintball\\w*\\b" },
    { key: "shooting", name: "Shooting & archery", short: "the shooting range", say: "a session at the shooting range", mins: 60, icon: "target", note: "Allow about an hour for a session.", match: "\\b(shooting|clay|archery|range)\\b" },
    { key: "riding", name: "Horse riding", short: "your ride", say: "horse riding at the equestrian centre", mins: 60, icon: "leaf", note: "Allow about an hour for a lesson or a hack.", match: "\\b(horse\\w*|riding|equestrian)\\b" },
    { key: "golf", name: "Golf nearby", short: "your round", say: "a round at Abu Dhabi Golf Club", mins: 270, icon: "flag", note: "Eighteen holes at Abu Dhabi Golf Club, just down the road, takes about four and a half hours.", match: "\\b(golf\\w*|18 holes|nine holes)\\b" }
  ],

  /* Formula 1, rest of the 2026 season. Lights-out times are UAE time and approximate; check nearer the date. */
  races: [
    { name: "United States Grand Prix", place: "Austin", date: "2026-10-25", time: "23:00" },
    { name: "Mexico City Grand Prix", place: "Mexico City", date: "2026-11-02", time: "00:00", note: "That's the early hours of Monday" },
    { name: "São Paulo Grand Prix", place: "São Paulo", date: "2026-11-08", time: "21:00" },
    { name: "Las Vegas Grand Prix", place: "Las Vegas", date: "2026-11-22", time: "08:00", note: "A Sunday-morning race over here" },
    { name: "Qatar Grand Prix", place: "Lusail", date: "2026-11-29", time: "20:00" },
    { name: "Abu Dhabi Grand Prix", place: "Yas Marina", date: "2026-12-06", time: "17:00", home: true }
  ],

  /* Ask Adam: the branch-specific answers. Everything else is worked out from the schedule above. */
  adam: {
    main: [["tonight", "What's on today?"], ["hh", "Is it happy hour?"], ["planner", "Make a day of it"], ["kids", "Bringing the kids?"], ["find", "How do I find you?"], ["book", "Book a table"], ["more", "More questions"]],
    more: [["groups", "Team day or big group?"], ["party", "Kids' birthday party?"], ["race", "Next F1 race?"], ["sport", "Football on?"], ["deals", "Any deals today?"], ["menu", "Show me the menu"], ["hours", "Opening hours"], ["human", "Talk to the team"]],
    greeting: "Ask me anything about Adam's Beer Kitchen Al Forsan: what's on, happy hour, bringing the kids, a table after karting or wakeboarding, or just type naturally, like “table for 8 after paintball on Saturday”.",
    placeholder: "Ask me anything, e.g. table for 8 after karting",
    hhLine: "Happy hour runs every day till 7PM: from 3PM Monday to Thursday, and from midday Friday to Sunday.",
    hoursExtra: "Parking is at the resort, just east of the clubhouse.",
    liveIntro: "Here's who's on this week:",
    find: "We're in the <b>main clubhouse at Al Forsan International Sports Resort</b> in Khalifa City, next to the karting track and a short walk from the wakeboarding lakes. It's about 10 minutes from the airport and 15 from Yas Island.",
    parking: "Park in the <b>resort car parks just east of the clubhouse</b> and walk over; it's a minute or two.",
    dealOfDay: { 1: "burger-monday", 2: "quiz-night", 3: "ladies-night", 4: "curry-club", 5: "family-friday", 6: "sport-saturday", 0: "sunday-roast" },
    menuIntro: "A few favourites from the kitchen:",
    sport: "The football's on the <b>big screens in the hall</b>, and every F1 race too. Yas Marina is about 15 minutes away for race weekend.",
    sportBtn: ["Race weekend", "race-weekend.html"],
    groups: "Team days, birthdays and big groups are what the hall is for. Tell me the date and how many of you, or see the team-day packages.",
    groupsPage: true,
    kids: "Yes, families are welcome during the day. There's a <b>kids' menu</b> (the nuggets and chips are a hit), a <b>small outdoor play area</b>, and on Family Fridays kids eat free till 6PM.",
    kidsChips: [["party", "Kids' birthday party?"], ["menu", "Show me the menu"], ["book", "Book a table"]],
    veg: "Yes, there are vegetarian dishes on the menu. For vegan or allergy questions, the team will check with the kitchen.",
    access: "If you need step-free access or anything set up, let the team know before you come and they'll sort it.",
    terrace: "There's outdoor seating by the <b>small play area</b>, so the grown-ups can sit outside while the kids play. Want a table outside?",
    terraceBook: "Book a table outside",
    terraceSeat: "Outside, by the play area",
    games: "The karting track is right next door, and the big screens have the football and the F1. Ask the team what else is on the night.",
    drinks: "Cold beers, crafted drinks and cocktails, with happy hour every day till 7PM. The team can send the drinks menu on WhatsApp.",
    activity: "we'll have your table ready, and the kitchen's open till late.",
    party: "Kids' birthday parties are a favourite here: <b>nuggets and chips for the kids</b>, a menu for the grown-ups, the play area, and a <b>film on the big screen</b> if you ask. Tell us the date and numbers and the team will set it up.",
    jokes: [
      "Why did the go-kart stop at the bar? It needed a pit stop. The kitchen's open till late.",
      "What do wakeboarders order after the lake? Something cold, and a towel. Happy hour runs till 7PM.",
      "Our quizmaster says there are no stupid answers. He hasn't marked Tuesday's yet.",
      "What's a paintballer's favourite drink? Anything that doesn't sting. Book a table for after the game."
    ],
    dishIntro: "From our kitchen:",
    priceNote: "Prices are on the menu; the team can send it over on WhatsApp.",
    prices: "A quick guide:",
    priceRows: [["AED 69", "Curry club", "Thursday, with a pint"], ["AED 79", "Burger Mondays", "With fries and a pint"], ["AED 99", "Sunday roast buffet", "Kids half price"], ["Till 7PM", "Happy hour", "Every day"]],
    vocab: "forsan clubhouse karting wakeboarding paintball shooting archery horse riding golf vishan marriott khalifa resort lakes film movie nuggets curry",
    eventWords: [["\\b(quiz|trivia)\\b", "quiz-night"], ["\\bladies\\b", "ladies-night"], ["\\bburger monday", "burger-monday"], ["\\bcurry\\b", "curry-club"], ["\\b(family friday|kids eat free)", "family-friday"], ["\\b(sport saturday|saturday sport)", "sport-saturday"], ["\\broast\\b", "sunday-roast"], ["\\b(abu dhabi grand prix|grand prix weekend|yas marina)\\b", "abu-dhabi-grand-prix"]],
    seatWords: [["\\b(outside|outdoor|terrace|play area)\\b", "Outside, by the play area"], ["\\bscreens?\\b", "Near the big screens"], ["\\b(kids party|birthday party)\\b", "Kids' party"]]
  }
};
