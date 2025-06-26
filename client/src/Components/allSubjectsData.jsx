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
    chapters: Array.from({ length: 4 }).map((_, i) => ({
      id: `vocabulary-ch-${i + 1}`,
      name: `Vocabulary Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 3) + 3 }).map((_, j) => ({
        id: `vocabulary-ch-${i + 1}-lec-${j + 1}`,
        title: `Vocabulary Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Mar ${19 + j} 2025`,
      })),
    })),
  },
  {
    id: 'comprehension',
    name: 'Comprehension',
    chapters: Array.from({ length: 4 }).map((_, i) => ({
      id: `comprehension-ch-${i + 1}`,
      name: `Comprehension Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 3) + 3 }).map((_, j) => ({
        id: `comprehension-ch-${i + 1}-lec-${j + 1}`,
        title: `Comprehension Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Mar ${19 + j} 2025`,
      })),
    })),
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
                    date: `Apr ${2 + i} 2025`,
                })),
            },
            {
                id: 'word-formation',
                name: 'Word Formation',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `word-formation-${i + 1}`,
                    title: `Word Formation - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${3 + i} 2025`,
                })),
            },
            {
                id: 'dice-cube',
                name: 'Dice & Cube',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `dice-cube-${i + 1}`,
                    title: `Dice & Cube - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${4 + i} 2025`,
                })),
            },
            {
                id: 'syllogism',
                name: 'Syllogism',
                lectures: Array.from({ length: 3 }).map((_, i) => ({
                    id: `syllogism-${i + 1}`,
                    title: `Syllogism - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${6 + i} 2025`,
                })),
            },
            {
                id: 'logical-venn-diagram',
                name: 'Logical Venn Diagram',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `logical-venn-diagram-${i + 1}`,
                    title: `Logical Venn Diagram - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${9 + i} 2025`,
                })),
            },
            {
                id: 'blood-relation',
                name: 'Blood Relation',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `blood-relation-${i + 1}`,
                    title: `Blood Relation - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${11 + i} 2025`,
                })),
            },
            {
                id: 'analogy',
                name: 'Analogy',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `analogy-${i + 1}`,
                    title: `Analogy - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${13 + i} 2025`,
                })),
            },
            {
                id: 'odd-one-out',
                name: 'Odd One Out',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `odd-one-out-${i + 1}`,
                    title: `Odd One Out - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${14 + i} 2025`,
                })),
            },
            {
                id: 'sequencing',
                name: 'Sequencing',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `sequencing-${i + 1}`,
                    title: `Sequencing - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${16 + i} 2025`,
                })),
            },
            {
                id: 'missing-number-in-figure',
                name: 'Missing Number in Figure',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `missing-number-in-figure-${i + 1}`,
                    title: `Missing Number in Figure - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${18 + i} 2025`,
                })),
            },
            {
                id: 'direction-distance',
                name: 'Direction & Distance',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `direction-distance-${i + 1}`,
                    title: `Direction & Distance - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${20 + i} 2025`,
                })),
            },
            {
                id: 'figure-counting',
                name: 'Figure Counting',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `figure-counting-${i + 1}`,
                    title: `Figure Counting - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${22 + i} 2025`,
                })),
            },
            {
                id: 'mathematical-operation',
                name: 'Mathematical Operation',
                lectures: Array.from({ length: 1 }).map((_, i) => ({
                    id: `mathematical-operation-${i + 1}`,
                    title: `Mathematical Operation - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${24 + i} 2025`,
                })),
            },
            {
                id: 'seating-arrangement',
                name: 'Seating Arrangement',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `seating-arrangement-${i + 1}`,
                    title: `Seating Arrangement - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${25 + i} 2025`,
                })),
            },
            {
                id: 'order-ranking',
                name: 'Order-Ranking',
                lectures: Array.from({ length: 3 }).map((_, i) => ({
                    id: `order-ranking-${i + 1}`,
                    title: `Order-Ranking - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${27 + i} 2025`,
                })),
            },
            {
                id: 'calendar-chapter', // Renamed to avoid conflict with CalendarIcon import
                name: 'Calendar',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `calendar-chapter-${i + 1}`,
                    title: `Calendar - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `Apr ${29 + i} 2025`,
                })),
            },
            {
                id: 'clock',
                name: 'Clock',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `clock-${i + 1}`,
                    title: `Clock - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `May ${1 + i} 2025`,
                })),
            },
            {
                id: 'inequality',
                name: 'Inequality',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `inequality-${i + 1}`,
                    title: `Inequality - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `May ${3 + i} 2025`,
                })),
            },
            {
                id: 'logical-reasoning',
                name: 'Logical Reasoning',
                lectures: Array.from({ length: 2 }).map((_, i) => ({
                    id: `logical-reasoning-${i + 1}`,
                    title: `Logical Reasoning - Class ${i + 1}`,
                    duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
                    date: `May ${6 + i} 2025`,
                })),
            },
            {
                id: 'doubt-class',
                name: 'Doubt Class',
                lectures: [], // 0 classes
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
    chapters: Array.from({ length: 17 }).map((_, i) => ({
      id: `economy-ch-${i + 1}`,
      name: `Economy Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 3) + 3 }).map((_, j) => ({
        id: `economy-ch-${i + 1}-lec-${j + 1}`,
        title: `Economy Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Jun ${1 + j} 2025`,
      })),
    })),
  },
  {
    id: 'history',
    name: 'History',
    chapters: Array.from({ length: 3 }).map((_, i) => ({
      id: `history-ch-${i + 1}`,
      name: `History Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 6) + 4 }).map((_, j) => ({
        id: `history-ch-${i + 1}-lec-${j + 1}`,
        title: `History Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Jul ${1 + j} 2025`,
      })),
    })),
  },
  {
    id: 'polity',
    name: 'Polity',
    chapters: Array.from({ length: 8 }).map((_, i) => ({
      id: `polity-ch-${i + 1}`,
      name: `Polity Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 3) + 2 }).map((_, j) => ({
        id: `polity-ch-${i + 1}-lec-${j + 1}`,
        title: `Polity Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Aug ${1 + j} 2025`,
      })),
    })),
  },
  {
    id: 'quantitative-aptitude',
    name: 'Quantitative Aptitude',
    chapters: Array.from({ length: 21 }).map((_, i) => ({
      id: `quant-ch-${i + 1}`,
      name: `Quantitative Aptitude Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 4) + 3 }).map((_, j) => ({
        id: `quant-ch-${i + 1}-lec-${j + 1}`,
        title: `Quantitative Aptitude Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Sep ${1 + j} 2025`,
      })),
    })),
  },
  {
    id: 'computer-awareness',
    name: 'Computer Awareness',
    chapters: Array.from({ length: 12 }).map((_, i) => ({
      id: `computer-ch-${i + 1}`,
      name: `Computer Awareness Chapter ${i + 1}`,
      lectures: Array.from({ length: Math.floor(Math.random() * 3) + 2 }).map((_, j) => ({
        id: `computer-ch-${i + 1}-lec-${j + 1}`,
        title: `Computer Awareness Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Oct ${1 + j} 2025`,
      })),
    })),
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
      lectures: Array.from({ length: Math.floor(Math.random() * 5) + 3 }).map((_, j) => ({
        id: `current-ch-${i + 1}-lec-${j + 1}`,
        title: `Current Affairs Lecture ${j + 1}`,
        duration: `${Math.floor(Math.random() * 30) + 20} Mins`,
        date: `Jan ${1 + j} 2026`,
      })),
    })),
  },
];

export default allSubjectsData;