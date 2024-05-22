// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hackuarium',
  tagline: 'Open laboratory for DIY biology and more',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.hackuarium.ch',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hackuarium', // Usually your GitHub org/user name.
  projectName: 'www.hackuarium.ch', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hackuarium/www.hackuarium.ch/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hackuarium',
        logo: {
          alt: 'Hackuarium Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Projects',
            position: 'left',
          },
          {
            to: 'events',
            label: 'Events',
            position: 'left',
          },
          {
             to: 'https://docs.google.com/forms/d/e/1FAIpQLSe225AWDuI2KXi3Aeamvj-WYudjtg6PvGC9Yx1whdFwsuucrA/viewform',
             label: 'Join',
             position: 'left',
          },
          {
            to: 'donate',
            label: 'Donate',
            position: 'left',
          },
          {
            href: 'https://github.com/hackuarium',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://wiki.hackuarium.ch',
            label: 'Wiki',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `CC BY-NC-SA 3.0 - Copyright © ${new Date().getFullYear()} Hackuarium contributors.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config
