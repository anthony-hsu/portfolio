const cvImageUrl = new URL("./assets/cv-builder.png", import.meta.url).href;
const memoryGameUrl = new URL("./assets/memory-game.png", import.meta.url).href;
const wordGameUrl = new URL("./assets/word-game.png", import.meta.url).href;

const projects = [
  {
    title: "Personal Budget App",
    description:
      "Budget your finances so that you have the freedom to buy whatever you want.",
    image:
      "https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/651cb6f2502b06000897bdc5/screenshot_2023-10-04-00-51-28-0000.png",
    githubLink: "https://github.com/anthony-hsu/personal-budget-app",
    liveLink: "https://personal-budget-app-anthony-hsu.netlify.app",
  },
  {
    title: "Online Store",
    description:
      "Online Store gives you the freedom to buy whatever you want, whenever you want.",
    image:
      "https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/651a3d9f2cde840008866d70/screenshot_2023-10-02-03-49-05-0000.png",
    githubLink: "https://github.com/anthony-hsu/online-store",
    liveLink: "https://online-store-anthony-hsu.netlify.app",
  },
  {
    title: "Memory Card Game",
    description: "Test your memory with this fun game. Can you choose them all?",
    image: memoryGameUrl,
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
  {
    title: "Wordle Clone",
    description: "Try your best to guess the word! Now with the ability to configure word length and number of attempts.",
    image: wordGameUrl,
    githubLink: "https://github.com/anthony-hsu/word-game",
    liveLink: "https://word-game-anthony-hsu.netlify.app",
  },
];

export default projects;
