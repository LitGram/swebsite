import { BookData, Book } from '../types/book';

export const bookData: BookData = {
  1: {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    summary: "Set in the 1930s Alabama, this novel addresses issues of racism and injustice through the eyes of young Scout Finch. The story follows Scout, her brother Jem, and their father Atticus Finch, a lawyer who defends a Black man falsely accused of rape in a deeply prejudiced Southern town.",
    characters: [
      "Scout Finch - The young narrator and protagonist",
      "Atticus Finch - Scout's father, a principled lawyer",
      "Jem Finch - Scout's older brother",
      "Boo Radley - A reclusive neighbor who becomes central to the story",
      "Tom Robinson - The Black man falsely accused of rape",
      "Calpurnia - The Finch family's housekeeper",
      "Dill Harris - Scout and Jem's friend"
    ],
    themes: [
      "Racism and Social Inequality",
      "Loss of Innocence and Coming of Age",
      "Moral Education and Empathy",
      "Courage and Standing Up for Justice",
      "The Coexistence of Good and Evil"
    ],
    quotes: [
      "You never really understand a person until you consider things from his point of view...Until you climb inside of his skin and walk around in it.",
      "Mockingbirds don't do one thing but make music for us to enjoy. They don't eat up people's gardens, don't nest in corncribs, they don't do one thing but sing their hearts out for us. That's why it's a sin to kill a mockingbird.",
      "The one thing that doesn't abide by majority rule is a person's conscience."
    ],
    context: "Published in 1960, the novel is set during the Great Depression era in the Southern United States. It reflects the social and racial tensions of the Jim Crow South, where segregation and racial injustice were deeply entrenched in society.",
    quizQuestions: [
      {
        question: "Who is the narrator of the story?",
        options: ["Atticus Finch", "Scout Finch", "Jem Finch", "Boo Radley"],
        correctAnswer: 1
      },
      {
        question: "What is Atticus Finch's profession?",
        options: ["Teacher", "Doctor", "Lawyer", "Sheriff"],
        correctAnswer: 2
      },
      {
        question: "Who is accused of a crime they didn't commit?",
        options: ["Boo Radley", "Atticus Finch", "Tom Robinson", "Dill Harris"],
        correctAnswer: 2
      }
    ]
  },
  2: {
    id: 2,
    title: "1984",
    author: "George Orwell",
    summary: "A dystopian novel set in Airstrip One (formerly Great Britain), a province of the totalitarian superstate Oceania. The story follows Winston Smith, a low-ranking member of the Party who works at the Ministry of Truth, rewriting historical records to conform to the state's ever-changing version of history. Winston begins to question the Party and its oppressive leader, Big Brother.",
    characters: [
      "Winston Smith - The protagonist who rebels against the Party",
      "Julia - Winston's lover and fellow rebel",
      "O'Brien - A member of the Inner Party who Winston believes is a rebel",
      "Big Brother - The symbolic leader of Oceania",
      "Mr. Charrington - Owner of an antique shop",
      "Emmanuel Goldstein - The alleged enemy of the state",
      "Syme - Winston's colleague who works on the Newspeak dictionary"
    ],
    themes: [
      "Totalitarianism and Authoritarianism",
      "Surveillance and Privacy",
      "Manipulation of Truth and History",
      "Loss of Individuality",
      "Power and Control",
      "Language as Thought Control"
    ],
    quotes: [
      "War is peace. Freedom is slavery. Ignorance is strength.",
      "Big Brother is watching you.",
      "Who controls the past controls the future. Who controls the present controls the past.",
      "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.",
      "The best books... are those that tell you what you know already."
    ],
    context: "Published in 1949, Orwell wrote this novel as a warning against totalitarian regimes, drawing on his experiences observing Stalinist Russia and Nazi Germany. The novel has become synonymous with government surveillance and thought control.",
    quizQuestions: [
      {
        question: "What is the name of the protagonist?",
        options: ["Winston Churchill", "Winston Smith", "O'Brien", "Goldstein"],
        correctAnswer: 1
      },
      {
        question: "Which ministry does Winston work for?",
        options: ["Ministry of Love", "Ministry of Truth", "Ministry of Peace", "Ministry of Plenty"],
        correctAnswer: 1
      },
      {
        question: "What is Newspeak?",
        options: ["A new newspaper", "A simplified language designed to limit thought", "A propaganda technique", "A type of surveillance technology"],
        correctAnswer: 1
      }
    ]
  },
  3: {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    summary: "Set in Georgian England, this classic romance novel follows Elizabeth Bennet as she navigates issues of manners, morality, education, and marriage in the landed gentry of early 19th-century England. The story centers on her evolving relationship with the proud and wealthy Mr. Darcy, while exploring themes of social class, reputation, and personal growth.",
    characters: [
      "Elizabeth Bennet - The intelligent and spirited second eldest Bennet daughter",
      "Fitzwilliam Darcy - A wealthy gentleman who initially appears proud",
      "Jane Bennet - Elizabeth's beautiful and kind eldest sister",
      "Charles Bingley - Darcy's friendly and wealthy friend",
      "Mr. Bennet - The witty but detached father of the Bennet family",
      "Mrs. Bennet - The anxious mother obsessed with marrying off her daughters",
      "George Wickham - A charming but deceitful officer",
      "Mr. Collins - A pompous clergyman and cousin to the Bennets"
    ],
    themes: [
      "Pride and First Impressions",
      "Prejudice and Misjudgment",
      "Social Class and Marriage",
      "Personal Growth and Self-Awareness",
      "Love and Compatibility",
      "Family and Reputation"
    ],
    quotes: [
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      "I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book!",
      "You have bewitched me, body and soul, and I love, I love, I love you.",
      "Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain."
    ],
    context: "Published in 1813, Pride and Prejudice is set in the Regency era of England, a time when women's social standing and economic security depended heavily on marriage. Austen satirizes the social conventions and marriage market of her time while exploring timeless themes of personal growth and true love.",
    quizQuestions: [
      {
        question: "What is Elizabeth Bennet's first impression of Mr. Darcy?",
        options: ["He is charming", "He is proud and disagreeable", "He is poor", "He is funny"],
        correctAnswer: 1
      },
      {
        question: "How many Bennet sisters are there?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: 2
      },
      {
        question: "Who does Jane Bennet fall in love with?",
        options: ["Mr. Darcy", "Mr. Collins", "Mr. Bingley", "Mr. Wickham"],
        correctAnswer: 2
      }
    ]
  },
  4: {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    summary: "Set in the summer of 1922, the novel tells the story of Jay Gatsby's obsessive pursuit of his lost love, Daisy Buchanan, against the backdrop of the decadent Jazz Age. Narrated by Nick Carraway, a Yale graduate and World War I veteran, the story explores themes of the American Dream, wealth, and the moral decay of society.",
    characters: [
      "Nick Carraway - The narrator and moral center of the story",
      "Jay Gatsby - A mysterious millionaire obsessed with the past",
      "Daisy Buchanan - Nick's cousin and Gatsby's lost love",
      "Tom Buchanan - Daisy's wealthy and brutish husband",
      "Jordan Baker - A professional golfer and Nick's romantic interest",
      "Myrtle Wilson - Tom's mistress",
      "George Wilson - Myrtle's husband, a garage owner"
    ],
    themes: [
      "The American Dream and Its Corruption",
      "Class and Social Stratification",
      "The Past and the Inability to Recapture It",
      "Wealth and Materialism",
      "Love and Obsession",
      "Moral Decay and Superficiality"
    ],
    quotes: [
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
      "I hope she'll be a fool—that's the best thing a girl can be in this world, a beautiful little fool.",
      "Gatsby believed in the green light, the orgastic future that year by year recedes before us.",
      "They were careless people, Tom and Daisy—they smashed up things and creatures and then retreated back into their money or their vast carelessness."
    ],
    context: "Published in 1925, the novel captures the spirit of the Jazz Age, a period of economic prosperity and cultural change in America following World War I. Fitzgerald critiques the moral emptiness beneath the glamorous surface of the era.",
    quizQuestions: [
      {
        question: "Who is the narrator of The Great Gatsby?",
        options: ["Jay Gatsby", "Tom Buchanan", "Nick Carraway", "Jordan Baker"],
        correctAnswer: 2
      },
      {
        question: "What does the green light symbolize?",
        options: ["Money", "Gatsby's hopes and dreams for the future with Daisy", "Envy", "Traffic safety"],
        correctAnswer: 1
      },
      {
        question: "Where does Gatsby live?",
        options: ["East Egg", "West Egg", "Manhattan", "Queens"],
        correctAnswer: 1
      }
    ]
  }
};

// Helper function to get all books as an array
export const getAllBooks = () => Object.values(bookData);

// Helper function to get a book by ID with proper type safety
export const getBookById = (id: number): Book | undefined => {
  return bookData[id];
};

// Helper function to search books
export const searchBooks = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return getAllBooks().filter(
    (book) =>
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.author.toLowerCase().includes(lowercaseQuery) ||
      book.themes.some(theme => theme.toLowerCase().includes(lowercaseQuery))
  );
};
