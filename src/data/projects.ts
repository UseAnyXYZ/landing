export interface Project {
  name: string;
  description: string;
  tags: string[];
  license: string;
  language: string;
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    name: "use-calendar",
    description:
      "A universal calendar service that AI agents and humans can both use. Manage events through CLI, REST API, or Claude Code plugin, and subscribe via standard ICS feeds.",
    tags: ["CLI", "REST API", "Claude Code Plugin", "ICS Feeds"],
    license: "MIT",
    language: "TypeScript",
    links: [
      { label: "Web App", url: "https://usecalendar.xyz" },
      { label: "GitHub", url: "https://github.com/UseAnyXYZ/use-calendar" },
    ],
  },
];
