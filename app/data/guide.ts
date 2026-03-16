export interface GuideEntry {
  id: string;
  title: string;
  emoji: string;
  description: string;
  /** Optional coordinates for map display [lat, lng] */
  coordinates?: [number, number];
}

export interface GuideSection {
  id: string;
  label: string;
  emoji: string;
  entries: GuideEntry[];
}

export const guideSections: GuideSection[] = [
  {
    id: "attractions",
    label: "Attractions",
    emoji: "🏛️",
    entries: [
      {
        id: "molyvos",
        title: "Molyvos (Mithymna) Castle",
        emoji: "🏰",
        description:
          "A stunning medieval castle perched atop the picturesque village of Molyvos. Walk through the cobblestone streets, browse artisan shops, and enjoy breathtaking sunset views from the castle walls. The village below is one of the most beautiful in all of Greece.",
        coordinates: [39.3697, 26.1753],
      },
      {
        id: "petrified-forest",
        title: "Petrified Forest of Lesvos",
        emoji: "🌳",
        description:
          "A UNESCO Global Geopark and one of the most important natural monuments in the world. Explore fossilized trees that are 15–20 million years old. The main park is near Sigri, with a wonderful museum explaining the geological history.",
        coordinates: [39.2133, 25.8533],
      },
      {
        id: "sigri",
        title: "Sigri Village & Beach",
        emoji: "🏖️",
        description:
          "A tranquil fishing village at the western tip of Lesvos. Sigri has a charming harbour, a small Ottoman castle, and excellent uncrowded beaches. It's also a popular spot for windsurfing and kitesurfing.",
        coordinates: [39.2133, 25.8533],
      },
      {
        id: "skala-eresou",
        title: "Skala Eresou",
        emoji: "🌊",
        description:
          "A vibrant beach town with a long sandy shore and a laid-back atmosphere. Known as the birthplace of the ancient poet Sappho. Great tavernas line the waterfront, and the sunsets here are unforgettable.",
        coordinates: [39.1356, 25.9333],
      },
      {
        id: "plomari",
        title: "Plomari — The Ouzo Capital",
        emoji: "🥃",
        description:
          "This charming coastal town is the ouzo-making capital of Greece. Visit distilleries like Barbayiannis or Plomari Ouzo, stroll the old quarter, and enjoy fresh seafood by the harbour. Don't miss the pebble beach of Agios Isidoros nearby.",
        coordinates: [39.0344, 26.3567],
      },
      {
        id: "thermi",
        title: "Thermi Hot Springs",
        emoji: "♨️",
        description:
          "Lesvos is famous for its natural thermal springs. The springs at Thermi (east coast) and Eftalou (near Molyvos) have been used since antiquity. The mineral-rich waters are said to help with skin and joint conditions. A wonderfully relaxing experience!",
        coordinates: [39.1667, 26.5333],
      },
      {
        id: "mytilene",
        title: "Mytilene Town",
        emoji: "🏘️",
        description:
          "The island's capital and main port. Explore the impressive Fortress of Mytilene, the Archaeological Museum, and the lively harbour promenade. The town has excellent restaurants, cafés, and shopping along Ermou Street.",
        coordinates: [39.1043, 26.2765],
      },
    ],
  },
  {
    id: "dining",
    label: "Dining",
    emoji: "🍽️",
    entries: [
      {
        id: "ouzo-mezedes",
        title: "Ouzo & Mezedes",
        emoji: "🥃",
        description:
          "The quintessential Lesvos experience! Order a carafe of local ouzo with a spread of small plates — grilled octopus, fried zucchini balls (kolokithokeftedes), fava, and local cheeses. Ouzo turns milky white when mixed with water or ice. Sip slowly and enjoy!",
      },
      {
        id: "sardines",
        title: "Sardeles Pastes (Salted Sardines)",
        emoji: "🐟",
        description:
          "Lesvos sardines from the Gulf of Kalloni are famous throughout Greece. Sardeles pastes (salt-cured) are a local delicacy — served with a drizzle of olive oil and lemon. Fresh grilled sardines are equally delicious and found at almost every seaside taverna.",
      },
      {
        id: "ladotyri",
        title: "Ladotyri Cheese",
        emoji: "🧀",
        description:
          "A traditional Lesvos cheese preserved in olive oil (\"ladotyri\" literally means oil-cheese). It has a rich, tangy flavour and pairs perfectly with bread, tomatoes, and a glass of ouzo. Look for it at local delis and markets.",
      },
      {
        id: "olive-oil",
        title: "Lesvos Olive Oil",
        emoji: "🫒",
        description:
          "Lesvos has over 11 million olive trees! The local extra virgin olive oil is exceptional — fruity, golden-green, and full of flavour. Visit a traditional olive press (eleotriveio) or buy bottles directly from producers. It makes the perfect gift to bring home.",
      },
      {
        id: "taverna-tips",
        title: "Choosing a Taverna",
        emoji: "🏠",
        description:
          "Look for tavernas where locals eat — that's usually the best sign. Seaside spots in Molyvos, Petra, and Skala Eresou are wonderful. Don't skip the \"piato tis imeras\" (dish of the day) — it's always fresh. Greek salad, grilled meats, and moussaka are reliable favourites anywhere you go.",
      },
      {
        id: "breakfast",
        title: "Breakfast & Bakeries",
        emoji: "🥐",
        description:
          "Greek bakeries (fournos) open early and offer delicious pastries: bougatsa (custard pie), tiropita (cheese pie), and spanakopita (spinach pie). Pair with a Greek coffee or freddo cappuccino for the perfect morning start.",
      },
    ],
  },
  {
    id: "culture",
    label: "Culture",
    emoji: "🎭",
    entries: [
      {
        id: "olive-tradition",
        title: "The Olive Oil Tradition",
        emoji: "🌿",
        description:
          "Olive cultivation on Lesvos dates back thousands of years. The island's economy and identity are deeply tied to olive oil production. You'll see silvery olive groves everywhere. Many families still harvest olives by hand in autumn — it's a beautiful communal tradition.",
      },
      {
        id: "ouzo-heritage",
        title: "Ouzo Heritage",
        emoji: "✨",
        description:
          "Lesvos produces more ouzo than anywhere else in Greece and holds a Protected Designation of Origin. The anise-flavoured spirit is made from grape must and flavoured with local herbs. Visiting a distillery in Plomari is a wonderful cultural experience.",
      },
      {
        id: "festivals",
        title: "Local Festivals (Panigyria)",
        emoji: "🎉",
        description:
          "Summer on Lesvos is filled with panigyria — village festivals celebrating saints' days with live music, dancing, and plenty of food and drink. If you happen upon one, join in! These are joyful, welcoming events open to everyone.",
      },
      {
        id: "music",
        title: "Music & Dance",
        emoji: "🎵",
        description:
          "Traditional Greek music is everywhere on Lesvos. You might hear bouzouki and clarinet at tavernas or festivals. Don't be shy about joining a traditional dance circle — locals love when visitors participate. The basic steps are easy to pick up!",
      },
      {
        id: "religion",
        title: "Churches & Monasteries",
        emoji: "⛪",
        description:
          "Lesvos has hundreds of beautiful churches and monasteries. When visiting, dress modestly (cover shoulders and knees). The Monastery of Limonos and the Church of Agios Therapon in Mytilene are especially worth visiting.",
      },
      {
        id: "birdwatching",
        title: "Birdwatching Paradise",
        emoji: "🦅",
        description:
          "Lesvos is one of Europe's top birdwatching destinations. The salt pans of Kalloni attract flamingos, herons, and hundreds of migratory species. Spring (April–May) is the best time, but birds can be spotted year-round.",
      },
    ],
  },
  {
    id: "transport",
    label: "Getting Around",
    emoji: "🚗",
    entries: [
      {
        id: "airport",
        title: "Mytilene Airport (MJT)",
        emoji: "✈️",
        description:
          "Odysseas Elytis Airport is located 8 km south of Mytilene town. There are direct flights from Athens (about 45 minutes) and seasonal routes from Thessaloniki and some European cities. Taxis from the airport to town cost around €10–15.",
        coordinates: [39.05, 26.28],
      },
      {
        id: "ferry",
        title: "Ferry Connections",
        emoji: "⛴️",
        description:
          "Ferries connect Mytilene to Piraeus (Athens), Chios, Thessaloniki, and other Aegean islands. The journey from Piraeus takes about 10–12 hours (overnight ferries are available with cabins). Book in advance during summer. The port is right in the centre of Mytilene town.",
        coordinates: [39.1043, 26.2765],
      },
      {
        id: "car-rental",
        title: "Car & Scooter Rental",
        emoji: "🛵",
        description:
          "Renting a car is the best way to explore Lesvos — the island is large (the third biggest in Greece) and public transport is limited. Rental agencies are found at the airport and in Mytilene. An international driving permit is recommended. Roads are generally good, but some mountain routes are narrow and winding.",
      },
      {
        id: "bus",
        title: "Local Buses (KTEL)",
        emoji: "🚌",
        description:
          "KTEL buses run from Mytilene to major villages like Molyvos, Plomari, Sigri, and Skala Eresou. Service is regular but not very frequent (a few times per day). Check the schedule at the bus station near the harbour in Mytilene. Tickets are affordable (€3–8).",
      },
      {
        id: "taxi",
        title: "Taxis",
        emoji: "🚕",
        description:
          "Taxis are available in Mytilene and larger towns. Agree on the fare beforehand for longer trips (e.g. Mytilene to Molyvos). There is no Uber on Lesvos, but your hotel can usually arrange a taxi. Tip by rounding up to the nearest euro.",
      },
      {
        id: "walking",
        title: "Walking & Hiking",
        emoji: "🥾",
        description:
          "Lesvos has wonderful hiking trails through olive groves, pine forests, and coastal paths. The trail from Molyvos to Eftalou is lovely. Wear sturdy shoes, carry water, and start early to avoid the midday heat. Many villages are also delightful to explore on foot.",
      },
    ],
  },
];
