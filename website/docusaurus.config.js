// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Material Web Components',
  tagline: "A React UI Kit built on Google's official Material Components Web library",
  favicon: 'img/favicon.ico',
  staticDirectories: ['../public', 'static'],
  url: 'https://rmwc.io/',
  baseUrl: '/',
  organizationName: 'rmwc',
  projectName: 'rmwc',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    '@docusaurus/theme-live-codeblock',
    'docusaurus-node-polyfills',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@doc-utils': path.resolve(__dirname, '../src/doc-utils.tsx'),
        },
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', //disable landing page
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ]
        },
      }),
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'RMWC',
      logo: {
        alt: 'RMWC Logo',
        src: 'img/logo.svg',
      },
      
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          label: 'Discord',
          href: 'https://discordapp.com/invite/docusaurus',
          position: 'right',
        },
        {
          href: 'https://github.com/rmwc/rmwc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
  },
};

module.exports = config;