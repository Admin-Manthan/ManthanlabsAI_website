export const videoProducts = [
  {
    id: "reelcut",
    title: "Reelcut",
    status: "launch",
    statusLabel: "Launching soon",
    description: "Cuts long-form video into vertical shorts automatically, with the speaker kept in frame.",
    uses: ["Podcasts", "Talks", "Interviews"],
    link: "#reelcut",
    linkLabel: "Go to the launch page",
  },
  {
    id: "face-tracking",
    title: "Face tracking for recorded video",
    status: "dev",
    statusLabel: "In development",
    description: "Follows faces across shots in pre-recorded footage, so crops, reframes and edits stay on the right person.",
    uses: ["Reframing", "Editing", "Archives"],
  },
  {
    id: "creator-benchmarks",
    title: "Model benchmarks for creators",
    status: "exp",
    statusLabel: "Experiment",
    description: "Side-by-side tests of the AI models creators rely on for captions, clipping and voice, scored on real creator footage.",
    uses: ["Model choice", "Quality checks"],
  },
];

export const languageProducts = [
  {
    id: "voice-agents",
    title: "Voice agents",
    status: "dev",
    statusLabel: "In development",
    description: "Phone and in-app agents that hold a natural conversation, understand intent and hand off to a person when they should.",
    uses: ["Support", "Bookings", "Intake"],
  },
  {
    id: "knowledge-assistants",
    title: "Knowledge assistants",
    status: "dev",
    statusLabel: "In development",
    description: "Retrieval-based assistants that answer from your own documents and show the source of every answer.",
    uses: ["Internal docs", "Policies", "Research"],
  },
  {
    id: "system-simulator",
    title: "Complex-system simulator",
    status: "exp",
    statusLabel: "Experiment",
    description: "Agent-based simulations of markets, crowds and networks, driven by language models that play the agents.",
    uses: ["Scenario tests", "Strategy"],
  },
];

export const productOptions = [
  "Reelcut",
  "Face tracking for recorded video",
  "Model benchmarks for creators",
  "Voice agents",
  "Knowledge assistants",
  "Complex-system simulator",
];
