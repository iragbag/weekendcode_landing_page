export interface Repo {
  /** Display name shown on the tile */
  name: string;
  /** Short description shown on the tile */
  description: string;
  /** Full GitHub repo URL */
  repoUrl: string;
  /** Live demo URL — set to null if there is no demo yet */
  demoUrl: string | null;
}

// ─── EDIT THIS LIST ───────────────────────────────────────────────────────────
// Add, remove, or reorder repos here. That's all you need to touch.

export const repos: Repo[] = [
  {
    name: "Weekend Code - Landing Page",
    description: "This portfolio landing page showcasing all weekend projects.",
    repoUrl: "https://github.com/iragbag/weekendcode_landing_page",
    demoUrl: "https://www.weekendco.de",
  },
  {
    name: "Second Brain",
    description: "A simple API hub for managing and exposing REST endpoints for a second brain",
    repoUrl: "https://github.com/iragbag/second_brain",
    demoUrl: "https://api.weekendco.de",
  },
  // Add more repos below — copy one of the blocks above as a template:
  // {
  //   name: "My Cool Tool",
  //   description: "A tool that does something cool.",
  //   repoUrl: "https://github.com/iragbag/my-cool-tool",
  //   demoUrl: "https://my-cool-tool.vercel.app",
  // },
];
