const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Hackuarium open-hardware documentation",
    tagline: "Open laboratory for DIY biology",
    url: "https://docs.hackuarium.org",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "hackuarium", // Usually your GitHub org/user name.
    projectName: "docs.hackuarium.org", // Usually your repo name.
    plugins: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          //docsRouteBasePath: "/eln",
          // indexPages: true, //because of bug: https://github.com/easyops-cn/docusaurus-search-local/issues/42
        },
      ],
    ],
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/hackuarium/docs.hackuarium.org/edit/main/website/",
            sidebarItemsGenerator: async function ({
              defaultSidebarItemsGenerator,
              ...args
            }) {
              let sidebarItems = await defaultSidebarItemsGenerator(args);
              sidebarItems = filterItems(sidebarItems);
              return raisingSingleNodes(sidebarItems);
            },
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/hackuarium/docs.hackuarium.org/edit/main/website/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Hackuarium",
          logo: {
            alt: "Hackuarium logo",
            src: "img/logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Tutorial",
            },
            { to: "/blog", label: "Blog", position: "left" },
            {
              href: "https://github.com/facebook/docusaurus",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          copyright: `Copyright © ${new Date().getFullYear()} Hackuarium contributors. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);

function filterItems(items) {
  items = items.filter((item) => item.label !== "includes");
  items.forEach((item) => {
    if (Array.isArray(item.items)) {
      item.items = filterItems(item.items);
    }
  });
  return items;
}

function raisingSingleNodes(items) {
  // we need to traverse the full hierarhy and if there is only one child items we raise it one level
  for (let parentItem of items) {
    if (parentItem && parentItem.items && parentItem.items.length) {
      for (let j = 0; j < parentItem.items.length; j++) {
        if (
          parentItem.items[j].items &&
          parentItem.items[j].items.length === 1
        ) {
          parentItem.items[j] = parentItem.items[j].items[0];
        }
      }
      raisingSingleNodes(parentItem.items);
    }
  }
  return items;
}
