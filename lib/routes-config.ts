export type EachRoute = {
  title: string;
  href: string;
  basePath?: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    basePath: "instructions",
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Tech Stack",
        href: "/technologies",
      },
      {
        title: "Prerequisites",
        href: "/prereqs",
      },
      {
        title: "Development Environment",
        href: "/development-environment",
      },
    ],
  },
  {
    title: "Project Instructions",
    href: "/project-instructions",
    noLink: true,
    basePath: "instructions",
    items: [
      {
        title: "Task One - Building a Landing Page",
        href: "/step-one",
      },
      {
        title: "Task Two -  Building a Login Page",
        href: "/step-two",
      },
      {
        title: "Task Three - Building an API",
        href: "/step-three",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
    noLink: true,
    basePath: "about",
  },
];

type Page = { title: string; href: string; basePath?: string };

function getRecursiveAllLinks(
  node: EachRoute,
  parentHref: string = ""
): Page[] {
  const ans: Page[] = [];
  const fullHref = `${parentHref}${node.href}`;

  if (!node.noLink) {
    ans.push({ title: node.title, href: fullHref, basePath: node.basePath });
  }

  node.items?.forEach((subNode) => {
    ans.push(...getRecursiveAllLinks(subNode, fullHref));
  });

  return ans;
}

export const page_routes = ROUTES.flatMap((route) =>
  getRecursiveAllLinks(route)
);
