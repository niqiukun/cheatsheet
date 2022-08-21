// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cheatsheet for Everything',
  tagline: 'A knowledge repository for myself',
  url: 'https://niqiukun.github.io',
  baseUrl: '/cheatsheet/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/books.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'niqiukun', // Usually your GitHub org/user name.
  projectName: 'cheatsheet', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/niqiukun/cheatsheet/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/niqiukun/cheatsheet/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Cheatsheet',
        logo: {
          alt: 'My Cheatsheet Logo',
          src: 'img/books.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'conceptsSidebar',
            label: 'Concepts',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'toolboxSidebar',
            label: 'Toolbox',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'docusaurusSidebar',
            label: 'Docusaurus',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/niqiukun/cheatsheet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Concepts',
                to: '/docs/Concepts/intro',
              },
              {
                label: 'Toolbox',
                to: '/docs/Toolbox/intro',
              },
              {
                label: 'Docusaurus',
                to: '/docs/Docusaurus/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/niqiukun/cheatsheet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} niqiukun. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'error-next-line',
            block: {start: 'error-start', end: 'error-end'},
          },
        ]
      },
    }),
};

module.exports = config;
