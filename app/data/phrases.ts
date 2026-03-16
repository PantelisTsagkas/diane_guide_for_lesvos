export interface Phrase {
  id: number;
  english: string;
  greek: string;
  transliteration: string;
}

export interface PhraseCategory {
  id: string;
  label: string;
  emoji: string;
  phrases: Phrase[];
}

export const phraseCategories: PhraseCategory[] = [
  {
    id: "greetings",
    label: "Greetings",
    emoji: "👋",
    phrases: [
      { id: 1, english: "Hello", greek: "Γεια σου", transliteration: "Ya sou" },
      { id: 2, english: "Good morning", greek: "Καλημέρα", transliteration: "Kalimera" },
      { id: 3, english: "Good evening", greek: "Καλησπέρα", transliteration: "Kalispera" },
      { id: 4, english: "Good night", greek: "Καληνύχτα", transliteration: "Kalinychta" },
      { id: 5, english: "Goodbye", greek: "Αντίο", transliteration: "Adio" },
      { id: 6, english: "How are you?", greek: "Τι κάνεις;", transliteration: "Ti kanis?" },
      { id: 7, english: "I'm fine, thank you", greek: "Καλά, ευχαριστώ", transliteration: "Kala, efcharisto" },
      { id: 8, english: "Nice to meet you", greek: "Χάρηκα", transliteration: "Charika" },
      { id: 9, english: "My name is Diane", greek: "Με λένε Νταϊάν", transliteration: "Me lene Diane" },
      { id: 10, english: "Please", greek: "Παρακαλώ", transliteration: "Parakalo" },
      { id: 11, english: "Thank you", greek: "Ευχαριστώ", transliteration: "Efcharisto" },
      { id: 12, english: "You're welcome", greek: "Παρακαλώ", transliteration: "Parakalo" },
    ],
  },
  {
    id: "dining",
    label: "Dining",
    emoji: "🍽️",
    phrases: [
      { id: 13, english: "A table for one, please", greek: "Ένα τραπέζι για έναν, παρακαλώ", transliteration: "Ena trapezi ya enan, parakalo" },
      { id: 14, english: "The menu, please", greek: "Τον κατάλογο, παρακαλώ", transliteration: "Ton katalogo, parakalo" },
      { id: 15, english: "Water, please", greek: "Νερό, παρακαλώ", transliteration: "Nero, parakalo" },
      { id: 16, english: "The bill, please", greek: "Τον λογαριασμό, παρακαλώ", transliteration: "Ton logariasmo, parakalo" },
      { id: 17, english: "It was delicious!", greek: "Ήταν νόστιμο!", transliteration: "Itan nostimo!" },
      { id: 18, english: "I would like...", greek: "Θα ήθελα...", transliteration: "Tha ithela..." },
      { id: 19, english: "Cheers!", greek: "Στην υγειά μας!", transliteration: "Stin ygia mas!" },
      { id: 20, english: "Coffee, please", greek: "Έναν καφέ, παρακαλώ", transliteration: "Enan kafe, parakalo" },
      { id: 21, english: "No sugar", greek: "Χωρίς ζάχαρη", transliteration: "Choris zachari" },
      { id: 22, english: "I'm vegetarian", greek: "Είμαι χορτοφάγος", transliteration: "Ime chortofagos" },
    ],
  },
  {
    id: "shopping",
    label: "Shopping",
    emoji: "🛍️",
    phrases: [
      { id: 23, english: "How much does this cost?", greek: "Πόσο κάνει αυτό;", transliteration: "Poso kani afto?" },
      { id: 24, english: "Too expensive", greek: "Πολύ ακριβό", transliteration: "Poli akrivo" },
      { id: 25, english: "Can I pay by card?", greek: "Μπορώ να πληρώσω με κάρτα;", transliteration: "Boro na pliroso me karta?" },
      { id: 26, english: "I'll take it", greek: "Θα το πάρω", transliteration: "Tha to paro" },
      { id: 27, english: "Do you have...?", greek: "Έχετε...;", transliteration: "Echete...?" },
      { id: 28, english: "A bag, please", greek: "Μία σακούλα, παρακαλώ", transliteration: "Mia sakoula, parakalo" },
      { id: 29, english: "Olive oil", greek: "Ελαιόλαδο", transliteration: "Eleolado" },
      { id: 30, english: "Souvenir", greek: "Αναμνηστικό", transliteration: "Anamnistiko" },
    ],
  },
  {
    id: "directions",
    label: "Directions",
    emoji: "🧭",
    phrases: [
      { id: 31, english: "Where is...?", greek: "Πού είναι...;", transliteration: "Pou ine...?" },
      { id: 32, english: "The beach", greek: "Η παραλία", transliteration: "I paralia" },
      { id: 33, english: "The hotel", greek: "Το ξενοδοχείο", transliteration: "To xenodocheio" },
      { id: 34, english: "The bus station", greek: "Ο σταθμός λεωφορείων", transliteration: "O stathmos leoforion" },
      { id: 35, english: "Left", greek: "Αριστερά", transliteration: "Aristera" },
      { id: 36, english: "Right", greek: "Δεξιά", transliteration: "Dexia" },
      { id: 37, english: "Straight ahead", greek: "Ευθεία", transliteration: "Efthia" },
      { id: 38, english: "How far is it?", greek: "Πόσο μακριά είναι;", transliteration: "Poso makria ine?" },
      { id: 39, english: "The pharmacy", greek: "Το φαρμακείο", transliteration: "To farmakeio" },
      { id: 40, english: "The airport", greek: "Το αεροδρόμιο", transliteration: "To aerodromio" },
    ],
  },
  {
    id: "emergency",
    label: "Emergency",
    emoji: "🆘",
    phrases: [
      { id: 41, english: "Help!", greek: "Βοήθεια!", transliteration: "Voithia!" },
      { id: 42, english: "I need a doctor", greek: "Χρειάζομαι γιατρό", transliteration: "Chriazomai yatro" },
      { id: 43, english: "Call the police", greek: "Καλέστε την αστυνομία", transliteration: "Kaleste tin astinomia" },
      { id: 44, english: "I'm lost", greek: "Έχω χαθεί", transliteration: "Echo chathi" },
      { id: 45, english: "I don't understand", greek: "Δεν καταλαβαίνω", transliteration: "Den katalaveno" },
      { id: 46, english: "Do you speak English?", greek: "Μιλάτε αγγλικά;", transliteration: "Milate anglika?" },
      { id: 47, english: "Yes", greek: "Ναι", transliteration: "Ne" },
      { id: 48, english: "No", greek: "Όχι", transliteration: "Ochi" },
      { id: 49, english: "Excuse me", greek: "Συγγνώμη", transliteration: "Signomi" },
      { id: 50, english: "I'm allergic to...", greek: "Είμαι αλλεργικός σε...", transliteration: "Ime aleryikos se..." },
    ],
  },
];
