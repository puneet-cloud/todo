// --- Data Definition ---
// This object holds all the subject data, including chapters and their lectures.
const allSubjectsData = [
  {
    id: 'geography',
    name: 'Geography',
    chapters: [
      {
        id: 'mountains-in-india',
        name: 'Mountains In India',
        lectures: [
          { id: 'mountains-1', title: 'Mountains In India (Complete Class)', duration: '2 Hrs 0 Mins', date: '2 Mar 2025' },
          { id: 'mountains-2', title: 'Mountains In India - 2', duration: '12 Mins Left', date: '7 Feb 2025' },
          { id: 'mountains-3', title: 'Mountains In India - 3', duration: '30 Mins Left', date: '6 Feb 2025' },
          { id: 'mountains-4', title: 'Mountains In India - 4', duration: '58 Mins Left', date: '5 Feb 2025' },
          { id: 'mountains-5', title: 'Mountains In India - 5', duration: '60 Mins Left', date: '7 Feb 2025' },
          { id: 'mountains-6', title: 'Mountains In India - 6', duration: '45 Mins Left', date: '6 Feb 2025' },
          { id: 'mountains-7', title: 'Mountains In India - 7', duration: '45 Mins Left', date: '6 Feb 2025' },
        ],
      },
      {
        id: 'plateaus-plains-in-india',
        name: 'Plateaus & Plains In India',
        lectures: [
          { id: 'plateaus-1', title: 'Plateaus & Plains In India - 1', duration: '55 Mins', date: '8 Feb 2025' },
        ],
      },
      {
        id: 'coasts-islands-in-india',
        name: 'Coasts & Islands In India',
        lectures: [
        ],
      },
      {
        id: 'river-system-of-india',
        name: 'River System of India',
        lectures: [
          { id: 'river-1', title: 'River System of India - 1', duration: '70 Mins', date: '17 Feb 2025' },
        ],
      },
      {
        id: 'himalayan-river-system',
        name: 'Himalayan River System',
        lectures: [
          { id: 'himalayan-1', title: 'Himalayan River System - 1', duration: '65 Mins', date: '23 Feb 2025' },
          { id: 'himalayan-2', title: 'Himalayan River System - 2', duration: '40 Mins', date: '24 Feb 2025' },
          { id: 'himalayan-3', title: 'Himalayan River System - 3', duration: '55 Mins', date: '25 Feb 2025' },
          { id: 'himalayan-4', title: 'Himalayan River System - 4', duration: '70 Mins', date: '26 Feb 2025' },
        ],
      },
      {
        id: 'peninsular-river-system',
        name: 'Peninsular River System',
        lectures: [
          { id: 'peninsular-1', title: 'Peninsular River System - 1', duration: '50 Mins', date: '27 Feb 2025' },
          { id: 'peninsular-2', title: 'Peninsular River System - 2', duration: '60 Mins', date: '28 Feb 2025' }
        ],
      },
      {
        id: 'monsoon-in-india',
        name: 'Monsoon in India',
        lectures: [
          { id: 'monsoon-1', title: 'Monsson of India - 1', duration: '60 Mins', date: '3 Mar 2025' },
        ],
      },
      {
        id: 'forest-of-india',
        name: 'Forest & Vegetation In India',
        lectures: [
          { id: 'forest-1', title: 'Forest & Vegetation In India - 1', duration: '45 Mins', date: '7 Mar 2025' },
          { id: 'forest-2', title: 'Forest & Vegetation In India - 2', duration: '55 Mins', date: '8 Mar 2025' },

        ],
      },
      {
        id: 'soil-in-india',
        name: 'Soil in India',
        lectures: [
          { id: 'vegetation-1', title: 'Soil in India - 1', duration: '50 Mins', date: '10 Mar 2025' },
          { id: 'vegetation-2', title: 'Soil in India - 2', duration: '40 Mins', date: '11 Mar 2025' },
        ],
      },
      {
        id: 'farming-in-india',
        name: 'Farming in India',
        lectures: [
          { id: 'farming-1', title: 'Farming in India - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'minerals-in-india',
        name: 'Minerals in India',
        lectures: [
          { id: 'minerals-1', title: 'Minerals in India - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'transportation-of-india',
        name: 'Transportation System of India',
        lectures: [
          { id: 'farming-1', title: 'Transportation in India - 1', duration: '70 Mins', date: '14 Mar 2025' },
          { id: 'farming-2', title: 'Transportation in India - 2', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'tribes',
        name: 'Tribes in India',
        lectures: [
          { id: 'tribes-1', title: 'Tribes in India - 1', duration: '70 Mins', date: '14 Mar 2025' },
         
        ],
      },
      {
        id: 'universe',
        name: 'Universe',
        lectures: [
          { id: 'universe-1', title: 'Universe - 1', duration: '70 Mins', date: '14 Mar 2025' },
          { id: 'universe-2', title: 'Universe - 2', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'solar-system',
        name: 'Solar System',
        lectures: [
          { id: 'solar-system-1', title: 'Solar System - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'structure-of-Earth',
        name: 'Structure Of Earth',
        lectures: [
          { id: 'structure-of-Earth-1', title: 'Structure Of Earth - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'volcanoes-and-earthquakes',
        name: 'Volcanoes and Earthquake',
        lectures: [
          { id: 'volcanoes-and-earthquakes - 1', title: 'Volcanoes and Earthquake - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'rocks',
        name: 'Rocks',
        lectures: [
          { id: 'rocks - 1', title: 'Rocks - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'latitude-and-longitude',
        name: 'Latitude and Longitude',
        lectures: [
          { id: 'latitude-and-longitude - 1', title: 'Latitude and Longitude - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'change-of-seasons',
        name: 'Change of Seasons and Climatology',
        lectures: [
          { id: 'change-of-seasons - 1', title: 'Change of Seasons and Climatology - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'atmosphere',
        name: 'Atmosphere',
        lectures: [
          { id: 'atmosphere - 1', title: 'Atmosphere - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'wind-and-air',
        name: 'Wind & Air Pressure Belt',
        lectures: [
          { id: 'wind-and-air - 1', title: 'Wind & Air Pressure Belt - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'cyclones',
        name: 'Cyclones & Local Winds',
        lectures: [
          { id: 'cyclones - 1', title: 'Cyclones & Local Winds - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'bays-gulf-straits-of-world',
        name: 'Bays, Gulf & Straits of World',
        lectures: [
          { id: 'bays-gulf-straits-of-world-1', title: 'Wind & Air Pressure Belt - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'hydrosphere',
        name: 'Hydrosphere',
        lectures: [
          { id: 'hydrosphere -1', title: 'Hydrosphere - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'continents',
        name: 'Continents',
        lectures: [
          { id: 'continents -1', title: 'Continents - 1', duration: '70 Mins', date: '14 Mar 2025' },
          { id: 'continents -2', title: 'Continents - 2', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
      {
        id: 'vegetations-and-tribes-in-world',
        name: 'Vegetations & Tribes in World',
        lectures: [
          { id: 'vegetations-and-tribes-in-world-1', title: 'Vegetations & Tribes in World - 1', duration: '70 Mins', date: '14 Mar 2025' },
        ],
      },
    ],
  },
  {
    id: 'grammar',
    name: 'Grammar',
    chapters: [
        {
            id: 'noun',
            name: 'Noun',
            lectures: Array.from({ length: 4 }).map((_, i) => ({
                id: `noun-${i + 1}`,
                title: `Noun - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jun ${1 + i} 2025`,
            })),
        },
        {
            id: 'pronoun',
            name: 'Pronoun',
            lectures: Array.from({ length: 4 }).map((_, i) => ({
                id: `pronoun-${i + 1}`,
                title: `Pronoun - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jun ${5 + i} 2025`,
            })),
        },
        {
            id: 'adjective',
            name: 'Adjective',
            lectures: Array.from({ length: 4 }).map((_, i) => ({
                id: `adjective-${i + 1}`,
                title: `Adjective - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jun ${9 + i} 2025`,
            })),
        },
        {
            id: 'parts-of-speech-adverb',
            name: 'PARTS OF SPEECH - ADVERB',
            lectures: Array.from({ length: 6 }).map((_, i) => ({
                id: `adverb-${i + 1}`,
                title: `PARTS OF SPEECH - ADVERB - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jun ${13 + i} 2025`,
            })),
        },
        {
            id: 'doubt-class-grammar', // Unique ID for grammar doubt class
            name: 'Doubt Class',
            lectures: Array.from({ length: 1 }).map((_, i) => ({
                id: `grammar-doubt-${i + 1}`,
                title: `Grammar Doubt Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jun ${19 + i} 2025`,
            })),
        },
        {
            id: 'subject-verb-agreement',
            name: 'Subject Verb Agreement',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `subject-verb-agreement-${i + 1}`,
                title: `Subject Verb Agreement - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jun ${20 + i} 2025`,
            })),
        },
        {
            id: 'verb',
            name: 'Verb',
            lectures: Array.from({ length: 4 }).map((_, i) => ({
                id: `verb-${i + 1}`,
                title: `Verb - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jun ${22 + i} 2025`,
            })),
        },
        {
            id: 'preposition',
            name: 'Preposition',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `preposition-${i + 1}`,
                title: `Preposition - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jun ${26 + i} 2025`,
            })),
        },
        {
            id: 'conjunction',
            name: 'conjunction',
            lectures: Array.from({ length: 4 }).map((_, i) => ({
                id: `conjunction-${i + 1}`,
                title: `Conjunction - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jun ${29 + i} 2025`,
            })),
        },
        {
            id: 'articles',
            name: 'Articles',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `articles-${i + 1}`,
                title: `Articles - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jul ${3 + i} 2025`,
            })),
        },
        {
            id: 'tenses',
            name: 'Tenses',
            lectures: Array.from({ length: 6 }).map((_, i) => ({
                id: `tenses-${i + 1}`,
                title: `Tenses - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jul ${5 + i} 2025`,
            })),
        },
        {
            id: 'miscellaneous',
            name: 'Miscellaneous',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `miscellaneous-${i + 1}`,
                title: `Miscellaneous - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jul ${11 + i} 2025`,
            })),
        },
        {
            id: 'narration',
            name: 'Narration',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `narration-${i + 1}`,
                title: `Narration - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jul ${13 + i} 2025`,
            })),
        },
        {
            id: 'voice',
            name: 'Voice',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `voice-${i + 1}`,
                title: `Voice - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jul ${16 + i} 2025`,
            })),
        },
        {
            id: 'question-tag',
            name: 'Question Tag',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `question-tag-${i + 1}`,
                title: `Question Tag - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Jul ${19 + i} 2025`,
            })),
        },
    ],
  },
  {
    id: 'vocabulary',
    name: 'Vocabulary',
    chapters: [
        {
            id: 'word-formation-vocab', // Unique ID to avoid conflict
            name: 'Word Formation',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `word-formation-vocab-${i + 1}`,
                title: `Word Formation - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Aug ${1 + i} 2025`,
            })),
        },
        {
            id: 'phrase-or-idiom',
            name: 'Phrase or Idiom',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `phrase-or-idiom-${i + 1}`,
                title: `Phrase or Idiom - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Aug ${4 + i} 2025`,
            })),
        },
        {
            id: 'one-word-substitution',
            name: 'One Word Substitution',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `one-word-substitution-${i + 1}`,
                title: `One Word Substitution - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Aug ${7 + i} 2025`,
            })),
        },
        {
            id: 'phrasal-verbs',
            name: 'Phrasal Verbs',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `phrasal-verbs-${i + 1}`,
                title: `Phrasal Verbs - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Aug ${10 + i} 2025`,
            })),
        },
        {
            id: 'synonyms-or-antonyms',
            name: 'Synonyms or Antonyms', // Assuming this based on "Synonyms or ..."
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `synonyms-antonyms-${i + 1}`,
                title: `Synonyms or Antonyms - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Aug ${13 + i} 2025`,
            })),
        },
        {
            id: 'spellings',
            name: 'Spellings',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `spellings-${i + 1}`,
                title: `Spellings - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Aug ${16 + i} 2025`,
            })),
        },
    ],
  },
  {
    id: 'comprehension',
    name: 'Comprehension',
    chapters: [
        {
            id: 'sentence-rearrangement',
            name: 'SENTENCE REARRANGEMENT',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `sentence-rearrangement-${i + 1}`,
                title: `Sentence Rearrangement - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Sep ${1 + i} 2025`,
            })),
        },
        {
            id: 'cloze-test',
            name: 'CLOZE TEST',
            lectures: Array.from({ length: 1 }).map((_, i) => ({
                id: `cloze-test-${i + 1}`,
                title: `Cloze Test - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Sep ${3 + i} 2025`,
            })),
        },
        {
            id: 'reading-comprehension',
            name: 'Reading Comprehension',
            lectures: Array.from({ length: 0 }).map((_, i) => ({
                id: `reading-comprehension-${i + 1}`,
                title: `Reading Comprehension - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Sep ${5 + i} 2025`,
            })),
        },
    ],
  },
  {
    id: 'verbal-reasoning',
    name: 'Verbal Reasoning',
    chapters: [
        {
            id: 'coding-decoding',
            name: 'Coding-Decoding',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `coding-decoding-${i + 1}`,
                title: `Coding-Decoding - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${1 + i} 2025`,
            })),
        },
        {
            id: 'series',
            name: 'Series',
            lectures: Array.from({ length: 1 }).map((_, i) => ({
                id: `series-${i + 1}`,
                title: `Series - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${6 + i} 2025`,
            })),
        },
        {
            id: 'word-formation',
            name: 'Word Formation',
            lectures: Array.from({ length: 1 }).map((_, i) => ({
                id: `word-formation-${i + 1}`,
                title: `Word Formation - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${7 + i} 2025`,
            })),
        },
        {
            id: 'dice-cube',
            name: 'Dice & Cube',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `dice-cube-${i + 1}`,
                title: `Dice & Cube - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${8 + i} 2025`,
            })),
        },
        {
            id: 'syllogism',
            name: 'Syllogism',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `syllogism-${i + 1}`,
                title: `Syllogism - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${10 + i} 2025`,
            })),
        },
        {
            id: 'logical-venn-diagram',
            name: 'Logical Venn Diagram',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `logical-venn-diagram-${i + 1}`,
                title: `Logical Venn Diagram - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${13 + i} 2025`,
            })),
        },
        {
            id: 'blood-relation',
            name: 'Blood Relation',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `blood-relation-${i + 1}`,
                title: `Blood Relation - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${15 + i} 2025`,
            })),
        },
        {
            id: 'analogy',
            name: 'Analogy',
            lectures: Array.from({ length: 1 }).map((_, i) => ({
                id: `analogy-${i + 1}`,
                title: `Analogy - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${17 + i} 2025`,
            })),
        },
        {
            id: 'odd-one-out',
            name: 'Odd One Out',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `odd-one-out-${i + 1}`,
                title: `Odd One Out - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${18 + i} 2025`,
            })),
        },
        {
            id: 'sequencing',
            name: 'Sequencing',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `sequencing-${i + 1}`,
                title: `Sequencing - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${20 + i} 2025`,
            })),
        },
        {
            id: 'missing-number-in-figure',
            name: 'Missing Number in Figure',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `missing-number-in-figure-${i + 1}`,
                title: `Missing Number in Figure - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${22 + i} 2025`,
            })),
        },
        {
            id: 'direction-distance',
            name: 'Direction & Distance',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `direction-distance-${i + 1}`,
                title: `Direction & Distance - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${24 + i} 2025`,
            })),
        },
        {
            id: 'figure-counting',
            name: 'Figure Counting',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `figure-counting-${i + 1}`,
                title: `Figure Counting - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${26 + i} 2025`,
            })),
        },
        {
            id: 'mathematical-operation',
            name: 'Mathematical Operation',
            lectures: Array.from({ length: 1 }).map((_, i) => ({
                id: `mathematical-operation-${i + 1}`,
                title: `Mathematical Operation - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${28 + i} 2025`,
            })),
        },
        {
            id: 'seating-arrangement',
            name: 'Seating Arrangement',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `seating-arrangement-${i + 1}`,
                title: `Seating Arrangement - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `Apr ${29 + i} 2025`,
            })),
        },
        {
            id: 'order-ranking',
            name: 'Order-Ranking',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `order-ranking-${i + 1}`,
                title: `Order-Ranking - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `May ${1 + i} 2025`,
            })),
        },
        {
            id: 'calendar-chapter', // Renamed to avoid conflict with CalendarIcon import
            name: 'Calendar',
            lectures: Array.from({ length: 3 }).map((_, i) => ({
                id: `calendar-chapter-${i + 1}`,
                title: `Calendar - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `May ${3 + i} 2025`,
            })),
        },
        {
            id: 'clock',
            name: 'Clock',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `clock-${i + 1}`,
                title: `Clock - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `May ${5 + i} 2025`,
            })),
        },
        {
            id: 'inequality',
            name: 'Inequality',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `inequality-${i + 1}`,
                title: `Inequality - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `May ${7 + i} 2025`,
            })),
        },
        {
            id: 'logical-reasoning',
            name: 'Logical Reasoning',
            lectures: Array.from({ length: 2 }).map((_, i) => ({
                id: `logical-reasoning-${i + 1}`,
                title: `Logical Reasoning - Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `May ${10 + i} 2025`,
            })),
        },
        {
            id: 'doubt-class',
            name: 'Doubt Class',
            lectures: Array.from({ length: 7 }).map((_, i) => ({ // Updated to 7 classes
                id: `verbal-doubt-${i + 1}`, // Unique ID for verbal reasoning doubt class
                title: `Verbal Reasoning Doubt Class ${i + 1}`,
                duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                date: `May ${12 + i} 2025`, // Adjust date accordingly
            })),
        },
    ],
},
  {
    id: 'non-verbal-reasoning',
    name: 'Non Verbal Reasoning',
    chapters: Array.from({ length: 1 }).map((_, i) => ({
      id: `nonverbal-ch-${i + 1}`,
      name: `Non Verbal Reasoning Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 5) + 4 }).map((_, j) => ({
        id: `nonverbal-ch-${i + 1}-lec-${j + 1}`,
        title: `Non Verbal Reasoning Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `May ${1 + j} 2025`,
      })),
    })),
  },
  {
        id: 'economy',
        name: 'Economy',
        chapters: [
            {
                id: 'introduction-to-economics',
                name: 'Introduction to Economics',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `intro-eco-${i + 1}`,
                    title: `Introduction to Economics - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${1 + i} 2025`,
                })),
            },
            {
                id: 'economic-planning',
                name: 'Economic Planning',
                lectures: Array.from({ length: 3 }).map((_, i) => ({
                    id: `eco-planning-${i + 1}`,
                    title: `Economic Planning - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${4 + i} 2025`,
                })),
            },
            {
                id: 'national-income',
                name: 'National Income',
                lectures: Array.from({ length: 3 }).map((_, i) => ({
                    id: `national-income-${i + 1}`,
                    title: `National Income - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${7 + i} 2025`,
                })),
            },
            {
                id: 'banking-and-financial-sector',
                name: 'Banking and Financial Sector',
                lectures: Array.from({ length: 3 }).map((_, i) => ({
                    id: `banking-fin-sector-${i + 1}`,
                    title: `Banking and Financial Sector - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${10 + i} 2025`,
                })),
            },
            {
                id: 'monetary-policy',
                name: 'Monetary policy',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `monetary-policy-${i + 1}`,
                    title: `Monetary policy - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${13 + i} 2025`,
                })),
            },
            {
                id: 'fiscal-policy',
                name: 'Fiscal policy',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `fiscal-policy-${i + 1}`,
                    title: `Fiscal policy - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${15 + i} 2025`,
                })),
            },
            {
                id: 'inflation',
                name: 'Inflation',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `inflation-${i + 1}`,
                    title: `Inflation - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${17 + i} 2025`,
                })),
            },
            {
                id: 'unemployment',
                name: 'UNEMPLOYMENT',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `unemployment-${i + 1}`,
                    title: `UNEMPLOYMENT - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${19 + i} 2025`,
                })),
            },
            {
                id: 'poverty',
                name: 'Poverty',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `poverty-${i + 1}`,
                    title: `Poverty - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${21 + i} 2025`,
                })),
            },
            {
                id: 'external-sector',
                name: 'External Sector',
                lectures: Array.from({ length: 0 }).map((_, i) => ({
                    id: `external-sector-${i + 1}`,
                    title: `External Sector - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${23 + i} 2025`,
                })),
            },
            {
                id: 'agriculture-economy', // Unique ID to avoid conflict with Geography's agriculture
                name: 'Agriculture',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `agriculture-economy-${i + 1}`,
                    title: `Agriculture - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${24 + i} 2025`,
                })),
            },
            {
                id: 'census',
                name: 'Census',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `census-${i + 1}`,
                    title: `Census - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${26 + i} 2025`,
                })),
            },
            {
                id: 'government-schemes',
                name: 'Government Schemes',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `government-schemes-${i + 1}`,
                    title: `Government Schemes - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${27 + i} 2025`,
                })),
            },
            {
                id: 'international-organizations',
                name: 'International organizations',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `international-organizations-${i + 1}`,
                    title: `International organizations - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jun ${29 + i} 2025`,
                })),
            },
            {
                id: 'indian-economic-institutions',
                name: 'Indian Economic Institutions',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `indian-economic-institutions-${i + 1}`,
                    title: `Indian Economic Institutions - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${1 + i} 2025`,
                })),
            },
            {
                id: 'industries',
                name: 'Industries',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `industries-${i + 1}`,
                    title: `Industries - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${2 + i} 2025`,
                })),
            },
            {
                id: 'structure-of-indian-economy',
                name: 'Structure of the Indian Economy',
                lectures: Array.from({ length: 0 }).map((_, i) => ({
                    id: `structure-indian-economy-${i + 1}`,
                    title: `Structure of the Indian Economy - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${3 + i} 2025`,
                })),
            },
        ],
    },
  {
        id: 'ancient-history',
        name: 'Ancient History',
        chapters: [
            {
                id: 'indus-valley-civilization',
                name: 'Indus Valley Civilization',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `indus-valley-civilization-${i + 1}`,
                    title: `Indus Valley Civilization - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${1 + i} 2025`,
                })),
            },
            {
                id: 'vedic-age',
                name: 'Vedic Age',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `vedic-age-${i + 1}`,
                    title: `Vedic Age - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${3 + i} 2025`,
                })),
            },
            {
                id: 'buddhism',
                name: 'Buddhism',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `buddhism-${i + 1}`,
                    title: `Buddhism - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${5 + i} 2025`,
                })),
            },
            {
                id: 'jainism',
                name: 'Jainism',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `jainism-${i + 1}`,
                    title: `Jainism - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${6 + i} 2025`,
                })),
            },
            {
                id: 'mahajanpadas',
                name: 'Mahajanpadas',
                lectures: Array.from({ length: 0 }).map((_, i) => ({
                    id: `mahajanpadas-${i + 1}`,
                    title: `Mahajanpadas - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${7 + i} 2025`,
                })),
            },
            {
                id: 'mauryan-empire',
                name: 'Mauryan Empire',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `mauryan-empire-${i + 1}`,
                    title: `Mauryan Empire - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${8 + i} 2025`,
                })),
            },
            {
                id: 'gupta-empire',
                name: 'Gupta Empire',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `gupta-empire-${i + 1}`,
                    title: `Gupta Empire - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Jul ${9 + i} 2025`,
                })),
            },
        ],
    },

  {
      id: 'medieval-history',
      name: 'Medieval History',
      chapters: [
          {
              id: 'turkish-invasion',
              name: 'Turkish Invasion in India',
              lectures: Array.from({ length: 0 }).map((_, i) => ({
                  id: `turkish-invasion-${i + 1}`,
                  title: `Turkish Invasion - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jul ${10 + i} 2025`,
              })),
          },
          {
              id: 'delhi-sultanate',
              name: 'Delhi Sultanate',
              lectures: Array.from({ length: 3 }).map((_, i) => ({
                  id: `delhi-sultanate-${i + 1}`,
                  title: `Delhi Sultanate - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jul ${13 + i} 2025`,
              })),
          },
          {
              id: 'mughal-period',
              name: 'Mughal Period',
              lectures: Array.from({ length: 8 }).map((_, i) => ({
                  id: `mughal-period-${i + 1}`,
                  title: `Mughal Period - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jul ${18 + i} 2025`,
              })),
          },
      ],
  },
  {
      id: 'indian-national-movement',
      name: 'Indian National Movement',
      chapters: [
          {
              id: 'revolt-of-1857',
              name: 'Revolt Of 1857',
              lectures: Array.from({ length: 1 }).map((_, i) => ({
                  id: `revolt-1857-${i + 1}`,
                  title: `Revolt Of 1857 - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jul ${23 + i} 2025`,
              })),
          },
          {
              id: 'inc-and-its-sessions',
              name: 'INC and Its Sessions',
              lectures: Array.from({ length: 1 }).map((_, i) => ({
                  id: `inc-sessions-${i + 1}`,
                  title: `INC and Its Sessions - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jul ${24 + i} 2025`,
              })),
          },
          {
              id: 'period-1895-1905',
              name: '1895 - 1905',
              lectures: Array.from({ length: 2 }).map((_, i) => ({
                  id: `period-1895-1905-${i + 1}`,
                  title: `1895 - 1905 - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jul ${25 + i} 2025`,
              })),
          },
          {
              id: 'period-1905-1920',
              name: '1905 - 1920',
              lectures: Array.from({ length: 1 }).map((_, i) => ({
                  id: `period-1905-1920-${i + 1}`,
                  title: `1905 - 1920 - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jul ${26 + i} 2025`,
              })),
          },
          {
              id: 'period-1921-1940',
              name: '1921 - 1940',
              lectures: Array.from({ length: 1 }).map((_, i) => ({
                  id: `period-1921-1940-${i + 1}`,
                  title: `1921 - 1940 - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jul ${27 + i} 2025`,
              })),
          },
          {
              id: 'period-1940-1947',
              name: '1940 - 1947',
              lectures: Array.from({ length: 1 }).map((_, i) => ({
                  id: `period-1940-1947-${i + 1}`,
                  title: `1940 - 1947 - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jul ${28 + i} 2025`,
              })),
          },
      ],
  }, 
  {
      id: 'polity',
      name: 'Polity',
      chapters: [
          {
              id: 'basics-of-polity',
              name: 'Basics of Polity',
              lectures: Array.from({ length: 2 }).map((_, i) => ({
                  id: `basics-polity-${i + 1}`,
                  title: `Basics of Polity - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Aug ${1 + i} 2025`,
              })),
          },
          {
              id: 'constitutional-framework',
              name: 'Constitutional Framework',
              lectures: [
                  { id: 'making-constitution-1', title: 'Making of the Constitution - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 3 2025` },
                  { id: 'salient-features-1', title: 'Salient Features of the Constitution - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 4 2025` },
                  { id: 'union-territory-1', title: 'Union & its Territory - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 5 2025` },
                  { id: 'citizenship-1', title: 'Citizenship - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 6 2025` },
                  { id: 'fundamental-rights-1', title: 'Fundamental Rights - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 7 2025` },
                  { id: 'dpsp-1', title: 'Directive Principles of State Policy - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 8 2025` },
                  { id: 'fundamental-duties-1', title: 'Fundamental Duties - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 9 2025` },
                  { id: 'amendment-constitution-1', title: 'Amendment of the Constitution - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 10 2025` },
                  { id: 'parts-constitution-1', title: 'Parts of Constitution - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 11 2025` },
                  { id: 'articles-polity-1', title: 'Articles - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 12 2025` },
                  { id: 'schedules-polity-1', title: 'Schedules - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 13 2025` },
              ],
          },
          {
              id: 'central-government',
              name: 'Central Government',
              lectures: [
                  { id: 'president-1', title: 'President - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 14 2025` },
                  { id: 'pm-central-com-1', title: 'PM & Central COM - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 15 2025` },
                  { id: 'parliament-1', title: 'Parliament - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 16 2025` },
              ],
          },
          {
              id: 'judiciary',
              name: 'Judiciary',
              lectures: [
                  { id: 'supreme-court-1', title: 'Supreme Court - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 17 2025` },
                  { id: 'high-court-1', title: 'High Court - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 18 2025` },
              ],
          },
          {
              id: 'state-local-government-uts-special-areas',
              name: 'State Local Government UTs and Special Areas',
              lectures: Array.from({ length: 3 }).map((_, i) => ({
                  id: `state-local-gov-${i + 1}`,
                  title: `State Local Government UTs and Special Areas - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Aug ${19 + i} 2025`,
              })),
          },
          {
              id: 'constitutional-bodies',
              name: 'Constitutional Bodies',
              lectures: [
                  { id: 'eci-upsc-1', title: 'Election Commission of India, Union Public Service Commission - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 22 2025` },
                  { id: 'finance-ag-1', title: 'Finance Commission, Attorney General of India, Advocate General - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 23 2025` },
                  { id: 'cag-1', title: 'Comptroller and Auditor General of India - Class 1', duration: `${Math.floor(Math.random() * 30) + 20} Mins`, date: `Aug 24 2025` },
              ],
          },
          {
              id: 'non-constitutional-bodies',
              name: 'Non-Constitutional Bodies',
              lectures: Array.from({ length: 3 }).map((_, i) => ({
                  id: `non-constitutional-bodies-${i + 1}`,
                  title: `Non-Constitutional Bodies - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Aug ${25 + i} 2025`,
              })),
          },
          {
              id: 'other-constitutional-dimensions',
              name: 'Other Constitutional Dimensions',
              lectures: Array.from({ length: 2 }).map((_, i) => ({
                  id: `other-constitutional-dimensions-${i + 1}`,
                  title: `Other Constitutional Dimensions - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Aug ${28 + i} 2025`,
              })),
          },
      ],
  },
  {
      id: 'quantitative-aptitude',
      name: 'Quantitative Aptitude',
      chapters: [
          {
              id: 'percentage',
              name: 'Percentage',
              lectures: Array.from({ length: 8 }).map((_, i) => ({
                  id: `percentage-${i + 1}`,
                  title: `Percentage - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Sep ${1 + i} 2025`,
              })),
          },
          {
              id: 'profit-loss',
              name: 'Profit & Loss',
              lectures: Array.from({ length: 12 }).map((_, i) => ({
                  id: `profit-loss-${i + 1}`,
                  title: `Profit & Loss - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Sep ${9 + i} 2025`,
              })),
          },
          {
              id: 'simple-compound-interest',
              name: 'Simple & Compound Interest',
              lectures: Array.from({ length: 9 }).map((_, i) => ({
                  id: `simple-compound-interest-${i + 1}`,
                  title: `Simple & Compound Interest - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Sep ${21 + i} 2025`,
              })),
          },
          {
              id: 'speed-time-distance',
              name: 'Speed Time and Distance',
              lectures: Array.from({ length: 15 }).map((_, i) => ({
                  id: `speed-time-distance-${i + 1}`,
                  title: `Speed Time and Distance - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Sep ${30 + i} 2025`, // Dates might spill into October
              })),
          },
          {
              id: 'average',
              name: 'Average',
              lectures: Array.from({ length: 5 }).map((_, i) => ({
                  id: `average-${i + 1}`,
                  title: `Average - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Oct ${15 + i} 2025`,
              })),
          },
          {
              id: 'age',
              name: 'Age',
              lectures: Array.from({ length: 2 }).map((_, i) => ({
                  id: `age-${i + 1}`,
                  title: `Age - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Oct ${20 + i} 2025`,
              })),
          },
          {
              id: 'ratio-proportion',
              name: 'Ratio and Proportion',
              lectures: Array.from({ length: 5 }).map((_, i) => ({
                  id: `ratio-proportion-${i + 1}`,
                  title: `Ratio and Proportion - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Oct ${22 + i} 2025`,
              })),
          },
          {
              id: 'partnership',
              name: 'Partnership',
              lectures: Array.from({ length: 3 }).map((_, i) => ({
                  id: `partnership-${i + 1}`,
                  title: `Partnership - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Oct ${27 + i} 2025`,
              })),
          },
          {
              id: 'mixture-aligation',
              name: 'Mixture & Aligation',
              lectures: Array.from({ length: 4 }).map((_, i) => ({
                  id: `mixture-aligation-${i + 1}`,
                  title: `Mixture & Aligation - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Oct ${30 + i} 2025`,
              })),
          },
          {
              id: 'simplification',
              name: 'Simplification',
              lectures: Array.from({ length: 0 }).map((_, i) => ({
                  id: `simplification-${i + 1}`,
                  title: `Simplification - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Nov ${3 + i} 2025`,
              })),
          },
          {
              id: 'surds-indices',
              name: 'Surds and Indices',
              lectures: Array.from({ length: 0 }).map((_, i) => ({
                  id: `surds-indices-${i + 1}`,
                  title: `Surds and Indices - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Nov ${7 + i} 2025`,
              })),
          },
          {
              id: 'number-system',
              name: 'Number System',
              lectures: Array.from({ length: 19 }).map((_, i) => ({
                  id: `number-system-${i + 1}`,
                  title: `Number System - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Nov ${8 + i} 2025`,
              })),
          },
          {
              id: 'algebra',
              name: 'Algebra',
              lectures: Array.from({ length: 8 }).map((_, i) => ({
                  id: `algebra-${i + 1}`,
                  title: `Algebra - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Nov ${27 + i} 2025`, // Adjust date after Number System
              })),
          },
          {
              id: 'trigonometry',
              name: 'Trigonometry',
              lectures: Array.from({ length: 10 }).map((_, i) => ({
                  id: `trigonometry-${i + 1}`,
                  title: `Trigonometry - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Dec ${6 + i} 2025`, // Adjust date
              })),
          },
          {
              id: 'mensuration',
              name: 'Mensuration',
              lectures: Array.from({ length: 24 }).map((_, i) => ({
                  id: `mensuration-${i + 1}`,
                  title: `Mensuration - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Dec ${19 + i} 2025`, // Adjust date, spills into Jan 2026
              })),
          },
          {
              id: 'geometry',
              name: 'Geometry',
              lectures: Array.from({ length: 17 }).map((_, i) => ({
                  id: `geometry-${i + 1}`,
                  title: `Geometry - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Jan ${12 + i} 2026`, // Adjust date
              })),
          },
          {
              id: 'data-interpretation',
              name: 'Data Interpretation',
              lectures: Array.from({ length: 5 }).map((_, i) => ({
                  id: `data-interpretation-${i + 1}`,
                  title: `Data Interpretation - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Feb ${1 + i} 2026`, // Adjust date
              })),
          },
          {
              id: 'elementary-statistics',
              name: 'Elementary Statistics',
              lectures: Array.from({ length: 1 }).map((_, i) => ({
                  id: `elementary-statistics-${i + 1}`,
                  title: `Elementary Statistics - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Feb ${6 + i} 2026`,
              })),
          },
          {
              id: 'time-work',
              name: 'Time and Work',
              lectures: Array.from({ length: 6 }).map((_, i) => ({
                  id: `time-work-${i + 1}`,
                  title: `Time and Work - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Feb ${7 + i} 2026`,
              })),
          },
          {
              id: 'pipes-cisterns',
              name: 'Pipes & cisterns',
              lectures: Array.from({ length: 1 }).map((_, i) => ({
                  id: `pipes-cisterns-${i + 1}`,
                  title: `Pipes & cisterns - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Feb ${14 + i} 2026`,
              })),
          },
          {
              id: 'previous-year-questions',
              name: 'Previous Year Questions',
              lectures: Array.from({ length: 0 }).map((_, i) => ({
                  id: `previous-year-questions-${i + 1}`,
                  title: `Previous Year Questions - Class ${i + 1}`,
                  duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                  date: `Feb ${17 + i} 2026`,
              })),
          },
      ],
  },
  {
        id: 'computer-awareness',
        name: 'Computer Awareness',
        chapters: [
            {
                id: 'memory',
                name: 'Memory',
                lectures: Array.from({ length: 3 }).map((_, i) => ({
                    id: `memory-${i + 1}`,
                    title: `Memory - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${1 + i} 2025`,
                })),
            },
            {
                id: 'hardware',
                name: 'Hardware',
                lectures: Array.from({ length: 3 }).map((_, i) => ({
                    id: `hardware-${i + 1}`,
                    title: `Hardware - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${4 + i} 2025`,
                })),
            },
            {
                id: 'computer-fundamentals-terminologies',
                name: 'Computer Fundamentals or Terminologies',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `computer-fundamentals-${i + 1}`,
                    title: `Computer Fundamentals - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${7 + i} 2025`,
                })),
            },
            {
                id: 'software',
                name: 'Software',
                lectures: Array.from({ length: 3 }).map((_, i) => ({
                    id: `software-${i + 1}`,
                    title: `Software - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${9 + i} 2025`,
                })),
            },
            {
                id: 'networking',
                name: 'Networking',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `networking-${i + 1}`,
                    title: `Networking - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${12 + i} 2025`,
                })),
            },
            {
                id: 'dbms',
                name: 'DBMS',
                lectures: Array.from({ length: 3 }).map((_, i) => ({
                    id: `dbms-${i + 1}`,
                    title: `DBMS - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${14 + i} 2025`,
                })),
            },
            {
                id: 'microsoft-office',
                name: 'Microsoft Office',
                lectures: Array.from({ length: 8 }).map((_, i) => ({
                    id: `microsoft-office-${i + 1}`,
                    title: `Microsoft Office - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${17 + i} 2025`,
                })),
            },
            {
                id: 'data-representation',
                name: 'Data Representation',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `data-representation-${i + 1}`,
                    title: `Data Representation - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${25 + i} 2025`,
                })),
            },
            {
                id: 'computer-security-virus',
                name: 'Computer Security and Virus',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `computer-security-virus-${i + 1}`,
                    title: `Computer Security and Virus - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${27 + i} 2025`,
                })),
            },
            {
                id: 'keyboard-shortcuts',
                name: 'Keyboard Shortcuts',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `keyboard-shortcuts-${i + 1}`,
                    title: `Keyboard Shortcuts - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${29 + i} 2025`,
                })),
            },
            {
                id: 'computer-abbreviations',
                name: 'Computer Abbreviations',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `computer-abbreviations-${i + 1}`,
                    title: `Computer Abbreviations - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${30 + i} 2025`,
                })),
            },
            {
                id: 'miscellaneous-computer', // Unique ID
                name: 'Miscellaneous',
                lectures: Array.from({ length: 14 }).map((_, i) => ({
                    id: `miscellaneous-computer-${i + 1}`,
                    title: `Miscellaneous - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Oct ${31 + i} 2025`, // Dates might spill into November
                })),
            },
        ],
    },
  {
    id: 'general-biology',
    name: 'General Biology',
    chapters: Array.from({ length: 12 }).map((_, i) => ({
      id: `biology-ch-${i + 1}`,
      name: `General Biology Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 5) + 3 }).map((_, j) => ({
        id: `biology-ch-${i + 1}-lec-${j + 1}`,
        title: `General Biology Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Nov ${1 + j} 2025`,
      })),
    })),
  },
  {
    id: 'general-physics',
    name: 'General Physics',
    chapters: Array.from({ length: 9 }).map((_, i) => ({
      id: `physics-ch-${i + 1}`,
      name: `General Physics Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 4) + 2 }).map((_, j) => ({
        id: `physics-ch-${i + 1}-lec-${j + 1}`,
        title: `General Physics Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Dec ${1 + j} 2025`,
      })),
    })),
  },
  {
    id: 'current-affairs',
    name: 'CURRENT AFFAIRS',
    chapters: Array.from({ length: 1 }).map((_, i) => ({
      id: `current-ch-${i + 1}`,
      name: `Current Affairs Chapter ${i + 1}`,
      lectures: Array.from({ length: 25 }).map((_, j) => ({
        id: `current-ch-${i + 1}-lec-${j + 1}`,
        title: `Current Affairs Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Jan ${1 + j} 2026`,
      })),
    })),
  },
];

export default allSubjectsData;