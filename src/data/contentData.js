export const kindsOfWork = [
  {
    id: "models",
    title: "Models",
    description:
      "Training, tuning and benchmarking AI/ML models, including the LLMs and vision models that sit behind our products.",
    type: "models",
  },
  {
    id: "simulations",
    title: "Simulations",
    description:
      "Software that mimics complex systems such as markets, crowds and networks, so ideas can be tested before they meet the real world.",
    type: "simulations",
  },
  {
    id: "products",
    title: "Products",
    description:
      "When an experiment proves useful, we harden it into a product. Reelcut is the first one out of the lab.",
    type: "products",
  },
];

export const journeyStops = [
  {
    id: "consultancy",
    when: "Where we began",
    title: "Consultancy",
    description:
      "Software and AI engineering for clients, mostly applications of large language models: assistants, voice bots and retrieval systems.",
    link: "#consultancy",
    linkLabel: "Read the short version",
    className: "stop",
  },
  {
    id: "lab",
    when: "Now",
    title: "The lab",
    description:
      "We put what we learned into our own models, simulations and products, and pick our own problems.",
    link: "#products",
    linkLabel: "See the products",
    className: "stop now",
  },
  {
    id: "reelcut",
    when: "Next",
    title: "Reelcut",
    description:
      "Our first product built for the public: long videos in, vertical shorts out.",
    link: "#reelcut",
    linkLabel: "Join the waitlist",
    className: "stop next",
  },
];

export const reelcutSteps = [
  {
    step: "Step 1",
    title: "Upload",
    description: "Add a long video file or paste a link. Hours of footage are fine.",
  },
  {
    step: "Step 2",
    title: "Pick your moments",
    description:
      "Reelcut suggests the strongest clips. Keep the ones you like, trim the rest.",
  },
  {
    step: "Step 3",
    title: "Export",
    description:
      "Get vertical shorts with the speaker kept in frame, ready for Reels, Shorts and TikTok.",
  },
];

export const builtForList = [
  {
    title: "Podcasters",
    description: "One episode becomes a week of clips.",
  },
  {
    title: "Educators",
    description: "Lectures become short lessons people finish.",
  },
  {
    title: "Streamers",
    description: "The best minutes of a long stream, found for you.",
  },
  {
    title: "Teams and agencies",
    description: "Turn every webinar and interview into social content.",
  },
];

export const consultancyReel = [
  {
    title: "LLM applications",
    description:
      "Assistants, copilots and automations built on large language models, from prototype to production.",
  },
  {
    title: "Voice bots",
    description:
      "Conversational agents with speech in and speech out, wired into real business workflows.",
  },
  {
    title: "RAG systems",
    description:
      "Retrieval pipelines that ground model answers in a company's own data.",
  },
];

export const consultancyCriteria = [
  {
    title: "The problem is new to us.",
    description: "We want to learn something we can bring back to the lab.",
  },
  {
    title: "It needs research, not just integration.",
    description: "Modelling, simulation or a system nobody has built yet.",
  },
  {
    title: "A working prototype can exist in weeks.",
    description: "Fast scoping and fast delivery are how we work.",
  },
];
