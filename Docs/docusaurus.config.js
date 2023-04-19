// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VRChat Creator Companion',
  tagline: 'The Entry Point for Creating things in VRChat',
  url: 'https://vcc.docs.vrchat.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'vrchat', // Usually your GitHub org/user name.
  projectName: 'vrc-package-manager', // Usually your repo name.
  
  scripts: [
    {
      defer: true,
      src: 'https://plausible.io/js/script.js',
      'data-domain': 'vcc.docs.vrchat.com'
    },
  ],

  plugins: [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: ({versionDocsDirPath, docPath}) =>
             `https://github.com/vrchat-community/creator-companion/edit/main/Docs/docs/${docPath}`,
          
        },
        blog: {
          path: 'news',
          routeBasePath: 'news',
          showReadingTime: false,
          // Please change this to your repo.
          // editUrl: 'https://github.com/vrchat-community/ClientSim',
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
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'open_beta',
        content:
            '<b>Creator Companion 2.0.3 has been released! <a href="/news/release-2.0.3">Read the release notes.</a></b>',
        backgroundColor: '#21af90',
        textColor: '#000',
        isCloseable: true,
      },
      navbar: {
        title: 'Creator Companion',
        logo: {
          alt: 'VRChat Logo',
          src: 'images/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {to: '/news', label: 'News', position: 'left'},
          {to: '/guides/getting-started', label: 'Guides', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/vrchat',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vrchat',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/news',
              }
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Use',
                to: 'https://hello.vrchat.com/legal',
              },
              {
                label: 'Privacy Policy',
                to: 'https://hello.vrchat.com/privacy',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VRChat Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'NQHMNOH2YO',
        apiKey: '292dfc501d73d6fa1352744ce4620735',
        indexName: 'VRChat_Docs',
        contextualSearch: true,
        externalUrlRegex: 'https:\/\/(?!vcc)' // Results that don't come from this site should redirect using their absolute URL, rather than redirecting relative to the current site
      },
    }),
};

module.exports = config;
