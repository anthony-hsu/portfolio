const cvImageUrl = new URL("./assets/cv-builder.png", import.meta.url).href;
const memoryGameImageUrl = new URL("./assets/memory-game.png", import.meta.url).href;
const wordGameImageUrl = new URL("./assets/word-game.png", import.meta.url).href;
const onlineStoreImageUrl = new URL("./assets/online-store.png", import.meta.url).href;
const bdgtImageUrl = new URL("./assets/bdgt.png", import.meta.url).href;

const projects = [
  {
    title: "Budgeting App",
    description:
      "Budget your finances so that you have the freedom to buy whatever you want.",
    image: bdgtImageUrl,
    githubLink: "https://github.com/anthony-hsu/personal-budget-app",
    liveLink: "https://bdgt-anthony-hsu.netlify.app",
  },
  {
    title: "Wordle Clone",
    description: "Try your best to guess the word! Now with the ability to configure word length and number of attempts.",
    image: wordGameImageUrl,
    githubLink: "https://github.com/anthony-hsu/word-game",
    liveLink: "https://word-game-anthony-hsu.netlify.app",
  },
  {
    title: "Online Store",
    description:
      "Online Store gives you the freedom to buy whatever you want, whenever you want.",
    image: onlineStoreImageUrl,
    githubLink: "https://github.com/anthony-hsu/online-store",
    liveLink: "https://online-store-anthony-hsu.netlify.app",
  },
  {
    title: "Memory Card Game",
    description: "Test your memory with this fun game. Can you choose them all?",
    image: memoryGameImageUrl,
    githubLink: "https://github.com/anthony-hsu/memory-card-game",
    liveLink: "https://memory-card-game-anthony-hsu.netlify.app",
  },
  {
    title: "CV Builder",
    description: "Create the CV you've always wanted. Empower yourself with the tools you need to land your dream job now.",
    image: cvImageUrl,
    githubLink: "https://github.com/anthony-hsu/cv-project",
    liveLink: "https://cv-builder-anthony-hsu.netlify.app",
  },
];

export default projects;
